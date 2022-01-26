import ListItems from "./ListItems"

function Content({ items, handleCheck, handleDelete }) {
  return (
    <>
      {items.length ? (
        <ListItems 
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p
          style={{ textAlign: 'center', fontSize: '1.5rem'}}
        >The list is empty!</p>
      )}
    </>
  )
}

export default Content
