import { useRef } from 'react';
import plus from '../../assets/Plus.svg';
import { useDispatch } from 'react-redux';
function From () {
const nameref = useRef(null);
const dispatch = useDispatch()
function handleClick(e){
  e.preventDefault();
  if(nameref.current.value.length > 3){
    const todo ={
      id: Date.now(),
      name: nameref.current.value,
      status:true
    }
dispatch ({type: "TODO_ADD", payload:todo})
nameref.current.value =null;

  }
}
    return (
      <>
      <div className='flex item-center gap-2 mb-[59px] '>
        <input ref={nameref } className='w-[381px] bg-transparent p-[9px] border border-[#3E1671 ] rounded-lg text-white focus:outline-none' type="text" name="" id="" placeholder='Add a new task' />
        <button onClick={handleClick } className='w-[40px] bg-[#9E78CF] rounded-lg  p-[9px]'><img src={plus} alt="plus icon" width={22} height={22 } /> </button>
      </div>
        
      </>
    )
  }
  
  export default From 