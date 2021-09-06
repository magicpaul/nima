import Link from 'next/link';
import { CalendarIcon, MapIcon } from '@heroicons/react/outline';

export default function EventSection({
  category,
  title,
  subtitle,
  eventDate,
  location,
  slug,
  sp1Name,
  sp1Img,
  sp1Location,
  sp2Name,
  sp2Img,
  sp2Location,
  image,
  featured,
}) {
  return (
    <div className=" bg-green bg-opacity-10">
      <div className="w-full max-w-7xl px-0 mx-auto md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:py-12 sm:gap-x-8 md:py-16">
          <div className="relative z-10 col-start-1 row-start-1 pr-4 pt-40 sm:pt-16 pb-3 bg-gradient-to-t from-black sm:bg-none">
            <p className="text-sm font-medium text-white sm:mb-1 sm:text-green-500 px-4 md:pr-4 md:pl-0">
              {category}
            </p>
            <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl px-4 md:pr-4 md:pl-0 uppercase">
              {title}
            </h2>
            <p className="text-sm font-medium text-white sm:mb-1 sm:text-gray-500 px-4 md:pr-4 md:pl-0">
              {subtitle}
            </p>
          </div>
          <div className="col-start-1 row-start-2 px-4 md:pr-4 md:pl-0 sm:pb-16">
            <div className="flex items-center text-sm font-medium my-5 sm:mt-2 sm:mb-4">
              <div className="ml-1">
                <span className="text-gray-400">
                  <CalendarIcon className="h-6 w-6 pr-2 inline" />
                  {eventDate}{' '}
                </span>
              </div>
              <div className="text-base font-normal mx-2">·</div>
              <div>
                <span className="text-gray-400">
                  <MapIcon className="h-6 w-6 pr-2 inline" />
                  {location}
                </span>
              </div>
            </div>
            <div className="col-start-1 row-start-3 sm:pb-16">
              <h2 className="title-font text-lg font-bold text-gray-900 mb-3">
                Speakers:
              </h2>
              <div className="inline-flex items-left flex-col sm:flex-row">
                <div className="inline-flex items-center mb-4 sm:mb-0">
                  <img
                    alt="blog"
                    src={sp1Img}
                    className="w-12 h-12 sm:hidden rounded-full flex-shrink-0 object-cover object-center"
                  ></img>
                  <span className="flex-grow flex flex-col pl-4 sm:pl-0">
                    <span className="title-font font-medium text-gray-900">
                      {sp1Name}
                    </span>
                    <span className="text-gray-400 text-xs tracking-widest mt-0.5 uppercase">
                      {sp1Location}
                    </span>
                  </span>
                </div>
                <div className="inline-flex items-center pl-0 mb-0 md:pl-8">
                  <img
                    alt="blog"
                    src={sp2Img}
                    className="w-12 h-12 sm:hidden rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4 sm:pl-0">
                    <span className="title-font font-medium text-gray-900">
                      {sp2Name}
                    </span>
                    <span className="text-gray-400 text-xs tracking-widest mt-0.5 uppercase">
                      {sp2Location}
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <hr className="w-16 border-gray-400 hidden sm:block" />
          </div>
          <div className="col-start-1 row-start-4 xs:justify-center sm:justify-start">
            <div className="my-8 sm:my-0 px-4 md:px-0">
              <Link href={`/events/${slug}`}>
                <a className="w-full md:w-2/3 lg:w-1/2 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                  Book Tickets
                </a>
              </Link>
            </div>
          </div>
          <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-4">
            <div className="w-full grid grid-cols-3 grid-rows-2 gap-2">
              <div className="relative col-span-3 row-span-2 md:col-span-2 sm:mr-2 md:mr-0">
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg"
                />
              </div>
              <div className="relative hidden md:block">
                <img
                  src={sp1Img}
                  alt={sp1Name}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                />
              </div>
              <div className="relative hidden md:block">
                <img
                  src={sp2Img}
                  alt={sp2Name}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
