import pubSubInstance from "./main.js";

pubSubInstance.subscribe(payload =>  {
    console.log('subscribe 1: show message => ', payload)
})

const sub2 = pubSubInstance.subscribe(payload =>  {
    console.log('subscribe 2: show message => ', payload)
})

pubSubInstance.subscribe(payload =>  {
    console.log('subscribe 3: show message => ', payload)
})

// pubSubInstance.subscribe(console.log('subscribe 3: show message => ')) // It will trigger error

pubSubInstance.publish('hello world')

sub2.unsubscribe(); // Subscription 2 should not render any further publilsh data

pubSubInstance.publish('hello world 2')

// All three subscription are removed.
pubSubInstance.unsubscribeAll();

pubSubInstance.publish('After removing all subscription');