import React from 'react';

import {Modal, Button, Form, Container} from 'react-bootstrap'

import {
  ModalTitle,
  ModalBtn
} from '../Modal/ModalStyle'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faMusic
} from '@fortawesome/free-solid-svg-icons';


import '../Modal/ModalStyle.css'

const Musictalk = ({show,onHide}) => {
    return (
        <Modal

          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Container>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                MusicTalk
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" >
                  <ModalTitle>
                    <Form.Label>Title</Form.Label>
                  </ModalTitle>
                  
                  <ModalBtn>
                    <Button  variant="info" type="submit">
                      Update
                    </Button>
                  </ModalBtn>

                  <Form.Control type="text" placeholder="Question Title" />
          
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Contents</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3" ></Form.Group>
              </Form>
              
              <Form.Control type="text" placeholder="Please Enter a Text." />
              <hr/>
              <FontAwesomeIcon icon={faMusic} />
            </Modal.Body>
          </Container>
        </Modal>

    );
};

export default Musictalk;