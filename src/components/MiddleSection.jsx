import style from './MiddleSection.module.css';

function MiddleSection() {

    return (
        <>
            <div className={style.container}>
                <ul className={style.shopLink}>
                    <li>
                        <img src="./src/assets/buy-comics-digital-comics.png" alt="" />
                        <a href="#"> DIGITAL COMICS </a>
                    </li>
                    <li>
                        <img src="./src/assets/buy-comics-merchandise.png" alt="" />
                        <a href="#"> DC MERCHANDISE </a>
                    </li>
                    <li>
                        <img src="./src/assets/buy-comics-subscriptions.png" alt="" />
                        <a href="#"> SUBSCIPTION </a>
                    </li>
                    <li>
                        <img src="./src/assets/buy-comics-shop-locator.png" alt="" />
                        <a href="#"> COMIC SHOP LOCATOR </a>
                    </li>
                    <li>
                        <img src="./src/assets/buy-dc-power-visa.svg" alt="" />
                        <a href="#"> DC POWER VISA </a>
                    </li>

                </ul>
            </div>
        </>

    )

};

export default MiddleSection;