interface ButtonProps {
  children: React.ReactNode;
  color: string;
  disable?: boolean;
}

const Button = ({ color, children, disable }: ButtonProps) => {
  return (
    <button className={`button ${color} ${disable && 'disabled'}`} disabled={disable}>
      {children}
    </button>
  );
};

export default Button;
