

export const aggregateCart = carts =>{

    const restaurantCarts = {};
    
    for(const cart of Object.values(carts)){
        restaurantCarts[cart['rest_name']] ||=[]
        restaurantCarts[cart['rest_name']].push(cart)
    }

    return restaurantCarts;
}

//extract the address from the menu item

export const extractAddress = menuItem =>(
    menuItem[0].address.slice(0,menuItem[0].address.indexOf(','))
)


export const qtySubtotal = menuItems =>{
    let quantity = 0;
    let subtotal = 0;

    for(const menuItem of menuItems){
        quantity += menuItem.quantity;
        subtotal += menuItem.cart_sum;
    }
     

    return {quantity, subtotal};

}