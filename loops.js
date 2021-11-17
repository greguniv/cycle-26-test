        // Definition: A sequence of instructions that are repeated for either certain number of times or until a conditino is met.
        // Syntax:
        // for(statement 1; statement 2; statement 3) {
            // code block to be executed
        // }

        // Statement 1: Executed before the loop - this is where the code block starts
        // Statement 2: Condition for running the loop (the code block)
        // Statement 3: Executed each time AFTER the loop (the code block) has been executed.

        // Task: loop that reiterates from  0 to 9

        // Statement 1: Declare our iterator
        // Why 0? In programming, we like to start count at 0
        // i++ is equivalent to i = i + 1, also equals to i += 1


        // const = TypeError: Assignment to constant variable.
        // for(let i = 0; i < 10; i++) {
            // console.log(i)
        // }
         // if we declare i inside our for loop with let we will get: ReferenceError: i is not defined
        //  if we declare i with no keyword (no let) it's automatically considered a 'var' variable
        // console.log("current value", i)

        // let and const are block scoped
        // for(i = 0; i < 10; i++) {
        //     // console.log("we are using i again", i)
        // }

        // // Task: Loop from 10 to 1

        // for(let i = 10; i > 0; i--){
            // console.log(i)
        // }


        // preincrement --i
        // postincrement i++

        // Task: Write a loop that outputs 1,3,5,7,9

        // for(i = 1; i < 10; i++ && i++) {
        //     console.log(i)
        // }

        // Task: Write a loop that outputs 2,4,6,8,10

        for(e = 2; e < 11; e+=2){
            console.log(e)
        }