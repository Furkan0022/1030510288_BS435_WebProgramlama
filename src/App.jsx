import React, { useState } from 'react';
import GameScreen from './GameScreen.jsx';
import './App.css'; 

const AiIcon = '🤖'; 

function App() {

    const [gameState, setGameState] = useState('start'); 
    
    const startGame = () => {
        setGameState('game');
    };
    if (gameState === 'start') {
        return (
            <div className="game-container">
                
                {/* Başlık ve Simge */}
                <div className="header-section">
                    <span className="ai-icon">{AiIcon}</span>
                    <h1 className="game-title">AI mı Gerçek mi Oyunu</h1>
                    <p className="game-subtitle">Hangi görselin yapay zeka ürünü olduğunu bulabilir misin?</p>
                </div>
                
                {/* Kural Kartı */}
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
                
                <button 
                    className="start-button"
                    onClick={startGame} 
                >
                    OYUNA BAŞLA
                </button>
            </div>
        );
    } 

    if (gameState === 'game') {
       
        return (
            <GameScreen /> 
        );
    }

    return null;
}

export default App;