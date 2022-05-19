describe('Jload', () => {
  it('should be in view', async (browser) =>{

    await browser.url('http://localhost:3000/jload-ad/direct');

    await browser.getLogTypes((types) => {
          console.log('types', types)
      })

    await browser.expect.element('body').to.be.present;
      
    await browser.end();
  });

});
