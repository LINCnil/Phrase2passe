var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ProgressBarValidationEventTests = (function (_super) {
    __extends(ProgressBarValidationEventTests, _super);
    function ProgressBarValidationEventTests() {
        var _this = _super.call(this) || this;
        var defaults = {
            rootHtmlElementSelector: '#passwordBloc',
            headerTypeSelector: "h3",
            contentTypeSelector: ".contentElement",
            sentenceInputSelector: "#sentenceInput",
            phraseValidateSelector: ".sentenceValidate",
            checkImage: "#checkImage",
            listMotTransformer: ".listMotTransformer",
            ckeckImgRule: ".ckeckImgRule",
            phraseSaisi: ".phraseSaisi",
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
        var settings = ToolEventTest.extend(defaults, {});
        var transFormerService = ToolEventTest.createTransFormerService();
        var checkImageTmp = document.createElement("div");
        checkImageTmp.appendChild(document.createElement("img"));
        var checkImage = checkImageTmp.getElementsByTagName("img");
        var p = document.createElement("div");
        p.appendChild(document.createElement("div"));
        var phraseSaisi = p.getElementsByTagName("div");
        var rootHtmlElement = document.createElement("div");
        rootHtmlElement.appendChild(document.createElement("h3"));
        var div = document.createElement("div");
        var phraseInput = document.createElement("input");
        _this.progressbar = document.createElement("div");
        div.appendChild(phraseInput);
        div.appendChild(_this.progressbar);
        rootHtmlElement.appendChild(div);
        rootHtmlElement.appendChild(document.createElement("h3"));
        rootHtmlElement.appendChild(document.createElement("div"));
        rootHtmlElement.appendChild(document.createElement("h3"));
        rootHtmlElement.appendChild(document.createElement("div"));
        var titleMenuHtmlElement = rootHtmlElement.getElementsByTagName("h3");
        var contentHtmlElement = rootHtmlElement.getElementsByTagName("div");
        _this.view = new ViewSetp(rootHtmlElement, titleMenuHtmlElement, contentHtmlElement, phraseInput, settings.phraseValidateSelector, settings.ckeckImgRule, phraseSaisi, settings.warningrule, checkImage, settings.phraseValidateSelector, settings.notUsedTransformer, settings.ruleSelector, settings.previousLibelleButton, settings.nextLibelleButton, settings.cssRootPluginSelector);
        _this.callValidatorService = ToolEventTest.createCallValidatorServiceCallToNextStep(settings);
        _this.progressBarValidationEvent = new ProgressBarValidationEvent(_this.callValidatorService, _this.view, transFormerService);
        _this.parameterizeUnitTest(_this.addTestInputProgressBarEventTest1, [
            ["76%", "a 125 ? U"],
            ["61%", "a 125 ?"],
            ["25%", "a"],
            ["25%", "?"],
            ["25%", "a"],
            ["43%", "8912"],
            ["28%", "\u0042\u0042"],
            ["25%", "%"],
            ["76%", "Un sourire vaut mille mots!!"],
            ["76%", "L'homme qui valait trois milliards"],
            ["94%", "Un gramme de chance vaut mieux que dix ans d'expérience"],
            ["100%", "adresse cnil 8 rue vienne, Paris 75002"],
            ["94%", "On ne comprend guère le mot jeunesse avant trente ans."],
            ["94%", "Je crois que deux et deux sont quatre, Sganarelle, et que quatre et quatre sont huit"],
            ["94%", "Le mariage c'est résoudre à deux les problèmes qu'on n'aurait pas eus tout seul"],
            ["94%", "Le roi soleil est né le 5 septembre 1638"],
            ["94%", "Le soleil est à 150 millions de km de la terre"],
            ["94%", "un carré possède quatre angles droits. Tous ses côtés ont la même longueur"],
            ["94%", "La maison d'un des trois petits cochons est en pierre"],
            ["94%", "Chiffre : neuf cent quatre-vingt-sept milliards six cent cinquante-quatre millions trois cent vingt et un mille sept cent quatre-vingt et une voiture"]
        ]);
        _this.parameterizeUnitTest(_this.addTestInputProgressBarEventTest2, [
            ["error", 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 125 ? U', "VALUE NOT USED"],
            ["error", 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 125 ?', "VALUE NOT USED"],
            ["error", 'a', "VALUE NOT USED"],
            ["error", '?', "VALUE NOT USED"],
            ["error", 'a', "VALUE NOT USED"],
            ["error", '8912', "VALUE NOT USED"],
            ["error", '\u0042\u0042', "VALUE NOT USED"],
            ["error", "%", "VALUE NOT USED"],
            ["error", "U:-)v1000m!!", "Un sourire vaut mille mots!!"],
            ["error", "L'hqv3000000000", "L'homme qui valait trois milliards"],
            ["error", "Ugdcvmq10ad'e", "Un gramme de chance vaut mieux que dix ans d'expérience"],
            ["success", "@c8rv,P75002", "adresse cnil 8 rue vienne, Paris 75002"],
            ["error", "Oncglmja30a.", "On ne comprend guère le mot jeunesse avant trente ans."],
            ["error", "Jcq4s4,S,&q8s8", "Je crois que deux et deux sont quatre, Sganarelle, et que quatre et quatre sont huit"],
            ["error", "Lmc'erà2lpq'on'apet1", "Le mariage c'est résoudre à deux les problèmes qu'on n'aurait pas eus tout seul"],
            ["error", "Lr*enl5s1638", "Le roi soleil est né le 5 septembre 1638"],
            ["error", "L*eà1501000000dkdlt", "Le soleil est à 150 millions de km de la terre"],
            ["error", "1#p4°d.Tscolml", "un carré possède quatre angles droits. Tous ses côtés ont la même longueur"],
            ["error", "Lmd'1d3pceep", "La maison d'un des trois petits cochons est en pierre"],
            ["error", "C:987654321781v", "Chiffre : neuf cent quatre-vingt-sept milliards six cent cinquante-quatre millions trois cent vingt et un mille sept cent quatre-vingt et une voiture"]
        ]);
        return _this;
    }
    ProgressBarValidationEventTests.prototype.addTestInputProgressBarEventTest1 = function (percent, phrase) {
        this.progressBarValidationEvent.call(0, phrase);
        this.areIdentical(percent, this.progressbar.style.width);
    };
    ProgressBarValidationEventTests.prototype.addTestInputProgressBarEventTest2 = function (result, mdp, phrase) {
        this.progressBarValidationEvent.call(0, phrase);
        var v = "";
        if (this.progressbar.classList.contains("error"))
            v = "error";
        else
            v = "success";
        this.areIdentical(result, v);
    };
    ProgressBarValidationEventTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return ProgressBarValidationEventTests;
}(TestClass));
var ToolEventTest = (function () {
    function ToolEventTest() {
    }
    ToolEventTest.createTransFormerService = function () {
        return new TransFormerService([
            new FirstLetterWordTransFormer(0),
            new SpaceTransformer(0),
            new ConversioNnumberTransformer(0),
            new ReplaceWordBycharcterInPassWordTransFormer(0)
        ]);
    };
    ToolEventTest.extend = function (target, source) {
        var a = Object.create(target);
        Object.keys(source).map(function (prop) {
            prop in a && (a[prop] = source[prop]);
        });
        return a;
    };
    ToolEventTest.createCallValidatorServiceCallToNextStep = function (settings) {
        return new CallValidatorService([
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 1),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 2),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 3),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 4),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 5),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 6),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 7),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 8),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 9),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 10),
            new PresenceLetterMajusculeValidatorRule(settings.presenceLetterMajusculeValidatorSelector, 0),
            new PresenceLetterMinisculeValidatorRule(settings.presenceLetterMinisculeValidatorSelector, 0),
            new ContainsCaracterSpecialValidatorRule(settings.containsCaracterSpecialValidatorSelector, 0),
            new YearValidatorValidatorRule(settings.yearValidatorValidatorSelector, 0),
            new SuiteOfNumberValidatorRule(settings.suiteOfNumberValidatorSelector, 0),
            new NumberDifferentValidatorValidatorRule(settings.numberDifferentValidatorValidatorRule, 0)
        ]);
    };
    return ToolEventTest;
}());
