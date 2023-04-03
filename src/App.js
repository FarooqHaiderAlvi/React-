
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Counter from './Components/Counter';




function App() {
  return (
    <>
    
    <div >
     <Navbar title="eCommerce"/> 
     <div className="container my-3">
     
     <TextForm title="Use This Text"/>
     <Counter/>
     </div>
    
    </div>
    </>
  );
}

export default App;

//if you are using jsx in react you can only return one element at a time
//we must wrap our jsx into one tag like <> </> and it is called jsx fragment(<></>)