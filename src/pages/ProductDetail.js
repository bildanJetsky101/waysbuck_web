import Product from '../dataToping/toping'
import DataProduct from "../dataProduct/product";
import { useParams } from 'react-router';
import { useContext } from 'react';
import Toping from '../components/Toping';
import dataToping from '../dataToping/toping'
import React, { createContext, useState } from 'react';
import NavbarList from '../components/Navbar';
import { UserContext } from '../context/UserContext';
import CartAlert from '../components/CartAlert';
import { useQuery, useMutation } from 'react-query';
import { API } from '../config/api';

export default function ProductDetail (){

    const addCart = createContext()
    const [state, dispatch] = useContext(UserContext)
    const [cart, setCart] = useState(false)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const [result, setResult] = useState(0)

    let { id } = useParams();


    let { data: product } = useQuery('productCache', async () => {
        const response = await API.get('/product/' + id);
        return response.data.data;
      });

      let { data: topings } = useQuery('topingsCache', async () => {
        const response = await API.get('/topings');
        return response.data.data;
      });


    const idParams = parseInt(id)
    //const products = DataProduct.find(({id})=> id === idParams)

    console.log(product)

    const topping = ['Bubble Tea', 'Brown Sugar']

    //let result = 28000
    let total = 28000
    let hasil = state
    total += result

    
    const handleBuy = useMutation(async (e) => {
        try {
          e.preventDefault();
    
          const config = {
            headers: {
              'Content-type': 'application/json',
            },
          };
    
          const data = {
            idProduct: product.id,
            toping: topings,
            price: product.price,
          };
    
          const body = JSON.stringify(data);
    
          await API.post('/cart', body, config);
        
        } catch (error) {
          console.log(error);
        }
      });

    return(
        <div>
            <NavbarList />
            <CartAlert show={show} handleClose={handleClose}/>
            <div style={styles.container}>
                <img style={styles.image} src={product.image} alt="" />
                <div style={styles.infoContainer}>
                    <h1 style={{fontSize:'48px', fontWeight:'900', color:'rgba(189, 7, 7, 1)'}}>{product.title}</h1>
                    <p style={{marginBottom:'3rem', fontSize:'24px', color:'rgba(189, 7, 7, 1)'}}>Rp. {product.price}</p>
                    <p style={{fontSize:'24px', fontWeight:'800', color:'rgba(151, 74, 74, 1)'}}>Toping</p>
                    <div style={styles.topingWrapper}>
                        {topings?.map((item, index)=>(
                            <Toping item={item} setResult={setResult} key={index}/>
                        ))}
                    </div>
                    <div style={styles.total}>
                        <p>Total</p>
                        <p>Rp. {total}</p>
                    </div>
                    <button onClick={() => handleBuy()} style={styles.buttonCart}>Add Cart</button>
                </div>
            </div>
        </div>
    )
}

const styles = {
    container: {
        //backgroundColor:'wheat',
        paddingTop:'3rem',
        margin:'auto',
        display:'flex',
        justifyContent:'space-between',
        width:'85%', 
        flexDirection:'row',
        marginBottom:'5rem'
    },
    infoContainer:{
        //backgroundColor:'aqua',
        width:'58%',
        display:'flex',
        flexDirection:'column',
    },
    topingWrapper: {
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',

    },
    buttonCart: {
        height:'40px',
        backgroundColor:'rgba(189, 7, 7, 1)',
        borderRadius:'5px',
        color:'white',
        border:'2px solid rgba(189, 7, 7, 1)'
    },
    image : {
        width:'436px',
        height:'555px'
    },
    total: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        fontSize:'24px',
        fontWeight:'900',
        marginBottom:'2rem',
        color:'rgba(151, 74, 74, 1)'
    },
    topingWrapper: {
        display:'flex',
        flexDirection:'row',
        marginBottom:'1rem',
        flexWrap:'wrap',
        
    }
}