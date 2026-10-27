export default function TopBar() {
  return (
    <div className="bg-[#1f1c1e] w-full h-20 flex flex-row justify-between items-center px-10 shadow-[0_1px_20px_rgba(,0,0,0.25)] shadow-white/20">
      <div className="flex items-center justify-center gap-10">
        <h1 className="text-5xl text-white tracking-tight font-black">C C W</h1>
        <div>
          <input
            className="placeholder:text-gray-500 placeholder:italic text-center border-2 border-white px-2 py-0.5 rounded-xl"
            placeholder="Search for anything..."
            type="text"
            name="search"
          ></input>
        </div>
      </div>
      <div className="flex gap-5">
        <button>orders</button>
        <button>cart</button>
        <button>acc</button>
      </div>
    </div>
  );
}
