function NavBar(propsNav) {
  return (
    <div>
      <button onClick={propsNav.handlePrevious}>Previous</button>
      <button onClick={propsNav.handleNext}>Next</button>
    </div>
  );
}


export default NavBar;
