import './SearchBar.css';

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="my-4 flex justify-center">
      <input
        type="text"
        placeholder="Pesquisar fotos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded px-4 py-2 w-2/3"
      />
    </div>
  );
}
