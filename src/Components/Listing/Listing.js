import React, {useState} from "react";
import classes from './Listing.module.css'
import desktop from './bg-header-desktop.svg'
import List from "../List/List";
import data from '../../data.json'
import remove from './icon-remove.svg'
const Listing= ()=>{
    
    const [dat, setDat]= useState([...data])
    const [array, setArray]= useState([])
/**  */
const arr0=data.map((data)=>{
    return [data.id,data.role,data.level, ...data.tools,...data.languages]
})
const arr=dat.map((data)=>{
    return [data.id,data.role,data.level, ...data.tools,...data.languages]
})
const Tabs=(e)=>{
    setArray((val)=>{
        if (val.indexOf(e)===-1){  return [...val, e]    }
        else{ return val  } })
 const arr1=arr.filter((data)=>{ return data.indexOf(e)>=0})
 const arr2=arr1.map((data)=>{return data[0]})

const dat2= data.filter((data)=>{
     return  arr2.indexOf(data.id)>=0
})
  setDat(()=> {return [...dat2]}) 
}


const Remove=(e)=>{
const rr=e.target.parentElement.children[0].innerHTML
const arr5=[] 
for(let i=0;i<array.length;i++){
if (array[i]!==rr){
   arr5.push(array[i]) }}
setArray(()=>{return [...arr5]})

const arrx= arr0.map((data)=>{
    const check=[]
          for(let i=0; i<arr5.length;i++){
            if (data.indexOf(arr5[i])>=0){
              check.push(1)}
             else{
                return ''
             }
          }
      if(check.length===arr5.length){
        return  data
      }
       
}).map((data)=>{return data[0]})

console.log(arrx)

         const dat2= data.filter((data)=>{
            return  arrx.indexOf(data.id)>=0
       })
         setDat(()=> {return [...dat2]}) 
}
const clear=()=>{
    setArray(()=>{ return []})
    setDat(()=>{ return [...data]})
}

    return <React.Fragment>
<div  >
<img src={desktop}  className={classes.img} alt='header-desktop'/>
 
    </div>  

    {array.length?<section className={classes.sec}>
  
  <div className={classes.flex}>
  {array.map((data)=>{
   return <div className={classes.div}>
   <p className={classes.p1} >{data}</p>
   <img src={remove} onClick={Remove} className={classes.img1} alt='remove'/>
 </div>
  })}
  </div>
  <span  onClick={clear} className={classes.p2}>
clear
</span>
   </section>:''}
    {dat.map((datum, index)=>{

        return  <List Tabs={Tabs} id={index} key={datum.id} tools={datum.tools} lng={datum.languages} role={datum.role} level={datum.level} company={datum.company} contract={datum.contract} location={datum.location} postedAt={datum.postedAt} position={datum.position} new={datum.new} featured={datum.featured}/>
    })}
     
  

    </React.Fragment>
}
export default Listing