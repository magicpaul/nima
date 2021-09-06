const Speaker: React.FC<{
  spImg: string;
  spName: string;
  spLocation: string;
  spBio: string;
}> = ({ spImg, spName, spLocation, spBio }) => {
  if (spName) {
    return (
      <div className="flex flex-col items-center sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <img
            src={spImg}
            className="w-32 h-32 object-cover rounded-full inline-flex items-center justify-center"
          />
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
              {spName}
            </h2>
            <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
            <p className="text-base">{spLocation}</p>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-base md:text-lg mb-4">{spBio}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default Speaker;
