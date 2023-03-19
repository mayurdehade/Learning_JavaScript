//Here is conflict occur because the variable msg is also declare into the script.js
//for avoiding the conflict here we use the anonymous function which immidetly invoke
//here the whole code is put inside the function and therefore the scope of the all variable is local

(function () {
    let msg = "Hello, I am Third Party...";

    function greet() {
        console.log(msg);
    }

    greet();
})();