import './App.css'
import Main from './Main';
import Basket from './Basket';
import data from './productData';
import { useState } from 'react';

function Shop(){
    const {products} = data
    const [cartItems, setCartItems] = useState([])
    const onAdd = (product)=>{
        const exist = cartItems.find(x=>x.id === product.id)
        if(exist){
            setCartItems(cartItems.map(x=>x.id === product.id ? {...exist, qty: exist.qty + 1}:x))
        }else{
            setCartItems([...cartItems, {...product, qty: 1}])
        }
    }
    const onRemove = (product) => {
        const exist = cartItems.find((x)=>x.id===product.id)
        if(exist.qty === 1){
            setCartItems(cartItems.filter((x)=>x.id !== product.id))
        }else{
            setCartItems(
                cartItems.map((item)=>item.id === product.id ? {...exist, qty: exist.qty -1}:item)
            )
        }
    }
    return(
        <>
        <div className='shopContainer'>
            <h1>SHOP</h1>
            <Main onAdd = {onAdd} products = {products}/>
            <Basket onRemove = {onRemove} onAdd = {onAdd} cartItems = {cartItems} />
        </div>
        </>
    )
}

export default Shop;