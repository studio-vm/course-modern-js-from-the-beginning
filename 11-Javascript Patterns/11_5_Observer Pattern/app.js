function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function (fn) {
    // Filter out from the list whatever mathes the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of the observers.
    this.observers = this.observers.filter(function (item) {
      if (item!== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from the ${fn.name}`);
  },
  fire: function () {
    this.observers.forEach(function (item) {
      item.call();
    })
  }
}

const click = new EventObserver();

//! Event listeners
document.querySelector('.sub-ms').addEventListener('click',function () {
  click.subscribe(getCurMilliseconds);
})

document.querySelector('.unsub-ms').addEventListener('click',function () {
  click.unsubscribe(getCurMilliseconds);
})
document.querySelector('.sub-s').addEventListener('click',function () {
  click.subscribe(getSeconds);
})

document.querySelector('.unsub-s').addEventListener('click',function () {
  click.unsubscribe(getSeconds);
})

document.querySelector('.fire').addEventListener('click',function () {
  click.fire(getCurMilliseconds);
})

//! Click Handler
const getCurMilliseconds = function () {
  console.log((`Current Milliseconds: ${new Date().getMilliseconds()}`));
}

const getSeconds = function () {
  console.log((`Current Milliseconds: ${new Date().getSeconds()}`));
}
