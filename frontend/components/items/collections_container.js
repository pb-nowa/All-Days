import { mensShoes, womensShoes } from '../../actions/items_actions';
import { connect } from 'react-redux';
import Collections from './collections';

const mapStateToProps = state => {
    return ({
        items: state.items
    });
};

const mapDispatchToProps = dispatch => {
    return ({
        mensShoes: () => dispatch(mensShoes()),
        womensShoes: () => dispatch(womensShoes()),
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Collections);