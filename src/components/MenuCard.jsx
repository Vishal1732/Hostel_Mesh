const MenuCard = ({ menuData }) => {

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((currElement) => {
          const {id,name,category,image,description,price} = currElement;
          return (
            <div key={currElement.id} className="card-container">
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className="card-media" />
                <span className="card-tag subtle">Order Now</span>
                <span className="card-tag subtle">{price}</span>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
