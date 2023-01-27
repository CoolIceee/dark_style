import { useState } from 'react'

import basketDelete from '../../../../../assets/basketDelete.png'
import like from '../../../../../assets/like.png'
import redLike from '../../../../../assets/redLike.png'
interface SaveAndDeleteProps {
  setModalActive: Function
}
export const SaveAndDelete: React.FC<SaveAndDeleteProps> = ({ setModalActive }) => {
  const [addLike, setAddLike] = useState(false)
  const handleClickOpenModal = (): void => {
    setModalActive(true)
  }
  const handleClickAddLikeProduct = (): void => {
    setAddLike(!addLike)
  }
  return (
    <div className='w-full h-[135px] flex items-end'>
      <button
        onClick={() => {
          handleClickAddLikeProduct()
        }}
        className='w-[40px] h-[40px] border-2 rounded-full flex justify-center items-center hover:border-red-500'
      >
        <img className='w-[20px] h-[20px] mt-[2px]' src={addLike ? redLike : like} />
      </button>
      <button
        onClick={() => {
          handleClickOpenModal()
        }}
        className='w-[40px] ml-2 h-[40px] border-2 rounded-full flex justify-center items-center hover:border-red-500'
      >
        <img className='w-[20px] h-[20px]' src={basketDelete} />
      </button>
    </div>
  )
}
