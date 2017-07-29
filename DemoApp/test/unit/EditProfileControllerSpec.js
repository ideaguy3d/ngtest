'use strict';

describe('EditProfileControllerSpec', function () {
    var $ctrlConstr;
    var scope;
    var mockGravatarUrlBuilder;

    beforeEach(module('eventsApp'));
    beforeEach(inject(function ($controller, $rootScope) {
        $ctrlConstr = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder = sinon.stub({
            'buildGravatarUrl': function () {}
        });
    }));

    it('should build the gravatar with the given email address', function () {
        $ctrlConstr('EditProfileController', {
            '$scope': scope,
            'gravatarUrlBuilder': mockGravatarUrlBuilder
        });
        var email = "javascript.uiux@gmail.com";
        scope.getGravatarUrl(email);
        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email))
            .toBe(true);
    });
});