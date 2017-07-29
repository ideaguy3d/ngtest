'use strict';

describe('eventData', function() {
    beforeEach(module('eventsApp'));
    it("should issue a GET req to /data/event/11 when getEvent() is called and id = 11",
        inject(function(eventData, $httpBackend){
            $httpBackend.expectGET('/data/event/11'); // this is our "expect"
            $httpBackend.when('GET', '/data/event/11').respond({});
            eventData.getEvent(11);
            $httpBackend.flush();

            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        }
    ));

    it("should return the correct data when .getEvent() is called", inject(function(eventData, $httpBackend){
        $httpBackend.when('GET', '/data/event/11').respond({name: "some event"});
        var event = eventData.getEvent(11);
        $httpBackend.flush();

        expect(event.name).toBe('some event');
    }));

    it("should set id = 999 when .save() is called", inject(function(eventData, $httpBackend){
        $httpBackend.when('POST', '/data/event/999').respond({});
        var event = {name: "some event"};
        eventData.save(event);
        $httpBackend.flush();

        expect(event.id).toBe(999);
    }));

    it("should issue a GET req to data/event when .getAllEvents() is called", inject(function(eventData, $httpBackend){
        $httpBackend.when('GET', '/data/event').respond([{name: 'some event'}]);
        var events = eventData.getAllEvents();
        $httpBackend.flush();

        expect(events[0].name).toBe('some event');
    }));
});