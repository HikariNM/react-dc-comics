import style from './Footer.module.css';

function Footer() {

    return (
        <>
            <footer>
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
                <div className={style.footerNavLink}>

                </div>
                <div className={style.footerContainer}>

                    <div className={style.LeftColumn}>
                        <a href="#"><span>SIGN-UP NOW!</span></a>
                    </div>

                    <ul className={style.footerSocial}>
                        <li>
                            <h3>FOLLOW US</h3>
                        </li>
                        <li>
                            <a href="#"><img src="./src/assets/footer-facebook.png" alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="./src/assets/footer-twitter.png" alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="./src/assets/footer-youtube.png" alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="./src/assets/footer-pinterest.png" alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src="./src/assets/footer-periscope.png" alt="" /></a>
                        </li>
                    </ul>
                </div>
            </footer >
        </>
    );

}

export default Footer;