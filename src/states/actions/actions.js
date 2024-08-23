export const addToCart = (item) => {
    return (dispatch) => {
        dispatch({type: 'ADD_TO_CART', payload: item})
    }
}
export const removeFromCart = (itemId) => {
    return (dispatch) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: itemId})
    }
}

export const addItemQuantity = (itemId) => {
    return (dispatch) => {
        dispatch({type: 'ADD_ITEM_QUANTITY', payload: itemId})
    }
}
export const subtractItemQuantity = (itemId) => {
    return (dispatch) => {
        dispatch({type: 'SUBTRACT_ITEM_QUANTITY', payload: itemId})
    }
}