
const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
              HeinFilm
            </h3>
            <p className="text-gray-600 text-sm mt-1">Jelajahi dunia film dengan mudah</p>
          </div>
          <div className="text-center text-gray-600 text-sm">
            <p>© 2026 HeinFilm. All rights reserved.</p>
            <p>Powered by Indivara</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-pink-500 hover:text-pink-600 font-semibold transition">
              Tentang
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-600 font-semibold transition">
              Privasi
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-600 font-semibold transition">
              Kontak
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;