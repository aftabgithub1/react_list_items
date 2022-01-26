
import LineItem from './LineItem';

function ListItems({ items, handleCheck, handleDelete }) {
  return (
    <ul>
      {items.map(item => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  )
}

export default ListItems



