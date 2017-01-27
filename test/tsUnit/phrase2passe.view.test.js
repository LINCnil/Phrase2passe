var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Phrase2PasseTests = (function (_super) {
    __extends(Phrase2PasseTests, _super);
    function Phrase2PasseTests() {
        var _this = _super.call(this) || this;
        var transFormerService = ToolViewTest.createTransFormerService();
        var checkImageTmp = document.createElement("div");
        checkImageTmp.appendChild(document.createElement("div"));
        var checkImage = checkImageTmp.getElementsByTagName("img");
        var p = document.createElement("div");
        p.appendChild(document.createElement("div"));
        var phraseSaisi = p.getElementsByTagName("div");
        var rootHtmlElement = document.createElement("div");
        rootHtmlElement.appendChild(document.createElement("h3"));
        rootHtmlElement.appendChild(document.createElement("div"));
        rootHtmlElement.appendChild(document.createElement("h3"));
        rootHtmlElement.appendChild(document.createElement("div"));
        rootHtmlElement.appendChild(document.createElement("h3"));
        rootHtmlElement.appendChild(document.createElement("div"));
        var titleMenuHtmlElement = rootHtmlElement.getElementsByTagName("h3");
        var contentHtmlElement = rootHtmlElement.getElementsByTagName("div");
        var phraseInput = document.createElement("input");
        var defaults = {
            rootHtmlElementSelector: '#passwordBloc',
            headerTypeSelector: "h3",
            contentTypeSelector: ".contentElement",
            sentenceInputSelector: "#sentenceInput",
            phraseValidateSelector: ".sentenceValidate",
            checkImage: "#checkImage",
            listMotTransformer: ".listMotTransformer",
            ckeckImgRule: ".ckeckImgRule",
            phraseSaisi: "#phraseSaisi",
            notUsedTransformer: ".notUsedTransformer",
            ruleSelector: ".rule",
            validatorForNextStep: [
                ["NumberOfChararcterInPassWordValidatorRule", ".rule1"],
                ["PresenceLetterMajusculeValidatorRule", ".rule2"],
                ["ContainsCaracterSpecialValidatorRule", ".rule4"],
                ["NumberDifferentValidatorValidatorRule", ".rule7"]
            ],
            validatorForWarningCurrentStep: [
                ["PresenceLetterMinisculeValidatorRule", ".rule3"],
                ["YearValidatorValidatorRule", ".rule5"],
                ["SuiteOfNumberValidatorRule", ".rule6"],
                ["AnyFourSequentialLetterInTheAlphabetValidatorRule", ".rule8"],
                ["AnyFourSequentialLettersInTheKeyBordValidatorRule", ".rule9"],
                ["IdenticalChararcterInPassWordValidatorRule", ".ruleCountIdenticalChar"]
            ],
            transformers: [
                ["FirstLetterWordTransFormer", 0],
                ["SpaceTransformer", 0],
                ["ReplaceWordBycharcterInPassWordTransFormer", 1],
                ["ConversioNnumberTransformer", 1],
                ["FirstLetterWordTransFormer", 1],
                ["SpaceTransformer", 1]
            ],
            nextLibelleButton: [
                ["Générer votre mot de passe", 0],
                ["Renforcer votre mot de passe", 1]
            ],
            previousLibelleButton: [
                ["Retour", 1],
                ["Retour", 2]
            ],
            cssRootPluginSelector: "wizard"
        };
        var settings = ToolViewTest.extend(defaults, {});
        _this.view = new ViewSetp(rootHtmlElement, titleMenuHtmlElement, contentHtmlElement, phraseInput, settings.phraseValidateSelector, settings.ckeckImgRule, phraseSaisi, settings.warningrule, checkImage, settings.phraseValidateSelector, settings.notUsedTransformer, settings.ruleSelector, settings.previousLibelleButton, settings.nextLibelleButton, settings.cssRootPluginSelector);
        return _this;
    }
    Phrase2PasseTests.prototype.addTestPhrase2passeTest = function () {
        this.view.goToUpdateClassCssMenuValidation(-1);
        this.view.goToUpdateClassCssMenuValidation(2);
        this.view.goToUpdateClassCssMenuValidation(5);
    };
    Phrase2PasseTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return Phrase2PasseTests;
}(TestClass));
var ToolViewTest = (function () {
    function ToolViewTest() {
    }
    ToolViewTest.createTransFormerService = function () {
        return new TransFormerService([
            new FirstLetterWordTransFormer(0),
            new SpaceTransformer(0),
            new ConversioNnumberTransformer(0),
            new ReplaceWordBycharcterInPassWordTransFormer(0)
        ]);
    };
    ToolViewTest.extend = function (target, source) {
        var a = Object.create(target);
        Object.keys(source).map(function (prop) {
            prop in a && (a[prop] = source[prop]);
        });
        return a;
    };
    return ToolViewTest;
}());
