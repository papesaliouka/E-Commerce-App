import {createSelector} from 'reselect';

const selectShop = state => state.shop;


export const collectionsSelector = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [collectionsSelector],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParams => 
createSelector(
  [collectionsSelector],
  collections => (collections ? collections[collectionUrlParams] : null)
);
