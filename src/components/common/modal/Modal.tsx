import './Modal.css'
interface ModalProps extends React.HTMLProps<HTMLElement> {
  active: boolean
  setActive: any
}

export const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => {
        setActive(false)
      }}
    >
      <div
        className='modal_content'
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {children}
      </div>
    </div>
  )
}
