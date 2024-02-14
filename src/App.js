import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { ContentA } from './components/ContentA';
import { ContentB } from './components/ContentB';
import { SharedButton } from './components/SharedComponents';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='Content'>
        <ContentA/>
        <SharedButton onClick={() => alert('Content A')}>Click Me</SharedButton>  
        <br/><br/>
      </div>
      <br/><br/>
      <div className='Content'>
        <ContentB/>
        <SharedButton onClick={() => alert('Content B')}>Click Me</SharedButton>  
        <br/><br/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
