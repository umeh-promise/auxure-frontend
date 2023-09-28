const Wrapper = ({ children, className, fluid, ...props }) => {
  return (
    <section
      className={`${
        fluid ? 'w-full' : 'w-[90vw] md:w-[80vw] lg:w-[85vw] mx-auto'
      } ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export default Wrapper;
