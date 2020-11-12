import React, { useState , useEffect} from 'react'
import MyNotes from './MyNotes'
import history from './../routes/history'

function NewNotes() {
    const [state, setState] = useState([])
    const [note, setNote] = useState('')


    const saveNote = () => {
        setState([...state, note])
        console.log("my state", state)
    }
    return (
        <div>
            <h2>My Notes</h2><i class="em em-bookmark_tabs" aria-role="presentation" aria-label="BOOKMARK TABS"></i>
            <br />
            <a onClick={()=> saveNote()}><i class="em em-heavy_check_mark" onClick={() => saveNote()} aria-role="presentation" aria-label="HEAVY CHECK MARK"></i></a>
            <textarea placeholder='enter your notes....' name='note' onChange={(e) => setNote({ note: e.target.value })} />
          <MyNotes myState={state} myNote={note}/>
        </div>
    )
}

export default NewNotes
