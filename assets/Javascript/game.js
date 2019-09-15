$(document).ready(function(){
    var magic;
    var wins = 0;
    var losses = 0;
    var gem1;
    var gem2;
    var gem3;
    var gem4;
    var userMagic;
    

    reset();

    $("#gem1").click(function(){
        userMagic= userMagic +gem1;
        console.log("User Magic: " +userMagic);
        check();
      });

      $("#gem2").click(function(){
        userMagic= userMagic +gem2;
        console.log("User Magic: " +userMagic);
        check();
      });

      $("#gem3").click(function(){
        userMagic= userMagic +gem3;
        console.log("User Magic: " +userMagic);
        check();
      });

      $("#gem4").click(function(){
        userMagic= userMagic +gem4;
        console.log("User Magic: " +userMagic);
        check();
      });



    function reset(){
        // New Variables
            var i;
            var gemNum = [];

        // Updated Variables
            userMagic = 0;
            $("#score").text("User Magic: " +userMagic);
            magic = RndNum(19, 120)
            console.log("Magic: " +magic);
            $("#magic").text("Magic: " +magic);
            
        // Setting Score 
            $("#wins").text("Wins: " +wins);
            $("#losses").text("Losses: " +losses);

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
                //("Gem Array Updated: " +gemNum); 
        }
    }

    function check(){
        if (userMagic == magic){
            wins++;
            console.log("Wins: " +wins);
            reset();
        } else if (userMagic > magic){
            losses++;
            console.log("Losses: " +losses);
            reset();
        } else{
            $("#score").text("User Magic: " +userMagic);
        }
    }

    function RndNum(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
    


});


