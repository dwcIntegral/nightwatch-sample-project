class NetworkRequest {
	allRequests = [];

	addRequest = (request) => {
		this.allRequests.push(request);
	};
}

const networkRequest = new NetworkRequest();

describe('Jload', () => {
  it('should be in view', async (browser) =>{

    // Maybe try CDP Events next?
    await browser.url('http://localhost:3000/jload-ad/direct');
    
    await browser.expect.element('body').to.be.present;

    const jloadTagRequestRegExp = RegExp(/\/jload\?/);
    const jloadRequest = await browser.waitForRequest(jloadTagRequestRegExp, networkRequest);
    
    console.log('Jload Tag Loaded');
    
    const impressionRequestRegExp = RegExp(/\/rfw\//);
    await browser.waitForRequest(impressionRequestRegExp, networkRequest);
    console.log('Recieved Impression Event');
    
    const inViewRequestRegExp = RegExp(/pingTime:1/);
    await browser.waitForRequest(inViewRequestRegExp, networkRequest);
    console.log('Recieved Viewability Ping');
    
    // Custom Pause command from nightwatch-network-requests
    await browser.customPause(2000)
     
    await browser.end();
  });
});
