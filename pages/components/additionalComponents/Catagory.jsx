import React,{useState,useEffect} from 'react'
import styles from './css/Catagory.module.css'

const Catagory = (props) => {

    //  const changeSelect = (e) =>{
    //     // props.setcategory(e);
    //     props.changeCategory(e)
    //  }
  return (
    <div className={styles.outer}>
        <div style={{width:'100%',alignItems:'center',paddingRight:'10%',paddingLeft:'10%'}}>

            <select className={styles.input} id="category" onChange={(e)=> props.changeCategory(e.target.value)}>

            <option value="topheadlines" defaultValue>top-headlines</option>
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="general">General</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
            </select>
            </div>
    </div>
  )
}

export default Catagory