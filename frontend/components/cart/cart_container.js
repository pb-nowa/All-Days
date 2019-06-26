
import Cart from './cart';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return({
        items: Object.values(state.entities.cart)
    });
};


export default connect(mapStateToProps)(Cart);