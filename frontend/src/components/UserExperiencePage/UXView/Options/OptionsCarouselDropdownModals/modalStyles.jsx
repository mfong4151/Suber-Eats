//Styles for sort options modals
//


export const sortModalStyles = () =>(
    {   
        filterType: 'sort',
        activeModal:'active-modal',
        modal: 'modal',
        modalOverlay: 'options-modal-overlay',
        modalMenuContent:'univ-options-body sort-modal'
    }
)
export const priceModalStyles = () =>(
    {
        filterType: 'price',
        activeModal:'active-modal',
        modal: 'modal',
        modalOverlay:'options-modal-overlay',
        modalMenuContent:'univ-options-body price-modal price-rating-modal udc'
    }
)
export const ratingModalStyles = () =>(
    {
        filterType: 'rating',
        activeModal:'active-modal',
        modal: 'modal',
        modalOverlay:'options-modal-overlay',
        modalMenuContent:'univ-options-body price-rating-modal rating-modal'
    }
)