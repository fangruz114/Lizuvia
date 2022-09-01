import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/product';
import ProductList from './ProductList';
import './ProductListPage.css';

function ProductListPage() {
    const dispatch = useDispatch();
    const products = useSelector(state => Object.values(state.products))

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <ProductList products={products} />
    )
}

export default ProductListPage;
