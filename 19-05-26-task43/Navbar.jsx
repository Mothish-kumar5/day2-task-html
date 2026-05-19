export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 border-b">
      <h1 className="font-bold text-xl">My Logo</h1>

      <div className="flex gap-4 mt-2 md:mt-0">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}