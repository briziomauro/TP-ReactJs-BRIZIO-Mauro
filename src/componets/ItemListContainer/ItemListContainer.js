import "./ItemListContainer.css"
const ItemListContainer = ({greeting}) => {
  return (
    <div>
        <h1 className="catNav">{greeting}</h1>
    </div>
  )
};

export default ItemListContainer;