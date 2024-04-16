import './App.css';
import SidebarItems from './components/SidebarItems';
import Title from './components/Title';
import Progress from './components/Progress'
import BudgetGraph from './components/BudgetGraph';

function App() {
  return (
    <div className="App">
      <div className='sideNav'>
        <SidebarItems />
      </div>
      <div className='main-content'>
        <Title />
        <Progress />
        <BudgetGraph />
      </div>
    </div>
  );
}

export default App;
