const handleIndexClick = (e, idx) =>{
    e.preventDefault();
    document.getElementById(`block-${idx}`).scrollIntoView({behavior:'smooth'})
}

export default handleIndexClick;