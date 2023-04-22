import React from 'react'
import { Button } from 'semantic-ui-react'
import UserTable from './UserTable'
import { NavLink } from 'react-router-dom';

const ManageUser = () => {
  return (
    <div>
      <h4>User</h4>
      <p>Manage your user</p>
      <div className="flex justify-end mb-10">
        <NavLink to="/manage/add-user">
          Add new user
        </NavLink>
      </div>
      <UserTable></UserTable>
    </div>
  )
}

export default ManageUser