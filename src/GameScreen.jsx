import React, { useState } from 'react';
import './App.css'; 
import roundData from './data.js'; 
import ImageCard from './ImageCard.jsx'; 

const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5); //eklendi
};


function GameScreen() {
    const [selectedImageId, setSelectedImageId] = useState(null);
    const [score, setScore] = useState(0); 
    const [lives, setLives] = useState(2); 
    const [isGameOver, setIsGameOver] = useState(false);
    const [currentData, setCurrentData] = useState(shuffleArray(roundData)); // verileri karıştırarak başlat

   
    const handleImageSelect = (id) => {
        setSelectedImageId(id);
    };

    const handleGuess = () => {
        if (selectedImageId === null) {
            alert('Lütfen önce bir görsel seçin!');
            return;
        }

        const selectedImage = roundData.find(item => item.id === selectedImageId);
        
        /*if (selectedImage && selectedImage.isAi) {
            alert("Doğru!");
            setScore(score + 1);
        }*/
        if (selectedImage && selectedImage.isAi) {
            alert("Doğru! Kartlar karıştırılıyor...");
            setScore(score + 1);
            setCurrentData(shuffleArray(roundData)); // DOĞRU TAHMİNDE KARTLARI KARIŞTIR
            }
             else {
            const newLives = lives - 1;
            setLives(newLives);
            
            if (newLives <= 0) { 
                setIsGameOver(true); 
                return;
            } else {
                alert("Yanlış! Bir hakkın gitti.");
            }
        }
        setSelectedImageId(null);
    };

    const restartGame = () => {
        setScore(0);
        setLives(2);
        setIsGameOver(false);
        setSelectedImageId(null);
        setCurrentData(shuffleArray(roundData)); // Oyunu yeniden başlatırken kartları karıştırması için
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
                </div>
            ) : (
                <>
                    <h2>Görsel Tahmin Ekranı</h2>
                    <p>Aşağıdaki görsellerden hangisi yapay zeka ürünüdür?</p>

                   {/* <div className="image-grid">
                        {roundData.map((image) => (
                            <ImageCard
                                key={image.id}
                                data={image}
                                onSelect={handleImageSelect}
                                isSelected={image.id === selectedImageId}
                            />
                        ))}
                    </div>/*/}

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