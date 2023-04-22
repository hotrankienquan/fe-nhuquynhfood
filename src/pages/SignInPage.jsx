import React, { useContext, useState } from 'react'
import AuthenticationPage from './AuthenticationPage'
import { Button, Form } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';
import axiosInstance from '../utils/http';
import { LoginFailure, LoginStart, LoginSuccess } from '../context/Actions';
import LoadingComponent from '../components/layout/LoadingComponent';
import { ToastContainer, toast } from 'react-toastify';

const SignInPage = () => {
  const navigate = useNavigate();
  const { dispatch, isFetching, error } = useContext(Context);
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const handleChangeInput = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmitForm = async () => {
    try {
      const { firstname, lastname, username, password, phone } = data;
      if (username ===
        '' || password === '') {
        return;
      }
      dispatch(LoginStart())
      let dataReturn = await axiosInstance.post('/sign-in', { ...data });
      if (dataReturn.errCode === 0) {
        dispatch(LoginSuccess(dataReturn))
        // handleShowPoppup(dataReturn.errMessage)

        navigate("/")
      }
    } catch (err) {
      console.log("check loi catch", err.response.data)
      let errCode = err.response.data.errCode;
      let errMessage = err.response.data.errMessage;
      if (errCode === 1) {
        dispatch(LoginFailure())
        handleShowPoppup(errMessage)
      }
    }
    // if (dataReturn) {

    //   dispatch(LoginSuccess(dataReturn));
    // } else {
    //   dispatch(LoginFailure())

    // }
    // navigate("/")

  }
  if (isFetching) {
    return (

      <LoadingComponent content='Đang tải, đợi xíu....' />
    );
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
    <AuthenticationPage>
      <Form className='login-form'>

        <Form.Field>
          <label>Username</label>
          <input placeholder='user Name' name='username' onChange={handleChangeInput} />
        </Form.Field>
        <Form.Field className='form-password'>
          <label>Password</label>
          <input type='password' placeholder='password' name='password' onChange={handleChangeInput} />
        </Form.Field>
        <Button className='login-submit' content='Đăng nhập' onClick={handleSubmitForm} disabled={isFetching}>
        </Button>
      </Form>
      <ToastContainer />
    </AuthenticationPage>
  )
}

export default SignInPage