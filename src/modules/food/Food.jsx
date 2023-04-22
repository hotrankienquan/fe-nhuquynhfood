import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import instance from '../../utils/http';
import ActionEdit from '../../components/static-component/action/ActionEdit'
import { useNavigate } from 'react-router-dom';
import ActionDelete from '../../components/static-component/action/ActionDelete.js';
import { ToastContainer } from 'react-toastify';
import { handleShowPoppup } from '../../utils/global.js';
const Food = () => {
  const [foodList, setFoodList] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    instance.get("/get-all-food")
      .then(res => {
        setFoodList(res.data)
      })
    }, [deleteStatus])
  const handleDeleteUser = async (user) => {
    instance.delete("/manage/delete-food/" + user.id)
      .then(res => {
        if (res && res.errCode === 0) {
          handleShowPoppup(res.message)
          setDeleteStatus(!deleteStatus)
        }
    })
  }
  const renderUserItem = (user) => {
    return (
      <Table.Row key={user.id}>
        <Table.Cell>{user.id}</Table.Cell>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.price}</Table.Cell>
        <Table.Cell>
          <img style={{width:'100px'}} src={user.image ? user.image: ""} alt="" />
        </Table.Cell>
        <Table.Cell>
          <div>
            <ActionEdit
            onClick={() => navigate("/manage/update-food?id="+user.id)}
            ></ActionEdit>
            <ActionDelete
            onClick={() => handleDeleteUser(user)}
            >

            </ActionDelete>
          </div>
        </Table.Cell>
      </Table.Row>
    );
  };
  return (
    <Table color={'olive'} key={'olive'}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Price</Table.HeaderCell>
          <Table.HeaderCell>Image</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {foodList && foodList.map(user => renderUserItem(user))}
      </Table.Body>
      <ToastContainer />
    </Table>
  )
}

export default Food