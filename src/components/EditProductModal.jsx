import React from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";


const EditProductModal = ({editShowX, editChangeHandle, editProdX, editCloseHandle, editProductHandle}) => {
  return (
    <Modal show={editShowX}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Image link"
            className="mb-3"
          >
            <Form.Control type="text" name="thumbnail" placeholder="" onChange={editChangeHandle} value={editProdX.thumbnail} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Product title"
            className="mb-3"
          >
            <Form.Control type="text" name="title" placeholder="" onChange={editChangeHandle} value={editProdX.title} />
          </FloatingLabel>
          <FloatingLabel controlId="" label="Product Description">
            <Form.Control type="text" name="description" placeholder="" onChange={editChangeHandle} value={editProdX.description} />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={editCloseHandle} >Close</Button>
          <Button variant="primary" onClick={editProductHandle}>Edit Product</Button>
        </Modal.Footer>
      </Modal>
  )
}

export default EditProductModal