import { describe, expect, it } from "vitest";

import { getCloudinaryMediaUrl } from "./media";

describe("getCloudinaryMediaUrl", () => {
  it("accepts only secure Cloudinary media URLs", () => {
    const cloudinaryUrl =
      "https://res.cloudinary.com/dthervbn8/image/upload/process.png";

    expect(getCloudinaryMediaUrl(cloudinaryUrl)).toBe(cloudinaryUrl);
    expect(getCloudinaryMediaUrl("/uploads/process.png")).toBeNull();
    expect(getCloudinaryMediaUrl("https://example.org/process.png")).toBeNull();
    expect(
      getCloudinaryMediaUrl(
        "http://res.cloudinary.com/dthervbn8/image/upload/process.png",
      ),
    ).toBeNull();
  });
});
