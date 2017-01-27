var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FirstLetterWordTransFormerTests = (function (_super) {
    __extends(FirstLetterWordTransFormerTests, _super);
    function FirstLetterWordTransFormerTests() {
        var _this = _super.apply(this, arguments) || this;
        _this.firstLetterWordTransFormer = new FirstLetterWordTransFormer(0);
        return _this;
    }
    FirstLetterWordTransFormerTests.prototype.addTestFirstLetterWordTransFormerTestsTrue1 = function () {
        var result = this.firstLetterWordTransFormer.transform("il etait ,une fois");
        this.areIdentical("ie,uf", result);
    };
    FirstLetterWordTransFormerTests.prototype.addTestFirstLetterWordTransFormerTestsTrue2 = function () {
        var result = this.firstLetterWordTransFormer.transform("tt % gg, dcdfdl'n");
        this.areIdentical("t%g,d'n", result);
    };
    FirstLetterWordTransFormerTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return FirstLetterWordTransFormerTests;
}(TestClass));
var SpaceTransformerTests = (function (_super) {
    __extends(SpaceTransformerTests, _super);
    function SpaceTransformerTests() {
        var _this = _super.apply(this, arguments) || this;
        _this.spaceTransformer = new SpaceTransformer(0);
        return _this;
    }
    SpaceTransformerTests.prototype.addTestSpaceTransformerTestsTrue1 = function () {
        var result = this.spaceTransformer.transform("il etait une, fois");
        this.areIdentical("il etait une ,  fois", result);
    };
    SpaceTransformerTests.prototype.addTestSpaceTransformerTestsTrue2 = function () {
        var result = this.spaceTransformer.transform("tt gg dcdfdl - nz");
        this.areIdentical("tt gg dcdfdl  -  nz", result);
    };
    SpaceTransformerTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return SpaceTransformerTests;
}(TestClass));
var ReplaceWordBycharcterInPassWordTransFormerTests = (function (_super) {
    __extends(ReplaceWordBycharcterInPassWordTransFormerTests, _super);
    function ReplaceWordBycharcterInPassWordTransFormerTests() {
        var _this = _super.call(this) || this;
        _this.replaceWordBycharcterInPassWordTransFormer = new ReplaceWordBycharcterInPassWordTransFormer(0);
        _this.parameterizeUnitTest(_this.addTestReplaceWordBycharcterInPassWordTransFormerTestsTrue3, Languages.valueBykey("words"));
        return _this;
    }
    ReplaceWordBycharcterInPassWordTransFormerTests.prototype.addTestReplaceWordBycharcterInPassWordTransFormerTestsTrue1 = function () {
        var result = this.replaceWordBycharcterInPassWordTransFormer.transform("barre");
        this.areIdentical(" |  ", result);
    };
    ReplaceWordBycharcterInPassWordTransFormerTests.prototype.addTestReplaceWordBycharcterInPassWordTransFormerTestsTrue2 = function () {
        var result = this.replaceWordBycharcterInPassWordTransFormer.transform("canard étoile égalité");
        this.areIdentical(" &  *  =  ", result);
    };
    ReplaceWordBycharcterInPassWordTransFormerTests.prototype.addTestReplaceWordBycharcterInPassWordTransFormerTestsTrue3 = function (word, replace) {
        var result = this.replaceWordBycharcterInPassWordTransFormer.transform(word);
        this.areIdentical(" " + replace + "  ", result);
    };
    ReplaceWordBycharcterInPassWordTransFormerTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return ReplaceWordBycharcterInPassWordTransFormerTests;
}(TestClass));
var ConversioNnumberTransformerTests = (function (_super) {
    __extends(ConversioNnumberTransformerTests, _super);
    function ConversioNnumberTransformerTests() {
        var _this = _super.apply(this, arguments) || this;
        _this.conversioNnumberTransformer = new ConversioNnumberTransformer(0);
        _this.spaceTransformer = new SpaceTransformer(0);
        return _this;
    }
    ConversioNnumberTransformerTests.prototype.addTestConversioNnumberTransformerTestsTrue1 = function () {
        var result = this.conversioNnumberTransformer.transform("deux");
        this.areIdentical("2 ", result);
    };
    ConversioNnumberTransformerTests.prototype.addTestConversioNnumberTransformerTestsTrue2 = function () {
        var result = this.conversioNnumberTransformer.transform("dix huit");
        this.areIdentical("18 ", result);
    };
    ConversioNnumberTransformerTests.prototype.addTestConversioNnumberTransformerTestsTrue3 = function () {
        var result1 = this.spaceTransformer.transform("neuf cent quatre-vingt-sept milliards six cent cinquante-quatre millions trois cent vingt et un mille sept cent quatre-vingt et une");
        var result2 = this.conversioNnumberTransformer.transform(result1);
        this.areIdentical("987654321781 ", result2);
    };
    ConversioNnumberTransformerTests.prototype.addTestConversioNnumberTransformerTestsTrue4 = function () {
        var result1 = this.spaceTransformer.transform("sept cent vingt mille et trois cent quatre-vingt cinq");
        var result2 = this.conversioNnumberTransformer.transform(result1);
        this.areIdentical("720385 ", result2);
    };
    ConversioNnumberTransformerTests.prototype.addTestConversioNnumberTransformerTestsTrue5 = function () {
        var result1 = this.spaceTransformer.transform("");
        var result2 = this.conversioNnumberTransformer.transform(result1);
        this.areIdentical(" ", result2);
    };
    ConversioNnumberTransformerTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return ConversioNnumberTransformerTests;
}(TestClass));
var TransFormerServiceTests = (function (_super) {
    __extends(TransFormerServiceTests, _super);
    function TransFormerServiceTests() {
        var _this = _super.call(this) || this;
        _this.transFormerServiceAllValidation = ToolTransformationTest.createTransFormerService();
        _this.transFormerServiceFalseValidation = ToolTransformationTest.createTransFormerService();
        _this.parameterizeUnitTest(_this.addTestTransFormerServiceTestsTrue1, [
            ["U:-)v1000m!!", "Un sourire vaut mille mots!!"],
            ["L'hqv3000000000", "L'homme qui valait trois milliards"],
            ["Ugdcvmq10ad'e", "Un gramme de chance vaut mieux que dix ans d'expérience"],
            ["@c8rv,P75002", "adresse cnil 8 rue vienne, Paris 75002"],
            ["Oncglmja30a.", "On ne comprend guère le mot jeunesse avant trente ans."],
            ["Jcq4s4,S,&q8s8", "Je crois que deux et deux sont quatre, Sganarelle, et que quatre et quatre sont huit"],
            ["Lmc'erà2lpq'on'apet1", "Le mariage c'est résoudre à deux les problèmes qu'on n'aurait pas eus tout seul"],
            ["Lr*enl5s1638", "Le roi soleil est né le 5 septembre 1638"],
            ["L*eà1501000000dkdlt", "Le soleil est à 150 millions de km de la terre"],
            ["1#p4°d.Tscolml", "un carré possède quatre angles droits. Tous ses côtés ont la même longueur"],
            ["Lmd'1d3pceep", "La maison d'un des trois petits cochons est en pierre"],
            ["C:987654321781v", "Chiffre : neuf cent quatre-vingt-sept milliards six cent cinquante-quatre millions trois cent vingt et un mille sept cent quatre-vingt et une voiture"]
        ]);
        _this.parameterizeUnitTest(_this.addTestTransFormerServiceTestsTrue2, [
            ["U:-)v1000m!!", "Un sourire vaut mille mots!!"],
            ["L'hqv3000000000", "L'homme qui valait trois milliards"],
            ["Ugdcvmq10ad'e", "Un gramme de chance vaut mieux que dix ans d'expérience"],
            ["@c8rv,P75002", "adresse cnil 8 rue vienne, Paris 75002"],
            ["Oncglmja30a.", "On ne comprend guère le mot jeunesse avant trente ans."],
            ["Jcq4s4,S,&q8s8", "Je crois que deux et deux sont quatre, Sganarelle, et que quatre et quatre sont huit"],
            ["Lmc'erà2lpq'on'apet1", "Le mariage c'est résoudre à deux les problèmes qu'on n'aurait pas eus tout seul"],
            ["Lr*enl5s1638", "Le roi soleil est né le 5 septembre 1638"],
            ["L*eà1501000000dkdlt", "Le soleil est à 150 millions de km de la terre"],
            ["1#p4°d.Tscolml", "un carré possède quatre angles droits. Tous ses côtés ont la même longueur"],
            ["Lmd'1d3pceep", "La maison d'un des trois petits cochons est en pierre"],
            ["C:987654321781v", "Chiffre : neuf cent quatre-vingt-sept milliards six cent cinquante-quatre millions trois cent vingt et un mille sept cent quatre-vingt et une voiture"]
        ]);
        return _this;
    }
    TransFormerServiceTests.prototype.addTestTransFormerServiceTestsTrue1 = function (mdp, phrase) {
        this.areIdentical(mdp, this.transFormerServiceAllValidation.execute(phrase, 0).getPassWord());
    };
    TransFormerServiceTests.prototype.addTestTransFormerServiceTestsTrue2 = function (mdp, phrase) {
        this.areIdentical(mdp, this.transFormerServiceFalseValidation.execute(phrase, 0).getPassWord());
    };
    TransFormerServiceTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return TransFormerServiceTests;
}(TestClass));
var ToolTransformationTest = (function () {
    function ToolTransformationTest() {
    }
    ToolTransformationTest.createTransFormerService = function () {
        return new TransFormerService([
            new ReplaceWordBycharcterInPassWordTransFormer(0),
            new ConversioNnumberTransformer(0),
            new FirstLetterWordTransFormer(0),
            new SpaceTransformer(0)
        ]);
    };
    return ToolTransformationTest;
}());
