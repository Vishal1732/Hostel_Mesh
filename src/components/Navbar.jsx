const Navbar = ({ itemFilter, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((currElement,index) => {
            return (
              <button key={index} className="btn-group__item" onClick={() => itemFilter(currElement)}>
                {currElement}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};




export default Navbar;