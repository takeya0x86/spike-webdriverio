describe('Select change event', () => {
  it('Select and check', () => {
    browser.url('https://takeya0x86.github.io/playground/0509_change_event.html');
    expect($('#selected')).toHaveText('-');

    $('#select1').selectByVisibleText('Option B');
    
    expect($('#select1 > option[value="B"]')).toBeSelected();
    expect($('#selected')).toHaveText('B'); // => fail
  });
});
