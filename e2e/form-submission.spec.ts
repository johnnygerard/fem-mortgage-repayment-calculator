import { expect, test } from "@playwright/test";

test.describe("Form submission", () => {
  test("succeeds with valid input", async ({ page }) => {
    await page.goto("/");
    const principalInput = page.getByLabel(/amount/i);
    const termInput = page.getByLabel(/term/i);
    const rateInput = page.getByLabel(/rate/i);
    const radioInput = page.getByLabel(/repayment/i);
    const mortgageResults = page.getByTestId("mortgage-results");

    await principalInput.fill("300000");
    await termInput.fill("25");
    await rateInput.fill("5.25");
    await radioInput.focus(); // Note that `check` does not work for unknown reasons
    await page.keyboard.press("Space");
    await page.keyboard.press("Enter");

    await expect(mortgageResults).toContainText("Your results");
    await expect(mortgageResults).toContainText("£1,797.74");
    await expect(mortgageResults).toContainText("£539,322.94");
  });
});
