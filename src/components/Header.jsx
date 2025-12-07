import style from './Header.module.css';
import logo from '../assets/dc-logo.png'

function Header() {

    return (
        <>
            <header className={style.header}>
                <nav className={style.container}>
                    <img src={logo} alt="" />
                    <ul>
                        <li><a href="#">CHARACTERS</a></li>
                        <li><a href="#">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">COLLECTIBLES</a></li>
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">FANS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                    </ul>
                </nav>
            </header>
        </>
    );

}

export default Header;