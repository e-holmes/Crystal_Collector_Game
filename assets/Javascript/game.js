$(document).ready(function(){
    var magic;
    var wins;
    var losses;
    var gem1;
    var gem2;
    var gem3;
    var gem4;
    var userMagic;
    var gemNum = [];

    reset();

    function reset(){
        for (var i=0; i<13; i++){
            gemNum.push(i);
        }
        console.log("Gem Array: " +gemNum);
        gem1=gemNum[Math.floor(Math.random() *gemNum.length)]
        console.log(gem1);
    }
});