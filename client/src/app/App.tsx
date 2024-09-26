import { BrowserRouter, Route, Routes } from 'react-router-dom';
// todo lazy loading
import Main from '../pages/Main';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
