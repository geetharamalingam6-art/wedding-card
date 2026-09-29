export default async function run(page, ui) {
  await page.setViewportSize({ width: 1440, height: 950 })
  await page.goto('http://localhost:5174/')
  await page.waitForTimeout(600)

  // Click the heart icon in the navbar to reach the Wishlist view.
  await page.locator('.nav-actions svg').nth(1).click()
  await page.waitForTimeout(600)

  const state = await page.evaluate(() => ({
    heading: document.querySelector('.related-heading')?.textContent?.trim(),
    cards: document.querySelectorAll('.wishlist-card-item').length,
    cols: getComputedStyle(document.querySelector('.wishlist-grid')).gridTemplateColumns,
    hasProductDetail: !!document.querySelector('.product-detail-section'),
    hasBuyNow: !!document.querySelector('.buy-now-btn'),
    scrollHeight: document.documentElement.scrollHeight,
  }))

  await page.screenshot({ path: 'wl-grid-desktop.png', fullPage: true })
  return state
}