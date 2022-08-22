import NavbarList from '../components/Navbar'
import Banner from '../components/Banner'
import CardProduct from '../components/CardProduct'
import dataProduct from '../dataProduct/product'
import Jumbotron from '../assets/Jumbotron.svg'
import React from 'react'
import { API } from '../config/api'
import { useQuery } from 'react-query';

export default function Home(){


    let { data: products } = useQuery('productsCache', async () => {
        const response = await API.get('/products');
        return response.data.data;
    });


    return (
        <div>
            <NavbarList/>
            {/* <Banner style={{marginBottom:'5rem'}}/> */}
            <div style={styles.jumbotron}>
                <img  src={Jumbotron} alt="" />
            </div>
            <div style={{width:'85%', paddingLeft:'13px', margin:'auto'}}>
                <h1 style={styles.h1Color}>Let's Order</h1>
                <div style={styles.cardProductParent}>
                    {products?.map((item, index)=>(
                        <CardProduct item={item} key={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
} 

const styles = {
    cardProductParent: {
        display:"flex",
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
        marginTop:'40px',
        marginBottom:'5rem'
        //backgroundColor:'tomato',
        
        //cursor:'context-menu'
    },
    h1Color: {
        marginLeft:'22px', 
        fontSize:'36px',
        marginTop:'50px',
        fontWight:'900',
        color:'rgba(189, 7, 7, 1)'
    },
    jumbotron: {
       display:'flex',
       justifyContent:'center',
       paddingTop:'55px'
    }
}