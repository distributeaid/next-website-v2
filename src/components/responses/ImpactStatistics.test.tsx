import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import type { ResponseImpactStatistics } from "@/utils/strapi/types";
import { ImpactStatistics } from "./ImpactStatistics";

afterEach(cleanup);

const section: ResponseImpactStatistics = {
  id: 1,
  heading: "By The Numbers",
  statistics: [
    { id: 1, label: "FIRST", value: 10, unit: "$", category: "currency" },
    { id: 2, label: "SECOND", value: 20, unit: null, category: "items" },
    { id: 3, label: "THIRD", value: 30, unit: null, category: "items" },
  ],
  cta: {
    id: 1,
    buttonText: "Donate",
    buttonLink: "https://example.org",
    bannerText: "Help Us Fund More Kits",
  },
};

describe("ImpactStatistics", () => {
  it("places the CTA in the featured card for three statistics", () => {
    render(<ImpactStatistics section={section} />);

    expect(
      within(screen.getByTestId("statistic-card-featured")).getByRole("link", {
        name: "Donate",
      }),
    ).toBeVisible();
  });

  it("places the CTA in the trailing card for four statistics", () => {
    const fourStatistics = {
      ...section,
      statistics: [
        ...section.statistics,
        {
          id: 4,
          label: "FOURTH",
          value: 40,
          unit: null,
          category: "time" as const,
        },
      ],
    };

    render(<ImpactStatistics section={fourStatistics} />);

    expect(
      within(screen.getByTestId("statistic-card-trailing")).getByRole("link", {
        name: "Donate",
      }),
    ).toBeVisible();
  });
});
