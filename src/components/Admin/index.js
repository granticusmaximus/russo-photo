
import React from 'react'
import {Button} from 'reactstrap'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import { AuthUserContext } from '../Session';
import error from '../../assets/img/lockchain.png'

const AdminPage = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <AdminAuth /> : <AdminNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>

);

const AdminNonAuth = () => (
  <>
  <center><h1>Ooooops</h1></center>
  <center><img src={error} alt={"No Access"} height="50%" width="50%" /> </center>
  <center><p>Its seems you are trying to access something you are not suppose to</p></center>
  </>
)

const AdminAuth = () => (
  <div>
    <h1>Admin</h1>
    <hr />
    <p>Tools will show up here to help you with the site</p>
    <div className="row">
      <div className="col-md">
        <div className="card">
          <h2>Box 1 for Image Upload</h2>
          <Button outline color="primary"><Link to={ROUTES.IMAGE_UPLOAD}>Add new images</Link></Button>
        </div>
      </div>
      <div className="col-md">
        <div className="card">
          <h2>Box 2 for Session Events</h2>
        </div>
      </div>
    </div>
  </div>
);

export default AdminPage;