const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    authors: ['Jordan Walke'],
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    authors: ['Dan Abramov', 'Andrew Clark'],
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <ul>
                {
                  item.authors.map(author => <li key={author}>{author}</li>)
                }
              </ul>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>

    </div>
  )
}

export default App;
