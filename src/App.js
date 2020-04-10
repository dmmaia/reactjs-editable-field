import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

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
    editableItem.value = item.innerText;
    editableItem.id='editable';
    editableItem.classList.add('edit');
    editableItem.onchange = {handleSaveEdit}

    if(!(item.classList.contains('edit'))){
      item.parentNode.replaceChild(editableItem, item);
    } 
  }

  return (
    <div className="App">
      <p id="editable" onClick={handleEdit} >Testing 123</p>
    </div>
  );
}

export default App;
