import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct } from '../../store/product';
import './ProductDetailPage.css';

function ProductDetailPage() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const product = useSelector(state => state.products[+id]);
    const [quantity, setQuantity] = useState(0);

    const category_map = {
        'Furniture': 'furniture',
        'Outdoor & Garden': 'outdoor',
        'Bedding': 'bedding',
        'Bath': 'bath',
        'Pillows & Decor': 'decor',
        'Art & Mirrors': 'mirrors-wall-art',
        'Halloween': 'halloween'
    }

    useEffect(() => {
        dispatch(getOneProduct(+id))
    }, [dispatch, id]);

    const decreaseQuantity = () => {
        if (quantity > 0) setQuantity(quantity - 1);
        else return;
    }

    return (
        <div className='detail-page-cover'>
            {product && (
                <div className='detail-page-frame'>
                    <div className='detail-page-back-to-category'>
                        <i className="fa-solid fa-chevron-left"></i>
                        <Link to={`/products/categories/${category_map[product.category]}`}>{product.category}</Link>
                    </div>
                    <div className='detail-page-main'>
                        <div className='detail-page-left-panel'>
                            {product.images.length && (
                                product.images.map(image => (
                                    <img key={image.id} className='detail-page-img' src={image.url} alt='detail-page-product-showcase' />
                                ))
                            )}
                        </div>
                        <div className='detail-page-right-panel'>
                            <p className='detail-page-product-name'>{product.name}</p>
                            <p className='detail-page-product-price'>${product.price}</p>
                            <div className='detail-page-purchase-quantity'>
                                <button onClick={decreaseQuantity}>-</button>
                                <input type="number" value={quantity} min='0' step='1' onChange={e => setQuantity(e.target.value)} />
                                <button onClick={() => setQuantity(quantity + 1)}>+</button>
                            </div>
                            <button className='add-to-cart-btn'>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductDetailPage;
