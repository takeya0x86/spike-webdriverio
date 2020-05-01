describe('iframe Switching', () => {
  it('Switch to Frame', () => {
    browser.url('https://takeya0x86.github.io/playground/0502_base.html');
    expect($('#paragraph-1')).toHaveText('paragraph 1 - base page');
    browser.switchToFrame($('iframe[name="iframe-1"]'));
    expect($('#paragraph-2')).toHaveText('paragraph 2 - iframe page');
    browser.switchToFrame(null);
    expect($('#paragraph-3')).toHaveText('paragraph 3 - base page');
  });
});