export const receiveMensShoeItems = () => (
    $.ajax({
        method: 'GET',
        url: '/api/items/mens'
    })
);

export const receiveWomensShoeItems = () => (
    $.ajax({
        method: 'GET',
        url: '/api/items/womens'
    })
);