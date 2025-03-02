import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full py-4 px-20">
      <nav className="flex justify-between items-center">
        
        <div className="text-lg sm:text-xl md:text-2xl font-semibold">
          <Link href="/" className="text-text">
            Infotravel
          </Link>
        </div>

        
        <ul className="flex items-center space-x-2 sm:space-x-4 ">
          <li>
            <img src="/images/home/loginarrow.svg" alt="seta" />
          </li>
          <li>
            <Link
              href="/"
              className="text-caption text-xs sm:text-sm md:text-base font-medium"
            >
              Iniciar Sessão
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
