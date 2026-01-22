import { Title, ChoiceText, Box } from "./Sticker.styled";

export const Choice = ({ label }) => {
  return (
    <Box>
      <Title>Choice</Title>
      <ChoiceText>{label}</ChoiceText>
    </Box>
  );
};
