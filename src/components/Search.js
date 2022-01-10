export default function Search() {
  
  const handleChange = (event) => {
    console.log(event);
    };

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
    </>
  );
}
