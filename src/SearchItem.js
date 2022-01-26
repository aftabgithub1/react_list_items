const SearchItem = ({ searchItem, setSearchItem }) => {
  return (
    <form className="search-item" onSubmit={(e) => e.preventDefault() }>
      <label htmlFor="searchItem">Search Item</label>
      <input
        type="text"
        id="searchItem"
        role="searchbox"
        placeholder="Search Item"
        value={ searchItem }
        onChange={ (e) => setSearchItem(e.target.value) }
      />
    </form>
  )
}

export default SearchItem
