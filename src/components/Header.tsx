import { NavLink } from 'react-router-dom'

const urls = ['/', 'plan', 'add-ons', 'summary']

const Header = () => {
  return (
    <header className="bg-[url(./assets/bg-sidebar-mobile.svg)] bg-center bg-cover bg-no-repeat h-44 py-8">
      <nav className="flex justify-center gap-4">
        {urls.map((url, i) => (
          <NavLink className={({ isActive }) => (isActive ? 'pointer-events-none text-sky-900 text-sm w-8 h-8 border text-center rounded-full leading-8 bg-blue-100 font-bold' : 'pointer-events-none text-white text-sm w-8 h-8 border text-center rounded-full leading-8 font-bold')} key={i} to={url}>
            {i + 1}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
