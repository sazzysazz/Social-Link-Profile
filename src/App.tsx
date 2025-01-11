import SocialLinkCard from "./components/SocialLinkCard";  

const App = () => {
  return (
    <div className="relative h-screen w-full bg-slate-950 flex justify-center items-center">
      <div className="absolute h-full w-full overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]" />
      </div>
      <SocialLinkCard />
    </div>
  );
};

export default App;
