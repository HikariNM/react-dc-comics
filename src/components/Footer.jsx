import style from './Footer.module.css';

function Footer() {

    return (
        <>
            <footer>
                <div className={style.container}>
                    <ul className={style.shopLink}>
                        <li>
                            <img src="./src/assets/buy-comics-digital-comics.png" alt="" />
                            <span> DIGITAL COMICS </span>
                        </li>
                        <li>
                            <img src="./src/assets/buy-comics-merchandise.png" alt="" />
                            <span> DC MERCHANDISE </span>
                        </li>
                        <li>
                            <img src="./src/assets/buy-comics-subscriptions.png" alt="" />
                            <span> SUBSCIPTION </span>
                        </li>
                        <li>
                            <img src="./src/assets/buy-comics-shop-locator.png" alt="" />
                            <span> COMIC SHOP LOCATOR </span>
                        </li>
                        <li>
                            <img src="./src/assets/buy-dc-power-visa.svg" alt="" />
                            <span> DC POWER VISA </span>
                        </li>

                    </ul>
                </div>
                <div className={style.footerNavLink}>

                </div>
                <div className={style.footerContainer}>

                    <div className={style.LeftColumn}>
                        <button>SIGN-UP NOW!</button>
                    </div>

                    <ul className={style.footerSocial}>
                        <li>
                            <h3>FOLLOW US</h3>
                        </li>
                        <li>
                            <img src="./src/assets/footer-facebook.png" alt="" />
                        </li>
                        <li>
                            <img src="./src/assets/footer-twitter.png" alt="" />
                        </li>
                        <li>
                            <img src="./src/assets/footer-youtube.png" alt="" />
                        </li>
                        <li>
                            <img src="./src/assets/footer-pinterest.png" alt="" />
                        </li>
                        <li>
                            <img src="./src/assets/footer-periscope.png" alt="" />
                        </li>
                    </ul>
                </div>
            </footer >
        </>
    );

}

export default Footer;