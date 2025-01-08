import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PhotoGrid from './components/PhotoGrid';
import Footer from './components/Footer';
import './global.css';
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Função para carregar as fotos de gatos
  useEffect(() => {
    async function fetchPhotos() {
      try {
        // Modifiquei a URL para usar a API de gatos
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=15');
        
        // A resposta da API tem a estrutura diferente, então ajustamos a maneira de extrair as fotos
        setPhotos(response.data);
      } catch (error) {
        console.error('Erro ao carregar as fotos:', error);
      }
    }
    fetchPhotos();
  }, []);

  // Filtrando fotos com base no nome (ou características) dos gatos
  const filteredPhotos = photos.filter((photo) =>
    photo.id.toLowerCase().includes(searchTerm.toLowerCase()) // Alterei para filtrar pelo ID da foto
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PhotoGrid photos={filteredPhotos} />
      <Footer />
    </div>
  );
}

export default App;
