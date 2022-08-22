
import {Modal, Form, Button, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext'
import {useMutation} from 'react-query'

import {API} from '../config/api'

export default function RegisterForm({show, handleClose}){

    const [message, setMessage] = useState(null);

      const [value, setValue] = useState({
        name: '',
        email: '',
        password: '',
      });

    const {name, email, password} = value

    const handleChange = (e) => {
        setValue({
            ...value,
          [e.target.name]: e.target.value,
            
        });
    };

    console.log(value
      )

    const handleOnSubmit = useMutation (async (e) => {
        try {
          e.preventDefault()

          const config = {
            headers: {
              'Content-type': 'application/json',
            },
          };

          const body = JSON.stringify(value);

          const response = await API.post('/register', body, config);

          const data = {
            email:value.email,
            password:value.password
          }
          console.log(value)
          console.log(data)
          console.log('Success create a new account')
          const alert = (
            <Alert variant='danger' className='py-1' style={{width:'fitContent'}}>
                Success create an account you can login now
            </Alert>
          )
          setMessage(alert)
          alert('Success Register')

          setValue({
            name: '',
            email: '',
            password: '',
          })


        } catch (error) {
          const alert = (
            <Alert variant='danger' className='py-1' style={{width:'fitContent'}}>
                Failed
            </Alert>
          )

          setMessage(alert)
          console.log(error)

        }

    })


    return(
        <>
        <Modal style={{marginTop:'3rem',}} show={show} onHide={handleClose} >
            <Form onSubmit={(e) => handleOnSubmit.mutate(e)} style={{padding:'2rem'}}>
                <Modal.Title style={{marginBottom:'30px', fontSize:'36px', color:'rgba(189, 7, 7, 1)'}}>Register</Modal.Title>
                <Form.Group className="mb-3" >
                    <Form.Control name='name' onChange={handleChange} style={styles.form} type="username" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Control name='email' onChange={handleChange} style={styles.form} type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control name='password' onChange={handleChange} style={styles.form} type="password" placeholder="Password" />
                </Form.Group>
                <Button type='submit' variant="primary" style={{width:'100%', backgroundColor:"rgba(189, 7, 7, 1)", borderStyle:'none', height:'50px'}} onClick={handleClose}>
                    Register
                </Button>
                <div style={{marginTop:'15px', textAlign:'center'}}>
                    <p >Already Have an Account? Click <span style={{cursor:'pointer'}}><b>Here</b></span></p>
                </div>
            </Form>
        </Modal>
        </>
    )
}







const styles = {
    form : {
        border:'2px solid rgba(189, 7, 7, 1)',
        backgroundColor:'rgba(210, 210, 210, 0.25)', 
        height:'50px',
    }
}