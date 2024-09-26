import './App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './component/NotFound';
import Navbar from './component/Navbar';
import { useState } from 'react';
import SliderSamsung from './component/SliderSamsung';
import Product from './component/Product';
import Footer from './component/footer/Footer';
import Login from './component/login/Login';

function App() {
  const [counter, setCounter] = useState(0);
  const [infoCart, setInfoCart] = useState([
    {name:"کالای شما", price:' 0 '}
  ]);

  const handlerCounter = (a,b)=>{
      setCounter(counter + 1);
      setInfoCart([...infoCart,{ name:a,price:b}])
      console.log(infoCart);
  };
 
  return (
    <>
      <Navbar counter={counter} handlerCounter={handlerCounter} infoCart={infoCart} />
      <Routes>
        <Route
          path='/'
          element={
            <SliderSamsung  />
          }
        />
        <Route path='/product/:productId' element={<Product counter={counter} handlerCounter={handlerCounter} />} />
        <Route path='/login' element={<Login/>} />

        <Route path='*' element={<NotFound />} />
      
      </Routes>
      <Footer/>
      
    </>

  );
}

export default App;
