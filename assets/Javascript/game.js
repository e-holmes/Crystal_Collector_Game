// $(document).ready(function(){
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
    console.log("TEST");

    function reset(){
        for (var i=0; i<13; i++){
            gemNum.push(i);
        }
        console.log("Gem Array: " +gemNum);
    }
// });