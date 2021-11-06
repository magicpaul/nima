import Link from 'next/link';
//import Image from 'next/image';

interface Props {
  title: string;
  image: string;
  slug: string;
  book: string;
  speaker: string;
}
const AudioCard: React.FC<Props> = ({
  title,
  image,
  slug,
  book,
  speaker,
}): JSX.Element => {
  return (
    <Link href={`/audio/${slug}`}>
      <a aria-label="title">
        <div className="relative rounded-md bg-gray-50 px-6 py-5 neuo-shadow flex items-center space-x-3 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500 group">
          <div className="flex-shrink-0 pr-4">
            <img
              height={48}
              width={48}
              className="h-12 w-12 rounded-full shadow-md"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex-1 min-w-0">
            <span className="absolute inset-0" aria-hidden="true"></span>
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="text-sm text-gray-500 truncate">
              {book} - {speaker}
            </p>
          </div>
          <div className="flex items-center space-x-2 text-green-500 group-hover:text-green-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AudioCard;
