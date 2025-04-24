import { GameProvider } from "./context/GameContext";

function App() {
  return (
    <GameProvider>
      <div className="justify-center content-center flex">
        <main className="w-5/12 flex flex-col min-h-screen p-4 bg-gray-100 dark:bg-zinc-900 text-black dark:text-white transition-all">
          <h1 className="text-4xl font-bold text-center mb-6">
            🪨 Truff Hero
          </h1>
          <div className="flex flex-1 gap-6">
            asd
          </div>
        </main>
      </div>
    </GameProvider>
  );
}

export default App;
