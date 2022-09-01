import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../store/product';
import ProductList from './ProductList';
import './ProductListPage.css';

function ProductsByCategory() {
    const category_map = {
        'furniture': 'Furniture',
        'outdoor': 'Outdoor & Garden',
        'bedding': 'Bedding',
        'bath': 'Bath',
        'decor': 'Pillows & Decor',
        'mirrors-wall-art': 'Art & Mirrors',
        'halloween': 'Halloween'
    }
    const dispatch = useDispatch();
    const { category } = useParams();
    const products = useSelector(state => Object.values(state.products))
    const categorizedProduct = products.filter(product => product.category === category_map[category])

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <ProductList products={categorizedProduct} />
    )
}

export default ProductsByCategory;
