const workQueue = require('./queue');

async function sendOrderToSocket(job) {
    console.log("Sending order to socket...");
    console.log(job.data);
    // Simulating a task that takes 5 seconds to complete
    setTimeout(() => {
        console.log("Task completed");
    }, 5000);
}

// Process jobs in the queue
workQueue.process(async (job) => {
    await sendOrderToSocket(job);
});