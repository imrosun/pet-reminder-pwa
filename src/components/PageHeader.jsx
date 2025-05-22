export default function PageHeader({ title, onBack }) {
  return (
    <div className="p-4 flex justify-between items-center border-b bg-white">
      <button onClick={onBack} className="p-2">
        <span role="img" aria-label="Back">⬅️</span>
      </button>
      <h1 className="text-lg font-medium">{title}</h1>
      <div style={{ width: 40 }} /> {/* Spacer for symmetry */}
    </div>
  );
}
