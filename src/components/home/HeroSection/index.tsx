/* eslint-disable react/no-unknown-property */
import Image from 'next/legacy/image';
import HomeButton from '../HomeButton';

interface Props {
  title_white: string;
  title_green: string;
  description: string;
  image: string;
  cta_text: string;
  cta_url: string;
}

const HeroSection: React.FC<Props> = ({
  title_white,
  title_green,
  description,
  image,
  cta_text,
  cta_url,
}): JSX.Element => {
  return (
    <div className="relative bg-green-800 overflow-hidden">
      <div className="container mx-auto">
        <div className="relative z-10 pb-8 bg-green-800 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 xl:max-w-3xl">
          <svg
            className="hidden xl:block absolute right-0 inset-y-0 h-full w-48 text-green-800 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="pt-4 mx-auto container px-4 sm:pt-6 sm:px-6 md:pt-10 lg:mt-0 lg:px-8 lg:pt-16 xl:mt-0 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-white xl:inline">
                  {title_white}
                </span>{' '}
                <span className="block text-green-500 xl:inline">
                  {title_green}
                </span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="mt-3 sm:mt-0">
                  <HomeButton text={cta_text} url={cta_url} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-64 w-full sm:h-72 md:h-96 lg:w-full lg:h-full">
          <Image
            src={image}
            alt="Northern Ireland Ministry Assembly Header Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center center"
            placeholder="blur"
            blurDataURL={image}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
