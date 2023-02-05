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


export const titleLoader =( ) => (
    [
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
)

export const mapCategories = ()=>(
    {
        'american': [],
        'bakery': [],
        'bar': [],
        'boba': [],
        'chinese': [],
        'comfort food': [],
        'diner': [],
        'healthy': [],
        'ice cream and frozen': [],
        'italian': [],
        'japanese': [],
        'mexican': [],
        'pizza': [],
        'thai': [],
        'vietnamese': []
    }
)

export const carouselLoader = () => {

    const res = []
    const photos = photoLoader(), titles = titleLoader()
    for(let i = 0; i < photos.length; i++ ) res.push({photo: photos[i], title: titles[i]})


    return res

}

