export const handlePhoneNumberErrors = phoneNumber => {
    // let region, phoneNumber;
    // region, phoneNumber = credential.split(' ')
    
    // Edit this if we ever add other countries
    //   if region != 1
    //     render json:{ errors:['Demo does not support regions outside of the United States']}, status: :unauthorized
    //     return
    //   # elsif region == 1 && phoneNumber.length != 12
    let splitNumber = phoneNumber.split('-');
    if (splitNumber[0].length === 3 && splitNumber[1].length === 3 && splitNumber[2].length === 4)return false;
    return true;

}

export const handleEmailErrors = email => {
    email = email.split('')

    let atSym = false, period = false, atSymIndex, periodIndex;
    for(const[idx, c] of email.entries()){

        if(c === '@'){
            atSym = true;
            atSymIndex = idx;
        }

        if(c === '.'){

            period = true;
            periodIndex = idx;
        }
    }
    if (atSymIndex > periodIndex || !atSym || !period) return true;
    return false;
}