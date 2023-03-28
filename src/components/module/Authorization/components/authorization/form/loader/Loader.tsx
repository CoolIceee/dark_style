import { useAppSelector } from 'hooks/hooks'

export const Loader: React.FC = () => {
  const isLoading = useAppSelector((state) => state.auth.isLoading)

  return (
    <>
      {isLoading ? (
        <div className='lds-ellipsis'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        'Войти'
      )}
    </>
  )
}
