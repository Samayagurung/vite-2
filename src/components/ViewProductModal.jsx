import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { CardImg } from 'react-bootstrap';


const ViewProductModal = ({viewshow, viewChangeHandle, viewprodX, viewCloseHandle}) => {
  // console.log(viewprodX)
  return (
    <>
     <Modal show={viewshow} >
        <Modal.Header closeButton>
          <Modal.Title>View Product </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CardImg  style={{height:"300px"}} src={viewprodX.thumbnail} onChange={viewChangeHandle}></CardImg>       
          <FloatingLabel
            controlId="floatingInput"
            label="Product title"
            className="mb-3 mt-1"
          >
            <Form.Control type="text" name="title" placeholder="" onChange={viewChangeHandle} value={viewprodX.title} />
          </FloatingLabel>
          <FloatingLabel controlId="" label="Product Description">
            <Form.Control type="text" name="description" placeholder="" onChange={viewChangeHandle} value={viewprodX.description} />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={viewCloseHandle}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ViewProductModal