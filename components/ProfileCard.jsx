"use client";

export default function ProfileCard() {
  return (
    <div className="bg-gray-900/80 backdrop-blur-lg border border-cyan-500/20 p-6 rounded-2xl w-80 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
      
      {/* Profil kép */}
      <div className="flex justify-center mb-4">
       
      </div>

      {/* Név */}
      <h2 className="text-2xl font-bold text-center text-cyan-400">
        Koter Kristóf -
        Csendes Károly
      </h2>

      {/* Leírás */}
      <p className="text-gray-400 text-center mt-2">
        App készítői<br />
        React • Next.js • Tailwind CSS
      </p>

      {/* Divider */}
      <div className="my-4 border-t border-gray-700"></div>
    </div>
    
  );
}