// src/GameScreen.jsx

import React, { useState } from 'react';
import './App.css'; 
import roundData from './data.js'; 
import ImageCard from './ImageCard.jsx'; 

function GameScreen() {

    const [selectedImageId, setSelectedImageId] = useState(null);
    
    const [score, setScore] = useState(0); // Başlangıç skoru 0
    const [lives, setLives] = useState(2); // Başlangıç hakkı 2 
 
    const handleImageSelect = (id) => {
        setSelectedImageId(id);
    };

    
    const handleGuess = () => {
        if (selectedImageId === null) {
            alert('Lütfen önce bir görsel seçin!');
            return;
        }

        const selectedImage = roundData.find(item => item.id === selectedImageId);

        if (selectedImage && selectedImage.isAi) {
            alert('Tebrikler! Doğru tahmin ettiniz.');
            setScore(score + 1);
        } else {
            alert('Yanlış tahmin! Bir hakkınızı kaybettiniz.');
            setLives(lives - 1);
            
            if (lives <= 1) { 
                 alert("Oyun bitti! Tüm haklarınız tükendi. Skorunuz: " + score);
            }

        }
    };

    return (
        <div className="game-container">
            
            {/* Skor ve hak durumu */}
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                <p style={{fontWeight: 'bold'}}>Skor: {score}</p>
                <p style={{fontWeight: 'bold', color: lives <= 1 ? 'red' : 'green'}}>Kalan Hak: {lives}</p>
            </div>
            
            <h2>Görsel Tahmin Ekranı</h2>
            <p>Aşağıdaki görsellerden hangisi yapay zeka ürünüdür?</p>

            <div className="image-grid">
                {roundData.map((image) => (
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
        </div>
    );
}   
export default GameScreen;