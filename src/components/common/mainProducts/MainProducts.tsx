import { useGetProductQuery } from '../../../store/get.api/get.api'

export const MainProducts: React.FC = () => {
  const { data } = useGetProductQuery('')

  return (
    <div className='mx-full w-auto mt-7 font-[Montserrat]'>
      <span className='text-base text-blue-800 border-solid border-b-2 border-blue-800 cursor-pointer'>
        Главная страница
      </span>
      <div className=' mx-auto flex w-auto  flex-wrap  '>
        {data?.map((item) => {
          return (
            <div className='w-[300] h-auto mt-7 ml-9 bg-slate-50' key={item._id}>
              <img className='w-full h-[380px] object-cover' src={item.photo[0]} />
              <div className='border-solid border-[5px] border-slate-200'></div>
              <div className=' pt-2 pl-2'>{item.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
