import React, { useState, useRef, useEffect, useContext } from 'react'
import Booking from '../Booking/Booking';
import { Button, Grid, Header, Icon, Modal, Segment } from 'semantic-ui-react';
import instance from '../../utils/http';
import { ToastContainer, toast } from 'react-toastify';
import FoodItem from '../Food/FoodItem';
import ListFood from '../Food/ListFood';
import { Context } from '../../context/Context';

const Dashboard = () => {
  const [openModalBooking, setOpenModalBooking] = useState(false);
  const [openFood, setOpenFood] = useState(false);
  const [idTable, setIdTable] = useState('');
  const [dataTable, setDataTable] = useState([]);
  const [reload, setReload] = useState(false);
  const [history,setHistory]=useState(
    ''
  )
  const { user, dispatch } = useContext(Context);
  useEffect(() => {
    instance.get('/get-all-table')
      .then(table => {
        setDataTable(table.data)
      })

  }, [reload])
  useEffect(() => {
    instance.get('/get-all-history')
      .then(res => {
        if (res.errCode === 0) {
          setHistory(res.data)
      }
    })
  }, [reload])
  const handleOpenBooking = (e, table) => {
    if (user == null) {
      handleShowPoppup("vui lòng đăng nhập");
      return;
    }
    if (table.status === 0) {

      setOpenModalBooking(!openModalBooking)
      setIdTable(e.currentTarget.id)
    } else {
      setOpenModalBooking(false)

    }
  }
  const handleCloseBooking = () => {
    setOpenModalBooking(false)
  }
  const handleOrderFood = (table) => {
    // check có phải khách đặt bàn ko
    // if (JSON.parse(localStorage.getItem('keytable')) === table.id) {
    //   console.log('đúng khách')

    // } else {
    //   handleShowPoppup("bạn không có quyền gọi món");
    // }
    if (user == null) {
      handleShowPoppup("vui lòng đăng nhập");
      return;
    }
    setOpenFood(true)


  }
  const handleShowPoppup = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  const style_name_table = {
    padding: '5px',
    fontSize: '16px'
  };

  return (
    <>
      <div style={{ flex: '7' }}>

        <Grid>
          <Grid.Row columns={2} only='large screen'>
            {dataTable && dataTable.length > 0 && dataTable.map(table => (

              <Grid.Column className='abc' style={{ marginBottom: '10px' }}>
                <Segment>
                  <div style={style_name_table}>
                    {table && table.name}
                  </div>
                  {table && table.status === 1 && 
                  <Button content='Chờ duyệt' color='yellow' inverted onClick={() => alert("chờ duyệt bàn")}></Button>
                  }
                  {table && table.status === 2 &&
                    
                     <Button content='Gọi món' color='purple' inverted onClick={() => handleOrderFood(table)}></Button>
                  }
                  {table && table.status === 0 &&
                    <Button content='đặt bàn' color='green' inverted id={table.id} onClick={(e) => handleOpenBooking(e, table)}></Button>
                  }
                  {table && table.status === 3 && <Button content='Done' color='teal' inverted ></Button>}

                </Segment>
              </Grid.Column>

            ))}

          </Grid.Row>
        </Grid>
        {openModalBooking &&
          <Booking
            idTable={idTable}
            handleCloseBooking={handleCloseBooking}
            setReload={setReload}
          />}

        {
          openFood &&
          <ListFood setOpenFood={setOpenFood} setReload={setReload} />
        }

      </div>
      <div style={{ flex: '3', marginLeft: '20px', overflow:'scroll' }}>
        <h3>Lịch sử đặt bàn</h3>
          {history && history.map((item, index) => (
        <div key={index}>
            {item.content}
        </div>
          ))}
      </div>
      <ToastContainer />

    </>
  )
}

export default Dashboard