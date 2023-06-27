const Button = ({ datacy, text, type, disabled = false, onclickFunction }) => {
  return (
    <div className="text-gray-200 w-full h-10">
      {type && type === "add" ? (
        <button
          className="w-full h-full bg-[#00A545] uppercase tracking-wider rounded-sm hover:bg-[#03B358] opacity-100 top-[-400px] 
        transition-all ease-in duration-300"
          disabled={disabled}
          onClick={onclickFunction}
          data-cy={datacy}
        >
          {text}
        </button>
      ) : type && type === "modify" ? (
        <button
          className="w-full h-full bg-[#758bfd]  uppercase tracking-wider rounded-sm hover:bg-[#004e98] opacity-100 top-[-400px] 
        transition-all ease-in duration-300"
          disabled={disabled}
          onClick={onclickFunction}
          data-cy={datacy}
        >
          {text}
        </button>
      ) : type && type === "delete" ? (
        <button
          className="w-full h-full bg-[#FC0839]  uppercase tracking-wider rounded-sm hover:bg-[#F52F57] opacity-100 top-[-400px] 
        transition-all ease-in duration-300"
          disabled={disabled}
          onClick={onclickFunction}
          data-cy={datacy}
        >
          {text}
        </button>
      ) : (
        <button
          className="w-full h-full bg-[#758bfd]  uppercase tracking-wider rounded-sm hover:bg-[#004e98] opacity-100 top-[-400px] 
        transition-all ease-in duration-300"
          disabled={disabled}
          onClick={onclickFunction}
          data-cy={datacy}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
