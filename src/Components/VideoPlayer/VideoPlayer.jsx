import React, { useState } from 'react';

function VideoPlayer() {
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Extraia o ID do vídeo do URL
    const videoId = videoUrl.split('v=')[1];
    // Defina o URL de incorporação do vídeo
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    // Atualize o estado do componente com o URL de incorporação
    setVideoUrl(embedUrl);
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
      {videoUrl && (
        <div>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}



export default VideoPlayer;