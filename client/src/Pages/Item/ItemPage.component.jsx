import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../../Redux/Shop/shop.selector";
import { addCartItem, addCachedItem } from "../../Redux/Cart/cart-actions";
import Button from "../../Components/Button/Button.component";
import ItemSize from "../../Components/ItemSize/ItemSize.component";
import { selectCurrentUser } from "../../Redux/User/user.selector";
import {
  ItemContainer,
  ProductForm,
  ProductName,
  ProductImage,
  ProductPrice,
} from "./ItemPage.styles.jsx";

const ItemPage = () => {
  const { collectionId, itemId } = useParams();
  const item = useSelector((state) =>
    getItem(collectionId, Number(itemId))(state)
  );

  const currentUser = useSelector((state) => selectCurrentUser(state));

  const dispatch = useDispatch();
  const history = useHistory();

  const [size, setSize] = useState("Medium");
  const [imageUrl] = useState(item[0].imageUrl);
  const [name] = useState(item[0].name);
  const [price] = useState(item[0].price);
  const [id] = useState(item[0].id);
  const [user] = useState(currentUser);

  const onSizeChange = (event) => {
    setSize(event.target.value);
  };

  const addItem = () => {
    user
      ? dispatch(
          addCartItem({
            id: id,
            name: name,
            imageUrl: imageUrl,
            price: price,
            size: size,
          })
        )
      : dispatch(
          addCachedItem({
            id: id,
            name: name,
            imageUrl: imageUrl,
            price: price,
            size: size,
          })
        );
    history.push("/signin");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    addItem();
  };

  return (
    <ItemContainer>
      <ProductImage
        className="background-image"
        imageUrl={imageUrl}
      ></ProductImage>

      <ProductForm onSubmit={handleSubmit}>
        <ProductName>{` Product :  ${name}`}</ProductName>
        <ItemSize onChange={onSizeChange} />
        <ProductPrice>Price : ${price}</ProductPrice>
        <Button type="submit" onCLick={handleSubmit} inverted>
          {" "}
          Add Item{" "}
        </Button>
      </ProductForm>
    </ItemContainer>
  );
};
export default ItemPage;
