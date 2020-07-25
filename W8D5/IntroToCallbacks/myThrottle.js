Function.prototype.myThrottle = function(time) {
    
    let tooSoon = false;
    return (...args) => {
    if (!tooSoon) {
        tooSoon = true;
        setTimeout(function(time) {
            tooSoon = false;
        }, time);
        this(...args);
        }
    }
}

// (value) => {
//     console.log(value);
// }

// function(value) {
//     console.log(value);
// }

// Foo.prototype.startCounting = function () {
//     var self = this;
//     setInterval(function () {
//         // this is the Window, not Foo {}, as you might expect
//         console.log(this); // [object Window]
//         // that's why we reassign this to self before setInterval()
//         console.log(self.count);
//         self.count++;
//     }, 1000)
// }


class Neuron {
    fire() {
        console.log("Firing!");
    }
}

const neuron = new Neuron();

neuron.fire = neuron.fire.myThrottle(500);

const interval = setInterval(() => {
    neuron.fire();
}, 10);
