export default function PhotoGrid({ photos }) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {photos.length > 0 ? (
          photos.map((photo) => (
            <div key={photo.id} className="relative group">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-48 object-cover rounded shadow group-hover:scale-105 transition-transform"
              />
              <p className="mt-2 text-center">{photo.title}</p>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center">Nenhuma foto encontrada</p>
        )}
      </div>
    );
  }
  