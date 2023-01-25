interface ButtonProps extends React.HTMLProps<HTMLAnchorElement> {
  styleButtonContainer?: string
  onClickFunction: Function
}
export const Button: React.FC<ButtonProps> = ({ children, styleButtonContainer, onClickFunction }) => {
  return (
    <button onClick={onClickFunction()} className={styleButtonContainer}>
      {children}
    </button>
  )
}
