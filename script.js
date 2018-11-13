function squareNumber() {
    var numSquare = document.getElementById('square-input').value;
    var square = Math.round(100*Math.sqrt(numSquare))/100;
    
    document.getElementById('solution').innerHTML = ('The ' + 'result ' + 'of ' + 'squaring ' + 'the ' + 'number ' + numSquare + ' is ' + square + '.');
}

squareButton = document.getElementById('square-button');

squareButton.addEventListener('click', squareNumber);


function halfNumber(){
    var numHalf = document.getElementById('half-input').value;
    var half = Math.round(100*((document.getElementById('half-input').value)/2))/100;
    
    document.getElementById('solution').innerHTML = ('Half ' + 'of ' + numHalf + ' is ' + half + '.');
}

halfButton = document.getElementById('half-button');

halfButton.addEventListener('click', halfNumber);

function percentOf(){
    var fraction = document.getElementById('percent1-input').value;
    var whole = document.getElementById('percent2-input').value;
    
    var numPercentOf = Math.round(100*((document.getElementById('percent1-input').value)/(document.getElementById('percent2-input').value) * 100) )/100;
        
     document.getElementById('solution').innerHTML = (fraction + ' is '+ numPercentOf + '%' + ' of ' + whole);
}

percentButton = document.getElementById('percent-button');

percentButton.addEventListener('click', percentOf);

function areaOfCircle(){
    var radius = document.getElementById('area-input').value;
    var area = Math.round(100*(Math.PI*Math.pow((document.getElementById('area-input').value), 2)))/100;
    
    document.getElementById('solution').innerHTML = ('The ' +  'area ' + 'for ' + 'a ' + 'circle ' + 'with ' +  'a ' +  'radius ' + radius + ' is ' + area);
}

areaButton = document.getElementById('area-button');

areaButton.addEventListener('click', areaOfCircle);

