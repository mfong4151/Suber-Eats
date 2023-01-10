

export const sortMenus = menuItems => {
    const headers = {}
    let header;

    for(const item of Object.values(menuItems)){
        if (header !== item.header)  header = item.header;
        headers[header]||= [];
        headers[header].push(item)
    }
    
    return headers
}

export const checkCartMembership = (menuItem, cart) =>{
    const res = false;

    // cart.forEach(cartItem =>{
    //     if(menuItem.id === cart.id)  
    // })
    
}