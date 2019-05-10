export const selectItemsByGender = (state, gender) => {
    const items = state.entities.items;
    const filteredItems = Object.values(items).filter( item => item.gender === gender);
    return filteredItems;
};

// export const selectShoeById = (state, id) => {
//     const shoes = state.entities.shoes;
//     const shoe = Object.values(shoes).filter( shoe => shoe.id === id);
//     return shoe;
// };

// export const selectItemsByShoe = (state, shoe_id) => {
//     const items = state.entitites.items;
//     const filteredItems = Object.values(items).filter( item => item.shoe_id ===  shoe_id);
//     return filteredItems;
// };