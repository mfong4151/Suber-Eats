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

export const checkCategoryInclusion = (filterReq, restCuisineType) => {
    const catMap = mapCategories();
    if (!catMap[filterReq]) return true
    // console.log(catMap[filterReq])
    // console.log(restCuisineType)
    if (catMap[filterReq].has(restCuisineType)) return true
    return false
}