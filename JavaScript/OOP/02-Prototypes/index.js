
// Exercise Stopwatch

function Stopwatch() {
    var startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'startTime', {
        get: function() { return startTime; }
    });

    Object.defineProperty(this, 'endTime', {
        get: function() { return endTime; }
    });

    Object.defineProperty(this, 'running', {
        get: function() { return running; }
    });

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

Stopwatch.prototype.start = function() {
    if ( this.running )
            throw new Error('Stopwatch has already started.');

        this.running = true;
        this.startTime = new Date();
}

Stopwatch.prototype.stop = function() {
    if ( !this.running ) 
        throw new Error('StopWatch is not started');
    
    this.running = false;

    this.endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    this.duration += seconds;
};

Stopwatch.prototype.reset = function() {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    this.duration = 0;
}