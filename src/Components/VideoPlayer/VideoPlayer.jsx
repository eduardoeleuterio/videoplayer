import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function VideoPlayer() {
  const [videoUrl, setVideoUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Extraia o ID do vídeo do URL, se houver
    const videoId = videoUrl.split('v=')[1];
    // Verifique se um ID de vídeo foi encontrado
    if (videoId) {
      // Defina a nova rota com o ID do vídeo como parâmetro
      navigate(`/video?id=${videoId}`);
    } else {
      // Exiba uma mensagem de erro ou faça qualquer outra ação apropriada
      console.log('Link de vídeo inválido.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={videoUrl}
          placeholder="Cole o link do vídeo do YouTube aqui"
          onChange={(event) => setVideoUrl(event.target.value)}
        />
        <button type="submit">Abrir vídeo</button>
      </form>
    </div>
  );
}

export default VideoPlayer;
