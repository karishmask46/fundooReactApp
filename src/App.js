import './App.css';
import './components/Pages/Signin/sIGnin.jsx'
import './components/Pages/Signin/siGnin.css'
import Signin from './components/Pages/Signin/sIGnin.jsx';
import Signup from './components/Pages/Signup/sIGnup.jsx'
import Notes from './components/Notes/Notes';
import Noes from './components/Header/header';
import Dashboard from './components/dashboard/dashboard';
import Note1 from './components/takenote1/takeNote1';
import Note2 from './components/takenote2/takeNote2';
import Note3 from './components/takenote3/takeNote3';
import ColorPopper from './components/colorpopper/colorPopper';
function App() {
  return (
    <div className="App">
         <Signin/>
        {/* <Signup/> */}
        {/* <Notes/> */}
        {/* <Noes/> */}
        {/* <Dashboard/> */}
        {/* <Note1/> */}
        {/* <Note2/> */}
        {/* <Note3/> */}
       {/* <ColorPopper/> */}
    </div>
  );
}
export default App;
