const AmazonScrap = async (page, text) => {
  await page.goto(
    `https://www.amazon.com/s?k=${text}&rh=n%3A283155&dc&language=es&qid=1654996255&rnid=2941120011&ref=sr_nr_n_1`
  );
  await page.waitForSelector("body");
  await page.evaluate(() => {
    let titles = document.getElementsByClassName(
      "a-size-medium a-color-base a-text-normal"
    );
    let prices = document.getElementsByClassName("a-price");
    for (let price of prices) {
      console.log(price.innerHTML);
    }
  });
  console.log(results);
};

module.exports = AmazonScrap;
