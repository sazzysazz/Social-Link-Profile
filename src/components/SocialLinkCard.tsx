import profilepic from "/src/assets/profilepic.jpg";

const SocialLinkCard = () => {
  return (
    <div className="relative bg-zinc-800 bg-opacity-50 backdrop-blur-lg w-80 sm:w-96 rounded-lg text-center text-white p-4 sm:p-5 space-y-3 shadow-lg animate-[popUpForm_1s_ease-out_forwards] animation-delay-[0.5s]">
      <img
        src={profilepic}
        alt="Profile"
        className="w-32 h-32 sm:w-48 sm:h-48 object-cover object-center mx-auto rounded-full"
      />
      <h1 className="text-2xl sm:text-3xl font-bold">Chao Visal</h1>
      <p className="font-bold text-yellow-500 text-sm sm:text-base">
        Welcome To My Social Links
      </p>
      <p className="font-semibold text-xs sm:text-sm">
        " Here’s where you can get to know me."
      </p>

      {/* Social Media Buttons */}
      <a
        href="https://web.facebook.com/Yoo.Sazz/"
        className="bg-zinc-700 block p-2 sm:p-3 rounded-md font-semibold items-center justify-center gap-2 text-sm sm:text-base transition-all duration-300 hover:bg-blue-500 group"
      >
        <i className="fab fa-facebook-f text-lg sm:text-xl transition-all duration-300 group-hover:scale-125 group-hover:text-white"></i>
        Facebook
      </a>

      <a
        href="https://www.instagram.com/_https.sazz/"
        className="bg-zinc-700 block p-2 sm:p-3 rounded-md font-semibold items-center justify-center gap-2 text-sm sm:text-base transition-all duration-300 hover:bg-red-400 group"
      >
        <i className="fab fa-instagram text-lg sm:text-xl transition-all duration-300 group-hover:scale-125 group-hover:text-white"></i>
        Instagram
      </a>

      <a
        href="https://t.me/ChaoVisal"
        className="bg-zinc-700 p-2 sm:p-3 rounded-md font-semibold flex items-center justify-center gap-2 text-sm sm:text-base transition-all duration-300 hover:bg-blue-400 group"
      >
        <i className="fab fa-telegram-plane text-lg sm:text-xl transition-all duration-300 group-hover:scale-125 group-hover:text-white"></i>
        Telegram
      </a>

      <a
        href="https://github.com/sazzysazz"
        className="bg-zinc-700 block p-2 sm:p-3 rounded-md font-semibold items-center justify-center gap-2 text-sm sm:text-base transition-all duration-300 hover:bg-gray-500 group"
      >
        <i className="fab fa-github text-lg sm:text-xl transition-all duration-300 group-hover:scale-125 group-hover:text-white"></i>
        GitHub
      </a>
      <a
        href="https://sazzysazz.github.io/Portfolio/"
        className="bg-zinc-700 block p-2 sm:p-3 rounded-md font-semibold items-center justify-center gap-2 text-sm sm:text-base transition-all duration-300 hover:bg-blue-400 group"
      >
        <i className="fas fa-briefcase text-lg sm:text-xl transition-all duration-300 group-hover:scale-125 group-hover:text-white"></i>
        Portfolio
      </a>
    </div>
  );
};

export default SocialLinkCard;
