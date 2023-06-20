

const FUDGE_X = 5
const FUDGE_Y = 5

const extractOffsets = (btnRef)=>(
    {x: btnRef.offsetLeft + FUDGE_X, y: btnRef.offsetTop + btnRef.offsetHeight + FUDGE_Y}
    
)

export const mobilePosition =  (windowWidth, modalBody) => {
    
    console.log(windowWidth, modalBody)
    // Math.floor((windowWidth - modalWidth)/2)


}


    




export default extractOffsets;