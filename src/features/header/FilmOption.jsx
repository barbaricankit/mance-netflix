import { NavLink } from 'react-router-dom'

const FilmOption = () => {
  return (
  
      <NavLink activeStyle={{ color: 'white', fontWeight: 'bold' }} to="/films">
        <p className="text-color text-sm">Films</p>
      </NavLink>
     
  )
}

export default FilmOption
