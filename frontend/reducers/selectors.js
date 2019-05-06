export const selectItemsByGender = ({ items }, gender) => {
    return Object.values(items).filter( item => item.gender === gender);
};