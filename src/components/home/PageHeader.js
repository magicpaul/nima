export default function PageHeader({ title, description }) {
  return (
    <div className="flex flex-col lg:justify-between lg:flex-row container py-8 mx-auto ">
      <h2 className="max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none group">
        <span className="inline-block mb-1 sm:mb-4">{title}</span>
        <div className="h-2 ml-auto transition duration-300 origin-left transform bg-green-500 scale-x-50 group-hover:scale-x-100 mb-6" />
      </h2>
      <p className="text-gray-700 lg:text-md lg:max-w-md prose">
        {description}
      </p>
    </div>
  );
}
