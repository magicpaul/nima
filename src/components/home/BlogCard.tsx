//import Link from 'next/link';
import Image from 'next/image';

export default function BlogCard({ title, image, slug, category, subtitle }) {
  return (
    <article className="flex flex-col bg-white shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-2">
      <a href={`/events/${slug}`} aria-label={title}>
        <Image
          alt={title}
          className="object-cover w-full h-52"
          src={image}
          width="640"
          height="377"
          placeholder="blur"
          blurDataURL={image}
        />
      </a>
      <div className="flex flex-col flex-1 p-6">
        <a href={`/events/${slug}`} aria-label={title}></a>
        <a
          href={`/events/${slug}`}
          className="text-xs tracking-wider uppercase hover:underline text-green"
        >
          {category}
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {title}
        </h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
          <span>{subtitle}</span>
        </div>
      </div>
    </article>
  );
}
