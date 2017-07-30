'use strict';

console.log();
describe('eventThumbnail', function () {
    var el;
    beforeEach(module('eventsApp'));
    // get the template for the directive we are testing
    beforeEach( module('/templates/directives/eventThumbnail.html') );
    beforeEach(inject(function ($compile, $rootScope) {
        var scope = $rootScope.$new();
        scope.event = {
            name: 'AngularCon', date: '7/30/2017', time: '10:00', id: 1,
            address: {location: '1234 10th st', city: 'San Jose', province: 'California'}
        };

        el = angular.element('<event-thumbnail event="event" />');
        $compile(el)(scope);
        scope.$digest();
        // console.log(el[0].outerHTML);
    }));

    it("should bind the data", function () {
        // .text() is a method in jQuery that spits all the html as a str
        expect(el.text()).toContain('AngularCon');
    });
});