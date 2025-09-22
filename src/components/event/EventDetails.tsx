const EventDetails: React.FC<{
  when: string;
  cost: string;
  where: string;
  directions: string;
  map: string;
  current: string;
}> = ({ when, cost, where, directions, map, current }) => {
  if (current) {
    return (
      <section className="text-gray-600 body-font relative">
        <div className="container px-4 md:px-8 py-8 mx-auto ">
          <div className="grid gap-16 sm:grid-cols-2 justify-between">
            <div className="flex flex-col items-start max-w-screen-sm md:flex-row ">
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
                <p className="text-base font-light text-gray-400 dark:text-gray-200 nl2br">
                  {when}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start max-w-screen-sm md:flex-row">
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
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg mb-1 font-medium title-font uppercase text-green">
                  Cost
                </h2>
                <p className="text-base font-light text-gray-400 dark:text-gray-200 nl2br">
                  {cost}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start max-w-screen-sm md:flex-row">
              <div className="flex items-center justify-center w-12 h-12 mb-4 mr-8 text-green">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg mb-1 font-medium title-font uppercase text-green">
                  Where
                </h2>
                <p className="leading-relaxed text-gray-600 dark:text-gray-100">
                  {where}
                </p>
                <p className="text-base font-light mb-4 nl2br text-gray-400 dark:text-gray-200">
                  {directions}
                </p>
              </div>
            </div>
            <div className="h-96 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
          </div>
        </div>
        <div className="container px-4 md:px-8 py-8 mx-auto flex sm:flex-nowrap flex-wrap"></div>
      </section>
    );
  } else {
    return null;
  }
};
export default EventDetails;
