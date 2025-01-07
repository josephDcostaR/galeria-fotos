import { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PhotoGrid from './components/PhotoGrid';
import Footer from './components/Footer';
import axios from 'axios';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=15');
        setPhotos(response.data);
      } catch (error) {
        console.error('Erro ao carregar as fotos:', error);
      }
    }
    fetchPhotos();
  }, []);

  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchTerm.toLowerCase())
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
