export default function SideBar() {
  // set state for minimal bar and normal sidebar transition and function
  const icons: any = [
    { name: "home", icon: "home" },
    { name: "offers", icon: "offers" },
  ];

  return (
    <div className="w-20 bg-mauve-950/80 h-svh fixed left-5 top-5">
      {icons.map((icon: any) => {
        return (
          <div key={icon.name} className=" w-12 h-12 bg-gray-700">
            btn
          </div>
        );
      })}
    </div>
  );
}
