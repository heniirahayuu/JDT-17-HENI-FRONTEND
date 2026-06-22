import React from "react";
import { useToken } from "../../hooks/useToken";
import { LogOut } from "lucide-react";

const Header = () => {
  const { logout } = useToken();
  return (
    <header className="flex items-center justify-between w-full py-4 px-6 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
          Hein Film
        </h1>
      </div>
      <button
        onClick={logout}
        className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition duration-300"
        style={{ fontFamily: 'Poppins' }}
      >
        <LogOut size={18} />
        Logout
      </button>
    </header>
  );
};

export default Header;