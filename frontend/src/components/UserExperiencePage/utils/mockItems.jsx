import sevenEleven from '../assets/restaurants/711.jpeg';
import  a1Bakery  from '../assets/restaurants/a_1_bakery.jpeg';
import bobaLife  from '../assets/restaurants/boba_life.jpg';
import champaGarden  from '../assets/restaurants/champa_garden.jpeg';
import  cherryBlossomBakery  from '../assets/restaurants/cherry_blossom_bakery.jpg';
import emmysChineseRestaurant  from '../assets/restaurants/emmys_chinese_restaurant.jpg';
import  fitsSubs from '../assets/restaurants/fits_subs.jpeg';
import  genjiSushi from '../assets/restaurants/genji_sushi.jpeg';
import goldenCoast  from '../assets/restaurants/golden_coast.jpg';
import joyfulKitche  from '../assets/restaurants/joyful_kitchen.jpeg';
import justPrepIt  from '../assets/restaurants/just_prep_it.jpeg';
import phoHaTien  from '../assets/restaurants/pho_ha_tien.jpeg';
import  powerUpPotions  from '../assets/restaurants/power_up_potions.jpeg';
import shanghaiDumplingKing  from '../assets/restaurants/shanghai_dumpling_king.jpg';
import thatsAmoreSF  from '../assets/restaurants/thats_amore_sf.jpeg';
import  virginSalad  from '../assets/restaurants/virgin_salad.jpeg';




//used for preparing "mock items", items without state just for testing purpsoes

export const restaurantImages = () => (

    [
        sevenEleven, 
        a1Bakery , 
        bobaLife , 
        champaGarden , 
        cherryBlossomBakery , 
        emmysChineseRestaurant, 
        fitsSubs , 
        genjiSushi, 
        goldenCoast, 
        joyfulKitche, 
        justPrepIt, 
        phoHaTien  , 
        powerUpPotions  , 
        shanghaiDumplingKing  , 
        thatsAmoreSF, 
        virginSalad , 
    ]
)

export const nameLoader = () =>(

    [
        'sevenEleven', 
        'a1Bakery', 
        'bobaLife', 
        'champaGarden', 
        'cherryBlossomBakery', 
        'emmysChineseRestaurant', 
        'fitsSubs', 
        'genjiSushi', 
        'goldenCoast', 
        'joyfulKitche', 
        'justPrepIt', 
        'phoHaTien  ', 
        'powerUpPotions  ', 
        'shanghaiDumplingKing  ', 
        'thatsAmoreSF', 
        'virginSalad ', 
    ]
)


const mockListingsLoader = () => {

    const res = [];
    const photos = restaurantImages(), titles = nameLoader();
    for(let i = 0; i < photos.length; i++ ) res.push({photo: photos[i], title: titles[i]});


    return res;

}
export default mockListingsLoader;