const { ADD_TO_CART, REMOVE_FROM_CART } = require("../actions/cartActions");

const initialState = {
    cart:[],
    products:[
        {name: 'lenovo laptop',id:'1'},
        {name: 'Asus laptop',id:'2'},
        {name: 'Dell laptop',id:'3'},
        {name: 'Hp laptop',id:'4'},
        {name: 'Apple laptop',id:'5'},
        {name: 'Samsung laptop',id:'6'},
    ]
}

const cartReducers = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TO_CART : 
           const newItem = {
               productId:action.id,
               name:action.name,
               cartId :state.cart.length+1,
            }
           const newCart = [...state.cart,newItem]
           return {...state,cart : newCart}
        case REMOVE_FROM_CART :
            const cartId = action.cartId;
            const RemainingCart  = state.cart.filter(item => item.cartId !== cartId);
            return {...state,cart : RemainingCart}
        default:
            return state;
    }
}

export default cartReducers;