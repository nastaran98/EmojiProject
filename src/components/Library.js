import React,{useState} from 'react';
import './Emoji.css'
const Library=(props)=>{
    const SelectedBtn=(e)=> {
        props.choice(e.target.value)
    }

    return (
        <div >
        <div className="ui icon input"><button className="ui button" onClick={SelectedBtn} value='apple'>Apple</button></div>
        <div className="ui icon input"><button className="ui button" onClick={SelectedBtn} value='facebook'>Facebook</button></div>
        <div className="ui icon input"><button className="ui button" onClick={SelectedBtn} value='twitter'>Twitter</button></div>
            <div className="ui icon input"><button className="ui button" onClick={SelectedBtn} value='google'>Google</button></div>
            <div className="ui icon input"><button className="ui button" onClick={SelectedBtn} value='Messenger'>Messenger</button></div>

        </div>
    )
}
export default Library;


