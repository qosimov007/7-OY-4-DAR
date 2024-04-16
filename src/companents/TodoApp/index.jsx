import From from "../From"
import TodoItem from "../TodoItem"
import TodoTitle from "../TodoTitle"
function TodoApp() {

    return (
      <>
        <div className="w-[432px] mx-auto mt-48">
         <From></From>
        <TodoTitle title = 'Task to do' status ={false} count = {4}></TodoTitle>
        <TodoItem title='Task study React fundmentals'status ={true} ></TodoItem>
        <TodoItem title='Task study React fundmentals'status ={true} ></TodoItem>

        <TodoTitle title = 'Done ' status ={false} count = {1}></TodoTitle>
        <TodoItem title='Task study React fundmentals'status ={false} ></TodoItem>
        
        <TodoItem title='Task study React fundmentals'status ={false} ></TodoItem>
        </div>
      </>
    )
  }
  
  export default TodoApp
