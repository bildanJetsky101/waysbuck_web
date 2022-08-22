import Bin from '../assets/Group.svg'
import Product from '../dataProduct/product'
import Toping from '../dataToping/toping'
import NavbarList from '../components/Navbar'
import Payment from '../components/Payment'
import { useState } from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import React from 'react'
export default function Cart(){

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const [donePay, setDonePay] = useState(false)
    const [state, dispatch] = useContext(UserContext)

    const payProduct = () => {
        setShow(true)

        const data ={
            email:state.user.username,
            password:state.user.password,
            cartStatus:false
        }

        dispatch({
            type: 'ADD_PAY',
            userStat: 'user',
            payload: data
          })
        setDonePay(true)
        // if(donePay === true){
        //     setDonePay(false)
        // }
    }

    const deleteProduct = () => {
        alert('DeleteProduct')
    }

    return(
        <>
        <NavbarList/>
        <Payment show={show}  handleClose={handleClose} />
        <div style={styles.container}>
            <h1 style={styles.h1}>My Cart</h1>
            <p style={styles.p}>Review Your Order</p>
            <div style={styles.innerContainer}>
                <div style={styles.order}>
                    {!donePay?
                    <>
                    <div style={styles.productContent}>
                        <img style={{height:'80px', width:'80px'}} src={Product[0].image} alt="" />
                        <div style={styles.productBody}>
                            <div style={styles.info}>
                                <p style={{fontWeight:'800'}}>{Product[0].title}</p>
                                <p>Rp. {Product[0].price}</p>
                            </div>
                            <div style={styles.info2}>
                                <p>Toping: {Toping[0].name}, {Toping[1].name}</p>
                                <img style={{cursor:'pointer'}} onClick={()=> deleteProduct()} src={Bin} alt="" />
                            </div>
                        </div>
                    </div>

                    <div style={styles.productContent}>
                        <img style={{height:'80px', width:'80px'}} src={Product[0].image} alt="" />
                        <div style={styles.productBody}>
                            <div style={styles.info}>
                                <p style={{fontWeight:'800'}}>{Product[0].title}</p>
                                <p>Rp. {Product[0].price}</p>
                            </div>
                            <div style={styles.info2}>
                                <p>Toping: {Toping[0].name}, {Toping[1].name}</p>
                                <img style={{cursor:'pointer'}} onClick={()=> deleteProduct()} src={Bin} alt="" />
                            </div>
                        </div>
                    </div>

                    <div style={styles.productContent}>
                        <img style={{height:'80px', width:'80px'}} src={Product[0].image} alt="" />
                        <div style={styles.productBody}>
                            <div style={styles.info}>
                                <p style={{fontWeight:'800'}}>{Product[0].title}</p>
                                <p>Rp. {Product[0].price}</p>
                            </div>
                            <div style={styles.info2}>
                                <p>Toping: {Toping[0].name}, {Toping[1].name}</p>
                                <img style={{cursor:'pointer'}} onClick={()=> deleteProduct()} src={Bin} alt="" />
                            </div>
                        </div>
                    </div>
                    </>
                    : null}

                </div>
                <div style={styles.pay}>
                    <div style={styles.subtotal}>
                        <p>Subtotal</p>
                        <p>234.000</p>
                    </div>
                    <div style={styles.qty}>
                        <p>Qty</p>
                        <p>3</p>
                    </div>
                    <div style={styles.total}>
                        <p>Total</p>
                        <p>239.000</p>
                    </div>
                    <button onClick={()=>payProduct()} style={styles.btnPay}>Pay</button>
                </div>
            </div>

        </div>
        </>
    )
}

const styles = {
    container: {
        width:'75%',
        margin:'auto',
        color:'rgba(189, 7, 7, 1)'
    },
    innerContainer:{
        display:'flex',
        flexDirection:'row'

    },
    h1: {
        marginBottom:'25px'
    },
    order: {
        width:'60%',
        height:'100%',
        borderTop:'1px solid rgba(189, 7, 7, 1)',
        borderBottom:'1px solid rgba(189, 7, 7, 1)',
        marginRight:'100px',
        paddingBottom:'15px'
    },
    pay: {
        borderTop:'1px solid rgba(189, 7, 7, 1)',
        width:'33%',
        height:'500px',
        paddingTop:'10px'
    },
    subtotal: {
        display:'flex',
        justifyContent:'space-between',
        color:'rgba(189, 7, 7, 1)'
    },
    qty: {
        borderBottom:'1px solid rgba(189, 7, 7, 1)',
        display:'flex',
        justifyContent:'space-between'
    },
    total: {
        fontWeight:'800',
        paddingTop:'10px',
        display:'flex',
        justifyContent:'space-between'
    },
    btnPay:{
        marginTop:'2rem',
        height:'40px',
        borderRadius:'5px',
        backgroundColor:'rgba(189, 7, 7, 1)',
        color:'white',
        width:'100%',
        borderStyle:'none'
    },
    productContent: {
        display:'flex',
        flexDirection:'row',
       // backgroundColor:'rgb(250, 250, 250)',
        marginTop:'15px'
    },
    productBody:{
        position:'relative',
        display:'flex',
        marginLeft:'10px',
        justifyContent:'center',
        flexDirection:'column',
      
        width:'180%',
    },
    info: {
        position:'relative',
        display:'flex',
        flexDirection:'row',
        paddingTop:'5px',
        height:'35px',
        justifyContent:'space-between'
    },
    info2: {
        display:'flex',
        flexDirection:'row',
        height:'30px',
        justifyContent:'space-between'
    }


}