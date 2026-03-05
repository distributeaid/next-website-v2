import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config"; // Adjust the path to your Tailwind config file

const theme = resolveConfig(tailwindConfig).theme;

export function getThemeLargeScreenWidth(): number {
  const screens = theme?.screens ?? {};
  return parseInt(screens["lg"]?.replace("px", "") ?? "1024", 10); //from region-page branch. Commenting out temporaril
}

let backgroundColorIndex = 0;
const colors = shuffle(
  getColors({
    swatches: ["navy", "purple", "rosemary", "turquoise", "beige"],
    weights: [50, 100],
  }),
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
