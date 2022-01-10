export default function Search(props) {

  const handleChange = (event) => {
    props.setSearchTerm(event.target.value);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
    
      <p>
        Searching for <strong>{props.searchTerm}</strong>.
      </p>
    </>
  );
}
