export default function SideBar() {
  // set state for minimal bar and normal sidebar transition and function
  const icons: any = [
    { name: "home", icon: "home" },
    { name: "offers", icon: "offers" },
  ];

  return (
    <div className="w-88 bg-[#1f1c1e] h-full flex flex-col items-center border-black border-t-3 px-5 pt-10 ">
      <div className="h-full w-full flex flex-col items-center gap-10">
        <input
          className="placeholder:text-gray-500 placeholder:italic text-center bg-gray-700 border-white px-2 py-0.5 rounded-xl"
          placeholder="Search for anything..."
          type="text"
          name="search"
        ></input>
        <div className="h-full w-full flex flex-col justify-start items-start">
          <div className="flex flex-col w-full text-white font-bold tracking-wider gap-2">
            {icons.map((i: any) => (
              <button key={i.icon} className="bg-[#312f30]">
                {i.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
