import './SortBar.css';

function SortBar({ searchTerm, setSearchTerm }) {

    const handleSort = event => {
        const order = event.target.value;
        if (order === 'Featured') {
            setSearchTerm('');
        } else {
            setSearchTerm(order);
        }
    }

    return (
        <div className='sort-bar'>
            <p>Sort By</p>
            <select
                name='sort'
                value={searchTerm}
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
