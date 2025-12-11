import style from './Footer.module.css';

function Footer() {

    return (
        <>
            <footer>
                {/* <div className={style.container}>
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
                </div> */}
                <div className={style.footerNavLinkContainer}>
                    <div className={style.footerLogo}>
                        <div className={style.leftNavLink}>
                            <h3>DC COMICS</h3>
                            <ul>
                                <a href=""> <li>Characters</li></a>
                                <a href=""> <li>Comics</li></a>
                                <a href=""> <li>Movies</li></a>
                                <a href=""> <li>TV</li></a>
                                <a href=""> <li>Games</li></a>
                                <a href=""> <li>Videos</li></a>
                                <a href=""> <li>News</li></a>
                            </ul>
                            <h3>SHOP</h3>
                            <ul>
                                <a href=""> <li>Shop DC</li></a>
                                <a href=""> <li>Shop DC Collectibles</li></a>
                            </ul>
                        </div>
                        <div className={style.middleNavLink}>
                            <h3>DC</h3>
                            <ul>
                                <a href=""> <li>Term Of Use</li></a>
                                <a href=""> <li>Privacy policy (new)</li></a>
                                <a href=""> <li>Ad Choices</li></a>
                                <a href=""> <li>Adversiting</li></a>
                                <a href=""> <li>Jobs</li></a>
                                <a href=""> <li>Subscriptions</li></a>
                                <a href=""> <li>Talent Workshops</li></a>
                                <a href=""> <li>CPSC Certificates</li></a>
                                <a href=""> <li>Ratings</li></a>
                                <a href=""> <li>Shop Help</li></a>
                                <a href=""> <li>Contact Us</li></a>
                            </ul>
                        </div>
                        <div className={style.rightNavLink}>
                            <h3>SITES</h3>
                            <ul>
                                <a href=""> <li>DC</li></a>
                                <a href=""> <li>MAD Magazine</li></a>
                                <a href=""> <li>DC Kids</li></a>
                                <a href=""> <li>DC Universe</li></a>
                                <a href=""> <li>DC Power Visa</li></a>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className={style.footerContainer}>

                    <div className={style.LeftColumn}>
                        <a href="#"><span>SIGN-UP NOW!</span></a>
                    </div>

                    <div className={style.footerSocial}>
                        <h3>FOLLOW US</h3>
                        <ul>
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
                </div>
            </footer >
        </>
    );

}

export default Footer;