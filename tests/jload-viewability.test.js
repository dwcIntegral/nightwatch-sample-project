describe('Jload', () => {
  it('should be in view', async (browser) =>{

    // listen befor opening test page
    
    await browser.url('http://localhost:3000/jload-ad/direct');
    
    const requestRegExp = RegExp(/\/jload\?/);
    const jloadRequest = await browser.waitForRequest(requestRegExp);

    console.log('[Nightwatch-Sample-Project]::jloadRequest', jloadRequest);

    await browser.expect.element('body').to.be.present;
      
    await browser.end();
  });
});
