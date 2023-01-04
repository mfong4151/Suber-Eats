

export const aggregateUserCredentials = users => {

    const allLogins = new Set();
    for(const user of Object.values(users)){   
        for(const credential of Object.values(user)){
            if(typeof credential === 'number') continue;
            allLogins.add(credential)

        }

    }
    return allLogins;
}


export const checkExistingUser = (credential, allUserCredentials) =>{
    // console.log(credential, allUserCredentials)
    if(allUserCredentials.has(credential)) return true;
    return false;
}