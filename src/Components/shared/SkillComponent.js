

const SkillComponent = ({bg, color="text-back", text}) => {
  return (
        <span className={` ${bg} ${color} p-2 font-bold rounded-md shadow-lg mr-2`}>
                {text} 
        </span>
  )
}

export default SkillComponent;