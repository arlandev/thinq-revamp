function Footer({ backgroundImage, background }) {
  return (
    <footer className="bg-zinc-100">
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-4">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="font-medium tracking-wider text-2xl hover:text-zinc-500 transition-all duration-500"
          >
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white font-main">
              ThInq
            </span>
          </a>
          <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 font-sub">
            <li>
              <a href="#" className="hover:underline mr-4 md:mr-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
