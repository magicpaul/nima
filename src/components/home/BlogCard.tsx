import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ title, image, slug, category, subtitle }) {
  return (
    <article className="flex flex-col bg-white dark:bg-gray-900 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
      <Link href={`/events/${slug}`} aria-label={title}>

        <Image
          alt={title}
          className="object-cover w-full h-52"
          src={image}
          width="640"
          height="377"
          placeholder="blur"
          blurDataURL={image}
        />
        <div className="flex flex-col flex-1 p-6">
          <span className="text-xs tracking-wider uppercase text-green">
            {category}
          </span>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug dark:text-gray-100">
            {title}
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 dark:text-gray-400">
            <span>{subtitle}</span>
          </div>
        </div>

      </Link>
    </article>
  );
}
