import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import Library from './Library';
import axios from 'axios';
import {Spliter} from "./Spliter";
import './Emoji.css';
import first from 'emoji-datasource-apple/img/apple/64/1f92a.png';
import second from 'emoji-datasource-apple/img/apple/64/1f92f.png';
import third from 'emoji-datasource-apple/img/apple/64/1f60e.png';

const App=()=> {
    const [state, setresponse] = useState({response:[],library:'',URL:''})
    const [result,setresult]=useState([])

    const fetch = async () => {
        const res = await axios.get('https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json')
        setresponse({...state,response: res.data})
    }

    useEffect(() => {
        fetch();

    }, [])



    const filterres=(filtermode)=>{
        const  String='has_img_'+filtermode;
       const arr=state.response.filter((emoji)=>{
         return  emoji[String]
        })
        setresult(arr)
        setresponse({...state,library:filtermode})
    }
    if(state.response.length!==0) {
        return <div id={'main'}>
            <h1>Emoji Parser</h1>
            <Library choice={filterres}/>
            <SearchBar  lib={state.library} res={state.response} onsub={Spliter}/>
            <img src={first} style={{width:'100px',height:'100px'}}/>
            <img src={second} style={{width:'100px',height:'100px'}}/>
            <img src={third} style={{width:'100px',height:'100px'}}/>
        </div>
    }
    else{
        return <div id='myid'>
            <SearchBar result={state.response} onsub={Spliter}  />
        </div>
    }
}
export default App;