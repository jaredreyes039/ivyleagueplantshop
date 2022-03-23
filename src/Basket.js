import './App.css'
import React from 'react';

function Basket(props){
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c)=>a+c.price*c.qty, 0)
    const taxPrice = itemsPrice * 0.081;
    const serviceFee = itemsPrice > 100 ? 0 : 25;
    const totalPrice = itemsPrice + taxPrice + serviceFee
    return(
        <>
        <aside className='cart'>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is Empty</div>}

            </div>
            {cartItems.map((item)=>(
                <div key = {item.id} className ='cartItem cartGrid'>
                    <h2>{item.name}</h2>
                    <h2>{item.price}</h2>
                    <div className='cartBtns row'>
                        <button onClick={()=>onAdd(item)}>+</button>
                        <h2>{item.qty}</h2>
                        <button onClick={()=>onRemove(item)}>-</button>

                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className='cartSummary'>
                        <div className='row'>
                        <h4>Items Price: </h4>
                        <h4>{itemsPrice.toFixed(2)}</h4>
                        </div>
                        <div className='row'>
                        <h4>Tax Price: </h4>
                        <h4>{taxPrice.toFixed(2)}</h4>
                        </div>
                        <div className='row'>
                        <h4>Service Fee: </h4>
                        <h4>{serviceFee.toFixed(2)}</h4>
                        </div>
                        <div className='row'>
                        <h4>Total:</h4>
                        <h4>{totalPrice.toFixed(2)}</h4>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='row'>
                        <button onClick = {()=>{alert('Checkout under long-term construction, feel free to check back later!')}}>Checkout</button>
                    </div>
                </>
            )}
        </aside>
        </>
    )
}

export default Basket