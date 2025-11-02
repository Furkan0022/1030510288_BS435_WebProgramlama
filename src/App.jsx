// src/App.jsx
import React, { useState } from 'react'; 
import BaslangicEkrani from './components/BaslangicEkrani';
import './App.css'; // Stil dosyamızı (içi boş olsa da) import edelim

function App() {
  // Oyunun durumunu yöneten state.
  const [oyunDurumu, setOyunDurumu] = useState('baslangic'); // 'baslangic', 'oyun', 'sonuc'

  const oyunuBaslat = () => {
    setOyunDurumu('oyun');
  };

  let ekranIcerigi;

  if (oyunDurumu === 'baslangic') {
    ekranIcerigi = <BaslangicEkrani onStart={oyunuBaslat} />;
  } else if (oyunDurumu === 'oyun') {
    ekranIcerigi = <h1>ANA OYUN EKRANI BURADA OLACAK</h1>;
  } else if (oyunDurumu === 'sonuc') {
    ekranIcerigi = <h1>SONUÇ EKRANI BURADA OLACAK</h1>;
  }

  return (
    <div className="oyun-kutusu">
      {ekranIcerigi}
    </div>
  );
}

export default App;