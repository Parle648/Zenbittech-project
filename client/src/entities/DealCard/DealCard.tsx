import styles from './styles/dealCard.module.scss';

const DealCard = ({
  name,
  price,
  tiket,
  yieldPercent,
  soldPercent,
  dealDaysLeft,
}: {
  name: string;
  price: number;
  tiket: number;
  yieldPercent: number;
  soldPercent: number;
  dealDaysLeft: number;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.innerWrapper}>
        <div className={styles.dealInfo}>
          <h3 className={styles.dealsName}>{name}</h3>
          <div className={styles.dealPrice}>{price} Dhs</div>
          <div className={styles.dealPrice}>Tiket - {tiket}</div>
        </div>
        <div>
          <div className={styles.dealYield}>Yield {yieldPercent}%</div>
          <div className={styles.dealDaysLeft}>Days left {dealDaysLeft}</div>
        </div>
        <div>
          <div className={styles.dealSold}>Sold {soldPercent}%</div>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
