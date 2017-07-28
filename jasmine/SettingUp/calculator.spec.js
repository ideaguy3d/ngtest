/**
 * Created by Julius Alvarado on 7/28/2017.
 */

describe("Calculator", function () {
    var calc;
    var outputId = "#calc-output";
    beforeEach(function(){
        $('body').append($('#template-wrapper').html().replace('-template', ''));
        calc = new Calculator($(outputId));
    });

    afterEach(function(){
        $(outputId).remove();
    });

    it("should be able to add 4+4", function(){
        calc.add(4,4);
        expect($(outputId).text()).toBe('8');
    });
});