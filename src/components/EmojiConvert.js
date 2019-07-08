import React,{useState} from 'react';

const EmojiConvert=(props)=>{

    var i=-1;
   console.log(props.text)
   return props.text[0].map((txt)=>{
       console.log(txt)
       i++;
       if(props.URLS[i])
       {
           return(
               <div>
                   <span >{txt}</span>
                   <img src={props.URLS[i]} style={{display:'block',float:'left',width:'25px',height:'25px'}}/>
               </div>
           )
       }

       else{
           return(
               <div>
                   <span >{txt}</span>
               </div>
           )
       }


   })


}

export default EmojiConvert;