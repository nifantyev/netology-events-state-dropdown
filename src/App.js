import './App.css';
import Dropdown from './components/Dropdown';

function App() {
  const items = [
    'Profile Information',
    'Change Password',
    'Become PRO',
    'Help',
    'Log Out',
  ];
  return <Dropdown caption="Account settings" icon="public" items={items} />;
}

export default App;
