import style from './Card.module.css'

function Cards(props) {

    const { thumb, title, series, id } = props;


    return <div className={style.card} key={id}>
        <img src={thumb} alt={title} />
        <p>{series.toUpperCase()}</p>
    </div>


}


export default Cards;