import React, { useState } from 'react';
import './App.css'; 
import roundData from './data.js'; 
import ImageCard from './ImageCard.jsx'; 


const getRandomRound = (data) => {
    const aiImages = data.filter(item => item.isAi); // Tüm AI resimleri ayır
    const realImages = data.filter(item => !item.isAi); // Tüm gerçek resimleri ayır

    const selectedAi = aiImages[Math.floor(Math.random() * aiImages.length)];
    const selectedReals = [...realImages].sort(() => 0.5 - Math.random()).slice(0, 2);


    return [...selectedReals, selectedAi].sort(() => 0.5 - Math.random());
};

function GameScreen({ onBackToMenu }) {
    const [selectedImageId, setSelectedImageId] = useState(null);
    const [score, setScore] = useState(0); 
    const [lives, setLives] = useState(2); 
    const [isGameOver, setIsGameOver] = useState(false);
    const [message, setMessage] = useState('');
    

    const [currentData, setCurrentData] = useState(() => getRandomRound(roundData)); 

    const handleImageSelect = (id) => {
        setSelectedImageId(id);
    };

    const handleGuess = () => {
       
        const selectedImage = roundData.find(item => item.id === selectedImageId);
        
        if (selectedImage && selectedImage.isAi) {
            setMessage("✅TEBRİKLER! Doğru tahmin ettin.");
            setScore(score + 1);
           
            setCurrentData(getRandomRound(roundData)); 
        } else {
            const newLives = lives - 1;
            setLives(newLives);
            
            if (newLives <= 0) { 
                setIsGameOver(true); 
                return;
            } else {
                setMessage("❌Yanlış tahmin! Tekrar dene.");
            }
        }
        
        setTimeout(() => {
            setMessage('');
        }, 1500);
        setSelectedImageId(null);
    };

    const restartGame = () => {
        setScore(0);
        setLives(2);
        setIsGameOver(false);
        setSelectedImageId(null);
        setCurrentData(getRandomRound(roundData));
    };  

    return (
        <div className="game-container">
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                <p style={{fontWeight: 'bold'}}>Skor: {score}</p>
                <p style={{fontWeight: 'bold', color: lives <= 1 ? 'red' : 'green'}}>Kalan Hak: {lives}</p>
            </div>

            {isGameOver ? (
                <div style={{textAlign: 'center', padding: '40px'}}>
                    <h2 style={{color: 'red', fontSize: '32px'}}>OYUN BİTTİ!</h2>
                    <p style={{fontSize: '20px'}}>Toplam Skorun: <strong>{score}</strong></p>
                    <button 
                        className="start-button" 
                        onClick={restartGame}
                        style={{backgroundColor: '#4CAF50', marginTop: '20px'}}
                    >
                        YENİDEN BAŞLA
                    </button>
                    <button 
                        className="start-button" 
                        onClick={onBackToMenu} 
                        style={{backgroundColor: '#607D8B', marginTop: '10px'}} 
                    >
                        ANA MENÜYE DÖN
                    </button>
                </div>
            ) : (
                <>
                    <h2>Görsel Tahmin Ekranı</h2>
                    <p>Aşağıdaki görsellerden hangisi yapay zeka ürünüdür?</p>

                    <div className="image-grid">
                        {currentData.map((image) => (
                            <ImageCard
                                key={image.id}
                                data={image}
                                onSelect={handleImageSelect}
                                isSelected={image.id === selectedImageId}
                            />
                        ))}
                    </div> 
                  
                    {message && (
                        <div className={`game-message-overlay ${message.includes('✅') ? 'message-success' : 'message-error'}`}>
                            <div style={{ fontSize: '40px' }}>{message.includes('✅') ? '🎉' : '❌'}</div>
                            {message}
                        </div>
                    )}      

                    <button
                        className="start-button"
                        style={{marginTop: '40px'}}
                        onClick={handleGuess}
                        disabled={selectedImageId === null}
                    >
                        TAHMİN ET
                    </button>
                </>
            )}
        </div>
    );
} 

export default GameScreen;