import React, {useEffect,useState} from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { Button, Form } from 'semantic-ui-react'
import instance from '../../utils/http.js';

const ManageUpdateTable = () => {
  // const idUrl = h ? h.search.split('?id=')[1] : ''
  const [values, setValues] = useState({});
  const [params] = useSearchParams();
  const tableId = params.get("id");
  useEffect(() => {
    async function fetchData() {
      if (!tableId) return;
      else if(tableId){
      
        instance({
          method: 'POST',
          url: '/get-table-need-update',
          data: {id:tableId}
        })
          .then(res => {
            if (res && res.errCode === 0) {
              setValues(res.data[0])
            }
          })
        .catch(err => console.log(err))
      }
    }
    fetchData();
  }, [tableId]);
  const handleChangeForm = (event) => {
    setValues({
      ...values,
      [event.target.name]:event.target.value
    })
  }
  const handleSubmit = () => {
    const newObj = { ...values };
    newObj.idInput = tableId;
    instance.post("/update-table", newObj)
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
        id='form-subcomponent-shorthand-input-first-name'
        label='Status'
          placeholder='Status'
          value={values && values.status}
          name="status"
          onChange={handleChangeForm}
      />
      </Form.Group>
      <Button content='ok' onClick={handleSubmit}></Button>
  </Form>
  )
}

export default ManageUpdateTable