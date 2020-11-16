import React, { useState , useEffect} from 'react'
import MyNotes from './MyNotes'


function NewNotes() {
    const [state, setState] = useState([])
    const [note, setNote] = useState("")


    const saveNote = () => {
        setState([...state,{note , id : Math.random() }])
    }
    console.log("my state", state)
    const deleteNote =(note)=>{
        const deleteNotes= state.filter(oneNote=> oneNote.id !== note.id)
        setState(deleteNotes)
        console.log("note",deleteNotes)

    }
    const editNote =(id)=>{
       
    }

    
    return (
        <div>
            <h2>My Notes</h2><i class="em em-bookmark_tabs" aria-role="presentation" aria-label="BOOKMARK TABS"></i>
            <br />
            <a onClick={()=> saveNote()}><i class="em em-heavy_check_mark" onClick={() => saveNote()} aria-role="presentation" aria-label="HEAVY CHECK MARK"></i></a>
            <textarea placeholder='enter your notes....'  onChange={(e) => setNote( e.target.value)} />
          <MyNotes myState={state} myNote={note} delete={deleteNote}/>
        </div>
    )
}

export default NewNotes
