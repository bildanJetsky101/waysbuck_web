import {Modal, Form, Button, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext'

import { useMutation } from 'react-query'

import {API} from '../config/api'

import Data from '../data/data'

export default function LoginForm({show, setStatus, handleClose}){

   // let navigate = useNavigate()
    const [message, setMessage] = useState(null);

    const [showPop, setShowPop] = useState(show)

    const [state, dispatch] = useContext(UserContext)
    const [status, setStatusPerson] = useState('')
    const [data, setData] = useState({
        email: '',
        password: '',
        cartStatus:false
      });


    const handleChange = (e) => {
        setData({
            ...data,
          [e.target.name]: e.target.value,
            
        });
    };

    console.log(data)

    const goRegister = () => {
      show = false
    }

    const handleOnSubmit = useMutation (async (e) => {
       
          e.preventDefault()
          
          let statusPerson = ''
          let a = true

          // for(let i = 0; i<Data.length; i++){
          //   if(data.email === Data[i].email){
          //       statusPerson = Data[i].status;
          //       a = false
          //       console.log('oke')
          //     }
          //   }


            const config = {
              headers: {
                'Content-type': 'application/json',
              },
            };
      
            // Data body
            const body = JSON.stringify(data);
      
            // Insert data user to database
            const response = await API.post('/login', body, config);


            if (response?.status === 200) {
              statusPerson = response.data.data.status
              a = false
              dispatch({
                type: 'LOGIN_SUCCESS',
                userStat: statusPerson,
                payload: response.data.data
              })
      
              // if (response.data.data.status == "admin") {
              //   navigate('/product-admin')
              // } else {
              //   navigate('/')
              // }
            }

            if(a) {
              setData({
                email:'',
                password:'',
                cartStatus:false
              })
              alert('error')
              throw new Error
            }

          //  console.log('Ini status '+ status)
        
          // dispatch({
          //   type: 'LOGIN_SUCCESS',
          //   userStat: statusPerson,
          //   payload: data

          // })

          // console.log(statusPerson)
          // console.log('success' + state.status)
          // console.log(state)

          setData({
            email:'',
            password:''
          })

    })


    return(
        <>
        <Modal style={{marginTop:'3rem',}} show={show} onHide={handleClose} >
            <Form onSubmit={(e) => handleOnSubmit.mutate(e)} style={{padding:'2rem'}}>
                <Modal.Title style={{marginBottom:'30px', fontSize:'36px', color:'rgba(189, 7, 7, 1)'}}>Login</Modal.Title>
                <Form.Group className="mb-3" >
                    <Form.Control name="email" onChange={handleChange} style={styles.form} type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control name="password" onChange={handleChange} style={styles.form} type="password" placeholder="Password" />
                </Form.Group>
                <Button type='submit' variant="primary" style={{width:'100%', backgroundColor:"rgba(189, 7, 7, 1)", borderStyle:'none', height:'50px'}} onClick={handleClose}>
                    Login
                </Button>
                <div style={{marginTop:'15px', textAlign:'center'}}>
                    <p >Don't Have an Account? Click <span onClick={() => goRegister()} style={{cursor:'pointer'}}><b>Here</b></span></p>
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