import style from './Footer.module.css';
import navLink from './FooterNavLinks'

function FooterNav() {

    return (
        <>
            <div className={style.footerNavLinkContainer}>
                <div className={style.footerLogo}>
                    <div className={style.leftNavLink}>
                        {
                            navLink.filter(e => e.id === 1 || e.id === 2).map(link => {
                                return (<div>

                                    <h3>{link.title}</h3>
                                    <ul>
                                        {
                                            link.item.map((item) => {
                                                return <li key={item.id}><a href={item.url}>{item.text}</a></li>
                                            })
                                        }
                                    </ul>
                                </div>
                                )
                            })
                        }
                    </div>

                    {
                        navLink.filter(e => e.id === 3).map(link => {
                            return <div className={style.middleNavLink}>
                                <h3>{link.title}</h3>
                                <ul>
                                    {
                                        link.item.map(item => {
                                            return <li key={item.id}><a href={item.url}>{item.text}</a></li>
                                        })

                                    }
                                </ul>
                            </div>
                        })
                    }

                    {
                        navLink.filter(e => e.id === 4).map(link => {
                            return (<div key={link.id} className={style.rightNavLink}>
                                <h3>{link.title}</h3>
                                <ul>
                                    {
                                        link.item.map(item => {
                                            return <li key={item.id}><a href={item.url}>{item.text}</a></li>
                                        })
                                    }
                                </ul>
                            </div>)
                        })
                    }

                </div>
            </div>
        </>
    );

}

export default FooterNav;