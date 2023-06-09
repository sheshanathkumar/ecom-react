import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Registration from './component/registration';
import AdminPanel from './component/adminpannel/adminboard';

function App() {
  return (
    <div className='container'>
      <AdminPanel />
    </div>
  );
}

export default App;
