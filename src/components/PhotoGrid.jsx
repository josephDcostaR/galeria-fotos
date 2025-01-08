import './PhotoGrid.css';

export default function PhotoGrid({ photos }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {photos.length > 0 ? (
        photos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <img src={photo.url} alt={photo.title} className="photo-image" />
            <p>{photo.title}</p>
          </div>
        ))
      ) : (
        <p className="no-photos">Nenhuma foto encontrada</p>
      )}
    </div>
  );
}
