import { expect, it } from "vitest";
import { render } from "@testing-library/react";
import SmartLink from "./SmartLink";

it("should use a ExternalLink for outside domains", async () => {
    const invocation = <SmartLink href="https://google.com/about">test1</SmartLink>;
    expect(
        (render(invocation).getByText("test1") as HTMLAnchorElement).target
    ).toBe("_blank");
});

it("should use a InternalLink for path only", async () => {
    const invocation = <SmartLink href="/about">test2</SmartLink>;
    expect(
        (render(invocation).getByText("test2") as HTMLAnchorElement).target
    ).toBe("");
});
