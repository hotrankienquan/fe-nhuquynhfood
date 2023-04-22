import React, { useEffect, useState } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import instance from '../../utils/http.js';
import { ToastContainer } from 'react-toastify';
import { handleShowPoppup } from '../../utils/global.js';

const ManageAddUser = () => {
  useEffect(() => {

  }, [])
  const [valueInput, setValueInput] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    phone: '',
    address: '',
    email: '',
    avatar:''
  });

  const handleChangeInput = (event) => {
    setValueInput({
      ...valueInput,
      [event.target.name]: event.target.value
    })
  };
  const handleSubmitForm = async () => {
    if (valueInput.firstname === '' || valueInput.lastname === '' || valueInput.password === ''
      || valueInput.phone === '' || valueInput.username === '') return null;
    instance({
      method: 'POST',
      url: "/add-new-user",
      data: valueInput
    })
      .then(res => {
        console.log(res)
        if (res && res.errCode === 0) {
          handleShowPoppup(res.errMessage)
        } else if (res && res.errCode === 1) {
          handleShowPoppup(res.errMessage);
        }
    })
  }
  return (
    <Form>
      <Form.Field inline>
        <label>First name</label>
        <Input placeholder='First name' name="firstname" onChange={handleChangeInput} value={valueInput.firstname}/>
      </Form.Field>
      <Form.Field inline>
        <label>Last name</label>
        <Input placeholder='Last name' name="lastname" onChange={handleChangeInput} value={valueInput.lastname}/>
      </Form.Field>
      <Form.Field inline>
        <label>User name</label>
        <Input placeholder='User name' name="username" onChange={handleChangeInput} value={valueInput.username}/>
      </Form.Field>
      <Form.Field inline>
        <label>Password</label>
        <Input type='password' placeholder='Password' name="password" onChange={handleChangeInput} value={valueInput.password}/>
      </Form.Field>
      <Form.Field inline>
        <label>Phone</label>
        <Input placeholder='Phone' name="phone" onChange={handleChangeInput} value={valueInput.phone}/>
      </Form.Field>
      <Form.Field inline>
        <label>Address</label>
        <Input placeholder='Address' name="address" onChange={handleChangeInput} value={valueInput.address}/>
      </Form.Field>
      <Form.Field inline>
        <label>Email</label>
        <Input placeholder='Email' name="email" onChange={handleChangeInput} value={valueInput.email}/>
      </Form.Field>
      <Form.Field inline>
        <label>Avatar</label>
        <Input placeholder='Avatar' name="avatar" onChange={handleChangeInput} value={valueInput.avatar}/>
      </Form.Field>
      <Button content="submit" onClick={handleSubmitForm}></Button>
      <ToastContainer />
  </Form>
  )
}

export default ManageAddUser