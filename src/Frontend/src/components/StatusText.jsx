const StatusText = ({text, status}) => {
  return (
    <div>
      {
      status && status === 'available' ? (
        <span className="text-xs tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{text}</span>
      ) : status && status === 'reserved' ? (
        <span className="text-xs tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">{text}</span>
      ) : status && status == 'unavailable' ? (
        <span className="text-xs tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">{text}</span>
      ) : (
        <span className="text-xs tracking-wider">{text}</span>
      )
    }
    </div>
  )
}

export default StatusText