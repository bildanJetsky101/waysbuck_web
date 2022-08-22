import {Row, Col, Container, Navbar} from 'react-bootstrap';
import NavbarList from '../components/Navbar';
import user from '../assets/maan.jpg';
import logo from '../assets/logo.png';
import qrcode from '../assets/qr-code.png';
import dataProduct from '../dataProduct/product';
import dataToping from '../dataToping/toping';
import React from 'react'

function Mytrans() {
    return (
        <>
        <NavbarList />

    <div style={{margin: "auto", width: "80%", marginTop: "50px"}}>

      <Row>
        <Col style={{marginRight: "70px", width: "30%"}}>
          <h3 style={{color: "#BD0707", marginBottom: "30px"}}>My Profile</h3>
          <div style={{ display: "flex", flexDirection: "row"}}>
          <img src={user} alt="User Image" style={{borderRadius: "5px", height: "250px",width:"200px", display: "inline", objectFit: "cover"}}/>
            <div style={{display: "inline", marginLeft: "25px"}}>
              <p>Full Name</p> 
              <p>Egi Ganteng  </p>
              <p>Email</p>
              <p>egigans@gmail.com</p>
            </div>
          </div>
        </Col>

        <Col style={{width: "70%"}}>
          <h3 style={{color: "#613D2B", marginBottom: "30px"}}>My Transaction</h3>
          <div style={{backgroundColor: "#F6DADA",
                      minHeight: "250px",
                      width: "650px",
                      borderRadius: "10px"
                     
                      }}>
        
        
            <Row>
                <div  style={{margin: "10px 5px 10px 20px", display: "flex", flexDirection: "row"}}>
                        <Col style={{width: "40%"}}>
                                <Row>
                                    <div style={{display: "flex", flexDirection: "row", color: "#BD0707", margin: "5px"}}>
                                        <img src={dataProduct[0].image} style={{height: "110px", width: "70px", marginRight: "10px", borderRadius: "10px"}}/>
                                        
                                        <div style={{display: "flex", flexDirection: "column"}}>
                                            <p style={{fontSize: "14px", marginBottom: "10px"}}>{dataProduct[0].title}</p>
                                            <p style={{fontSize: "9px", marginBottom: "25px"}}><strong>Saturday</strong>, 5 March 2020</p>
                                            <p style={{fontSize: "10px", color: "rgba(151, 74, 74, 1)", marginBottom: "10px"}}>Toping :{dataToping[0].name}, {dataToping[1].name}</p>
                                            <p style={{fontSize: "10px"}}>Price : Rp.33.000</p>
                                        </div>
                                        
                                    </div>
                                </Row>

                                <Row>
                                    <div style={{display: "flex", flexDirection: "row", color: "#BD0707", margin: "10px"}}>
                                        <img src={dataProduct[0].image} style={{height: "110px", width: "70px", marginRight: "10px", borderRadius: "10px"}}/>
                                        
                                        <div style={{display: "flex", flexDirection: "column"}}>
                                            <p style={{fontSize: "14px", marginBottom: "10px"}}>{dataProduct[0].title}</p>
                                            <p style={{fontSize: "9px", marginBottom: "25px"}}><strong>Saturday</strong>, 5 March 2020</p>
                                            <p style={{fontSize: "10px", color: "rgba(151, 74, 74, 1)", marginBottom: "10px"}}>Toping :{dataToping[0].name}, {dataToping[1].name}</p>
                                            <p style={{fontSize: "10px"}}>Price : Rp.33.000</p>
                                        </div>
                                        
                                    </div>
                                </Row>
                        </Col>

                        <Col style={{width: "50%", textAlign: "center"}}>
                                    <img src={logo} style={{width: "60px", height: "60px", marginBottom: "20px"}}/>
                                    <br />
                                    <img src={qrcode} style={{width: "80px", height: "80px", marginBottom: "15px"}}/>
                                    <br />
                                    <div style={{color: "rgba(0, 209, 255, 1)", width: "100px", height: "30px", marginBottom: "20px", margin: "auto", fontWeight: "500"}}>
                                        <p style={{color: " #00D1FF;", fontSize: "10px", paddingTop: "7px"}} >On The Wayt</p>
                                    </div>
                                    <p style={{color: "rgba(151, 74, 74, 1)", fontSize: "10px", fontWeight: "800"}}>Sub Total : 66.000</p>
                        </Col>
                </div>
            </Row>

          </div>

        </Col>
        
      </Row>
    </div>
    </>
    )
}


export default Mytrans;