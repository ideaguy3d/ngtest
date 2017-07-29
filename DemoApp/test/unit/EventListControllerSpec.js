'use strict';

describe('EventListController', function () {
    var $ctrlConstr,
        scope,
        mockEventData;

    beforeEach(module("eventsApp"));
    beforeEach(inject(function ($controller, $rootScope) {
        $ctrlConstr = $controller;
        scope = $rootScope.$new();
        mockEventData = sinon.stub({
            getAllEvents: function () {}
        });
    }));

    it('should set the the scope events to the result of eventData.getAllEvents', function () {
        var mockEvents = {};
        mockEventData.getAllEvents.returns(mockEvents);
        $ctrlConstr('EventListController', {
            '$scope': scope,
            'eventData': mockEventData
        });
        expect(scope.events).toBe(mockEvents);
    });
});