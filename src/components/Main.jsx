import style from "./Main.module.css";
import MiddleSection from './MiddleSection'

function Main() {

    return (
        <>
            <main>
                <h2 className={style.content}>--&gt; Content goes here &lt;-- </h2>
                <MiddleSection />
            </main>
        </>
    );

}

export default Main;