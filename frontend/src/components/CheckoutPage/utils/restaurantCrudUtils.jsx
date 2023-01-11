
export const calcItemTotal = (price, quantity) => (price*quantity);

export const roundNum = (num) => (Math.round(num *100)/100)
export const calcSubTotal = (restCart) =>{ 
    let res = 0;
        for (const i in Object.keys(restCart)){
            res += calcItemTotal(restCart[i].price, restCart[i].quantity)
        }
    return Math.round(res * 100)/100;
}

export const calcTaxAndFees = (total) => {
    const tax = roundNum(total * .10)
    const deliveryFee = .49
    const californiaFees = 2.00
    const totalAmt = roundNum(tax + deliveryFee + californiaFees + total)

    return {tax ,deliveryFee, californiaFees, totalAmt}

}

export const tipCalculation = (total) =>{
    
}