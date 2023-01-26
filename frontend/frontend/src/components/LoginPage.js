import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = e => {
        e.preventDefault();

        const user = {
          email: email,
          password: password,
        };
  

        fetch('http://localhost:8000/api/token/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(result => {
            if(result.access){
                localStorage.clear()
                localStorage.setItem('access',result.access)
                localStorage.setItem('refresh',result.refresh)
                window.location.replace('http://localhost:3000/')
            }
        })
      };
  return (
    <div className='container mt-5'>
        <h2>Login Page</h2>
        <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
    </div>
  )
  
}
