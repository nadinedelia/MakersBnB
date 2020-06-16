'use strict';

describe('Space', function() {
  var space;

  beforeEach(function() {
    space = new Space();
  });

  describe('.list', function() {
    it('should be empty', function() {
      expect(space.list()).toEqual([])
    });
  });

  describe('.add', function() {
    it('should add a name to the list of spaces', function() {
      space.add("Space 1")
      expect(space.list()).toEqual(["Space 1"])
    });
  });



});