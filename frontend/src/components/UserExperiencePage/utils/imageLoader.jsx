import frozendesert from"../assets/frozendesert.png";
import comfortfood from"../assets/comfortfood.png";
import coffeeandtea from"../assets/coffeeandtea.png";
import bakery from"../assets/bakery.png";
import asian from"../assets/asian.png";
import bubbletea from"../assets/bubbletea.png";
import indian from"../assets/indian.png";
import american from"../assets/american.png";
import thai from"../assets/thai.png";
import pizza from"../assets/pizza.png";
import italian from"../assets/italian.png";
import wings from"../assets/wings.png";
import vietnamese from"../assets/vietnamese.png";
import healthy from"../assets/healthy.png";

export const photoLoader = ()=>{

    return [frozendesert,
            comfortfood,
            coffeeandtea,
            bakery,
            asian,
            bubbletea,
            indian,
            american,
            thai,
            pizza,
            italian,
            wings,
            vietnamese,
            healthy
            ]
}


export const titleLoader =( ) => {
    return [
        'Ice Cream + Frozen',
        'Comfort Food',
        'Coffee and Tea',
        'Bakery',
        'Asian',
        'Bubble Tea',
        'Indian',
        'American',
        'Thai',
        'Pizza',
        'Italian',
        'Wings',
        'Vietnamese',
        'Healthy'
    ]

}

export const carouselLoader = () => {

    const res = []
    const photos = photoLoader(), titles = titleLoader()
    for(let i = 0; i < photos.length; i++ ) res.push({photo: photos[i], title: titles[i]})


    return res

}

