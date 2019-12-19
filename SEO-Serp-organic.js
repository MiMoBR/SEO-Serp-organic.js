(function() {
    clear();
    let words = [];

    function uniq(value, index, self) { 
        return self.indexOf(value) === index;
    }
    
    
    let selector = '#rso > div > div > div > div > div > div.r > a';       
    const found = document.querySelectorAll(selector);       
    if (found.length > 0) {
        found.forEach((f) => {
            let text = f.href;                                                           
            if (text) {
                words.push(text);
            }
        });
    }

    words = words.filter(uniq);  
    console.log('Found ' + words.length);  
    console.log(words.join("\n"));
})();
