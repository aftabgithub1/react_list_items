function Footer({ itemsLength }) {
  const name = 'Aftab';

  return (
    <footer>
      <div>
        <p>{ itemsLength } list { itemsLength === 1 ? 'item' : 'items' }</p>
      </div>
      <div>
        <a href="https://github.com/aftabgithub1" target="_blank">Go to my github</a>
      </div>
    </footer>
  )
}

export default Footer
