import { useRouter } from 'next/router';

const ContactForm = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="grid w-full grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-50 text-gray-800">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let&apos;s talk!
          </h2>
          <div className="text-gray-300">Contact us</div>
        </div>
      </div>
      <form
        noValidate
        className="space-y-6 ng-untouched ng-pristine ng-valid"
        method="POST"
        name="contact-form"
        action="contact/?success=true"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={() =>
          router.replace('/contact/?success=true', undefined, { shallow: true })
        }
      >
        <input type="hidden" name="form-name" value="contact-form" />
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>
        <div>
          <label htmlFor="name" className="text-sm">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded bg-gray-100 focus:border-green focus:ring-1 focus:ring-green focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full p-3 rounded bg-gray-100 focus:border-green focus:ring-1 focus:ring-green focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm">
            Message
          </label>
          <textarea
            id="message"
            className="w-full p-3 rounded bg-gray-100 focus:border-green focus:ring-1 focus:ring-green focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-green text-gray-50"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
