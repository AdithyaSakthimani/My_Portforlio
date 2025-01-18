import React,{useState} from 'react';
import NoteContext from './NoteContext';
function NoteState(props) {
    const[mode,setMode] = useState('light')
    return (
        <NoteContext.Provider value={{mode,setMode}}>
            {props.children}
        </NoteContext.Provider>
    );
}

export default NoteState
