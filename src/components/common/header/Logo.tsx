import cap from '../../../assets/cap.png'
export const Logo: React.FC = () => {
  return (
    <>
      <div className='flex justify-center'>
        <img src={cap} alt='cap' className='w-full h-10' />
        <div className='text-stone-900 text-lg font-[Montserrat]'>Style</div>
      </div>
    </>
  )
}
