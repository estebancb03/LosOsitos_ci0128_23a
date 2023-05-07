const Button = ({text, type, disabled = false, onclickFunction}) => {
  return (
    <div className="text-gray-200 w-full h-10">
      { type && type === "add" ? (
        <button className="w-full h-full bg-green-700 uppercase tracking-wider rounded-sm hover:bg-green-600 opacity-100 top-[-400px] 
        transition-all ease-in duration-300" disabled={disabled} onClick={onclickFunction}>{text}</button>
      ) : type && type === "modify" ? (
        <button className="w-full h-full bg-[#21295c] uppercase tracking-wider rounded-sm hover:bg-[#6545e6] opacity-100 top-[-400px] 
        transition-all ease-in duration-300" disabled={disabled} onClick={onclickFunction}>{text}</button>
      ) : type && type === "delete" ? (
        <button className="w-full h-full bg-rose-700 uppercase tracking-wider rounded-sm hover:bg-rose-600 opacity-100 top-[-400px] 
        transition-all ease-in duration-300" disabled={disabled} onClick={onclickFunction}>{text}</button>
      ) : (
        <button className="w-full h-full bg-[#21295c] uppercase tracking-wider rounded-sm hover:bg-[#6545e6] opacity-100 top-[-400px] 
        transition-all ease-in duration-300" disabled={disabled} onClick={onclickFunction}>{text}</button>
      )}
    </div>
  )
}

export default Button