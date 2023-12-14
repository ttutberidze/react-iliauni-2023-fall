import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
