interface Props {
  title: string;
  description1: string;
  description2: string;
}

const FeatureSection: React.FC<Props> = ({
  title,
  description1,
  description2,
}) => {
  return (
    <main className="flex-1 w-full max-w-7xl px-4 py-8 mx-auto md:px-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h1 className="text-green text-7xl font-extrabold">{title}</h1>
        </div>
        <div className="text-gray-400">
          <p>{description1}</p>
        </div>
        <div className="text-gray-400">
          <p>{description2}</p>
        </div>
      </div>
    </main>
  );
};

export default FeatureSection;
