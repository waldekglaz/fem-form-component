import { NavLink } from 'react-router-dom'

const urls = ['/', 'plan', 'add-ons', 'summary']
const navItems = [
  { url: '/', description: 'Your info' },
  { url: 'plan', description: 'Select Plan' },
  { url: 'add-ons', description: 'Add-ons' },
  { url: 'summary', description: 'Summary' },
]
const Header = () => {
  return (
    <header className="bg-[url(./assets/bg-sidebar-mobile.svg)] bg-center bg-cover bg-no-repeat h-44 py-8 lg:bg-[url(./assets/bg-sidebar-desktop.svg)] lg:h-full lg:rounded-xl lg:px-8 lg:pt-10 lg:pr-20">
      <nav className="flex justify-center gap-4 lg:flex-col">
        {navItems.map((item, i) => (
          <div className="lg:flex gap-6 items-center">
            <NavLink className={({ isActive }) => (isActive ? 'block pointer-events-none text-sky-900 text-sm w-8 h-8 border text-center rounded-full leading-8 bg-blue-100 font-bold' : 'block pointer-events-none text-white text-sm w-8 h-8 border text-center rounded-full leading-8 font-bold')} key={i} to={item.url}>
              {i + 1}
            </NavLink>
            <div className="hidden lg:block">
              <p className="text-xs text-gray-200">Step {i + 1}</p>
              <p className="text-base text-white font-bold uppercase">{item.description}</p>
            </div>
          </div>
        ))}
      </nav>
    </header>
  )
}

export default Header
