import React, {useState}from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Product from './components/Product'
import Header from './components/Header'



export default function App() {
  const [cart, setcart] = useState([])
  return (
    <div>
  <Header/>
 



    <Routes>
<Route path='/' element={<Home setcart={setcart} cart={cart}/>}/>
<Route path='/cart' element={<Cart cart={cart}/>}/>

<Route path='/:id' element={<Product />}/>

<Route path='*' element={<h1>404</h1>}/>
    </Routes>
      
    </div>
  )
}
