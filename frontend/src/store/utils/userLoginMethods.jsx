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
