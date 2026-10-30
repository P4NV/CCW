import "./App.css";
import SideBar from "./components/SideBar.tsx";
import TopBar from "./components/TopBar.tsx";
import Listing from "./components/Listing.tsx";

function App() {
  return (
    <main className="bg-mauve-950 h-svh w-svw  max-h-svh max-w-svw flex flex-col">
      <TopBar />
      <div className="h-full w-full flex-row flex justify-end">
        <div className="px-20 py-10 h-full w-full flex">
          <Listing />
        </div>
        <SideBar />
      </div>
    </main>
  );
}

export default App;
