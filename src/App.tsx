import "./App.css";
import SideBar from "./components/SideBar.tsx";
import TopBar from "./components/TopBar.tsx";

function App() {
  return (
    <main className="bg-mauve-950 min-h-svh w-full">
      <TopBar />
      <SideBar />
    </main>
  );
}

export default App;
