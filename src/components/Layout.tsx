import { Link, useLocation } from "react-router-dom";
import { ReactNode, useState } from "react";
import ThemeToggle from "./ThemeToggle";

interface LayoutProps {
  children: ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/blog", label: "Blog" },
    { path: "/gallery", label: "Gallery" },
    { path: "/videos", label: "Videos" },
    { path: "/fun-facts", label: "Fun Facts" },
  ];

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 transition-colors">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link to="/" className="font-serif text-2xl font-semibold text-gray-900 dark:text-white">
                Lenktira
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                    isActive(path)
                      ? "border-b-2 border-primary-500 text-gray-900 dark:text-white"
                      : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:border-b-2 hover:border-gray-300 dark:hover:border-gray-700"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Mobile menu button - now without theme toggle */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="pt-2 pb-3 space-y-1">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(path)
                      ? "bg-primary-50 dark:bg-primary-900/50 border-l-4 border-primary-500 text-primary-700 dark:text-primary-100"
                      : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 dark:text-gray-100">{children}</main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Lenktira. All rights reserved.
          </p>
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
};
export default Layout;
