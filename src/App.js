import React, {useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  function handleEdit(){
    let item = document.getElementById('editable');
    
    setText(item.innerHTML);

    let editableItem = document.createElement('input');
    editableItem.value = text;

    item.parentNode.replaceChild(editableItem, item);
  }

  return (
    <div className="App">
      <p id="editable" onClick={handleEdit} >Testing 123</p>
    </div>
  );
}

export default App;
