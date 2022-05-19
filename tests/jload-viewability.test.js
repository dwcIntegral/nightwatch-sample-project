describe('Jload', () => {
  it('should be in view', async (browser) =>{

    // listen befor opening test page
    await browser.url('http://localhost:3000/jload-ad/direct');

    // Custom Pause command from nightwatch-network-requests
    await browser.customPause(2000)

    await browser.expect.element('body').to.be.present;
      
    await browser.end();
  });
});
