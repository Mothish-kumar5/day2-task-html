
function createPromise() {
  return new Promise((resolve, reject) => {
    const success = true; // change to false to test rejection

    setTimeout(() => {
      if (success) {
        resolve(100); // number on success
      } else {
        reject(404); // number on failure
      }
    }, 1000);
  });
}

// Using async/await
async function handlePromise() {
  try {
    const result = await createPromise();
    console.log("Resolved with number:", result);
  } catch (error) {
    console.error("Rejected with number:", error);
  }
}

handlePromise();