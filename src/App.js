import './index.css';
import { useEffect,useState } from 'react';
import Image from './components/Images';

function App() {

  const [images,SetImages]= useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then(
      response =>response.json().then(data =>{
        SetImages(data);
      })
    )
  },[]);
  return (
    <>
    <div>
        <Image data={images} />
    </div>
    </>
  );
}

export default App;
