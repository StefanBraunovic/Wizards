import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';

const { Altura } = require("@altura/altura-js")


function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/data/textfile.txt')
      .then(response => response.text())
      .then(data => {
        // Process the file contents here
        setData(data);
      });
  }, []);

  return (
    <div>
      {data.split('\n').map((row, index) => (
        <img width={300} height={300} src={`https://ordinals.com/content/${row}`} />
      ))}
    </div>
  );
}


export default App;
