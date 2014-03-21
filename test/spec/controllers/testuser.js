'use strict';

describe('Controller: TestuserCtrl', function () {

  // load the controller's module
  beforeEach(module('travelApp'));

  var TestuserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestuserCtrl = $controller('TestuserCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
