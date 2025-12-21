import style from "./Main.module.css";
import MiddleSection from './MiddleSection'
import MainCards from './MainCards'


function Main() {

    return (
        <>
            <main>
                <div className={style.jumboContainer}></div>
                <div className={style.container}>
                    <span className={`${style.btn} ${style.pageTitle}`}>CURRENT SERIES</span>
                </div>

                <div className={`${style.container} ${style.flex}`}>
                    <MainCards />
                    <button className={`${style.loadBtn} ${style.btn}`}>LOAD MORE</button>
                </div>

                <MiddleSection />
            </main>
        </>
    );

}

export default Main;