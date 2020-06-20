import puppeteer from 'puppeteer';

// Set timeout to 30 secs
jest.setTimeout(30000)

test('example of taking screenshot with puppeteer', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});
  
    await browser.close();
})


test('example of taking screenshot with puppeteer', async () => {
    // Headless false will mean it will spin up a chrome browser
    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.goto('https://sg.carousell.com/');

    // wait for 5 seconds to drag the screen to zoom
    await page.waitFor(5000);
    await page.type('[placeholder="Search for an item or user..."]', 'Cars')
    await page.type('[value="Cars"]', String.fromCharCode(13))

    // wait for 5 second for class to see the effect of entering
    await page.waitFor(5000);
    expect(page.url()).toEqual("https://sg.carousell.com/search/Cars?")

    await page.screenshot({path: 'carousell.png'});
    await browser.close();
})