function Greeting() {
  return "Hello";
}

function App() {


  return (
    <div>
      <h1><Greeting /></h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text">
      </input>
    </div>
  )
}

export default App;
