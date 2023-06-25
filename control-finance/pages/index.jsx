import Header from "@/source/Components/Header/Header";
import styles from '../styles/initial.module.scss'
import AllCards from "@/source/Components/CategoryCard/AllCards";

export default function Home() {
    return (
        <main className={styles.main}>
        <Header />
        <AllCards />
        </main>
    )
}