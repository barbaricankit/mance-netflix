import { Oval } from 'react-loading-icons'
const Loader = ({ status }) => {
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 m-auto red-color">
      {status === 'loading' && (
        <Oval
          className="absolute top-0 right-0 left-0 bottom-0 m-auto"
          stroke="#e50914"
        />
      )}
    </div>
  )
}

export default Loader
