import { fetchItems } from '../../actions/items_actions';
import { connect } from 'react-redux';
import Collections from './collections';
import { selectItemsByGender } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    // set some variable grabbing gender from location
    const gender = ownProps.match.params.id;
    return ({
        // items: state.entities.items
        items: selectItemsByGender(state.entities, gender)
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchItems: (id) => dispatch(fetchItems(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);