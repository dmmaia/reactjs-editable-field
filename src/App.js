import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('test 123');

  function handleSaveEdit(){
    let item = document.getElementById('editable');

    let newItem = document.createElement('p');
    newItem.innerText = text;
    newItem.id='editable';
    newItem.onclick={handleEdit};

    if(item.classList.contains('edit')){
      item.parentNode.replaceChild(newItem, item);
    } 
  }

  function handleEdit(){
    let item = document.getElementById('editable');
    
    setText(item.innerHTML);

    let editableItem = document.createElement('input');
    editableItem.value = text;
    editableItem.id='editable';
    editableItem.classList.add('edit');
    //editableItem.onchange = (event=>setText(event.target.value));

    let newItem = document.createElement('p');
    newItem.innerText = text;
    newItem.id='editable';

    if(!(item.classList.contains('edit'))){
      item.parentNode.replaceChild(editableItem, item);
    }else{
      item.parentNode.replaceChild(newItem, item);
    }
  }

  return (
    <div className="App">
      <span onClick={handleEdit} ><p id="editable" >{ text }</p></span>
    </div>
  );
}

export default App;
