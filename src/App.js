
import './App.css';
import CountTogether from './Components/CountTogether';
import Navbar from './Components/Navbar';






function App() {
  return (
    <>
    
    <div >
     <Navbar title="eCommerce"/> 
     <div className="container my-3">
     
     {/* <About/> */}
     <CountTogether/>
  
     </div>                       
                                    
    </div>                         
    </>
  );
}

export default App;

//if you are using jsx in react you can only return one element at a time
//we must wrap our jsx into one tag like <> </> and it is called jsx fragment(<></>)