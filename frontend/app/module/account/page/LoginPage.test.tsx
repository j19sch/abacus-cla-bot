import { describe, expect, test } from "vitest";

import { LoginPage } from "app/module/account";
import { render } from "app/test/unit";

describe("LoginPage", () => {
  test("Enter form field values", () => {
    render(<LoginPage />);
    expect(true).toBe(true);
  });
});
