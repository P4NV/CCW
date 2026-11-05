import List from "@/components/complex ui components/List.tsx";

export default function Listing() {
  const Markerdata = {
    name: "Pakostane",
  };
  const Y = 15.5089;
  const X = 43.9072;

  return (
    <div className="flex flex-col w-full bg-white/5 h-full rounded-2xl py-5">
      <List Center={[Y, X]} markerInfo={Markerdata} MarkerLong={Y} MarkerLat={X} />
    </div>
  );
}
