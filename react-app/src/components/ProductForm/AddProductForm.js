import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addProduct } from '../../store/product';
import ImageUpload from './ImageUpload';
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
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (images && images.length === 1) {
            setUrl1(images[0]);
        } else if (images && images.length === 2) {
            setUrl1(images[0]);
            setUrl2(images[1]);
        } else if (images && images.length === 3) {
            setUrl1(images[0]);
            setUrl2(images[1]);
            setUrl3(images[2]);
        } else if (images && images.length === 4) {
            setUrl1(images[0]);
            setUrl2(images[1]);
            setUrl3(images[2]);
            setUrl4(images[3]);
        } else if (images && images.length >= 5) {
            setUrl1(images[0]);
            setUrl2(images[1]);
            setUrl3(images[2]);
            setUrl4(images[3]);
            setUrl5(images[4]);
        }
    }, [images]);

    const createProduct = async (e) => {
        e.preventDefault();

        const newProduct = {
            name: name.trim(),
            category: category.trim(),
            description: description.trim(),
            price,
            url1: url1?.trim(),
            url2: url2?.trim(),
            url3: url3?.trim(),
            url4: url4?.trim(),
            url5: url5?.trim(),
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
                            max='9999'
                            step='0.01'
                        />
                    </div>
                    <div className='product-form-image-upload'>
                        <p className='image-upload-guide-title'>Please select your image file and click "Upload" to successfully add your image one by one. </p>
                        <p>Only .png, .jpg, .jpeg and .gif files can be accepted.</p>
                        <p>Minimum of ONE image is required. Maximum of FIVE images are allowed.</p>
                        <ImageUpload images={images} setImages={setImages} />
                    </div>
                    <button className='product-form-btn' type="submit">ADD PRODUCT</button>
                </form>
            </div>
        </div>
    )
}

export default AddProductForm;
