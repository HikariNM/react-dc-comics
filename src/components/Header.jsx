import style from './Header.module.css';
import logo from '../assets/dc-logo.png'

const nav = [
    { id: 1, text: 'CHARACTERS', url: '#', active: false },
    { id: 2, text: 'COMICS', url: '#', active: true },
    { id: 3, text: 'MOVIES', url: '#', active: false },
    { id: 4, text: 'GAMES', url: '#', active: false },
    { id: 5, text: 'COLLECTIBLES', url: '#', active: false },
    { id: 6, text: 'VIDEOS', url: '#', active: false },
    { id: 7, text: 'FANS', url: '#', active: false },
    { id: 8, text: 'NEWS', url: '#', active: false },
    { id: 9, text: 'SHOP', url: '#', active: false },
];

function Header() {

    return (
        <>
            <header className={style.header}>
                <nav className={style.container}>
                    <a href="#"> <img src={logo} alt="" /></a>
                    {/* <ul>
                        <li><a href="#">CHARACTERS</a></li>
                        <li><a href="#">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">COLLECTIBLES</a></li>
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">FANS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                    </ul> */}
                    <ul>
                        {
                            nav.map(link => {
                                let selectedClass = link.active ? style.active : '';
                                return <li key={link.id} className={selectedClass}><a href={link.url}>{link.text}</a></li>
                            })
                        }
                    </ul>
                </nav>
            </header>
        </>
    );

}

export default Header;