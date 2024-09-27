import axios from 'axios';
import stateStore from '../../../app/store';
import { setDeals } from '../../../features/slcies/deals/deals-slice';

const getDeals = async (token: string) => {
  const dealsData = await axios(`http://localhost:3000/deals?token=${token}`);

  stateStore.dispatch(setDeals(dealsData.data));
};

export default getDeals;
