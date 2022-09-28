import React from 'react'
import styles from './css/header.module.css';

const Header = (props) => {
  const [query,setquery] = React.useState('')
  return (
    <div className={styles.outer}>
      <input className={styles.input}  onChange={(e)=>setquery(e.target.value)} placeholder="Search"/>
      <button className={styles.search} onClick={()=>props.searchNews(query)}><i className="fa fa-search" aria-hidden="true"/></button>
    </div>
  )
}

export default Header