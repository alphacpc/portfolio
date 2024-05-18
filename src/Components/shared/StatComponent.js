
const StatComponent = ({value, label}) => {
  return (
        <div className="flex flex-col bg-lime200 w-1/3 justify-center items-center border-l-">
                <span className="border-2 p-4 py- text-4xl text-white font-bold rounded mb-10">{value}</span> 
                <span className="text-white font-bold italic text-lg">{label}</span>
        </div>
  )
}

export default StatComponent