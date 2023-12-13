import { Button, ButtonWrapper } from "./buttonStyled";

interface IButtonsProps {
  buttons: IButton[];
}

interface IButton {
  text: string;
  color: string;
  size?: string;
}

export const Buttons: React.FC<IButtonsProps> = ({ buttons }) => {
  return (
    <ButtonWrapper>
      {buttons.map((item, index) => (
        <Button key={index} color={item.color} size={item.size}>
          {item.text}
        </Button>
      ))}
    </ButtonWrapper>
  );
};
