import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'
type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CloseModal = ({ setModal }: Props) => {
  const router = useRouter()
  return (
    <div className="absolute top-4 right-6 z-50 rounded-full bg-black/50">
      <AiOutlineCloseCircle
        onClick={() => {
          setModal(false)
          router.replace('/#projects')
        }}
        className="h-8 w-8 text-gray-200 hover:text-green-600 xl:h-20 xl:w-20"
      />
    </div>
  )
}

export default CloseModal
