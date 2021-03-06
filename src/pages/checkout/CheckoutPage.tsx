import React from 'react';

import './checkout.scss';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { Item } from '../../types/shoppage';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';

const CheckoutPage: React.FC<any> = ({ cartItems, total }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{console.log('CHECKOUTPAGE:', cartItems)}
		{cartItems.map((cartItem: Item) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
		<div className="total">
			<span>TOTAL: ${total}</span>
		</div>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
