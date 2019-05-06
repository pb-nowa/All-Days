import { fetchItems } from '../../actions/items_actions';
import { connect } from 'react-redux';
import Collections from './collections';
import { selectItemsByGender } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
    const gender = ownProps.match.params.id;
    const items = selectItemsByGender(state, gender);
    return ({
        items: items
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        fetchItems: (id) => dispatch(fetchItems(id)),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);