import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@/components/ui/avatar.tsx";
import { useState } from "react";
import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import { Map, MapMarker, MarkerContent, MarkerPopup, MarkerTooltip } from "@/components/ui/map.tsx";

type MarkerInfo = {
  name: string;
};

export default function List({
  imgSrc,
  Center,
  MarkerLong,
  MarkerLat,
  markerInfo,
}: {
  imgSrc?: string;
  Center: [number, number];
  MarkerLong: number;
  MarkerLat: number;
  markerInfo: MarkerInfo;
}) {
  const [expansion, setExpand] = useState(false);

  return (
    <div className="bg-gray-700 w-full h-fit py-3 px-4 flex justify-between flex-wrap">
      <div className=" flex flex-row w-full justify-between">
        <Avatar className="w-14 h-14" size="max">
          <AvatarImage src={imgSrc} className="rounded-sm" />
          <AvatarFallback className="rounded-none">CCW</AvatarFallback>
          <AvatarBadge color="green" />
        </Avatar>
        {expansion === false ? (
          <ChevronsUpDown
            className="text-white size-15 mr-2"
            onClick={() => setExpand(!expansion)}
          />
        ) : (
          <ChevronsDownUp
            className="text-white size-15 mr-2"
            onClick={() => setExpand(!expansion)}
          />
        )}
      </div>
      {expansion === true ? (
        <div className="flex flex-row justify-between h-60 w-full pt-5">
          cunti
          <div className="h-full w-80">
            <Map center={Center} zoom={12}>
              <MapMarker longitude={MarkerLong} latitude={MarkerLat}>
                <MarkerContent>
                  <div className="bg-primary size-4 rounded-full border-2 border-white shadow-lg" />
                </MarkerContent>
                <MarkerTooltip>{markerInfo.name}</MarkerTooltip>
                <MarkerPopup>
                  <div className="space-y-1">
                    <p className="text-foreground font-medium">{markerInfo.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {MarkerLat.toFixed(4)}, {MarkerLong.toFixed(4)}
                    </p>
                  </div>
                </MarkerPopup>
              </MapMarker>
            </Map>
          </div>
        </div>
      ) : null}
    </div>
  );
}
