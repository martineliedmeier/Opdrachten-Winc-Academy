for (let i = 0; i <= 20; i++) {
    // console.log(`Is ${i} even or odd?`);
    if (i % 2 == 0) {
        message = (i + ' is even');
    } else
        message = (i + " is oneven");
    console.log (message);
  }
  
  // Expected output:
  // 1 is oneven 
  // 2 is even 
  // 3 is oneven 
  // 4 is even 
  // ...