import React, {useEffect, useState} from 'react';
import './App.css';
import QRCode from 'qrcode';
import { QRCodeSVG } from 'qrcode.react';

function App() {
  const bigString = 'hello to the many hats team!hello to the many hats team!hello to the many hats team!hello to the many hats team!hello to the many hats team!hello to the many hats team!hello to the' //180
  const smlString = 'hello to the many hats team!' //28

  const [src, setSrc] = useState()
  const [testObj, setTestObj] = useState({key: 7967, name: ''})

  useEffect(() => {
    QRCode.toDataURL(JSON.stringify(testObj)).then((data) => {
      setSrc(data);
    })
  }, [])

  const handleInput = (e) => {
    setTestObj({key: testObj.key, name: e.target.value})
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <textarea style={{marginTop: 20, marginBottom: 20, height: 150, width: 300}} onChange={(event) => handleInput(event)} />

      <QRCodeSVG size={200} value={JSON.stringify(testObj)} renderAs="svg" />,
    </div>
  );
}

export default App;
