const EventDetails: React.FC<{
  when: string;
  cost: string;
  where: string;
  directions: string;
  map: string;
  featured: string;
}> = ({ when, cost, where, directions, map, featured }) => {
  if (featured) {
    return (
      <section className="text-gray-600 body-font relative">
        <div className="container px-4 md:px-8 py-8 mx-auto ">
          <div className="grid gap-16 sm:grid-cols-2 justify-between">
            <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 mb-4 mr-8 text-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg mb-1 font-medium title-font uppercase text-green">
                  When
                </h2>
                <p className="text-base font-light">{when}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-start max-w-screen-sm md:flex-row sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 mb-4 mr-8 text-green">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg mb-1 font-medium title-font uppercase text-green">
                    Cost
                  </h2>
                  <p className="text-base font-light">{cost}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-4 md:px-8 py-8 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 w-full h-96 md:h-auto bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 "
              frameBorder="0"
              title="map"
              scrolling="no"
              src={map}
            ></iframe>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white grid grid-cols-1 grid-rows-3 justify-start md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div className="flex flex-col items-start row-start-1 max-w-screen-sm md:flex-row">
              <div className="flex items-center justify-center w-12 h-12 mb-4 mr-8 text-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg mb-1 font-medium title-font uppercase text-green">
                  Where
                </h2>
                <p className="leading-relaxed text-gray-600">{where}</p>
              </div>
            </div>
            <div className="row-start-2 row-span-2">
              <p className="text-base font-light mb-4">{directions}</p>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
};
export default EventDetails;
