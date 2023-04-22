import React, { useEffect, useState } from 'react'
import { Button, Table } from 'semantic-ui-react'
import instance from '../../utils/http';
import ActionEdit from '../../components/static-component/action/ActionEdit'
import { useNavigate } from 'react-router-dom';
import ActionDelete from '../../components/static-component/action/ActionDelete.js';
const UserTable = () => {
  const [tableList, setTableList] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(false);
  const [reload, setReload] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    instance.get("/get-all-table")
      .then(res => {
        setTableList(res.data)
      })
    }, [deleteStatus,reload])
  const handleDeleteUser = async (user) => {
    instance.delete("/manage/delete-table/", {data: {id:user.id}})
      .then(res => {
        if (res && res.errCode === 0) {
          setDeleteStatus(!deleteStatus)
        }
    })
  }
  const handleAcceptTable = (id) => {
    instance.put("/manage/accept-table", {"table_id":id})
      .then(res => {
        console.log(res)
        if (res.errCode === 0) {
          setReload(!reload)
        }
    })
  }
  const handleResetTable = (id) => {
    instance.put('/manage/reset-table', { "table_id": id })
      .then(res => {
        if (res.errCode === 0)
        {
          setReload(!reload)
        }
    })
  }
  const renderUserItem = (table) => {
    return (
      <Table.Row key={table.id}>
        <Table.Cell>{table.id.slice(0, 5) + "..."}</Table.Cell>
        <Table.Cell>{table.name}</Table.Cell>
        <Table.Cell>
          {/* {table.status === 0
            ? <span>Chưa đặt</span>
            :
            (table.status === 2)
              ? 
              <span>Gọi món</span>

                ? (table.status === 3)
                <span></span> 
              : <span>Chờ duyệt</span>
          } */}
          <span>{table.status == 0 ? 'chưa đặt' : (table.status == 2 ? 'Gọi món' : (table.status == 3 ? 'Xong' : 'Chờ duyệt'))}</span>
        </Table.Cell>
        <Table.Cell style={{width:'50px'}}>
          <div>
            <ActionEdit
            onClick={() => navigate("/manage/update-table?id="+table.id)}
            ></ActionEdit>
            <ActionDelete
            onClick={() => handleDeleteUser(table)}
            >

            </ActionDelete>
            
          </div>
        </Table.Cell>
        <Table.Cell style={{ width: '100px', }}>
          {table.status === 1 && 
            <>
          <Button content="Accept" color='green' inverted style={{ marginBottom: '10px' }}
          onClick={() => handleAcceptTable(table.id)}
          ></Button>
            
          </>
          }
          <Button content="reset" inverted color='red'
          onClick={() => handleResetTable(table.id)}
          ></Button>
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
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableList && tableList.map(user => renderUserItem(user))}
      </Table.Body>
    </Table>
  )
}

export default UserTable