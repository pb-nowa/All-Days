export const receiveShoeItems = (gender) => (
    $.ajax({
        method: 'GET',
        url: `/api/items/${gender}`
    })
);

