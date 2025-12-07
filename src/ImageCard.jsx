import React from 'react';

function ImageCard({ data, onSelect, isSelected }) { 
    
    const handleClick = () => {
        onSelect(data.id); 
    };

    return (
        <div 
            className={`image-card ${isSelected ? 'selected' : ''}`} 
            onClick={handleClick}
        >
            <img 
                src={data.url} 
                alt={`Tahmin görseli ${data.id}`} 
                className="game-image"
            />
        </div>
    );
}

export default ImageCard;