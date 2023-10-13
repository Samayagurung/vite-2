import React from 'react';
import {Card, Button} from 'react-bootstrap'


const ProductList = ({prodX, deleteHandle}) => {
  return (
    <>
    <Card style={{ width: '21rem', height:"400px" }} >
      <Card.Img variant="top" src={prodX.thumbnail} className="h-50" />
      <Card.Body>
        <Card.Title>{prodX.title.length>14?prodX.title.slice(0,13)+"...":prodX.title}</Card.Title>
        <Card.Text>
        {prodX.description.length>45?prodX.description.slice(0,44)+"...":prodX.description}
        </Card.Text>
        <Card.Footer className='text-center'>
        <Button variant="dark" className='me-2'>View</Button>
        <Button variant="warning" className='me-2'>Edit</Button>
        <Button variant="danger" className='me-2' onClick={(e)=>deleteHandle(e,prodX.id)}>Delete</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
    </>
  )
}

export default ProductList