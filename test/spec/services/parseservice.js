'use strict';

describe('Service: parseService', function () {

  // load the service's module
  beforeEach(module('rockfordAnswersv2App'));

  // instantiate service
  var parseService;
  beforeEach(inject(function (_parseService_) {
    parseService = _parseService_;
  }));

  it('should do something', function () {
    expect(!!parseService).toBe(true);
  });

});
