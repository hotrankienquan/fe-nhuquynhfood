import React, { useEffect, useState } from 'react'
import { Button, Table } from 'semantic-ui-react'
import instance from '../../utils/http';
import ActionEdit from '../../components/static-component/action/ActionEdit'
import { useNavigate } from 'react-router-dom';
import ActionDelete from '../../components/static-component/action/ActionDelete.js';
import { ToastContainer } from 'react-toastify';
import { handleShowPoppup } from '../../utils/global.js';
const Invoice = () => {
  const [foodList, setFoodList] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    instance.get("/manage/get-all-order-table")
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
      <Table.Row key={user.fk_id_tablefood}>
        <Table.Cell>{user.fk_id_tablefood}</Table.Cell>
        <Table.Cell>{user.name}</Table.Cell>
        <Table.Cell>{user.time_eat}</Table.Cell>
        <Table.Cell>
          {user.description_order_food}
          
        </Table.Cell>
        <Table.Cell>{user.total_price}</Table.Cell>
        <Table.Cell>
          {/* <div>
            <ActionEdit
            onClick={() => navigate("/manage/update-food?id="+user.id)}
            ></ActionEdit>
            <ActionDelete
            onClick={() => handleDeleteUser(user)}
            >

            </ActionDelete>
          </div> */}
        </Table.Cell>
        <Table.Cell>
          {/* <div className='divider' style={{marginBottom:'5px'}}>
          <Button content="Duyệt bàn" color='green'></Button>
          </div> 
          <div>
            <Button content="Hủy bàn" color='red'></Button>
          </div> */}
        </Table.Cell>
      </Table.Row>
    );
  };
  return (
    <Table color={'olive'} key={'olive'}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id table</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Time eat</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>Total price</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {foodList && foodList.map(user => renderUserItem(user))}
      </Table.Body>
      <ToastContainer />
    </Table>
  )
}

export default Invoice