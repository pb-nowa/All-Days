
import Cart from './cart';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/cart_actions';

const mapStateToProps = state => {
    return({
        items: Object.values(state.entities.cart)
    });
};

const mapDispatchToProps = dispatch => {
    return({
        removeFromCart: (id, size) => dispatch(removeFromCart(id, size))
    });
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);