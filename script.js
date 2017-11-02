for(var i = 1; i < 100; i++) {
    var str = (i % 2 == 0 ? "twee " : "") + (i % 3 == 0 ? "drie " : "") + (i % 4 == 0 ? "vier " : "") + (i % 5 == 0 ? "vijf " : "") + (i % 6 == 0 ? "zes " : "") + (i % 7 == 0 ? "zeven " : "") + (i % 8 == 0 ? "acht " : "") + (i % 9 == 0 ? "negen " : "");
    str = (!str || 0 === str.length ? i + " is niet deelbaar" : i + " is deelbaar door: ") + str;
    console.log(str);
}