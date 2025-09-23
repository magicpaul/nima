import Link from 'next/link';
import Image from 'next/legacy/image';

export default function BlogCard({
  title,
  image,
  slug,
  category,
  eventDate,
  subtitle,
}) {
  return (
    <article className="flex flex-col bg-white dark:bg-gray-900 shadow-lg rounded-md transition duration-500 ease-in-out transform hover:-translate-y-2">
      <Link href={`/events/${slug}`} aria-label={title}>
        <Image
          alt={title}
          className="object-cover w-full h-52 rounded-t-md"
          src={image}
          width="640"
          height="377"
          placeholder="blur"
          blurDataURL={image}
        />
        <div className="flex flex-col h-60 p-6 justify-between">
          <div>
            <span className="text-xs tracking-wider uppercase text-green">
              {category}
            </span>
            <h3 className="py-2 text-lg font-semibold leading-snug dark:text-gray-100">
              {title}
            </h3>
            <div className="pt-3 space-x-2 text-xs text-gray-600 dark:text-gray-400">
              <span>{subtitle}</span>
            </div>
          </div>
          <div>
            <span className="inline-block bg-green bg-opacity-10 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
              {eventDate}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
