const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`bg-brandBlue hover:bg-brandBlueHover text-white text-sm font-medium px-5 py-2.5 rounded-md transition-all duration-200 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
