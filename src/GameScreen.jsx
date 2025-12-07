// src/GameScreen.jsx

import React, { useState } from 'react';
import './App.css'; 
import roundData from './data.js'; 
import ImageCard from './ImageCard.jsx'; 

function GameScreen() {

    const [selectedImageId, setSelectedImageId] = useState(null);
    
 
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
        } else {
            alert('Yanlış tahmin!');
        }
    };


    return (
        <div className="game-container">
            <h2>Görsel Tahmin Ekranı</h2>
            <p>Aşağıdaki görsellerden hangisi yapay zeka ürünüdür?</p>
            
            <div className="image-grid">
                {roundData.map(image => (
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