// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    // Let is a key word that defines a binding, whoch in this case is "product" that holds the two parameters that hold the data
    // of "option" and "option2" being multiplied.
    let product = option * option2;

    // Console.log is a function that allows the user to "print" or "log" previous data, or to communicate a message to the user through the terninal.
    // In this case the console.log will print the product of option and option2.
    console.log(product);

    // The string "the value of the option parameter is" is added to the value of the option data and printed through the console log. 
    console.log("The value of the option parameter is " + option);

    // The if statement allows javascript to make statements and execute decisions "conditionally," so in this case, if "option" is of a similar
    // type as "0" (if it's a number and not a string, then the ""=== operator" will come back as a true value. If, however, option was a string and not a 
    // and not a number, it would come back as a false value.) it will come back as true. === is an equality comparison operator, meaning it compares if
    // values are a similar type.
    if (option === 0) {
        
        // Relyimg on "if", the "return" statement communicates a result as long as the value types stated in "if" are true, and it will return the function 
        // value to the caller. If false, it will not communicate anything.
        return "Everything is good!";
    // "else if" is a conditional statement performed after an if statement that, if true, will perform a function. So here is, where I am a little
    // confused. Because, by my understanding, if option === 1 is true, then the message below after "return" will result in "an error happened," but I was
    // under impression that the first "if" statement was true, unless I was wrong and "option" and "0" are of different types and therefore false. 
    // After writing this, I am assuming that "option" and "0" are different types and therefore will not "return" "Everything is good."
    } else if (option === 1) {
        
        // The return statement should return the "an error happened" to the caller if true.
        return "An error happened!";
    // The "else if" statement communicates that if the option equals the same data or data type as a negative number, 
    } else if (option === -1) {
        
        // then the return will communicate to the caller that "Everything is bad," if option is the same data type as a negative number.
        return "Everything is bad!";
    }

}

// Here the keyword "let" is defining the binding "result" as assigning value to the "result" variable through the use of the single "=" symbol to
// "myFunction" with the data of 1 and 11. This will multiply the value of the option parameter (which is 1) with 11.
let result = myFunction(1, 11);
// Here the keyword "let" is defining the binding "result" as assigning value to the "result" variable through the use of the single "=" symbol to
// "myFunction" with the data of 2 and 200. This will multiply the value of the option parameter (whoch is 2) with 200.
let result2 = myFunction(2, 200);

// In this case, the "if" statement will execute the decision condotionally if "result" is the same data or datatype as the string "an error happened,"
// and if result2 is the same data or data type as the string "an error happened." As I believe, they are a different type as "result" is a number and "an 
// error happened" is a string, 
if ( result === "An error happened" && result2 === "An error happened") {

    // therefore, I believe that "Catastrophic failure" will not be communicated through the console log.
    console.log("Catastrophic failure.");

}