const Title = ({ name }) => {
  return (
    <div>
      <span className="ml-1 text-3xl sm:text-2xl font-semibold">{name}</span>
      <div className="mt-2 h-1 w-full bg-[#21295c] rounded-md"></div>
    </div>
  );
};

export default Title;
