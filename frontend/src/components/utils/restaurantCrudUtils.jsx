export const adjustPrice = e =>{
    setQuantity(e.target.value);
    return cartItem.price * itemQuantity;
}

export const calcItemTotal = (price, quantity) => (price*quantity);

export const calcSubTotal = (restCart) =>{ 
    const res = 0;
    
    for (const i in Object.values(restCart)){
        res += calcItemTotal(i.price, i.quantity)
    }

    return res;
}

export const calcTaxAndFees = (total) => {
    const tax = total * .10
    const deliveryFee = .49
    const californiaFees = 2.00
    const subtotal = tax + deliveryFee + californiaFees

    return {tax, deliveryFee,californiaFees, subtotal}

}

export const tipCalculation = (total) =>{
    
}