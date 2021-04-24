import {useState} from 'react'
import TodoList from './todolist'
function TodoCard() {
    const [text, setText] = useState("")
    const textInput=(event) =>{
      setText(event.target.value);
    };
    const [items, setItems] = useState([]);
    const listItems=()=>{
        setItems((oldItems)=>{
            return[...oldItems,text]
        });
        setText("")
    }
    const deleteItems=(id)=>{
        console.log(text)
    setItems((oldItems)=>{
        return oldItems.filter((arr,index)=>{   
            return  index!==id;

        })
    })
    }
    return (

        <center>
            <div className="container">
                <h1 className='heading'><center>ToDo List   📑</center> </h1>
                <div className="todoinou">
                    <div className="todoin">
                    <input type="text" onChange={textInput} value={text} width='20' id="input" />
                    <button className='add' onClick={listItems}>+</button>
                    </div>
                    <div className="tododata">
                        <ol>
                            
                            {items.map((itemVal,index)=>{
                            return   <TodoList
                            key={index}
                            id={index}
                            onSelect={deleteItems}
                               itemText={itemVal}
                               />
                            })}
                            
                        </ol>
                    </div>
                </div>
            </div>
        </center>
    )
}
export default TodoCard;