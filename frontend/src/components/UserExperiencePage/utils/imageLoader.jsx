import frozendesert from"../assets/carousel_icons/frozendesert.png";
import comfortfood from"../assets/carousel_icons/comfortfood.png";
import coffeeandtea from"../assets/carousel_icons/coffeeandtea.png";
import bakery from"../assets/carousel_icons/bakery.png";
import asian from"../assets/carousel_icons/asian.png";
import bubbletea from"../assets/carousel_icons/bubbletea.png";
import indian from"../assets/carousel_icons/indian.png";
import american from"../assets/carousel_icons/american.png";
import thai from"../assets/carousel_icons/thai.png";
import pizza from"../assets/carousel_icons/pizza.png";
import italian from"../assets/carousel_icons/italian.png";
import wings from"../assets/carousel_icons/wings.png";
import vietnamese from"../assets/carousel_icons/vietnamese.png";
import healthy from"../assets/carousel_icons/healthy.png";

export const photoLoader = ()=>{

    return [frozendesert,
            comfortfood,
            coffeeandtea,
            american,
            bakery,
            pizza,
            asian,
            bubbletea,
            thai,
            italian,
            vietnamese,
            healthy,
            indian,
            ]
}


export const titleLoader =( ) => (
    [
        'Ice Cream + Frozen',                           
        'Comfort Food',                             
        'Coffee and Tea',                           
        'American',                             
        'Bakery',                           
        'Pizza',                            
        'Asian',                            
        'Bubble Tea',                           
        'Thai',                             
        'Italian',                          
        'Vietnamese',                           
        'Healthy',                           
        'Indian',                      
    ]
)

export const keyLoader = () =>(

    [
        'ice cream and frozen',
        'comfort food',
        'coffee and tea' ,
        'american',
        'bakery',
        'pizza',
        'asian',
        'boba',
        'thai',
        'italian',
        'vietnamese',
        'healthy',
        'indian',
        
    ]
)



export const carouselLoader = () => {

    const res = []
    const photos = photoLoader(), titles = titleLoader(), catKeys = keyLoader()
    for(let i = 0; i < photos.length; i++ ) res.push({photo: photos[i], title: titles[i], key:catKeys[i]})


    return res

}

