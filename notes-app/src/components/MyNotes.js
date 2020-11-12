import React from 'react'

function MyNotes({myState}) {
    return (
        <div>
          
            {myState.map(note => <div className="notes">{note.note}<i class="em em-heavy_minus_sign" aria-role="presentation" aria-label="HEAVY MINUS SIGN"></i>
                <i class="em em-heavy_plus_sign" aria-role="presentation" aria-label="HEAVY PLUS SIGN"></i>
            </div>)}

           
        </div>
    )
}

export default MyNotes