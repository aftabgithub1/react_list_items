import { FaEdit } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

function LineItem({ item, handleCheck, handleDelete }) {
  return (
    <li className="items">
      <div className="item">
        <input 
          type="checkbox" 
          checked={item.checked}
          onChange={() => handleCheck(item.id)}
        />
        <label htmlFor={item.id}>{item.name}</label>
        <span className="item-action">
          <FaEdit
            role="button"
            tabIndex='0'
          />
          <FaTrashAlt 
            role="button"
            tabIndex='0'
            onClick={() => handleDelete(item.id)}
            aria-label={'Delete ${item.name}'}
          />
        </span>
      </div>
    </li>
  )
}

export default LineItem
