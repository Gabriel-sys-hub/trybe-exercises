var arr1 = [2, 3, 2, 5, 8, 2, 3];                         //array
var maximumFrequency = 1;                                 //default maximum frequency
var counter = 0;                                          //counter
var item;                                                 //to store item with maximum frequency
for (var i = 0; i < arr1.length; i++)                     //select element (current element)
 {
  for (var j = i; j < arr1.length; j++)                   //loop through next elements in array to compare calculate frequency of current element
 {
    if (arr1[i] == arr1[j])                               //see if element occurs again in the array
      counter++;                                          //increment counter if it does
    if (maximumFrequency < counter) {                     //compare current items frequency with maximum frequency
      maximumFrequency = counter;                         //if m>mf store m in mf for upcoming elements
      item = arr1[i];                                     // store the current element.
      }
    }
  counter = 0;                                            // make counter 0 for next element.
}

console.log(item);
