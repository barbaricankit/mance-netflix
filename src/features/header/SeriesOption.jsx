import { NavLink } from 'react-router-dom'

const SeriesOption = () => {
  return (
   
      <NavLink
        activeStyle={{ color: 'white', fontWeight: 'bold' }}
        to="/series"
      >
        <p className="text-color text-sm">Series</p>
      </NavLink>
      
    
  )
}

export default SeriesOption
