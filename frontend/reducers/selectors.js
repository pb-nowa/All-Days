export const selectItemsByGender = (state, gender) => {
    const items = state.entities.items;
    const filteredItems = Object.values(items).filter( item => item.gender === gender);
    return filteredItems;
};