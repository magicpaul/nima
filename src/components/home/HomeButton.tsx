import Link from 'next/link';

interface Props {
  text: string;
  url: string;
}

const HomeButton: React.FC<Props> = ({ text, url }) => {
  if (url) {
    return (
      <Link
        href={url}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
      >
        {text}
      </Link>
    );
  } else {
    return null;
  }
};
export default HomeButton;
