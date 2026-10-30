export default function TopBar() {
  return (
    <div className="bg-[#1f1c1e] w-full min-h-30 flex flex-row justify-between items-center px-10 ">
      <div className="flex items-center justify-center gap-10">
        <h1 className="text-5xl text-white tracking-tight font-black">C C W</h1>
      </div>
      <div className="fixed w-40 left-1/2 -translate-x-1/2">
        <button>orders</button>
        <button>cart</button>
        <button>acc</button>
      </div>
      <div className="flex gap-5">
        <button>orders</button>
        <button>cart</button>
        <button>acc</button>
      </div>
    </div>
  );
}
