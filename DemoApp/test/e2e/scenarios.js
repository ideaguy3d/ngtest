/**
 * Created by Julius Alvarado on 7/29/2017.
 */

describe('event registration app', function(){
    describe('events page', function(){
        beforeEach(function(){
           browser.get('http://localhost:8000/events/')
        });

        it('should have the correct title and first event', function(){
            var list = element.all(by.repeater('event in events'));
            expect(list.count()).toEqual(4);
            var titleElement = list.first().element(by.binding('event.name'));
            expect(titleElement.getText()).toEqual('Angular Boot Camp');
        });
    });

    describe('event details page', function(){
        beforeEach(function(){
            browser.get('http://localhost:8000/event/1');
        });

        it('should sort by name', function(){
            var list = element.all(by.repeater('session in event.sessions'));
            var titleElement = list.first().element(by.binding('title'));
            expect(titleElement.getText()).toEqual('Directives Masterclass');
        });

        it('should have 3 sessions', function(){
            var list = element.all(by.repeater("session in event.sessions"));
            expect(list.count()).toEqual(3);
        });
    });
});