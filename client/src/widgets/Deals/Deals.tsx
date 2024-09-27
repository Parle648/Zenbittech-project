import DealCard from '../../entities/DealCard/DealCard';
import styles from './styles/deals.module.scss';

const Deals = () => {
  return (
    <div className={styles.block} id="#deals">
      <h2 className={styles.title}>Open Deals</h2>
      <DealCard
        name={'The marina tourch'}
        price={6500000}
        yieldPercent={9.22}
        soldPercent={75}
        dealDaysLeft={50}
        tiket={60000}
      />
    </div>
  );
};

export default Deals;
