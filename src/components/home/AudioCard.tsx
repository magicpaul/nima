import Link from 'next/link';

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
      <a aria-label={title}>
        <div className="overflow-hidden relative mx-auto transition ease-in-out delay-150 hover:scale-105 duration-300 bg-white hover:bg-gray-50 dark:hover:bg-gray-600 shadow-lg ring-black/5 rounded-xl flex items-center gap-6 dark:bg-gray-800 dark:highlight-white/5">
          <img
            className="absolute -left-6 w-28 h-28 object-cover rounded-full shadow-lg"
            src={image}
            alt={title}
          />
          <div className="min-w-0 py-5 pl-28 pr-5">
            <div className="text-gray-900 font-medium text-sm sm:text-base truncate dark:text-gray-200">
              {title}
            </div>
            <div className="text-gray-400 font-medium text-sm sm:text-base leading-tight truncate dark:text-gray-400">
              {book} - {speaker}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AudioCard;
