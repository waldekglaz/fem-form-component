interface BottomNavProps {
  children: React.ReactNode
  singleItem: boolean
}
const BottomNav: React.FC<BottomNavProps> = ({ children, singleItem }) => {
  return <nav className={`absolute  bottom-0 w-full left-0 bg-white h-16 flex items-center ${singleItem ? 'justify-end' : 'justify-between'} px-6 lg:px-0 lg:mt-20 lg:w-[450px] lg:bottom-5 lg:left-auto `}>{children}</nav>
}

export default BottomNav
