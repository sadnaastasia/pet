function ProductItem({
  image,
  title,
  info,
  price,
}: {
  image: string;
  title: string;
  info: string;
  price: string;
}) {
  return (
    <div className="item_container">
      <div>
        <div
          className="item_image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <h2>{title}</h2>
        <p>{info}</p>
        <h3>{price}</h3>
      </div>
      <button className="item_button">Add to cart</button>
    </div>
  );
}

export default ProductItem;
