import './App.css';

function App() {
  return (
    <div className="App">
     <h2>Choose your</h2>
     <h1>DESTINATION</h1>
     <div className='main'>
      <div className='main_left'>
        <p>Malaysia</p>
        <button className='main_button'>16 Tours</button>
      </div>
      <div className='main_right'>
        <div className='main_right_one dubai'>
        <p>Dubai</p>
        <button className='main_button'>16 Tours</button>

        </div>
        <div className='main_right_one greece'>
        <p>Greece</p>
        <button className='main_button'>16 Tours</button>

        </div>
        <div className=' singapore'>

        <p>Singapore</p>
        <button className='main_button'>16 Tours</button>
        </div>

      </div>
     </div>
     <button className='main_button'>View More</button>

    </div>
  );
}

export default App;
