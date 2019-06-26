
import Cart from './cart';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return({
        items: state.entities.cart
    });
};

const mapDispatchToProps = dispatch => {
    return({

    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);