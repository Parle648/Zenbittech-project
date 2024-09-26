import axios from 'axios';
import updateToken from '../../slcies/token-slice/updateToken';

const createUserRequest = async (data: {
  email: string;
  name: string;
  password: string;
}): Promise<any> => {
  try {
    const authToken = await axios.post('http://localhost:3000/users', {
      ...data,
    });

    if (authToken.data.token) {
      updateToken(authToken.data.token);
      return;
    }

    throw new Error(authToken.data);
  } catch (error) {
    // todo error handling logic
  }
};

export default createUserRequest;
