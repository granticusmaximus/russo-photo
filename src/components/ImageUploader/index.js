import React, { Component } from "react";
import firebase from "firebase";
import { Button, Form, Label, Input } from 'reactstrap';
import FileUploader from "react-firebase-file-uploader";
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import { AuthUserContext } from '../Session';
import error from '../../assets/img/lockchain.png'

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
                <center><h1>Ooooops</h1></center>
                <center><img src={error} alt={"No Access"} height="50%" width="50%" /> </center>
                <center><p>Its seems you are trying to access something you are not suppose to</p></center>
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
                <hr />
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
                            <br />
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