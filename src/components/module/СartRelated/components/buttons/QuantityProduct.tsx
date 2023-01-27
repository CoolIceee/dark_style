import { Button } from 'components/ui/button/Button'
import { useState } from 'react'

export const QuantityProduct: React.FC = () => {
  const [counterProduct, setCounterProduct] = useState(0)

  return (
    <div className='flex h-7 ml-[200px] items-center justify-center mt-2 font-[Rubik]'>
      <Button
        onClick={() => {
          counterProduct > 0 && setCounterProduct(counterProduct - 1)
        }}
        styleButtonContainer='w-[40px] h-[40px] text-gray-400 rounded-full flex items-center justify-center border-2 hover:border-blue-500 hover:text-blue-500'
      >
        -
      </Button>
      <div className='w-[40px] flex justify-center'>{counterProduct}</div>
      <Button
        onClick={() => {
          setCounterProduct(counterProduct + 1)
        }}
        styleButtonContainer='w-[40px] h-[40px] text-gray-400 rounded-full flex items-center justify-center border-2 hover:border-blue-500 hover:text-blue-500'
      >
        +
      </Button>
    </div>
  )
}
