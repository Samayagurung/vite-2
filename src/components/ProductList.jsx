import React from 'react';
import {Card, Button} from 'react-bootstrap'


const ProductList = ({prodX, deleteHandle, viewHandle, editHandle}) => {

  const returnTotal=(prodX)=>{
return(
  prodX.price-prodX.price * prodX.discountPercentage * 0.01
).toFixed(2)
  }

  const returnDiscountAmount=(prodX)=>{
    return(prodX.price*prodX.discountPercentage*0.01).toFixed(2)
  }
  return (

    <>
    <Card className='product-card' style={{height:"550px", width:"24rem"}} >
      <Card.Img variant="top" src={prodX.thumbnail} className='h-50' />
      <Card.Body>
        <Card.Title className='text-center text-success'>{prodX.title.length>14?prodX.title.slice(0,13)+"...":prodX.title}</Card.Title>
        <Card.Text className='text-center'>
        <span><b>SubTotal: </b>${prodX.price}</span>
        </Card.Text >
        <Card.Text className='text-center text-primary'>
        <span><b>Discount(%): </b>{prodX.discountPercentage}%</span>
        </Card.Text>
        <Card.Text className='text-center text-primary'>
        <span><b>Discount Amount: </b>${returnDiscountAmount(prodX)}</span>
        </Card.Text >
        <Card.Text className='text-center'>
        <span><b>Total: </b>${returnTotal(prodX)}</span>
        </Card.Text>
        
        <Card.Footer className='text-center'>
        <Button variant="dark" className='me-2' onClick={(e)=>viewHandle(e,prodX.id)}>View</Button>
        <Button variant="warning" className='me-2' onClick={(e)=>editHandle(e,prodX.id)}>Edit</Button>
        <Button variant="danger" className='me-2' onClick={(e)=>deleteHandle(e,prodX.id)}>Delete</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
    </>
  )
}

export default ProductList