// src/components/BaslangicEkrani.jsx
import React from 'react';

const BaslangicEkrani = ({ onStart }) => {
  return (
    <div className="baslangic-container">
      <h1>Yapay Zeka mı, Gerçek mi?</h1>
      <p>
        Bu oyunda sana üç görsel sunulacak. Bu görsellerden ikisi gerçek fotoğraf ya da eser, 
        biri ise Yapay Zeka (AI) tarafından üretilmiştir.
      </p>
      <p>
        Amacın, yapay zeka tarafından üretilmiş olduğunu düşündüğün görseli bulmak. 
        Unutma, iki deneme hakkın var!
      </p>

      <button 
        onClick={onStart}
        className="baslat-butonu"
      >
        Oyna!
      </button>

      <div className="modlar">
        {/* Buraya sonradan zorluk modlarını ekleyeceğiz */}
        <p>Mevcut Mod: Standart</p>
      </div>
    </div>
  );
};

export default BaslangicEkrani;