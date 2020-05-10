describe('Window Handles', () => {
  it('Window Handles', () => {
    browser.url('https://takeya0x86.github.io/playground/0510_base.html');
    expect($('h1')).toHaveText('Base page');
    expect(browser.getWindowHandles()).toHaveLength(1);

    $('#open-window').click();
    browser.pause(2000);
    browser.switchWindow('0510_new');
    expect($('h1')).toHaveText('New page');
    expect(browser.getWindowHandles()).toHaveLength(2);

    $('#close-window').click();
    browser.pause(2000);
    expect(browser.getWindowHandles()).toHaveLength(1); // => crash!!
  });
});
