export default function SideBar() {
  // set state for minimal bar and normal sidebar transition and function
  const icons: any = [
    { name: "home", icon: "home" },
    { name: "offers", icon: "offers" },
  ];

  return (
    <div className="w-48 bg-[#1f1c1e] h-[85%] fixed left-5 top-28 rounded-2xl shadow-[2px_2px_20px_rgba(,0,0,0.05)] shadow-white/20">
      <div className="pt-10 h-full flex flex-col justify-start items-start">
        <div className="flex flex-col w-full text-white font-bold tracking-wider gap-2">
          {icons.map((i: any) => (
            <button key={i.icon} className="bg-[#312f30]">
              {i.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
