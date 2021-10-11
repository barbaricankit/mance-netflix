import { HomeOption, SeriesOption, FilmOption, NewPopularOption } from '.'
const Header = () => {
  return (
    <div className="flex w-50 space-x-5 items-center p-4">
      <header className="red-color text-2xl font-semibold">MANCEFLIX</header>
      <HomeOption />
      <SeriesOption />
      <FilmOption />
      <NewPopularOption />
    </div>
  )
}

export default Header
