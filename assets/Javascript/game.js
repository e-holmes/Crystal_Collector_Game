$(document).ready(function(){
    var magic;
    var wins;
    var losses;
    var gem1;
    var gem2;
    var gem3;
    var gem4;
    var userMagic;
    

    reset();

    function reset(){
        // New Variables
        var i;
        var gemNum = [];

        // Updated Variables
        userMagic = 0;
        magic = Math.floor(Math.random() *120)+19;
        console.log("Magic: " +magic);


        
        
        // Code for Setting Gems
            for (i=1; i<13; i++){
                gemNum.push(i);
            }
            console.log("Gem Array: " +gemNum);

            

            // Gem 1
            i=Math.floor(Math.random() *gemNum.length);
            gem1= gemNum[i];
            console.log("Gem 1: " +gem1);
            gemSplice();
            
            
            // Gem 2
            i=Math.floor(Math.random() *gemNum.length);
            gem2=gemNum[i];
            console.log("Gem 2: " +gem2); 
            gemSplice();
            
            // Gem 3\
            i=Math.floor(Math.random() *gemNum.length);
            gem3=gemNum[i];
            console.log("Gem 3: " +gem3); 
            gemSplice();

            // Gem 4
            i=Math.floor(Math.random() *gemNum.length);
            gem4=gemNum[i];
            console.log("Gem 4: " +gem4);  
            gemSplice();
        
            // Set's i to random number and removes item (i) from array GemNum
            function gemSplice(){
                // Remove array gemNum item i
                gemNum.splice(i, 1);
                // Console log updated array
                // console.log("Gem Array Updated: " +gemNum); 
        }
    }

    


});


