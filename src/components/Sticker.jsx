import { Item, Img } from "./Sticker.styled";

export const Sticker = ({ img, label, onClick }) => {
  return (
    <Item onClick={onClick}>
      <Img src={img} alt={label} />
    </Item>
  );
};
