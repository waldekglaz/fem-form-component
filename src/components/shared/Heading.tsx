interface HeadingProps {
  title: string
  description: string
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      <p className="mb-6">{description}</p>
    </>
  )
}

export default Heading
