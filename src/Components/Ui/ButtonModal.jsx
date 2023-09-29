const ButtonModal = (props) => {
  const buttonStyle = props.isActive 
  ?'cursor-pointer w-[244.71px] h-[41.14px] bg-orange-500 rounded-lg'
  : 'w-[244.71px] h-[41.14px] bg-zinc-400 rounded-lg';

  return (
   <button className={buttonStyle} onClick={props.onClick} >{props.text}</button>
  )
}

export default ButtonModal