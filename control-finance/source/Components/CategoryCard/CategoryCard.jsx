import styles from './CategoryCard.module.scss';

const CategoryCard = () => {
    return(
        <div className={styles.card}>
            <div className={styles.edit}>
                <span>I</span>
            </div>
            <h2>Título</h2>
            <h3>R$ 17.800</h3>
            <h4>Alocado: 70%</h4>
        </div>
    );
};

export default CategoryCard;