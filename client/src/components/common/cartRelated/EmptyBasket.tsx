import lipaBasket from '../../../assets/lipaBasket.png'

export const EmptyBasket: React.FC = () => {
  return (
    <div className='flex justify-center items-center'>
      <img className='h-[150px]' src={lipaBasket} />
    </div>
  )
}
