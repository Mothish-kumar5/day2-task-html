function createPromise() {
  return new Promise((resolve, reject) => {
    const success = true; // change to false to test rejection

    setTimeout(() => {
      if (success) {
        resolve("Promise resolved successfully!");
      } else {
        reject("Promise rejected!");
      }
    }, 1000);
  });
}

// Now call it
createPromise()
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });