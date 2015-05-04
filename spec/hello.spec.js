'use strict';

describe('hello', function() {
  it('logs "Hello World" to the screen', function() {
    spyOn(console, 'log');
    console.log("Hello World")
    expect(console.log).toHaveBeenCalledWith("Hello World")
  });
});
