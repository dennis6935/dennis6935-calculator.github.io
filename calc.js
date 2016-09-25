function compute() {
    var str = document.getElementById("data").value;
    var s = str.split(" ");
    var i=0;
    var sum = 0;
    
    for (i; i < s.length; i++) {
        sum += parseInt(s[i]);
    }
    
    var avg = sum/s.length;
    
    document.getElementById("result").innerHTML = "Average = " + avg.toFixed(2);
}

function computeMedian() {
    var str = document.getElementById("data").value;
    var s = str.split(" ");
    s.sort();
    var median = 0;
    
    if (s.length%2 !== 0) {
        median = s[(s.length/2)-0.5];
    }
    
    else if (s.length%2 === 0) {
        var number1 = s.length/2;
        var number2 = (s.length/2) - 1;
        median = (parseInt(s[number1]) + parseInt(s[number2]))/2;
    }
    
    document.getElementById("medianResult").innerHTML = "Median = " + median;
}

function computeTavg() {
    var str = document.getElementById("data").value;
    var s = str.split(" ");
    s.sort();
    
    var truncatedAvg = 0;
    var i = 1;
    var sum = 0;
    
    for (i; i < s.length-1; i++) {
        sum += parseInt(s[i]);
    }
    
    truncatedAvg = sum/(s.length-2);
    
    document.getElementById("truncatedResult").innerHTML = "Truncated Average = " + truncatedAvg.toFixed(2);
}
