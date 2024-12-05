import Subject from "./subject.js";
import Observer from "./observer.js";

const subject = new Subject();
const observer = new Observer();

// Subscriber
subject.subscribe(observer);

// notify
subject.notify('Print 1');

// Unsubscribe
subject.unsubscribe(observer);
subject.notify('Print 2');  // Won't logged