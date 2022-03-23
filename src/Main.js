import './App.css'
import Product from './Product';

function Main(props){
    const {products, onAdd} = props;
    return(
        <>
                    <h2>Products</h2>
            <div className='prodContainer'>
                {products.map((product)=>{
                    return(
                        <Product onAdd = {onAdd} key = {product.id} product = {product}/>
                    )
                })}
            </div>
        </>
    )
}

export default Main;