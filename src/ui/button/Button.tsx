interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  styleButtonContainer?: string
}
export const Button: React.FC<ButtonProps> = ({ children, styleButtonContainer, onClick }) => {
  return (
    <button onClick={onClick} className={styleButtonContainer}>
      {children}
    </button>
  )
}
