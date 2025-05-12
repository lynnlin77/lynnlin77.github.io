import { FootPrintData } from "~/components/FootPrintMap.client";

export const footPrintsWithPicture: FootPrintData[] = [
  {
    position: [35.6895, 139.6917],
    image: "Tokyo.jpg",
    title: "Tokyo",
  },
  {
    position: [40.7128, -74.006],
    image: "NewYork.jpg",
    title: "New York City",
  },
];

export const footPrintsWithoutPicture: FootPrintData[] = [
  { position: [38.569512960965156, -109.54559200208108] },
  { position: [48.5704, 87.7517] },
];
