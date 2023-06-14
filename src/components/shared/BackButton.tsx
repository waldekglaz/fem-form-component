import { Link } from 'react-router-dom'
interface BackButtonProps {
  link: string
}
const BackButton: React.FC<BackButtonProps> = ({ link }) => {
  return (
    <Link className="text-gray-500 hover:text-sky-950" to={link}>
      Go Back
    </Link>
  )
}

export default BackButton
