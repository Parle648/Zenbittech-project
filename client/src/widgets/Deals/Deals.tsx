import DealCard from '../../entities/DealCard/DealCard';
import styles from './styles/deals.module.scss';
import first from '../../shared/imgs/image-1.png';
import second from '../../shared/imgs/image-2.png';
import third from '../../shared/imgs/image-3.png';
import fourth from '../../shared/imgs/image-4.png';

const Deals = () => {
  return (
    <div className={styles.block} id="#deals">
      <h2 className={styles.title}>Open Deals</h2>
      <div className={styles.grid}>
        <DealCard
          name={'The marina tourch'}
          price={6500000}
          yieldPercent={9.22}
          soldPercent={75}
          dealDaysLeft={50}
          tiket={60000}
          background={first}
        />
        <DealCard
          name={'The marina tourch'}
          price={6500000}
          yieldPercent={9.22}
          soldPercent={75}
          dealDaysLeft={50}
          tiket={60000}
          background={second}
        />
        <DealCard
          name={'The marina tourch'}
          price={6500000}
          yieldPercent={9.22}
          soldPercent={75}
          dealDaysLeft={50}
          tiket={60000}
          background={third}
        />
        <DealCard
          name={'The marina tourch'}
          price={6500000}
          yieldPercent={9.22}
          soldPercent={75}
          dealDaysLeft={50}
          tiket={60000}
          background={fourth}
        />
      </div>
    </div>
  );
};

export default Deals;
