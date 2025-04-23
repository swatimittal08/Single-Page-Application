import style from "./navbar.module.css"
import Logo from "./Logo"
import Menu from "./Menu"
import Button from "./Button"

const Navbar = () => {
    return(
        <div>
            <section id={style.nav}>
                <article>
                    <div className={style.Logo}><Logo /></div>
                    <div className={style.Menu}><Menu /></div>
                    <div className={style.Button}><Button /></div>
                </article>
            </section>           
        </div>              
    )
}

export default Navbar 