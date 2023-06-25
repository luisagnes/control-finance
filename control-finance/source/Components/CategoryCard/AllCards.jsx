import CategoryCard from "./CategoryCard";
import styles from './AllCards.module.scss';

const AllCards = () => {
    return (
        <section className={styles.section}>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </section>
    )
}

export default AllCards;