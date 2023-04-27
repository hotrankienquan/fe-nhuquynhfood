import React, { useContext, useState, useEffect } from 'react'
import HeaderComp from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'
import { Button, Container, Form } from 'semantic-ui-react'
import { Context } from '../context/Context.js'
import instance from '../utils/http.js'
import { useNavigate } from 'react-router-dom'
import { handleShowPoppup } from '../utils/global.js'
import { ToastContainer } from 'react-toastify'

const Info = () => {
  const navigate = useNavigate();
  const { user, isFetching } = useContext(Context);
  let id = user && user.rows2[0].id;
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    address: '',
    phone: '',
    email: '',
    avatar: ''
  });
  const [pass, setPass] = useState({
    old_password: '',
    new_password: ''
  });

  useEffect(() => {
    // setData({...user?.rows2[0]})
    instance.post('/get-user-need-update', {id})
      .then(res => {
        console.log(res)
      setData(res.data)
    })
  }, [])
  const handleChangePassword = (event) => {
    setPass({
      ...pass,
      [event.target.name]:event.target.value
    })
  }
  const handleChangeInput = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmitChangePassword = async () => {
    try {
      console.log(pass)
      let data_return = await instance.post('/manage/change-password', {...pass, id: user && user.rows2[0].id})
      console.log(data_return)
      if (data_return.errCode == 0) {
        handleShowPoppup(data_return.errMessage)
      }
    } catch (err) {
      let errCode = err.response.data.errCode;
      let errMessage = err.response.data.errMessage;
      if (errCode === 1) {
        handleShowPoppup(errMessage)
      }
    }
  }
  const handleSubmitForm = async () => {
    try {
     
      let dataReturn = await instance.post('/update-user', { ...data, idInput: user && user.rows2[0].id });
      if (dataReturn.errCode === 0) {
        alert("update info success")
        navigate('/')
      }
    } catch (err) {
      console.log("check loi catch", err.response.data)
      
    }

  }
  return (
    <>
      <HeaderComp />
      <Container style={{padding:'5em'}}>

        <Form style={{ fontSize:'1.5rem'}}>
          <Form.Group unstackable widths={2}>
            <Form.Input label='First name' placeholder='First name' name="firstname" value={data && data.firstname}  onChange={handleChangeInput}/>
            <Form.Input label='Last name' placeholder='Last name' name="lastname" value={data && data.lastname} onChange={handleChangeInput}/>
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label='Username' placeholder='Username' name="username" value={data && data.username} onChange={handleChangeInput}/>
            
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label='Address' placeholder='Address' name="address" value={data && data.address} onChange={handleChangeInput}/>
            <Form.Input label='Phone' placeholder='Phone' name="phone" value={data && data.phone} onChange={handleChangeInput}/>
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input label='Email' placeholder='Email' name="email" value={data && data.email} onChange={handleChangeInput}/>
            <Form.Input label='Avatar' placeholder='Avatar' name="avatar" value={data && data.avatar} onChange={handleChangeInput}/>
          </Form.Group>
          <Form.Checkbox label='I agree to the Terms and Conditions' />
          <Button className='login-submit' content='Update' onClick={handleSubmitForm} disabled={isFetching}>
        </Button>
        </Form>
        <br />
        <hr />
        <br />
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input label='Old password' placeholder='Old password' name="old_password" value={pass && pass.old_password}  onChange={handleChangePassword} type='password'/>
            <Form.Input label='New password' placeholder='New password' name="new_password" value={pass && pass.new_password} onChange={handleChangePassword} type='password'/>
          </Form.Group>
          <Button className='login-submit' content='Change password' onClick={handleSubmitChangePassword} disabled={isFetching}>
        </Button>
        </Form>
      </Container>
      <ToastContainer />
      <Footer/>
    </>
  )
}

export default Info