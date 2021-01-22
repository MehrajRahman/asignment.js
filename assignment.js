//First Function to convert Kilometer to Meter....
function kilometerToMeter(kilometerValue){
    if(kilometerValue < 0 || kilometerValue == NaN || kilometerValue == undefined ){
        return "Sorry!! Your Input is not a valid Value";
    }
    else{
        return kilometerValue * 1000; 
    }
}
// var result = kilometerToMeter(0);
// console.log(result)



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
var result1 = budgetCalculator(20, 30, 40);
console.log(result1);


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
var result2 = hotelCost(24);
console.log(result2);


// Fourth function for finding the biggest name from a string
//******** */
function megaName(nameFriend){
    if( nameFriend == NaN || nameFriend == undefined || nameFriend == ""){
        return "Sorry Your Input is not a valid one";
    }
    else{
        var splitName = nameFriend.split(" ");      // created the input string into an array.
        var nameLength = 0;        // here i will count the number of digit of a name.
        var bigName; 
        var bigNameLength = 0;   // here the big name will be updated on its length digit. like 6/8/9
    
        //in the first for loop it will move into the first index of the array. splitName[0]
        // Loop will continue untill the last index arrives.

        for(var i =0; i<splitName.length; i++){ 
            var nameSection = splitName[i]; 

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
var result3 =  megaName("Salam Kalam Rofik Borkot abcdjsdfjlskfj nomonnnoton Nobittono kobito robito")
console.log(result3);