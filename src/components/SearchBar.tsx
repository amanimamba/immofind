interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="flex gap-4 p-4 bg-slate-100 rounded-lg">
      <input
        type="text"
        placeholder="Rechercher par quartier, type ou localisation..."
        onChange={(e) => onSearch(e.target.value)}
        className="flex-grow p-2 border border-slate-300 rounded-md"
      />
    </div>
  );
}
