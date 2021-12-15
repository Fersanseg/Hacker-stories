function greeting(title) {
  return function () {
    return <div>Hello {title}</div>;
  }
}

const ReactGreet = greeting('React');

function App() {


  return (
    <div>
      <h1><ReactGreet /></h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text">
      </input>
    </div>
  )
}

export default App;
