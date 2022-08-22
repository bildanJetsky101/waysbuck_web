import {Card} from 'react-bootstrap'
import img1 from '../assets/product1.png'
import { Link } from 'react-router-dom'
import React from 'react'

export default function CardProduct({item, index}) {
    return (
        <Link to={`/productDetail/` + item.id} style={{ textDecoration: "none", marginRight:'2rem'}} key={index}>
        <Card style={styles.card}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body style={styles.cardBody}>
                <Card.Title style={{fontSize:'18px', weight:'900', color:'rgba(189, 7, 7, 1)'}}>{item.title}</Card.Title>
                <Card.Text style={{color:'rgba(189, 7, 7, 1)'}}>
                    Rp. {item.price}
                </Card.Text>
            </Card.Body>
        </Card>
        </Link>
    )
}

const styles = { 
    cardBody : {
        padding:'1rem'
    },
    card : {
        // width: 'fit-content', 
        borderRadius:'10px',
        borderStyle:'none',
        //marginRight:'1rem', 
        backgroundColor:'rgba(246, 218, 218, 1)'
    }
}