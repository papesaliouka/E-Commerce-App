import {connect} from 'react-redux';
import WithSpinner from '../../component/with-spinner/with-spinner.component';
import { selectIsCollectionLoaded} from '../../redux/shop/shop.selector';
import {compose} from 'redux';
import CollectionPage from './collection-page.component';

const mapStateToProps= (state) => ({
  isLoading: !selectIsCollectionLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;