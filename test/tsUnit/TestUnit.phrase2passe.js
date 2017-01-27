var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var tearDownCounter = 0;
var PerFormanceTests = (function (_super) {
    __extends(PerFormanceTests, _super);
    function PerFormanceTests(testValidatorRule, testFormater, testService, testInterface, testEvent) {
        var _this = _super.call(this) || this;
        _this.testValidatorRule = testValidatorRule;
        _this.testFormater = testFormater;
        _this.testService = testService;
        _this.testInterface = testInterface;
        _this.testEvent = testEvent;
        return _this;
    }
    PerFormanceTests.prototype.performancesFunction = function () {
        var _this = this;
        this.executesWithin(function () {
            _this.testValidatorRule.run().showResults(document.getElementById('results1'));
            _this.testFormater.run().showResults(document.getElementById('results2'));
            _this.testService.run().showResults(document.getElementById('results3'));
            _this.testInterface.run().showResults(document.getElementById('results4'));
            _this.testEvent.run().showResults(document.getElementById('results6'));
        }, 2500);
    };
    PerFormanceTests.prototype.countTest = function () {
        this.areIdentical(447, tearDownCounter);
    };
    return PerFormanceTests;
}(TestClass));
var ExecuteTests = (function () {
    function ExecuteTests() {
        this.testValidatorRule = new Test();
        this.testFormater = new Test();
        this.testService = new Test();
        this.testInterface = new Test();
        this.testEvent = new Test();
        this.testPerFormance = new Test();
        this.testInterface.addTestClass(new Phrase2PasseTests());
        this.testValidatorRule.addTestClass(new SuiteOfNumberValidatorRuleTests());
        this.testValidatorRule.addTestClass(new NumberDifferentValidatorValidatorRuleTests());
        this.testValidatorRule.addTestClass(new YearValidatorValidatorRuleTests());
        this.testValidatorRule.addTestClass(new NumberOfChararcterInPassWordValidatorRuleTests());
        this.testValidatorRule.addTestClass(new ContainsCaracterSpecialValidatorRuleTests());
        this.testValidatorRule.addTestClass(new PresenceLetterMinisculeValidatorRuleTests());
        this.testValidatorRule.addTestClass(new PresenceLetterMajusculeValidatorRuleTests());
        this.testValidatorRule.addTestClass(new AnyFourSequentialLetterInTheAlphabetValidatorRuleTests());
        this.testValidatorRule.addTestClass(new AnyFourSequentialLettersInTheKeyBordValidatorRuleTests());
        this.testValidatorRule.addTestClass(new IdenticalChararcterInPassWordValidatorRuleTests());
        this.testFormater.addTestClass(new FirstLetterWordTransFormerTests());
        this.testFormater.addTestClass(new SpaceTransformerTests());
        this.testFormater.addTestClass(new ReplaceWordBycharcterInPassWordTransFormerTests());
        this.testFormater.addTestClass(new ConversioNnumberTransformerTests());
        this.testService.addTestClass(new TransFormerServiceTests());
        this.testService.addTestClass(new CallValidatorServiceTests());
        this.testEvent.addTestClass(new ProgressBarValidationEventTests());
        this.testPerFormance.addTestClass(new PerFormanceTests(this.testValidatorRule, this.testFormater, this.testService, this.testInterface, this.testEvent));
    }
    ExecuteTests.prototype.run = function () {
        this.testPerFormance.run().showResults(document.getElementById('results5'));
    };
    return ExecuteTests;
}());
window.onload = function () {
    new ExecuteTests().run();
};
