console.log("Start of the execution queue");
setTimeout(() => console.log(" Final code block to be executed"), 0);
for (let event = 1; event <= 100; event++) {
    console.log(event);
}
console.log("End of the loop printing");