import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addProduct } from '../../store/product';
import './ProductForm.css';

function AddProductForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);

    const [errors, setErrors] = useState([]);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Furniture');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [url1, setUrl1] = useState('');
    const [url2, setUrl2] = useState('');
    const [url3, setUrl3] = useState('');
    const [url4, setUrl4] = useState('');
    const [url5, setUrl5] = useState('');

    const createProduct = async (e) => {
        e.preventDefault();
        const newProduct = {
            name,
            category,
            description,
            price,
            url1,
            url2,
            url3,
            url4,
            url5,
        };
        const data = await dispatch(addProduct(newProduct));

        if (data) {
            setErrors(data);
        } else {
            setErrors([]);
            return history.push(`/users/${user.id}/products`)
        }
    };

    return (
        <div className="product-form-wrapper">
            <div className="product-form-page">
                <div className='product-form-title'>
                    <h3>Add a product</h3>
                    <p>List your product onto our marketplace by fill all your product information below.</p>
                </div>
                <form onSubmit={createProduct}>
                    <div>
                        {errors.map((error, ind) => (
                            <div key={ind} className="form-errors">{error}</div>
                        ))}
                    </div>
                    <div className="product-form-element">
                        <label htmlFor='name'>Name <span className='required'>(required)</span></label>
                        <input
                            name="name"
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            maxLength='100'
                        />
                    </div>
                    <div className="product-form-element">
                        <label htmlFor='category'>Category <span className='required'>(required)</span></label>
                        <select
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value='Furniture'>Furniture</option>
                            <option value={`Outdoor & Garden`}>{`Outdoor & Garden`}</option>
                            <option value='Bedding'>Bedding</option>
                            <option value='Bath'>Bath</option>
                            <option value={`Pillows & Decor`}>{`Pillows & Decor`}</option>
                            <option value={`Art & Mirrors`}>{`Art & Mirrors`}</option>
                            <option value='Halloween'>Halloween</option>
                        </select>
                    </div>
                    <div className='product-form-element product-form-description'>
                        <label htmlFor='description'>Description <span className='required'>(required)</span></label>
                        <textarea
                            rows='6'
                            cols='74'
                            value={description}
                            maxLength='2000'
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className='product-form-element'>
                        <label htmlFor='price'>Unit Price <span className='required'>(required)</span></label>
                        <input
                            type='number'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            min='0.01'
                            step='0.01'
                        />
                    </div>
                    <div className="product-form-element">
                        <label htmlFor='url1'>Image #1 url address <span className='required'>(required)</span></label>
                        <input
                            name="url1"
                            type='text'
                            value={url1}
                            onChange={(e) => setUrl1(e.target.value)}
                        />
                    </div>
                    <div className="product-form-element">
                        <label htmlFor='url2'>Image #2 url address <span className='optional'>(optional)</span></label>
                        <input
                            name="url2"
                            type='text'
                            value={url2}
                            onChange={(e) => setUrl2(e.target.value)}
                        />
                    </div>
                    <div className="product-form-element">
                        <label htmlFor='url3'>Image #3 url address <span className='optional'>(optional)</span></label>
                        <input
                            name="url3"
                            type='text'
                            value={url3}
                            onChange={(e) => setUrl3(e.target.value)}
                        />
                    </div>
                    <div className="product-form-element">
                        <label htmlFor='url4'>Image #4 url address <span className='optional'>(optional)</span></label>
                        <input
                            name="url4"
                            type='text'
                            value={url4}
                            onChange={(e) => setUrl4(e.target.value)}
                        />
                    </div>
                    <div className="product-form-element">
                        <label htmlFor='url5'>Image #5 url address <span className='optional'>(optional)</span></label>
                        <input
                            name="url5"
                            type='text'
                            value={url5}
                            onChange={(e) => setUrl5(e.target.value)}
                        />
                    </div>
                    <button className='product-form-btn' type="submit">ADD PRODUCT</button>
                </form>
            </div>
        </div>
    )
}

export default AddProductForm;
