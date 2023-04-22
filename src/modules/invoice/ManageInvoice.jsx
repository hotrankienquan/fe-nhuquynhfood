import React from 'react'
import { Button } from 'semantic-ui-react'
import UserTable from './Invoice'
import { NavLink } from 'react-router-dom';
import Food from './Invoice';
import Invoice from './Invoice';

const ManageInvoice = () => {
  const styleDiv = {
    overflow: 'scroll'
  };
  return (
    <div style={styleDiv}>
      <h4>Invoice</h4>
      <div className="flex justify-end mb-10">
        {/* <NavLink to="/manage/add-invoice">
          Add new invoice
        </NavLink> */}
      </div>
      {/* <UserTable></UserTable> */}
      <Invoice />
    </div>
  )
}

export default ManageInvoice