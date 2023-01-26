import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Images from './Images';

export default function HomePage() {
  const [image, setImage] = useState('');
  const [hasImage, sethasImage] = useState(false);

  useEffect(() => {
    sethasImage(false)
  }, []);

  const handleOnSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image',image)
    fetch('http://localhost:8000/api/image-generator/', {
          method: 'POST',
          body: formData
        })
          .then(res => res.json())
          .then(data => {
            if(data.status === 'success'){
              sethasImage(true)
            }
          })
  }
  return (
    <div className='container mt-5'>
      <Form onSubmit={handleOnSubmit}>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload an Image</Form.Label>
        <Form.Control type="file" onChange={e => setImage(e.target.files[0])}/>
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
      </Form>
      { hasImage ?
       <>
      <Images/>
      </> : <div></div>}

    </div>
  )
}
