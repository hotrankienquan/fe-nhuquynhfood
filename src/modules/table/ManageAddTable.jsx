import React, { useEffect, useState } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import instance from '../../utils/http.js';
import { ToastContainer } from 'react-toastify';
import { handleShowPoppup } from '../../utils/global.js';

const ManageAddTable = () => {
  useEffect(() => {

  }, [])
  const [valueInput, setValueInput] = useState({
    name:''
  });

  const handleChangeInput = (event) => {
    setValueInput({
      ...valueInput,
      [event.target.name]: event.target.value
    })
  };
  const handleSubmitForm = async () => {
    if (valueInput.name === '') return null;
    instance({
      method: 'POST',
      url: "/manage/add-new-table",
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
        <label>Name</label>
        <Input placeholder='name' name="name" onChange={handleChangeInput} value={valueInput.name}/>
      </Form.Field>
      <Button content="submit" onClick={handleSubmitForm}></Button>
      <ToastContainer />
  </Form>
  )
}

export default ManageAddTable