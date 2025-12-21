import Cards from './Card'
import comics from '../data/comics'
import style from './Card.module.css'

function MainCards() {
    return <div className={style.cardsContainer}>
        {
            comics.map(p => {
                return <Cards key={p.id} thumb={p.thumb} title={p.title} series={p.series} />
            })
        }
    </div >

}

export default MainCards
