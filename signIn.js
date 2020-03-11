// This function is used to naively simulate the signIn button click event on web page of Tencent Class.
// The number in setTimeout function is the Time interval of function loop; by default, this is 3,000 ms (3 seconds).
// As JavaScript is a Single thread language and setTimeout function is an asynchronous function, the time interval will not be absolutely accurate.

// Usage: 
// 1.Create a new bookmark, name it yourself;
// 2.Copy the text below and paste in the bookmark url in your browser; 
// 3.On the web page of Tencent Class, click the Bookmark then it works;
// Or you could copy the text and paste it in the console of developer tools.(Press F12 in Chrome browser)

javascript:((function signIn() {
    var xPathRes = document.evaluate('//html/body/div[2]/div[3]/div[2]/div/div[3]/span', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    if (xPathRes.singleNodeValue != null) {
        xPathRes.singleNodeValue.click();
    }
    setTimeout(signIn, 3000);
}))();

