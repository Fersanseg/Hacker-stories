function greeting(title) {
  return 'Hello ' + title;
}

function App() {

  return (
    <div>
      <h1>{greeting('React')}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text">
      </input>
    </div>
  )
}

export default App;
