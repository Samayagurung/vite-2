import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const AddProductModal = ({addshow, addChangeHandle, addCloseHandle, addProductHandle}) => {
  return (
    <>
      <Modal show={addshow}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Image link"
            className="mb-3"
          >
            <Form.Control type="text" name="thumbnail" placeholder="" onChange={addChangeHandle} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Product title"
            className="mb-3"
          >
            <Form.Control type="text" name="title" placeholder="" onChange={addChangeHandle} />
          </FloatingLabel>
          <FloatingLabel controlId="" label="Product Description">
            <Form.Control type="text" name="description" placeholder="" onChange={addChangeHandle} />
          </FloatingLabel>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={addCloseHandle}>Close</Button>
          <Button variant="primary" onClick={addProductHandle}>Add Product</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProductModal;
