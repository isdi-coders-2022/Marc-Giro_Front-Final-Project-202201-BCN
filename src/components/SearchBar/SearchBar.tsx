interface SearchBarProps {
  actionOnClick: () => void;
  changeData: any;
  formData: any;
}

const SearchBar = ({
  actionOnClick,
  changeData,
  formData,
}: SearchBarProps): JSX.Element => {
  return (
    <>
      <form onSubmit={actionOnClick} autoComplete="off">
        <label htmlFor="floatingSearch"></label>
        <input
          placeholder="Search movies or series..."
          name="search"
          type="text"
          className="form-control"
          id="floatingSearch"
          value={formData.name}
          onChange={changeData}
        />
        <Button type="submit" actionOnClick={actionOnClick} />
      </form>
    </>
  );
};

export default SearchBar;
