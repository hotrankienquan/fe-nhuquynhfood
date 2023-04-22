import React, {useEffect,useState} from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import instance from '../../utils/http.js';

const ManageUpdateFood = () => {
  // const idUrl = h ? h.search.split('?id=')[1] : ''
  const [values, setValues] = useState({});
  const [params] = useSearchParams();
  const userId = params.get("id");
  console.log(userId)
  useEffect(() => {
    async function fetchData() {
      if (!userId) return;
      else if(userId){
        console.log(userId)
      
        instance({
          method: 'POST',
          url: '/get-food-need-update',
          data: {id:userId}
        })
          .then(res => {
            console.log(res)
            if (res && res.errCode === 0) {
              setValues(res.data[0])
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
    newObj.id = userId;
    instance.put("/manage/edit-food", newObj)
    .then(res => console.log(res))
  
  }
  return (
    <Form>
    <Form.Group widths='4'>
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-first-name'
        label='Name'
          placeholder='Name'
          value={values && values.name}
          name="name"
          onChange={handleChangeForm}
      />
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='Price'
          placeholder='Price'
          value={values && values.price}
          name="price"
          onChange={handleChangeForm}
        />
       
      </Form.Group>
      <Form.Group widths={'4'}>
      <Form.Input
        fluid
        id='form-subcomponent-shorthand-input-last-name'
        label='Image'
          placeholder='Image'
          value={values && values.image}
          name="image"
          onChange={handleChangeForm}
        />
      </Form.Group>
      <Button content='ok' onClick={handleSubmit}></Button>
  </Form>
  )
}

export default ManageUpdateFood