export const aggregateCart = (carts) =>{
    const restaurantCarts = {};
    
    for(const cart of Object.values(carts)){
        restaurantCarts[cart['restName']] ||=[]
        restaurantCarts[cart['restName']].push(cart)
    }

    return restaurantCarts;
    
}


export const sizeCarts = (carts) =>{
    
    const sizeCarts = aggregateCart(carts);
    
    for(const cart of Object.keys(sizeCarts)){
        let temp = 0;
        for(const item of sizeCarts[cart])
            temp += item.quantity;
        sizeCarts[cart] = temp
    }
    return sizeCarts;
    
}

export const cartNames = (carts) => {
    const restaurantCarts = new Set();
    
    for(const cart of Object.values(carts)){
        restaurantCarts.add(cart['restName'])
    }

    return Array.from(restaurantCarts);
    
}