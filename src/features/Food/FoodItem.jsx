import React, { useEffect, useState } from 'react'
import { Card, Grid, Icon, Image, Input, Item } from 'semantic-ui-react';
import ListFood from './ListFood';
const FoodItem = ({ food, values, handleQuantity }) => {
  console.log(food)
  return (
    <>
      <Grid.Column >
        {/* <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' /> */}
        <Image className='small' src={food.image} />
        <div style={{ margin: '10px 0' }}>
          <p>{food.price} vnd</p>
        </div>
        <div style={{ margin: '10px 0' }}>
          {food.name}
        </div>
        <div>
          <Input type="number" name=""
            id={food.id}
            nameFood={food.name}
            value={values.quantity}
            onChange={(event) => handleQuantity(event, food)}
            placeholder='số lượng' />
        </div>
      </Grid.Column>
    </>

  )
}

export default FoodItem