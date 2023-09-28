const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`flex justify-center items-center gap-[0.625rem] rounded-[0.25rem] border-solid border-[1.5px] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
