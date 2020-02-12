
import React from 'react'
import {Button} from 'reactstrap'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'

const Admin = () => (
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

export default Admin;