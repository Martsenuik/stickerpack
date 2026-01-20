export const Sticker = ({ img, label }) => {
  return (
    <li>
      <img src={img} alt={label} />
    </li>
  );
};
