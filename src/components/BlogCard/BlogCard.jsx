import style from './BlogCard.module.css'
import Button from '../Button/Button'

export default function BlogCard(props) {
    console.log(props);
    
    return (

        <div className={style.BlogCard}>
            
            <img src={props.img} alt="" />
            <div className={style.content}>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <Button />
            </div>
        </div>



    )
}