const Search = (props) => {
  return (
    <form
      onSubmit={props.onSubmit}
      className="example"
      action="action_page.php"
    >
      <input
        type="text"
        name="search"
        value={props.value}
        placeholder="Search..."
        onChange={props.onChange}
      />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  )
}

export default Search
