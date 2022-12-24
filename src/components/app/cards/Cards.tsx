import { IProduct } from '../../../types/model'
interface productProps {
  product: IProduct[] | undefined
}
export const Cards: React.FC<productProps> = ({ product }) => {
  return (
    <>
      <div className='mx-full w-auto mt-10'>
        <div className='mx-auto flex w-auto flex-wrap'>
          {product?.map((item) => {
            return (
              <div className='w-[300] h-auto mt-10 ml-9 bg-slate-50' key={item._id}>
                <img className='w-full h-[380px] object-cover' src={item.photo[0]} />
                <div className='border-solid border-[5px] border-slate-200'></div>
                <div className='font-[Montserrat] pt-2 pl-2'>{item.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
