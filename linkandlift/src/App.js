import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <body>

      <div className="container">
        <h1>Link and Lift</h1>
        <form action="/submit" method="POST">
          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="text" name="flightInfo" placeholder="Flight Info (Flight Number, Airline)" required/>
          <input type="text" name="airport" placeholder="Airport" required/>
          <button type="submit">Find a Match</button>
        </form>
        <footer>
          <p>Share the ride. Split the fare. Save the planet.</p>
        </footer>
      </div>

      </body>
  );
}

export default App;
