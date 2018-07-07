// This function should not use the prototype to store members.
// This file is for reference only.

function stopWatch() {
  let startTime = 0;
  let endTime = 0;
  let running = 0;
  let duration = 0;

  Object.defineProperty(this, 'duration', {
    get: function() { return duration }
    set: function(value) { duration = value }
  });
  Object.defineProperty(this, 'startTime', {
    get: function() { return startTime }
  });
  Object.defineProperty(this, 'endTime', {
    get: function() { return endTime }
  });
  Object.defineProperty(this, 'running', {
    get: function() { return running }
  });
};

StopWatch.prototype.start = function() {
  if (this.running) {
    throw new Error('Stopwatch has already started');
  };
  this.running = true;

  this.startTime = new Date();
};

StopWatch.prototype.stop = function() {
  if (!this.running) {
    throw new Error('Stopwatch has not started');
  };
  this.running = false;

  this.endTime = new Date();

  const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
  this.duration += seconds;
};

StopWatch.prototype.reset = function() {
  startTime = null;
  endTime = null;
  running = false;
  duration = 0;
};
