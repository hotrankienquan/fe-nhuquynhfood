import React from 'react'
import { Button } from 'semantic-ui-react'
import UserTable from './Food'
import { NavLink } from 'react-router-dom';
import Food from './Food';

const ManageFood = () => {
  return (
    <div>
      <h4>Food</h4>
      <div className="flex justify-end mb-10">
        <NavLink to="/manage/add-food">
          Add new food
        </NavLink>
      </div>
      {/* <UserTable></UserTable> */}
      <Food />
    </div>
  )
}

export default ManageFood