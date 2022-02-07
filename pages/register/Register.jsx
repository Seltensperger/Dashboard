import React from 'react'

import '../../components/layout/layout.css'
import './register.css'

export default function NewUser() {
    return (
      <div className="newUser">
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Nom</label>
            <input type="text" placeholder="" />
          </div>
          <div className="newUserItem">
            <label>Prénom</label>
            <input type="text" placeholder="" />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="email" placeholder="@gmail.com" />
          </div>
          <div className="newUserItem">
            <label>Password</label>
            <input type="password" placeholder="password" />
          </div>
          <button className="newUserButton">Create</button>
        </form>
      </div>
    );
  }
