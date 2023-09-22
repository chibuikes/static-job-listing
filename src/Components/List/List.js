import React from "react";
import classes from './List.module.css'
import photosnap from './photosnap.svg'
import manage from './manage.svg'
import account from './account.svg'
import myhome from './myhome.svg' 
import loop from './loop-studios.svg'
import face from './faceit.svg'
import short from './shortly.svg'
import insure from './insure.svg'
import eyecam from './eyecam-co.svg'
import air from './the-air-filter-company.svg'

const List =(props)=>{
   const arr=[photosnap,manage,account,myhome,loop,face,short,insure,eyecam,air]
   
   const Tabs=(e)=>{
     props.Tabs(e.target.innerHTML)
   }
   
   return <React.Fragment>
         <section className={props.featured?`${classes.sect}`:`${classes.sec}`}>

<div className={classes.main}>
<img src={arr[props.id]}  className={classes.img} alt={props.company}/>

<div className={classes.div1}>
<div className={classes.div2}>
<p className={classes.p1}>{props.company}</p>
{props.new?<p className={classes.p2}>New!</p>:<p className={classes.hide}>New!</p>}
{props.featured? <p className={classes.p3}>featured</p>:<p className={classes.hide}>featured</p>}
</div>
<div className={classes.div3}>{props.position}</div>
<div className={classes.div4}>
<p>{props.postedAt}</p>
<p>.</p>
<p>{props.contract}</p>
<p>.</p>
<p>{props.location}</p>
</div>
</div>
</div>
<div className={classes.flex}>
<p className={classes.tabs} onClick={Tabs}>{props.role}</p>
<p className={classes.tabs} onClick={Tabs}>{props.level}</p>
{props.tools.map((data)=>{return <p className={classes.tabs} onClick={Tabs}>{data}</p>})}
{props.lng.map((data)=>{return <p className={classes.tabs} onClick={Tabs}>{data}</p>})}

</div>
</section>
    </React.Fragment>
}
export default List