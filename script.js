
const quotes=["Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer","ask not what your country can do for you -- ask what you can do for your country-John F. Kennedy","The only thing we have to fear is fear itself - Franklin D","If you are going through hell, keep going-Winston Churchill","No one can make you feel inferior without your consent-Eleanor Roosevelt" ];
function generateQuote() {
    const randomIndex=Math.floor(Math.random()*quotes.length);
    document.getElementById('quote').textContent=quotes[randomIndex];

}