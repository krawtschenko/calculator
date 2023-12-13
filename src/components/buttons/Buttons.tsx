import { Button, ButtonWrapper } from "./buttonStyled";

interface IButtonsProps {
  buttons: IButton[];
  onClick: (value: string) => void;
}

interface IButton {
  text: string;
  color: string;
  size?: string;
}

export const Buttons: React.FC<IButtonsProps> = ({ buttons, onClick }) => {
  return (
    <ButtonWrapper>
      {buttons.map((item, index) => (
        <Button
          onClick={() => onClick(item.text)}
          key={index}
          color={item.color}
          size={item.size}
        >
          {item.text}
        </Button>
      ))}
    </ButtonWrapper>
  );
};
