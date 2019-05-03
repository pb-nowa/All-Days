import { fetchItems } from '../../actions/items_actions';
import { connect } from 'react-redux';
import Collections from './collections';

const mapStateToProps = state => {
    return ({
        items: state.entities.items
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchItems: (id) => dispatch(fetchItems(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);