import React, { Component } from "react";
import firebase from "firebase";
import { Button, Form, Label, Input } from 'reactstrap';
import FileUploader from "react-firebase-file-uploader";
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import { AuthUserContext } from '../Session';

const ImagePage = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <ImageUpload /> : <ImageUploadNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>

);

class ImageUploadNonAuth extends Component {
    render() {
        return (
            <div>
                <h1>Nothing to see here</h1>
            </div>
        );
    }
}

class ImageUpload extends Component {
    state = {
        imageTitle: "",
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
    };

    handleChangeImageTitle = event =>
        this.setState({ imageTitle: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };
    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ avatarURL: url }));
    };

    render() {
        return (
            <div>
                <Button outline color="primary"><Link to={ROUTES.ADMIN}>Go Back to Admin Page</Link></Button>
                <hr/>
                <Form>
                    <div className="row">
                        <div className="col-sm-4">
                            <Label>Image Title:</Label>
                            <Input
                                type="text"
                                value={this.state.imageTitle}
                                name="imageTitle"
                                onChange={this.handleChangeImageTitle}
                                placeholder="Think of an awesome title"
                            />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-sm-4">
                        <Label>Image:</Label>
                        <br/>
                        {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                        {this.state.avatarURL && <img src={this.state.avatarURL} alt="" />}
                        <FileUploader
                            accept="image/*"
                            name="avatar"
                            randomizeFilename
                            storageRef={firebase.storage().ref("images")}
                            onUploadStart={this.handleUploadStart}
                            onUploadError={this.handleUploadError}
                            onUploadSuccess={this.handleUploadSuccess}
                            onProgress={this.handleProgress}
                        />
                    </div>
                    </div>
                </Form>
            </div>
        );
    }
}

export default ImagePage;