function Navbar(props) {
  return (
    <nav className="flex bg-gray-100 py-4 flex-row drop-shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex">
          <a
            href="/"
            className="font-medium tracking-wider text-2xl hover:text-zinc-500 transition:all duration-500 font-main"
          >
            ThInq
          </a>
        </div>
        <div className="flex flex-row items-center space-x-6 font-sub">
          {props.link && props.linkName && (
            <a
              href={props.link}
              className="font-bold hover:text-zinc-500 transition-all
              duration-300"
            >
              {props.linkName}
            </a>
          )}
          <a
            href="/logout"
            className="font-bold hover:text-zinc-500 transition-all duration-300 font-sub"
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
