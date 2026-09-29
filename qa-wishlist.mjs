export default async function run(page, ui) {
  const results = {}

  for (const width of [1440, 1024, 762, 480]) {
    await page.setViewportSize({ width, height: 900 })
    await page.waitForTimeout(300)

    const state = await page.evaluate(() => {
      const grid = document.querySelector('.wishlist-grid')
      const cards = Array.from(document.querySelectorAll('.wishlist-card-item'))
      return {
        heading: document.querySelector('.related-heading')?.textContent?.trim(),
        cards: cards.length,
        cols: grid ? getComputedStyle(grid).gridTemplateColumns.split(' ').length : 0,
        gridWidth: grid ? Math.round(grid.getBoundingClientRect().width) : 0,
        cardWidth: cards[0] ? Math.round(cards[0].getBoundingClientRect().width) : 0,
        rows: new Set(cards.map(c => Math.round(c.getBoundingClientRect().top))).size,
        hasProductDetail: !!document.querySelector('.product-detail-section'),
        hasBuyNow: !!document.querySelector('.buy-now-btn'),
      }
    })
    results['w' + width] = state
  }

  // Back to desktop, then open a card.
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.waitForTimeout(200)
  await page.locator('.wishlist-card-item').first().click()
  await page.waitForTimeout(400)

  results.afterCardClick = await page.evaluate(() => ({
    hasProductDetail: !!document.querySelector('.product-detail-section'),
    hasBuyNow: !!document.querySelector('.buy-now-btn'),
    hasAddToCart: !!document.querySelector('.add-to-cart-btn'),
    hasSpecs: !!document.querySelector('.product-specs-section'),
    heading: document.querySelector('.related-heading')?.textContent?.trim(),
    selected: document.querySelectorAll('.wishlist-card-item.selected-card').length,
  }))

  await page.screenshot({ path: 'wl-desktop-after-click.png' })
  return results
}