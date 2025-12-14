import style from "./Main.module.css";
import MiddleSection from './MiddleSection'
import card from './comics'

function Main() {

    return (
        <>
            <main>
                {/* <h2 className={style.content}>--&gt; Content goes here &lt;-- </h2> */}
                <div className={style.jumboContainer}>
                    <span className={`${style.btn} ${style.pageTitle}`}>CURRENT SERIES</span>
                </div>

                <div className={style.container}>
                    <div className={style.cardsContainer}>
                        {
                            card.map(card => {
                                return <div className={style.card}>
                                    <img src={card.thumb} alt={card.title} />
                                    <p>{card.series.toUpperCase()}</p>
                                </div>
                            })
                        }
                        <button className={`${style.loadBtn} ${style.btn}`}>LOAD MORE</button>
                    </div>
                </div>



                <MiddleSection />
            </main>
        </>
    );

}

export default Main;