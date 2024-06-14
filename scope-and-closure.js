function outer() {
    // Declare two variables, a and b in the outer function's scope
    let a = "a string";
    let b = { prop: "an object" };
  
    // Log their values immediately
    console.log("Outer function scope:");
    console.log("a:", a);
    console.log("b:", b);
  
    function inner(a, b) {
      // Log the values of a and b in the inner function
      console.log("\nInner function scope (start):");
      console.log("a:", a);
      console.log("b:", b);
  
      // Inside the inner function, assign new values to a and b
      a = "new string";
      b = { prop: "new object" };
  
      // Log them at the end of the function
      console.log("\nInner function scope (end):");
      console.log("a:", a);
      console.log("b:", b);
  
      // Inside the inner function, update a property of the b object
      b.prop = "updated object";
    }
  
    // Pass a and b in as arguments when you execute inner()
    inner(a, b);
  
    // Log the values of a and b after the execution of inner(a,b)
    console.log("\nOuter function scope (after inner):");
    console.log("a:", a);
    console.log("b:", b);
  }
  
  outer();
  