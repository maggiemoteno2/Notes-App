import React from 'react'

function MyNotes(props) {
    return (
        <div>
          
            {props.myState.map(note => <div className="notes">{note.note}<i class="em em-wastebasket" onClick={()=>props.delete(note)} aria-role="presentation" aria-label=""></i>
            </div>)}

           
        </div>
    )
}

export default MyNotes
