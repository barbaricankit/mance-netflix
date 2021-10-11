import { MdArrowForwardIos } from 'react-icons/md'

const ForwardArrow = ({ func }) => {
  return (
    <div
      className="fw-arr hide absolute h-76 z-20 right-0 top-3 p-5 mr-0 flex items-center text-white cursor-pointer"
      onClick={() => func('Next')}
    >
      <MdArrowForwardIos className="text-5xl" />
    </div>
  )
}

export default ForwardArrow
