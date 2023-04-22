import React, { useState, useContext } from 'react'
import AuthenticationPage from './AuthenticationPage'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom';
import { LoginSuccess } from '../context/Actions';
import axiosInstance from '../utils/http';
const SignUpPage = () => {
  const navigate = useNavigate();
  const { dispatch, isFetching } = useContext(Context);
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    phone: ''
  });
  const handleDataSignUp = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  console.log(data)
  const handleSubmitForm = async () => {
    console.log(data)
    const { firstname, lastname, username, password, phone } = data;
    if (firstname == '' || lastname == '' || username ==
      '' || password == '' || phone == '') {
      return;
    }
    let dataReturn = await axiosInstance.post('/add-new-user', { ...data });
    dispatch(LoginSuccess(dataReturn));
    navigate("/")

  }
  return (
    <AuthenticationPage>
      <Form className='register-form'>

        <Form.Field>
          <label>firstname</label>
          <input placeholder='First Name' name='firstname' value={data.firstname} onChange={handleDataSignUp} />
        </Form.Field>
        <Form.Field>
          <label>last name</label>
          <input placeholder='Last Name' name='lastname' value={data.lastname} onChange={handleDataSignUp} />
        </Form.Field>
        <Form.Field>
          <label>username</label>
          <input placeholder='user Name' name='username' value={data.username} onChange={handleDataSignUp} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' placeholder='Password' name='password' value={data.password} onChange={handleDataSignUp} />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input placeholder='Phone' name='phone' value={data.phone} onChange={handleDataSignUp} />
        </Form.Field>
        <Button className='register-submit' content='Đăng ký' onClick={handleSubmitForm}></Button>
      </Form>
    </AuthenticationPage>
  )
}

export default SignUpPage