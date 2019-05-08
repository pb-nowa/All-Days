import { fetchShoe } from '../../actions/shoes_actions';
import { connect } from 'react-redux';
import Shoe from './shoe';
import { selectShoeById, selectItemsByShoe } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const shoe = selectShoeById(state, id);
    const items = selectItemsByShoe(state, id);
    return ({
        shoe: shoe,
        items: items,
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchShoe: id => dispatch(fetchShoe(id))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Shoe);