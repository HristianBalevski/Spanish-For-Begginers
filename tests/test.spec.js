import { test, expect } from "@playwright/test";

const SERVER_URL = "http://127.0.0.1:8080/";

test.describe("Landing Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(SERVER_URL);
  });

  test("Page should load correctly", async ({ page }) => {
    await expect(page).toHaveTitle(/Spanish For Beginners/i);
  });

  test("Navigation menu should be present", async ({ page }) => {
    const nav = page.locator(".navigation-container nav");
    await expect(nav).toBeVisible();
    await expect(nav.locator("li")).toHaveCount(6);
  });

  test("Unit links should be present", async ({ page }) => {
    const unitNav = page.locator(".unit-links nav");
    await expect(unitNav).toBeVisible();
    await expect(unitNav.locator("li")).toHaveCount(10);
  });

  test("Main heading should be visible", async ({ page }) => {
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Spanish For Beginners");
  });

  test("Check if images load correctly", async ({ page }) => {
    const images = page.locator("img");
    await expect(images).toHaveCount(42);
    await images.first().scrollIntoViewIfNeeded();
    await expect(images.first()).toHaveAttribute("src", /images/);
  });

  test("Check if CSS styles are applied", async ({ page }) => {
    const mainContainer = page.locator(".navigation-container");
    await expect(mainContainer).toHaveCSS("display", "block");
  });

  test("Footer links should be present", async ({ page }) => {
    const footerLinks = page.locator("footer .icons a");
    await expect(footerLinks).toHaveCount(5);
    await expect(footerLinks.nth(0)).toHaveAttribute(
      "href",
      "https://www.facebook.com"
    );
    await expect(footerLinks.nth(1)).toHaveAttribute(
      "href",
      "https://www.instagram.com"
    );
    await expect(footerLinks.nth(2)).toHaveAttribute("href", "https://x.com/");
    await expect(footerLinks.nth(3)).toHaveAttribute(
      "href",
      "https://linkedin.com/"
    );
    await expect(footerLinks.nth(4)).toHaveAttribute(
      "href",
      "https://youtube.com/"
    );
  });
});
