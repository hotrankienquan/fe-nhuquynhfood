import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import instance from '../../utils/http';
import ActionEdit from '../../components/static-component/action/ActionEdit'
import { useNavigate } from 'react-router-dom';
import ActionDelete from '../../components/static-component/action/ActionDelete.js';
const UserTable = () => {
  const [userList, setUserList] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    instance.get("/manage/get-all-user")
      .then(res => {
        setUserList(res.data)
      })
    }, [deleteStatus])
  const handleDeleteUser = async (user) => {
    instance.delete("/manage/delete-user/" + user.id)
      .then(res => {
        if (res && res.errCode === 0) {
          setDeleteStatus(!deleteStatus)
        }
    })
  }
  const renderUserItem = (user) => {
    return (
      <Table.Row key={user.id}>
        <Table.Cell>{user.id.slice(0, 5) + "..."}</Table.Cell>
        <Table.Cell>{user.firstname}</Table.Cell>
        <Table.Cell>{user.lastname}</Table.Cell>
        <Table.Cell>{user.username}</Table.Cell>
        <Table.Cell>{user.phone}</Table.Cell>
        <Table.Cell>{user.address}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>
          <img width={'120px'} src={user.avatar} />
        </Table.Cell>
        <Table.Cell>{user.fk_id_type_account == '1' ? 'customer': 'Admin'}</Table.Cell>
        <Table.Cell>
          <div>
            <ActionEdit
            onClick={() => navigate("/manage/update-user?id="+user.id)}
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
          <Table.HeaderCell>First name</Table.HeaderCell>
          <Table.HeaderCell>Last name</Table.HeaderCell>
          <Table.HeaderCell>User name</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Avatar</Table.HeaderCell>
          <Table.HeaderCell>Type account</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {userList && userList.map(user => renderUserItem(user))}
      </Table.Body>
    </Table>
  )
}

export default UserTable