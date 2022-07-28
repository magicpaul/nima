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
    <main className="flex-1 w-full container px-4 py-8 mx-auto md:px-8 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div>
          <p className="text-gray-400 text-lg">
            {' '}
            The aim of the Northern Ireland Ministry Assembly is to encourage
            and help preachers to give themselves to the indispensable work of
            presenting the Lord Jesus Christ to believers and unbelievers, to
            all ages, and to all kinds of people.
          </p>
          {/* <h1 className="text-green text-7xl font-extrabold">{title}</h1> */}
        </div>
        <div className="text-gray-400 col-span-2">
          <p className="two-cols">
            {description1} {description2}
          </p>
        </div>
      </div>
    </main>
  );
};

export default FeatureSection;
