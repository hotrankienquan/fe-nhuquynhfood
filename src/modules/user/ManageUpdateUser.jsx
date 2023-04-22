import React, {useEffect,useState} from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import instance from '../../utils/http.js';

const ManageUpdateUser = () => {
  // const idUrl = h ? h.search.split('?id=')[1] : ''
  const [values, setValues] = useState({});
  const [params] = useSearchParams();
  const userId = params.get("id");
  useEffect(() => {
    async function fetchData() {
      if (!userId) return;
      else if(userId){
      
        instance({
          method: 'POST',
          url: '/get-user-need-update',
          data: {id:userId}
        })
          .then(res => {
            if (res && res.errCode === 0) {
              console.log(res)
              setValues(res.data)
            }
          })
        .catch(err => console.log(err))
      }
    }
    fetchData();
  }, [userId]);
  const handleChangeForm = (event) => {
    setValues({
      ...values,
      [event.target.name]:event.target.value
    })
  }
  const handleSubmit = () => {
    const newObj = { ...values };
    newObj.idInput = userId;
    instance.post("/update-user", newObj)
    .then(res => console.log(res))
  
  }
  return (
    <Form>
    <Form.Group widths='4'>
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-first-name'
        label='First name'
          placeholder='First name'
          value={values && values.firstname}
          name="firstname"
          onChange={handleChangeForm}
      />
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='Last name'
          placeholder='Last name'
          value={values && values.lastname}
          name="lastname"
          onChange={handleChangeForm}
        />
       
      </Form.Group>
      <Form.Group widths={'4'}>
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='User name'
          placeholder='User name'
          value={values && values.username}
          name="username"
          onChange={handleChangeForm}
        />
        <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='Phone'
          placeholder='Phone'
          value={values && values.phone}
          name="phone"
          onChange={handleChangeForm}
        />
        
      </Form.Group>
      <Form.Group widths={'4'}>
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='Address'
          placeholder='Address'
          value={values && values.address}
          name="address"
          onChange={handleChangeForm}
        />
        <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='email'
          placeholder='email'
          value={values && values.email}
          name="email"
          onChange={handleChangeForm}
        />
        <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='avatar'
          placeholder='avatar'
          value={values && values.avatar}
          name="avatar"
          onChange={handleChangeForm}
        />
        
      </Form.Group>
      <Button content='ok' onClick={handleSubmit}></Button>
  </Form>
  )
}

export default ManageUpdateUser