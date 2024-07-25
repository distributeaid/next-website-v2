import { useState } from "react";
// import { shuffle } from "lodash";
import resolveConfig from "tailwindcss/resolveConfig";
import config from "../../tailwind.config";
import { DefaultColors } from "tailwindcss/types/generated/colors.js";
import tailwindConfig from "../../tailwind.config"; // Adjust the path to your Tailwind config file

interface KeyValuePair<K, V> {
  [key: string]: V;
}

interface TimelineItem {
  period: string;
  description: string;
}

interface MissionStatement {
  missionStatement: string;
  aboutOurMission: string;
  timeline: TimelineItem[];
}

const theme = resolveConfig(tailwindConfig).theme;

export function getThemeLargeScreenWidth(): number {
  const screens = theme?.screens ?? {}; // {sm: '640px', md: '768px', lg: '1024px', xl: '1280px', 2xl: '1536px'}
  // const screens = theme?.screens as unknown as
  //   | Record<string, string>
  //   | undefined;
  // return parseInt(screens?.["lg"]?.replace("px", "") ?? "1024", 10); 
  return parseInt(screens["lg"]?.replace("px", "") ?? "1024", 10); //from region-page branch. Commenting out temporaril
}

let backgroundColorIndex = 0;
const colors = shuffle(
  getColors({
    swatches: ["navy", "purple", "rosemary", "turquoise", "beige"],
    weights: [50, 100],
  })
);

export function getBackgroundColor(): string {
  const color = colors[backgroundColorIndex];
  backgroundColorIndex = (backgroundColorIndex + 1) % colors.length;
  return color;
}

export function getColors({
  swatches,
  weights,
}: {
  swatches: string[];
  weights: number[];
// <<<<<<< region-page
// }) {
//   const themeColors = theme?.colors as unknown as Record<string, Record<number, string>> | undefined; // {rosemary: {200: '#F2ECF5', 300: '#E9DFEE', etc}, etc}

//   const colors = [];

//   for (const swatch of swatches) {
//     for (const weight of weights) {
//       const swatchColors = themeColors?.[swatch] ?? {};
}): string[] {
  const themeColors = theme?.colors as unknown as Record<
    string,
    Record<number, string>
  >;

  const colors: string[] = [];
  if (!themeColors) return colors;

  for (const swatch of swatches) {
    const swatchColors = themeColors[swatch];
    if (!swatchColors) continue;

    for (const weight of weights) {
      const color = swatchColors[weight];
      if (color) {
        colors.push(color);
      }
    }
  }

  return colors;
}

export function getVisualizationColors({
  swatches,
  weights,
  randomize,
}: {
  swatches: string[];
  weights: number[];
  randomize: boolean;
}): string[] {
  const themeColors = theme?.colors as unknown as Record<
    string,
    Record<number, string>
  >;

  const colors: string[] = [];
  if (!themeColors) return colors;

  for (const swatch of swatches) {
    const swatchColors = themeColors[swatch];
    if (!swatchColors) continue;

    for (const weight of weights) {
      const color = swatchColors[weight];
      if (color) {
        colors.push(color);
      }
    }
  }

// <<<<<<< region-page
//   return colors;
// }
  if (randomize) {
    colors.sort(() => Math.random() - 0.5);
  }

  return colors;
}

// Utility function to shuffle an array
function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    temporaryValue: T,
    randomIndex: number;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}