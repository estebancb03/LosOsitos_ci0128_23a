const Button = ({ text, type, disabled = false, onclickFunction }) => {
  return (
    <div className="text-gray-200 w-full h-10">
      {type && type === "add" ? (
        <button
          className="w-full h-full bg-[#03B358] uppercase tracking-wider rounded-sm hover:bg-[#00A545] opacity-100 top-[-400px] 
        transition-all ease-in duration-300"
          disabled={disabled}
          onClick={onclickFunction}
        >
          {text}
        </button>
      ) : type && type === "modify" ? (
        <button
          className="w-full h-full bg-[#004e98] uppercase tracking-wider rounded-sm hover:bg-[#758bfd] opacity-100 top-[-400px] 
        transition-all ease-in duration-300"
          disabled={disabled}
          onClick={onclickFunction}
        >
          {text}
        </button>
      ) : type && type === "delete" ? (
        <button
          className="w-full h-full bg-[#F52F57] uppercase tracking-wider rounded-sm hover:bg-[#FC0839] opacity-100 top-[-400px] 
        transition-all ease-in duration-300"
          disabled={disabled}
          onClick={onclickFunction}
        >
          {text}
        </button>
      ) : (
        <button
          className="w-full h-full bg-[#004e98] uppercase tracking-wider rounded-sm hover:bg-[#758bfd] opacity-100 top-[-400px] 
        transition-all ease-in duration-300"
          disabled={disabled}
          onClick={onclickFunction}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
