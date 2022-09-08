import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCart, updateCart } from '../../store/cart';

function ShoppingCartItems({ cart }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(cart.quantity);
    const [errors, setErrors] = useState([]);

    const updateQuantity = async (e) => {
        e.preventDefault();
        let data;
        if (quantity === 0) {
            data = await dispatch(deleteCart(cart.id));
        } else {
            const item = { quantity };
            data = await dispatch(updateCart(cart.id, item));
            setQuantity(cart.quanitity);
        }

        if (data) {
            setErrors(data);
        } else {
            setErrors([])
        }
    }

    return (
        <div className='shopping-cart-ind-item'>
            <Link to={`/products/${cart.product.id}`} className='shopping-cart-img'>
                <img src={cart.product.images[0].url} alt='shopping-cart-ind-display' />
            </Link>
            <div className='shopping-cart-ind-info'>
                <Link to={`/products/${cart.product.id}`} className='shopping-cart-ind-name'>{cart.product.name}</Link>
                <p className='shopping-cart-ind-item-number'># {cart.product.id}</p>
                <div>
                    {errors && errors.map((error, ind) => (
                        <div key={ind} className="form-errors">{error}</div>
                    ))}
                </div>
                <div className='shopping-cart-ind-price-qty'>
                    <div className='shopping-cart-ind-price'>${cart.product.price}</div>
                    <div className='shopping-cart-ind-qty'>
                        <input
                            type='number'
                            step='1' min='0' max='99'
                            maxLength='2'
                            value={quantity}
                            onChange={e => setQuantity(parseInt(e.target.value))}
                        />
                        <button onClick={updateQuantity}>Update</button>
                    </div>
                    <div className='shopping-cart-item-total'>
                        <p className='shopping-cart-ind-item-total-title'>Item Total</p>
                        <p>${(cart.quantity * cart.product.price).toFixed(2)}</p>
                    </div>
                </div>
                <div className='shopping-cart-remove-item-link'>
                    <button onClick={() => dispatch(deleteCart(cart.id))}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartItems;
