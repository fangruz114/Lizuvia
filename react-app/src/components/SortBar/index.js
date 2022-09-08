import { useSearchParams } from 'react-router-dom';

function SortBar({ products }) {
    const [searchParams, setSearchParams] = useSearchParams();

    const sortValue = searchParams.get('order') || '';

    const handleSort = event => {
        const order = event.target.value;
        if (order === 'Featured') {
            setSearchParams({});
        } else {
            setSearchParams({ order });
        }
    }

    return (
        <div className='sort-bar'>
            <p>Sort By</p>
            <select
                name='sort'
                value={sortValue}
                onChange={handleSort}
                required
            >
                <option value='Featured'>Featured</option>
                <option value='New Arrivals'>New Arrivals</option>
                <option value='Price, low to high'>Price, low to high</option>
                <option value='Price, high to low'>Price, high to low</option>
            </select>
        </div>
    )
}

export default SortBar;
