export default function Search({ searchTerm, setSearchTerm }) {

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
    
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </>
  );
}
