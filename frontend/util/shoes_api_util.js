export const receiveShoeItems = (shoe_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/shoes/${shoe_id}`
    })
);
