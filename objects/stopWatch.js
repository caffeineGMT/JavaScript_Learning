//class implementation
class stopWatch {
    constructor() {
        this.duration = 0;
        this.running = false;
        this.startTime = null;
        this.endTime = null;
    }
    start() {
        console.log(a);
        if (this.running)
            throw new Error("stopWatch already started");
        this.running = true;
        this.startTime = new Date();
    }
    stop() {
        if (!this.running)
            throw new Error("stopWatch already stopped");
        this.running = false;
        this.endTime = new Date();
        const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
        this.duration += seconds;
    }
    reset() {
        this.duration = 0;
        this.running = false;
        this.startTime = null;
        this.endTime = null;
    }
}



//constructor function implementation
/* function stopWatch() {
    // the following variables will be kept in closure scope, which is accessible for the functions defined below.
    // but they are not part of the instance member.They behaves like private member of a class, but they are also temporary variables in Constructor function
    let startTime;
    let endTime;
    let running;
    let duration = 0;

    this.start = function () {
        if (running)
            throw new Error("stopWatch has already started");
        running = true;
        startTime = new Date();
    }
    this.stop = function () {
        if (!running)
            throw new Error("stopWatch hasn't started");
        running = false;
        endTime = new Date();
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }
    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, "duration", {
        get: function () {
            return duration;
        }
    });
} */