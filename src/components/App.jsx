import React,{useState}from "react";
import Header from "./header";

function App() {
   const [array, setarray] = useState([]);
   const [notes, setnotes] = useState({}); 
   const [title, settitle] = useState("");
   const [content, setcontent] = useState("");

    function handletitle(event){
      settitle(event.target.value);
  }
    function handlechange(event){
      setcontent(event.target.value);

  }
    function handleClick(){
      const newnotes={
        title:title,
        content:content
       }
       setnotes(newnotes);
        setarray((prevValue)=>{
          return [...prevValue,notes];
        })
    }
  return (
    <div >
      <div className="container">
      <Header/>
      <div className="notepad">
        <input type="text" placeholder="Title" name="title" onChange={handletitle}/>
        <input type="text" placeholder="type here" name="content" onChange={handlechange}/>
        <button onClick={handleClick}>Add</button>
      </div>
      <div className="noteArea"> 
        {array.map((noteItem,index)=>{
          if (noteItem.title){
          return(
            <div key={index} className="note">
              <h2>{noteItem.title}</h2>
              <p>{noteItem.content}</p>
            </div>
          )
        }
          else{
            <p>enter valid value</p>
          }
        })}
        </div>
        </div>
    </div>
  );
}
export default App;