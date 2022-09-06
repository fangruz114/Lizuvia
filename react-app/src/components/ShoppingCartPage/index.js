import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart, getCarts } from '../../store/cart';
import { addOrder } from '../../store/order';
import ShoppingCartItems from './ShoppingCartItems';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const carts = useSelector(state => Object.values(state.cart));

    useEffect(() => {
        dispatch(getCarts());
    }, [dispatch]);

    const subtotal = (items) => {
        let total = 0;
        for (let item of items) {
            let sub = Number(item.quantity) * Number(item.product.price);
            total += sub;
        }
        return total.toFixed(2);
    }

    const totalItem = (items) => {
        let count = 0;
        for (let item of items) {
            count += Number(item.quantity);
        }
        return count;
    }

    const submitOrder = async (e) => {
        e.preventDefault();
        const newOrder = await dispatch(addOrder());
        await dispatch(emptyCart());
        return history.push(`/orders/${newOrder.id}`);
    }

    return (
        <div className='shopping-cart-wrapper'>
            <div className='shopping-cart-page'>
                <div className='shopping-cart-item-list'>
                    <p className='shopping-cart-title'>Shopping Cart</p>
                    <div className='shopping-cart-items'>
                        {carts.length > 0 ? (
                            carts.map(cart => <ShoppingCartItems key={cart.id} cart={cart} />)
                        ) : (<h3 className='empty-shopping-cart-text'>Hi! Your shopping cart is empty.</h3>)}
                    </div>
                </div>
                <div className='shopping-cart-summary'>
                    <p className='shopping-cart-order-summary-title'>Order Summary</p>
                    <div className='shopping-cart-subtotal'>
                        <p className='shopping-cart-summary-subtotal'>Subtotal<span>({carts ? totalItem(carts) : 0} Items)</span></p>
                        <p>${carts ? subtotal(carts) : 0.00}</p>
                    </div>
                    <button onClick={submitOrder}>CHECKOUT</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartPage;
