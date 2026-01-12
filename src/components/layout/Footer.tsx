export function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-8">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
        <p className="text-mono text-gray-500">
          {new Date().getFullYear()} WARD VAN GESTEL
        </p>
        <p className="text-mono text-gray-500">
          CREATIVE DEVELOPER
        </p>
      </div>
    </footer>
  );
}
