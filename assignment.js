//https://github.com/MehrajRahman/asignment.js


//First Function to convert Kilometer to Meter....
function kilometerToMeter(kilometerValue){
    if(kilometerValue < 0 || kilometerValue == NaN || kilometerValue == undefined ){
        return "Sorry!! Your Input is not a valid Value";
    }
    else{
        return kilometerValue * 1000; 
    }
}




//Second Function to Calculate budget of the electronics items .... 
/******* */
function budgetCalculator(numOfWatches, numOfPhone, numOfLaptop){
    var totalBudget = 0; //Total some of the cost will be stored here.
    if(numOfWatches < 0 || numOfWatches == NaN || numOfWatches == undefined || numOfWatches == "" ){
        return "Sorry!! Your watch Input is not a valid Value"; 
                                //Checked unknown value which should not be accepted.
    }
    else{
        totalBudget = totalBudget +  numOfWatches * 50;
    }
    if(numOfPhone < 0 || numOfPhone == NaN || numOfPhone == undefined ){
        return "Sorry!! Your phone Input is not a valid Value";
    }
    else{
        totalBudget =  totalBudget + numOfPhone * 100;
    }
    if(numOfLaptop < 0 || numOfLaptop == NaN || numOfLaptop == undefined ){
        return "Sorry!! Your laptop Input is not a valid Value";
    }
    else{
        totalBudget = totalBudget + numOfLaptop*500;
    }
    return totalBudget;    
}






//Third function to calculate the hotel Cost
/******* */

function hotelCost(numOfStayingDays){
    var totalHotelCost = 0;
    if(numOfStayingDays < 0 || numOfStayingDays == NaN || numOfStayingDays == undefined ){
        return "Sorry!! Your  Input is not a valid Value";
    }
    else{
        if(numOfStayingDays <= 10){
            totalHotelCost = totalHotelCost + numOfStayingDays * 100;
        }
        else if(numOfStayingDays <= 20 ){
            var firstCost = 10 * 100; //Doing so for avoiding mathmatical complication
            var secondCost = (numOfStayingDays - 10) * 80;
            totalHotelCost = firstCost + secondCost;
        }
        else{
            var firstCost = 10 * 100;
            var secondCost = 10 * 80;
            var thirdCost = (numOfStayingDays - 20) * 50; // Here balanced the whole Input
            totalHotelCost = firstCost + secondCost + thirdCost;
        }
    }
    return totalHotelCost;

}







// Fourth function for finding the biggest name from a string
//******** */
function megaName(nameFriend){
    if( nameFriend.length ==0){
        return "you entered an empty array"

    }
    else if(nameFriend == NaN || nameFriend == undefined || nameFriend == ""){
        return "Sorry Your Input is not a valid one";
    }
    else{
        
        var nameLength = 0;        // here i will count the number of digit of a name.
        var bigName; 
        var bigNameLength = 0;   // here the big name will be updated on its length digit. like 6/8/9
    
        //in the first for loop it will move into the first index of the array. splitName[0]
        // Loop will continue untill the last index arrives.

        for(var i =0; i<nameFriend.length; i++){ 
            var nameSection = nameFriend[i]; 

            // this second loop will calculate the length of the first Name  

            for(var j=0; j<nameSection.length; j++){
                nameLength++;
            }
            
            //if the nameLength is bigger than bigNameLength then it will change the current value
            if(bigNameLength < nameLength){
                bigNameLength = nameLength;
                bigName = nameSection; //Here we got the big name ..
        
            }
            nameLength = 0;
        }
    }    
    return bigName;
}


/**
 * Here checking the out put of all function
 */

var result = kilometerToMeter(25);
console.log(result)

var result1 = budgetCalculator(20, 30, 40);
console.log(result1);

var result2 = hotelCost(24);
console.log(result2);


var result3 =  megaName(["Rahim", "Karim","aajafhkjsf", "adhfkhdsf","hjgff","jhsfg"]);
console.log(result3);