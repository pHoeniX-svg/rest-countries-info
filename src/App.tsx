import { Route, Routes } from 'react-router-dom';
import {
  Layout
} from './components';
import './index.css';
import { Missing } from './pages';

enum ROLES {
  User = 2001,
  Editor = 1984,
  Admin = 5150,
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>


        {/* 404 route */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
