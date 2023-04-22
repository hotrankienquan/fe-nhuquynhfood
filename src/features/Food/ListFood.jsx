import React, { useEffect, useState } from 'react'
import FoodItem from './FoodItem';
import { Button, Grid, Item, Label, Select } from 'semantic-ui-react';
import instance from '../../utils/http';
import { ToastContainer, toast } from 'react-toastify';


const ListFood = ({ setOpenFood, setReload }) => {
  const [listFood, setListFood] = useState([])
  const [listTable, setListTable] = useState([]);
  const [valueTable, setValueTable] = useState('');
  useEffect(() => {
    instance.get('/get-all-food')
      .then(data => {
        setListFood(data.data)
      })

    instance.get('/get-all-table')
      .then(data => {
        setListTable(data.data)
      })
  }, [])
  const [values, setValues] = useState([]);
  // handleQuantity phải để ở component cha listfood


  const handleQuantity = (event, food) => {
    setValues((prev) => [
      ...prev,
      {
        id: food.id,
        quantity: event.target.value,
        price: food.price
      }
    ])
  }


  console.log(listTable); // trả về id, name, status

  const newArrayOfObj = listTable.map(({
    id: value,
    name: text,

    ...rest
  }) => ({
    value, text,
    ...rest
  }));
  const handleChangeTable = (e, value) => {
    setValueTable(value.value)
  }
  const handleGoiMon = () => {
    let fk_table = valueTable;
    let final_food_arr = removeDupFood(values);
    let total_price = final_food_arr.reduce((acc, current) => {
      return acc + current.price * current.quantity;
    }, 0)
    console.log("check final food arr", final_food_arr)
    let arr_id_food = [];
//     Array [ {…}, {…} ]
//
// 0: Object { id: 529115, quantity: "1", price: "99000" }
//
// 1: Object { id: 529114, quantity: "1", price: "4190000" }
//
// length: 2
    final_food_arr.forEach((item) => {
      arr_id_food.push(item.id)
    })
    console.log(arr_id_food)
    let submitData = {
      arr_id_food,
      fk_table,
      fk_id_invoice: JSON.parse(localStorage.getItem('invoice_food'))?.id_invoice || null,
      final_food_arr,
      total_price
    }
    console.log(submitData)
    instance.post('/update-invoice', submitData)
      .then(data => {
        console.log(data)
        if (data.errCode === 0) {
          handleShowPoppup(data.erMessage);
          setOpenFood(false);
          setReload(true)
        }
      })
  }
//   Object { arr_id_food: (2) […], fk_table: "e68aa228-ab4a-48c9-a1fb-e660cba6efd9", fk_id_invoice: "7e682bf6-4e1a-4897-aa96-ceb72c3e2d4f", final_food_arr: (2) […], total_price: 4289000 }
// ​
// arr_id_food: Array [ 529114, 529115 ]
// ​
// final_food_arr: Array [ {…}, {…} ]
// ​
// fk_id_invoice: "7e682bf6-4e1a-4897-aa96-ceb72c3e2d4f"
// ​
// fk_table: "e68aa228-ab4a-48c9-a1fb-e660cba6efd9"
// ​
// total_price: 4289000
  const removeDupFood = (arrFood) => {
    const seen = new Set();

    const filteredArr = arrFood.reverse().filter(el => {
      const duplicate = seen.has(el.id);
      seen.add(el.id);
      return !duplicate;
    });
    // console.log(filteredArr)
    return filteredArr;
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
  const styleButton = {
    marginLeft: '11px',
    width: '100px',
    marginBottom: '-12px',
    marginTop: '-83px',
    height: '38px',
    backgroundColor: '#38c482',
    color: 'antiquewhite',
    fontSize: '15px',
  }
  return (
    <>
      <Grid columns={3} >
        <Grid.Row style={{marginLeft:'11px'}}>
          {/* <Label content='đặt cho bàn nào ?'></Label> */}
          <Select placeholder='Chọn bàn' options={newArrayOfObj} onChange={handleChangeTable} />
        </Grid.Row>
        <Grid.Row>
          {listFood && listFood.map(food => (<FoodItem
            values={values}
            handleQuantity={handleQuantity}
            food={food} />))}
        </Grid.Row>
        <Button style={styleButton} content="gọi" onClick={handleGoiMon}></Button>
        <ToastContainer />
      </Grid>
    </>
  )
}

export default ListFood