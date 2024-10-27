import React from 'react';
import {Form, Button} from 'react-bootstrap';

const ReviewForm = ({labelText, defaultValue, refText, handleSubmit}) => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                <Form.Label>{labelText}</Form.Label>
                <Form.Control ref={refText} as='textarea' rows={3} defaultValue={defaultValue} />
            </Form.Group>
            <Button variant='outline-info' onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    )
};

export default ReviewForm;