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

//create an 14-ary tree structure for efficiently sorting valid categories

export const mapCategories = ()=>{
 
const  americanSet = new Set(['american', 'bakery', 'bar', 'comfort food', 'diner']);
const asianSet = new Set(['boba', 'chinese', 'japanese', 'thai', 'vietnamese'])
const  bakerySet = new Set(['bakery']);
const  barSet = new Set(['bar']);
const  bobaSet = new Set(['boba']);
const  chineseSet = new Set(['boba', 'chinese']);
const  comfortFoodSet = new Set(['comfort food']);
const  dinerSet = new Set(['diner']);
const  healthySet = new Set(['healthy']);
const  iceCreamFrozenSet = new Set(['ice cream and frozen']);
const  italianSet = new Set(['italian','pizza']);
const  japaneseSet = new Set(['japanese']);
const  mexicanSet = new Set(['mexican']);
const  pizzaSet = new Set(['pizza']);
const  thaiSet = new Set(['thai']);
const  vietnameseSet = new Set(['vietnamese']);


return {
        'american': americanSet,
        'asian': asianSet,
        'bakery': bakerySet,
        'bar': barSet,
        'boba': bobaSet,
        'chinese': chineseSet,
        'comfort food': comfortFoodSet,
        'diner': dinerSet,
        'healthy': healthySet,
        'ice cream and frozen': iceCreamFrozenSet,
        'italian': italianSet,
        'japanese': japaneseSet,
        'mexican': mexicanSet,
        'pizza': pizzaSet,
        'thai': thaiSet,
        'vietnamese': vietnameseSet,
    }
}

export const carouselLoader = () => {

    const res = []
    const photos = photoLoader(), titles = titleLoader()
    for(let i = 0; i < photos.length; i++ ) res.push({photo: photos[i], title: titles[i]})


    return res

}

