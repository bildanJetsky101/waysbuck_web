import Home from "./pages/Home";
import {Route, Routes, useNavigate } from "react-router-dom";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/admin/Product";
import AddToping from "./pages/admin/Toping";
import Transaction from "./pages/admin/Income";
import Profile from "./pages/Profile";
import './style/style.css';

import { API, setAuthToken } from './config/api';
import React, { useEffect, useContext } from "react";
import { UserContext } from "./context/UserContext";
function App() {

  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext)
 

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  

  useEffect(() => {
    // pengalihan halaman jika login berhasil maka akan bernilai true dan akan dialihkan ke halaman utama
    const checkAuth = () => {
    if (state.isLogin === false) {
       navigate('/')
    } else if (state.isLogin === true) {
      if (state.status === 'admin') {
        navigate('/transaction')
      }
    }
    
};
checkAuth();
},[state])


const checkUser = async () => {
  try {
    const response = await API.get('/check-auth');

    // If the token incorrect
    if (response.status === 404) {
      return dispatch({
        type: 'AUTH_ERROR',
      });
    }

    // Get user data
    let payload = response.data.data.user;
    // Get token from local storage
    payload.token = localStorage.token;

    // Send data to useContext
    dispatch({
      type: 'USER_SUCCESS',
      payload,
    });
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  checkUser();
}, []);

  return (
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/myCart' element={<Cart/>}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/productDetail/:id' element={<ProductDetail/>}/>
          <Route path='/addProduct' element={<AddProduct/>}/>
          <Route path='/addToping' element={<AddToping/>}/>
          <Route path='/transaction' element={<Transaction/>}/>
        </Routes>
  );
}

export default App;
