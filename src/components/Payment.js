import { Modal, Alert } from "react-bootstrap";
import React from 'react'

export default function Payment ({show, handleClose}){
    return(
        // <Alert style={{width:'60%', margin:'auto'}} >
        //     <p>Payment Success</p>
        // </Alert>
        <Modal show={show} onHide={handleClose} style={{borderRadius:'2px', paddingTop:'20px', borderStyle:'none'}}>
            <p style={{margin:'auto', color:'rgba(70, 159, 116, 1)', paddingTop:'35px', paddingBottom:'35px'}}>Thank you for ordering, please wait to verify your order</p>
        </Modal>
    )
}