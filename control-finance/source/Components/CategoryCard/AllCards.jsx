import CategoryCard from './CategoryCard';
import styles from './AllCards.module.scss';
import NoCard from './NoCard';

const DUMMY_DATA = [
    {id: 1, title: 'essencial', amount: 300, percentage: 10},
    {id: 2, title: 'viagens', amount: 7400, percentage: 50},
    {id: 3, title: 'investimentos', amount: 1400, percentage: 40},
]

const AllCards = () => {
    const cards = DUMMY_DATA.map((category) => (
        <CategoryCard key={category.id} data={category}/>
        ));

    return (
        <section className={styles.section}>
            {cards}    
            <NoCard />
        </section>
    )
}

export default AllCards;