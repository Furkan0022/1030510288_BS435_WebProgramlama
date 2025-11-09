import './App.css'
const AiIcon = '🤖'; 

function App() {
  return (
    <div className="game-container">
      
      {/* Başlık ve Simge */}
      <div className="header-section">
        <span className="ai-icon">{AiIcon}</span>
        <h1 className="game-title">AI mı Gerçek mi Oyunu</h1>
        <p className="game-subtitle">Hangi görselin yapay zeka ürünü olduğunu bulabilir misin?</p>
      </div>

      {/*Kural Kartı */}
      <div className="rules-card">
        <h2>Nasıl Oynanır?</h2>
        <ol className="rules-list">
          <li>3 adet görsel gösterilecektir.</li>
          <li>İkisi gerçek fotoğraf, biri AI ürünüdür.</li>
          <li>AI olduğunu düşündüğünüz görseli seçin.</li>
          <li>İlk tahmininiz yanlışsa ipucu alırsınız.</li>
          <li>AI görselini bulmak için 2 şansınız vardır.</li>
        </ol>
      </div>
      
      {/* Başla Butonu */}
      <button className="start-button">OYUNA BAŞLA</button>
      
    </div>
  )
}

export default App

























/*function App() {
  return (
    <div className="game-container">
      <h2>AI mi Gerçek mi Oyununa Hoş Geldiniz!</h2>
      <p>Bu oyunda, yapay zeka tarafindan üretilmiş olan görseli bulmaniz gerekiyor.</p>
      <p>Her turda size üç görsel sunulacak. </p>
         İki tanesi gerçek fotoğraf, bir tanesi ise 
         yapay zeka ürünüdür. İlk tahmininiz yanliş çikarsa, size bir ipucu verilecektir.
         Başlamak için butona tiklayin ve yapay zekayi alt edin!
      
      
      <button className="start-button">OYUNA BAŞLA</button> 
      
    </div>
  )
}

export default App*/