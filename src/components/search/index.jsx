import './index.css';
import { FiSearch } from 'react-icons/fi';

export const Search = ({ searchQuery, setSearchQuery }) => {
  const queryInputHandler = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };
  return (
    <div className='search-bar'>
      <label htmlFor='search'>
        <span className='search-bar-icon'>
          <FiSearch />
        </span>
      </label>
      <input
        onChange={queryInputHandler}
        value={searchQuery}
        className='input'
        id='search'
        type='text'
        autoComplete='off'
        placeholder='Search'
      />
    </div>
  );
};
