
export const modalStates = () =>{
    const [menuModal, setMenuModal ] = useState(false)
    const [cartModal, setCartModal] = useState(false);
    const [restCartModal, setRestCartModal] = useState(false);  

    return({
        menuModal,
        setMenuModal,
        cartModal,
        setCartModal,
        restCartModal,
        setRestCartModal
    })

}