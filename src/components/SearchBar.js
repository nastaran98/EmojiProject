import React,{useState,useEffect} from 'react';
import {Spliter} from './Spliter';
import './Emoji.css';
import EmojiConvertor from './EmojiConvert'

const SearchBar=(props)=>{
    const [state,setstate]=useState('')
    const [result,setresult]=useState([])
    const [emoji,setemoji]=useState([])



    useEffect(()=>{
        setresult(props.res)
    },[props.lib])



    return (
        <div className="ui icon input" style={{ width: '100%'}}>
            <form  style={{ width: '100%'}} onSubmit={(e)=>{e.preventDefault();props.onsub(state,props.lib,result);setemoji(Spliter(state,props.lib,result))}}>
                <input type="text" placeholder="Enter Text" value={state} onChange={(e)=>{setstate(e.target.value)}}/>
                {emoji}

            </form>



        </div>
    )
}
export default SearchBar;


