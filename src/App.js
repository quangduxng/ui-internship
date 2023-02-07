import Content from './components/Content/Content';
import Tab from './components/Tab/Tab';
import './style.scss';

function App() {
  return (
    <div className='app'>
        <Tab className="tab" />
        <Content className="content" />
    </div>
  );
}

export default App;
