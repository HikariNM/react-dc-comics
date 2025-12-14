import style from './Footer.module.css';
import social from './FooterSocial'

function FooterSocial() {

    return (
        <>
            <div className={style.footerContainer}>

                <div className={style.LeftColumn}>
                    <a href="#"><span>SIGN-UP NOW!</span></a>
                </div>

                <div className={style.footerSocial}>
                    <h3>FOLLOW US</h3>
                    <ul>

                        {
                            social.map(ico => {
                                return <li key={ico.id}><a href={ico.href}><img src={ico.img} alt={ico.label} /></a></li>
                            })
                        }

                    </ul>
                </div>
            </div>

        </>
    );

}

export default FooterSocial;