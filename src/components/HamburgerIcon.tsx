interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerIcon = ({ isOpen, onClick }: HamburgerIconProps) => {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 text-gray-600 hover:text-indigo-600 focus:outline-none"
      aria-label="Toggle menu"
    >
      <div className="w-6 h-5 relative flex flex-col justify-between">
        <span
          className={`w-full h-0.5 bg-current transform transition-all duration-200 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`w-full h-0.5 bg-current transition-all duration-200 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-full h-0.5 bg-current transform transition-all duration-200 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </div>
    </button>
  );
};

export default HamburgerIcon;