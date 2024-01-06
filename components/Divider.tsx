
const Divider = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={`mt-20 h-[1px] w-full bg-dimgray max-md:my-10 ${className}`}
    />
  );
};

export default Divider;
