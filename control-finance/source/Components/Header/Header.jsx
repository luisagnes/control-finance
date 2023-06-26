import Image from "next/image";
import styles from './Header.module.scss';
import HeaderMenu from "./HeaderMenu";
import useMenu from "@/source/hooks/useMenu";

const Header = () => {
    const [isVisible, toggleMenuHandler] = useMenu();

    return (
        <section className={styles.header}>
            <div className={styles.message}>
                <h1>opa irmão beleza?</h1>
                <h2>responda-me</h2>
            </div>
            <div className={styles.avatar}>
                <Image src='/avatar.png' alt="avatar" layout='fill' onClick={toggleMenuHandler}/>
                {isVisible && <HeaderMenu toggleMenuHandler={toggleMenuHandler}/>}
            </div>
        </section>
    )
}

export default Header;