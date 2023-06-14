interface CardProps {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="w-80 mx-auto px-6 py-8 -mt-20 bg-white rounded-lg shadow-gray-600 lg:mt-0 lg:w-[450px]">{children}</div>
}

export default Card
