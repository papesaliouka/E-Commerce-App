import ShopActionsTypes from './shop.types';
// import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

// export const fetchCollectionsStartAsync = () => { FIRST WAY OF HANDLELING ASYNC ACTIONS WITH THUNK MIDDLE
// return dispatch => {
//   const collectionRef = firestore.collection('collections');
//   dispatch(fetchCollectionsStart());
//   collectionRef.get()
//   .then(snapShot => {
//   const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
//   dispatch(fetchCollectionsSuccess(collectionsMap));
//  })
//  .catch(error => dispatch(fetchCollectionsFailure(error.message)))
// };
// }






