const TodoList=(props)=>{

    
    return (
    <>
    <div className="listss">
        <button onClick={()=>{
            props.onSelect(props.id)
        }}>X</button>
        <li>{props.itemText}</li>
    </div>
    </>
    );
}
export default TodoList;