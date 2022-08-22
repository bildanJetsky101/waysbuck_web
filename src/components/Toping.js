import { Card } from "react-bootstrap"
import Tick from '../assets/TopingTick.svg'
import { useState } from "react"
import React from 'react'

export default function Toping({item, setResult, index}){
    
    const [show, setShow] = useState(false)
    
    const addToping = () => {
        let count = 0
        //alert('Toping ditambahkan'+ show)
        // if(count > 2){
        //     return alert('maksimal 2 toping')
        // }
        if(show === true){
            setShow(false)
        } else setShow(true)
        count +=3000
        setResult(count)
    }

    const styles = {
        image:{
            width:'75px',
            height:'85px',
            margin:'auto',
            cursor:'pointer'
        },
        body:{
            padding:'0px',
            margin:'0px',
            width:'8rem',
            //backgroundColor:'aqua'
        },
        title:{
            fontSize:'14px',
            margin:'0px',
            textAlign:'center',
            cursor:'pointer'
        },
        tick:{
            width:'20px',
            height:'30px',
            marginLeft:'80px',
            marginTop:'-5px',
            position:'absolute',
            // display:show,
        }
    }


    return(
        <>
            <Card style={{ width: '8rem', height:'8rem', marginRight:'37px',  borderStyle:'none'}} key={index}>
                <Card.Img onClick={()=> addToping()} style={styles.image} variant="top" src={item.image} />
                {show?<Card.Img style={styles.tick} src={Tick}/>: null}
                <Card.Body style={styles.body}>
                    <Card.Title onClick={()=> addToping()} style={styles.title}>{item.name}</Card.Title>
                </Card.Body>
             </Card>
        </>
    )


    


}



