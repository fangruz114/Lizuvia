import { Link } from 'react-router-dom';

function NavCartDropDown({ carts, count }) {

    let showCarts;
    if (carts && carts.length > 4) {
        showCarts = carts.slice(0, 4);
    } else {
        showCarts = carts;
    }

    const subtotal = (items) => {
        let total = 0;
        for (let item of items) {
            let sub = Number(item.quantity) * Number(item.product.price);
            total += sub;
        }
        return total.toFixed(2);
    }

    return (
        <div className='cart-drop-down'>
            <div className="cart-drop-down-item-count">
                <p>{count} items in your cart</p>
            </div>
            <div className='cart-drop-down-item-list'>
                {showCarts && showCarts.map(cart => (
                    <Link key={cart.id} className='cart-drop-down-ind-item' to={`/products/${cart.product.id}`}>
                        <div className='cart-drop-down-item-img'>
                            <img src={cart.product.images[0].url} alt='cart-drop-down-img-display' onError={e => e.target.src = 'https://i.imgur.com/rIUtyi2.jpg'} />
                        </div>
                        <div className='cart-drop-down-item-info'>
                            <p>{cart.product.name}</p>
                            <div className='cart-drop-down-item-qty-price'>
                                <p>Qty: {cart.quantity}</p>
                                <p>${cart.product.price}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className='cart-drop-down-view-cart'>
                {(carts && carts.length > 4) && (
                    <Link to='/cart'>View cart to see all items</Link>
                )}
            </div>
            <div className='cart-drop-down-subtotal'>
                <p>Subtotal</p>
                <p>${carts ? subtotal(carts) : 0}</p>
            </div>
            <Link className='cart-drop-down-view-cart' to='/cart'>
                <div className='cart-drop-down-view-cart-btn'>VIEW CART</div>
            </Link>
        </div>
    )
}

export default NavCartDropDown;
