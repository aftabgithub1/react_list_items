import Header from './Header';
import SearchItem from './SearchItem';
import Content from './Content';
import AddItem from './AddItem';
import apiRequest from './apiRequest';
import Footer from './Footer';
import { useState, useEffect } from 'react';


function App() {
  const initialListItems = [
    {
      "id": 3,
      "checked": false,
      "name": "Chocolate"
    },
    {
      "id": 1,
      "checked": false,
      "name": "Pizza"
    }
  ];

  // ---------- useState ---------- //
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [loadItems, setLoadItems] = useState(true);

  // ---------- store ---------- //
  const setAndStore = (data) => {
    localStorage.setItem('listItemsLS', JSON.stringify(data));
    setItems(data);
  }

  // ---------- useEffect ---------- //
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const listItems = JSON.parse(localStorage.getItem('listItemsLS')) || initialListItems;
        setItems(listItems);
      } catch(err) {
        setFetchError(err.message);
      } finally {
        setLoadItems(false);
      }
    }

    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  // ---------------- item checkbox ---------------- //
  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
    setAndStore(listItems);
  }

  // ---------------- item delete ---------------- //
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndStore(listItems);
  }
  
  // ---------------- item add submit button ---------------- //
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // id auto increment
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    // create new item
    const myNewItem = {id, checked: false, name: newItem};
    // add to item list
    const listItems = [...items, myNewItem];
    setAndStore(listItems);
    setNewItem('');
  }

  // ---------------- item add submit button ---------------- //
  const searchResult = items.filter(item => item.name.toLowerCase().includes(searchItem.toLowerCase()));

  return (
    <div className='container'>
      <Header title="Grocery List" />
      <div className="form">
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />
        <SearchItem
          searchItem={searchItem}
          setSearchItem={setSearchItem}
        />
      </div>
      <main>
        { loadItems && <p className="big-error">Loading Items ...</p> }
        { fetchError && <p class="big-error">Error: {fetchError}</p> }
        { !fetchError && !loadItems && 
          <Content
            items={searchResult || items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          /> 
        }
      </main>
      <Footer
        itemsLength={items.length}
      />
    </div>
  );
}

export default App;