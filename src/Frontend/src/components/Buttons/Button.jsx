const Button = ({ datacy, text, type, disabled = false, onclickFunction }) => {
  return (
    <div className="text-gray-200 w-full h-10">
      {type && type === "add" ? (
        <button
          className="w-full h-full bg-[#00962B] uppercase tracking-wider rounded-lg hover:bg-[#00B359] opacity-100 top-[-400px] 
        transition-all ease-in duration-300"
          disabled={disabled}
          onClick={onclickFunction}
          data-cy={datacy}
        >
          {text}
        </button>
      ) : type && type === "modify" ? (
        <button
          className="w-full h-full bg-[#004e98]  uppercase tracking-wider rounded-lg hover:bg-[#4E76D3] opacity-100 top-[-400px] 
        transition-all ease-in duration-300"
          disabled={disabled}
          onClick={onclickFunction}
          data-cy={datacy}
        >
          {text}
        </button>
      ) : type && type === "delete" ? (
        <button
          className="w-full h-full bg-[#C62222]  uppercase tracking-wider rounded-lg hover:bg-[#FA5151] opacity-100 top-[-400px] 
        transition-all ease-in duration-300"
          disabled={disabled}
          onClick={onclickFunction}
          data-cy={datacy}
        >
          {text}
        </button>
      ) : type && type === "icon" ? (
        <button
          className="w-full h-full bg-[#004e98] uppercase tracking-wider rounded-lg hover:bg-[#758bfd] opacity-100 top-[-400px] 
        transition-all ease-in duration-300 flex justify-center py-2 text-lg"
          disabled={disabled}
          onClick={onclickFunction}
          data-cy={datacy}
        >
          {text}
        </button>
      ) : (
        <button
          className="w-full h-full bg-[#004e98] uppercase tracking-wider rounded-lg hover:bg-[#758bfd] opacity-100 top-[-400px] 
        transition-all ease-in duration-300 "
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
