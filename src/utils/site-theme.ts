import { useState } from "react";
import { shuffle } from "lodash";
import resolveConfig from "tailwindcss/resolveConfig";
import config from "../../tailwind.config";
import { DefaultColors } from "tailwindcss/types/generated/colors.js";

const theme = resolveConfig(config).theme;
console.log(theme.colors, 'theme')
export function getThemeLargeScreenWidth() {
  const screens = theme?.screens ?? {}; // {sm: '640px', md: '768px', lg: '1024px', xl: '1280px', 2xl: '1536px'}
  return parseInt(screens["lg"]?.replace("px", "") ?? "1024", 10);
}

let backgroundColorIndex = 0;
const colors = shuffle(
  getColors({
    swatches: ["navy", "purple", "rosemary", "turquoise", "beige"],
    weights: [50, 100],
  })
);

export function getBackgroundColor() {
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
}) {
  const themeColors = theme?.colors as unknown as Record<string, Record<number, string>> | undefined; // {rosemary: {200: '#F2ECF5', 300: '#E9DFEE', etc}, etc}

  const colors = [];

  for (const swatch of swatches) {
    for (const weight of weights) {
      const swatchColors = themeColors?.[swatch] ?? {};
      const color = swatchColors[weight];
      if (color) {
        colors.push(color);
      }
    }
  }

  return colors;
}

// export function useVisualizationColors({ swatches, weights, randomize }) {
//   const themeColors = theme?.colors ?? {}; // {rosemary: {200: '#F2ECF5', 300: '#E9DFEE', etc}, etc}

//   const [colors, setColors] = useState([]);

//   useState(() => {
//     const newColors = [];
//     for (const [swatch, colorsByWeight] of Object.entries(themeColors)) {
//       if (swatches.includes(swatch)) {
//         for (const [weight, color] of Object.entries(colorsByWeight)) {
//           if (weights.includes(parseInt(weight))) {
//             newColors.push(color);
//           }
//         }
//       }
//     }

//     if (randomize) {
//       shuffle(newColors);
//     }

//     setColors(newColors);
//   }, [swatches, weights, randomize]);

//   return colors;
// }
