export default function Filter({ onClose }) {
  const filterGroup = ['已完成','未完成', '全部']

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-30 z-50 bg-base-100 shadow-md">
      <ul className="flex flex-col justify-center items-center border border-base-content ">
        {filterGroup.map((item, index) => (
          <li 
            key={index} 
            onClick={onClose}
            className="w-full py-2 text-center cursor-pointer hover:bg-primary hover:text-primary-content">{item}</li>
        ))}
      </ul>
    </div>
  )
}