interface HeadingProps {
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2 " data-cy="title">
        {title}
      </h1>
      <p className="mb-6 text-gray-500" data-cy="description">
        {description}
      </p>
    </>
  );
};

export default Heading;
