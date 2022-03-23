import './App.css'

function Product(props){
    const {product,onAdd} = props
    return(
        <>
            <li>
                <img className = 'prodImg' src = {product.image} alt = {product.name}></img>
                <h2>{product.name}</h2>
                <h4>{product.price}</h4>
                <div>
                    <button  class = 'prodBtn' onClick={()=>onAdd(product)}>Add to Cart</button>
                </div>
            </li>
        </>
    )
}

export default Product;