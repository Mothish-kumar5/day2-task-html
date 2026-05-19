export default function Buttons() {
  return (
    <div className="flex gap-3">
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Primary
      </button>

      <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">
        Secondary
      </button>
    </div>
  );
}