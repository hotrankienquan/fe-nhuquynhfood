import React, { useState, useContext, useEffect } from 'react'
import { Button, Checkbox, Container, Form, Header, Icon, Modal } from 'semantic-ui-react';
import ListFood from '../Food/ListFood';
import instance from '../../utils/http';
import { Context } from '../../context/Context';
import { ToastContainer, toast } from 'react-toastify';


const Booking = ({ idTable, handleCloseBooking, setReload }) => {
  const [orderStatus, setOrderStatus]=useState(null)
  
  useEffect(() => {
      // instance.post('/add-history-booking', history)
      // .then(res => {
      //   console.log(res)
      // })
  }, [orderStatus])
  const { dispatch, isFetching, error, user } = useContext(Context);
  // console.log(user)
  const [dataSubmit, setDataSubmit] = useState({
    nameCustomer: '',
    timeEat: ''
  });

  const handleChangeData = (event) => {
    setDataSubmit({
      ...dataSubmit,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmitFood = (foodArr) => {

    let totalSubmit = {
      fk_id_user: user?.rows2[0]?.id,
      idTable,
      ...dataSubmit,
    }
    let history = {
      name_customer: dataSubmit.nameCustomer,
      time: new Date().toLocaleString(),
      id_invoice: JSON.parse(localStorage.getItem('invoice_food'))?.id_invoice || null
    }
    instance.post('/order-table', totalSubmit)
      .then(data => {

        if (data.errCode === 0) {
          console.log(data)
          localStorage.setItem('invoice_food', JSON.stringify(data))
          setReload(true)
          handleCloseBooking()
          setOrderStatus(true)

          instance.post('/add-history-booking', history)
          .then(res => {
            console.log(res)
          })
        }

      }
      ).catch((err) => {
        let errCode = err.response.data.errCode;
        let errMessage = err.response.data.errMessage;
        if (errCode === 1) {
          handleShowPoppup(errMessage)
        }
      })
  
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
  return (
    <Form>
      <Form.Field>
        <label>Tên khách hàng</label>
        <input placeholder='Tên khách hàng' name='nameCustomer' onChange={handleChangeData} />
      </Form.Field>
      <Form.Field>
        <label>Thời gian ăn</label>
        <input type='date' name='timeEat' onChange={handleChangeData} />
      </Form.Field>
      <Button style={{ marginTop: '10px' }} type='submit' onClick={handleSubmitFood}>Submit</Button>
      <ToastContainer />

    </Form>
  )
}

export default Booking