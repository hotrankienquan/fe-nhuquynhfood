import React from 'react'
import { NavLink } from 'react-router-dom'
import Table from './Table.jsx'

const ManageTable = () => {
  return (
    <>
      <div>ManageTable</div>
      <div className="flex justify-end mb-10">
        <NavLink to="/manage/add-table">
          Add new table
        </NavLink>
      </div>
      <Table />
    </>
  )
}

export default ManageTable