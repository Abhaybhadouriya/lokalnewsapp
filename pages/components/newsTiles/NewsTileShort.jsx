import React,{useState} from 'react'
import styles from './css/NewsTileShort.module.css'
import Image from 'next/image'
import Moment from 'react-moment';

const NewsTileShort = (props) => {
const [picUrl, setpicUrl] = useState('news.jpg');
const [time, settime] = useState('')
  React.useEffect(() => {
   
   
    props.urlpic===null?setpicUrl('news.jpg'):setpicUrl(props.urlpic)
    { props.urlpic===null?'news.jpg':props.urlpic}
  }, [])
  return (
    <div className={styles.outer} >
          <div style={{backgroundImage:'url('+props.urlpic+')'}} className={styles.bg}></div>
     
        <div className={styles.details}>
        <div className={styles.inner} >
            <span className={styles.title}>{props.title}</span>
            <span className={styles.by}>{props.by}</span>
            <span className={styles.date}> <Moment format="DD-MM-YYYY">{props.date}</Moment> </span>
            <a target='_blank'  rel="noreferrer"  href={props.url}><span className={styles.readmore} >readmore</span></a>
        </div>
        </div>
    </div>
  )
}

export default NewsTileShort