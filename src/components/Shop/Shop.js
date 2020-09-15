import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/actions/cartActions';
import Product from '../Product/Product';

const Shop = (props) => {
    const {products,addToCart} = props;
    return (
        <div>
            <h2>this is shop</h2>
            {
                products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state =>{
     return {
         cart: state.cart,
         products: state.products
     }
}
const mapDispatchToProps = {
    addToCart:addToCart 
}
// first system
// const connectToState = connect(mapStateToProps, mapDispatchToProps);
// connectToState(Shop)
//second system
// connect(mapStateToProps, mapDispatchToProps)(Shop);
export default connect(mapStateToProps, mapDispatchToProps)(Shop);