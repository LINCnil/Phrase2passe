var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SuiteOfNumberValidatorRuleTests = (function (_super) {
    __extends(SuiteOfNumberValidatorRuleTests, _super);
    function SuiteOfNumberValidatorRuleTests() {
        var _this = _super.call(this) || this;
        _this.suiteOfNumberValidatorRule = new SuiteOfNumberValidatorRule("#rule", 1);
        _this.parameterizeUnitTest(_this.addTestSuiteOfNumberValidatorRuleTestsTrue2, [
            ["1234"], ["2345"], ["3456"], ["4567"], ["5678"], ["6789"], ["6789"], ["0123456789"], ["0123456789a85"]
        ]);
        _this.parameterizeUnitTest(_this.addTestSuiteOfNumberValidatorRuleTestsFalse2, [
            ["7123 a 5789"], ["0234"], ["0345"], ["0456"], ["0567"], ["0678"], ["0789"],
            ["7892"], ["789012345"]
        ]);
        return _this;
    }
    SuiteOfNumberValidatorRuleTests.prototype.addTestSuiteOfNumberValidatorRuleTestsTrue1 = function () {
        var passWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.suiteOfNumberValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    SuiteOfNumberValidatorRuleTests.prototype.addTestSuiteOfNumberValidatorRuleTestsTrue2 = function (n1) {
        var passWord = new PassWord("NOT USED", n1);
        var result = this.suiteOfNumberValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    SuiteOfNumberValidatorRuleTests.prototype.addTestSuiteOfNumberValidatorRuleTestsFalse1 = function () {
        var passWord = new PassWord("NOT USED", "U:-)v12345m!!");
        var result = this.suiteOfNumberValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    SuiteOfNumberValidatorRuleTests.prototype.addTestSuiteOfNumberValidatorRuleTestsFalse2 = function (n) {
        var passWord = new PassWord("NOT USED", n);
        var result = this.suiteOfNumberValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    SuiteOfNumberValidatorRuleTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return SuiteOfNumberValidatorRuleTests;
}(TestClass));
var NumberDifferentValidatorValidatorRuleTests = (function (_super) {
    __extends(NumberDifferentValidatorValidatorRuleTests, _super);
    function NumberDifferentValidatorValidatorRuleTests() {
        var _this = _super.apply(this, arguments) || this;
        _this.numberDifferentValidatorValidatorRule = new NumberDifferentValidatorValidatorRule("#rule", 1);
        return _this;
    }
    NumberDifferentValidatorValidatorRuleTests.prototype.addTestNumberDifferentValidatorValidatorRuleTestsTrue1 = function () {
        var passWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.numberDifferentValidatorValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    NumberDifferentValidatorValidatorRuleTests.prototype.addTestNumberDifferentValidatorValidatorRuleTestsTrue2 = function () {
        var passWord = new PassWord("NOT USED", "1------------------0");
        var result = this.numberDifferentValidatorValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    NumberDifferentValidatorValidatorRuleTests.prototype.addTestNumberDifferentValidatorValidatorRuleTestsFalse1 = function () {
        var passWord = new PassWord("NOT USED", "0 ------------------ 0");
        var result = this.numberDifferentValidatorValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    NumberDifferentValidatorValidatorRuleTests.prototype.addTestNumberDifferentValidatorValidatorRuleTestsFalse2 = function () {
        var passWord = new PassWord("NOT USED", "U:-)v0m!!");
        var result = this.numberDifferentValidatorValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    NumberDifferentValidatorValidatorRuleTests.prototype.addTestNumberDifferentValidatorValidatorRuleTestsFalse3 = function () {
        var passWord = new PassWord("NOT USED", "U:-)vm!!");
        var result = this.numberDifferentValidatorValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    NumberDifferentValidatorValidatorRuleTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return NumberDifferentValidatorValidatorRuleTests;
}(TestClass));
var YearValidatorValidatorRuleTests = (function (_super) {
    __extends(YearValidatorValidatorRuleTests, _super);
    function YearValidatorValidatorRuleTests() {
        var _this = _super.apply(this, arguments) || this;
        _this.yearValidatorValidatorRule = new YearValidatorValidatorRule("#rule", 1);
        return _this;
    }
    YearValidatorValidatorRuleTests.prototype.addTestYearValidatorValidatorRuleTestsTrue1 = function () {
        var passWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.yearValidatorValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    YearValidatorValidatorRuleTests.prototype.addTestYearValidatorValidatorRuleTestsTrue2 = function () {
        var passWord = new PassWord("NOT USED", "1--------v02010m----------0");
        var result = this.yearValidatorValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    YearValidatorValidatorRuleTests.prototype.addTestYearValidatorValidatorRuleTestsFalse1 = function () {
        var passWord = new PassWord("NOT USED", "0-------1950---1852--------0");
        var result = this.yearValidatorValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    YearValidatorValidatorRuleTests.prototype.addTestYearValidatorValidatorRuleTestsFalse2 = function () {
        var passWord = new PassWord("NOT USED", "U:-)v2010m!!");
        var result = this.yearValidatorValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    YearValidatorValidatorRuleTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return YearValidatorValidatorRuleTests;
}(TestClass));
var NumberOfChararcterInPassWordValidatorRuleTests = (function (_super) {
    __extends(NumberOfChararcterInPassWordValidatorRuleTests, _super);
    function NumberOfChararcterInPassWordValidatorRuleTests() {
        var _this = _super.apply(this, arguments) || this;
        _this.numberOfChararcterInPassWordValidatorRule = new NumberOfChararcterInPassWordValidatorRule(".rule", 1, 8);
        return _this;
    }
    NumberOfChararcterInPassWordValidatorRuleTests.prototype.addTestNumberOfChararcterInPassWordValidatorRuleTestsTrue1 = function () {
        var passWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.numberOfChararcterInPassWordValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    NumberOfChararcterInPassWordValidatorRuleTests.prototype.addTestNumberOfChararcterInPassWordValidatorRuleTestsTrue2 = function () {
        var passWord = new PassWord("NOT USED", "1--------v02010m----------0");
        var result = this.numberOfChararcterInPassWordValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    NumberOfChararcterInPassWordValidatorRuleTests.prototype.addTestNumberOfChararcterInPassWordValidatorRuleTestsFalse1 = function () {
        var passWord = new PassWord("NOT USED", "0-----1");
        var result = this.numberOfChararcterInPassWordValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    NumberOfChararcterInPassWordValidatorRuleTests.prototype.addTestNumberOfChararcterInPassWordValidatorRuleTestsFalse2 = function () {
        var passWord = new PassWord("NOT USED", "U");
        var result = this.numberOfChararcterInPassWordValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    NumberOfChararcterInPassWordValidatorRuleTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return NumberOfChararcterInPassWordValidatorRuleTests;
}(TestClass));
var ContainsCaracterSpecialValidatorRuleTests = (function (_super) {
    __extends(ContainsCaracterSpecialValidatorRuleTests, _super);
    function ContainsCaracterSpecialValidatorRuleTests() {
        var _this = _super.call(this) || this;
        _this.containsCaracterSpecialValidatorRule = new ContainsCaracterSpecialValidatorRule("#rule", 1);
        _this.parameterizeUnitTest(_this.addTestContainsCaracterSpecialValidatorRuleTestsTrue3, [
            ["!"], ["@"], ["#"], ["$"], ["%"], ["^"], ["&"], ["*"],
            ["?"], ["_"], ["~"], ["("], [")"], [";"], ["\\"], ["+"],
            ["\/"], ["]"], ["["], ["."], ["{"], ["}"], [":"], ["'"],
            ["|"], ["°"], ["="], ["<"], [">"], ["€"], ["-"]
        ]);
        return _this;
    }
    ContainsCaracterSpecialValidatorRuleTests.prototype.addTestContainsCaracterSpecialValidatorRuleTestsTrue1 = function () {
        var passWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.containsCaracterSpecialValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    ContainsCaracterSpecialValidatorRuleTests.prototype.addTestContainsCaracterSpecialValidatorRuleTestsTrue2 = function () {
        var passWord = new PassWord("NOT USED", "1-------v02010m----------0");
        var result = this.containsCaracterSpecialValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    ContainsCaracterSpecialValidatorRuleTests.prototype.addTestContainsCaracterSpecialValidatorRuleTestsTrue3 = function (c) {
        var passWord = new PassWord("NOT USED", "aaaaaaaa" + c);
        var result = this.containsCaracterSpecialValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    ContainsCaracterSpecialValidatorRuleTests.prototype.addTestContainsCaracterSpecialValidatorRuleTestsFalse1 = function () {
        var passWord = new PassWord("NOT USED", "0a ff f sdds 1");
        var result = this.containsCaracterSpecialValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    ContainsCaracterSpecialValidatorRuleTests.prototype.addTestContainsCaracterSpecialValidatorRuleTestsFalse2 = function () {
        var passWord = new PassWord("NOT USED", "U");
        var result = this.containsCaracterSpecialValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    ContainsCaracterSpecialValidatorRuleTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return ContainsCaracterSpecialValidatorRuleTests;
}(TestClass));
var PresenceLetterMinisculeValidatorRuleTests = (function (_super) {
    __extends(PresenceLetterMinisculeValidatorRuleTests, _super);
    function PresenceLetterMinisculeValidatorRuleTests() {
        var _this = _super.call(this) || this;
        _this.presenceLetterMinisculeValidatorRule = new PresenceLetterMinisculeValidatorRule("#rule", 1);
        _this.parameterizeUnitTest(_this.addTestPresenceLetterMinisculeValidatorRuleTestsTrue3, [
            ["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"],
            ["i"], ["j"], ["k"], ["l"], ["m"], ["n"], ["o"], ["p"],
            ["q"], ["r"], ["s"], ["t"], ["u"], ["v"], ["w"], ["x"],
            ["y"], ["z"]
        ]);
        return _this;
    }
    PresenceLetterMinisculeValidatorRuleTests.prototype.addTestPresenceLetterMinisculeValidatorRuleTestsTrue1 = function () {
        var passWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.presenceLetterMinisculeValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    PresenceLetterMinisculeValidatorRuleTests.prototype.addTestPresenceLetterMinisculeValidatorRuleTestsTrue2 = function () {
        var passWord = new PassWord("NOT USED", "1-------v02010m----------0");
        var result = this.presenceLetterMinisculeValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    PresenceLetterMinisculeValidatorRuleTests.prototype.addTestPresenceLetterMinisculeValidatorRuleTestsTrue3 = function (c) {
        var passWord = new PassWord("NOT USED", c);
        var result = this.presenceLetterMinisculeValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    PresenceLetterMinisculeValidatorRuleTests.prototype.addTestPresenceLetterMinisculeValidatorRuleTestsFalse1 = function () {
        var passWord = new PassWord("NOT USED", "A%N?N96965");
        var result = this.presenceLetterMinisculeValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    PresenceLetterMinisculeValidatorRuleTests.prototype.addTestPresenceLetterMinisculeValidatorRuleTestsFalse2 = function () {
        var passWord = new PassWord("NOT USED", "UKLKLKL787954545");
        var result = this.presenceLetterMinisculeValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    PresenceLetterMinisculeValidatorRuleTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return PresenceLetterMinisculeValidatorRuleTests;
}(TestClass));
var PresenceLetterMajusculeValidatorRuleTests = (function (_super) {
    __extends(PresenceLetterMajusculeValidatorRuleTests, _super);
    function PresenceLetterMajusculeValidatorRuleTests() {
        var _this = _super.call(this) || this;
        _this.presenceLetterMajusculeValidatorRule = new PresenceLetterMajusculeValidatorRule("#rule", 1);
        _this.parameterizeUnitTest(_this.addTestPresenceLetterMajusculeValidatorRuleTestsTrue3, [
            ["A"], ["B"], ["C"], ["D"], ["E"], ["F"], ["G"], ["H"],
            ["I"], ["J"], ["K"], ["L"], ["M"], ["N"], ["O"], ["P"],
            ["Q"], ["R"], ["S"], ["T"], ["U"], ["V"], ["W"], ["X"],
            ["Y"], ["Z"]
        ]);
        return _this;
    }
    PresenceLetterMajusculeValidatorRuleTests.prototype.addTestPresenceLetterMajusculeValidatorRuleTestsTrue1 = function () {
        var passWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.presenceLetterMajusculeValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    PresenceLetterMajusculeValidatorRuleTests.prototype.addTestPresenceLetterMajusculeValidatorRuleTestsTrue2 = function () {
        var passWord = new PassWord("NOT USED", "1--M-----v02010m----------0");
        var result = this.presenceLetterMajusculeValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    PresenceLetterMajusculeValidatorRuleTests.prototype.addTestPresenceLetterMajusculeValidatorRuleTestsTrue3 = function (c) {
        var passWord = new PassWord("NOT USED", c);
        var result = this.presenceLetterMajusculeValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    PresenceLetterMajusculeValidatorRuleTests.prototype.addTestPresenceLetterMajusculeValidatorRuleTestsFalse1 = function () {
        var passWord = new PassWord("NOT USED", "a%n?m96965");
        var result = this.presenceLetterMajusculeValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    PresenceLetterMajusculeValidatorRuleTests.prototype.addTestPresenceLetterMajusculeValidatorRuleTestsFalse2 = function () {
        var passWord = new PassWord("NOT USED", "mfdlmgk kgl kfdmlkfd ld87954545");
        var result = this.presenceLetterMajusculeValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    PresenceLetterMajusculeValidatorRuleTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return PresenceLetterMajusculeValidatorRuleTests;
}(TestClass));
var AnyFourSequentialLetterInTheAlphabetValidatorRuleTests = (function (_super) {
    __extends(AnyFourSequentialLetterInTheAlphabetValidatorRuleTests, _super);
    function AnyFourSequentialLetterInTheAlphabetValidatorRuleTests() {
        var _this = _super.call(this) || this;
        _this.anyFourSequentialLetterInTheAlphabetValidatorRule = new AnyFourSequentialLetterInTheAlphabetValidatorRule("#rule", 1);
        _this.parameterizeUnitTest(_this.addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse3, [
            ["abcd"], ["bcde"], ["cdef"], ["defg"], ["efgh"], ["fghi"], ["ghij"], ["hijk"],
            ["ijkl"], ["jklm"], ["klmn"], ["lmno"], ["mnop"], ["nopq"], ["opqr"], ["pqrs"],
            ["qrst"], ["rstu"], ["stuv"], ["tuvw"], ["uvwx"], ["vwxy"], ["wxyz"]
        ]);
        _this.parameterizeUnitTest(_this.addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse4, [
            ["ABCD"], ["BCDE"], ["CDEF"], ["DEFG"], ["EFGH"], ["FGHI"], ["GHIJ"], ["HIJK"],
            ["IJKL"], ["JKLM"], ["KLMN"], ["LMNO"], ["MNOP"], ["NOPQ"], ["OPQR"], ["PQRS"],
            ["QRST"], ["RSTU"], ["STUV"], ["TUVW"], ["UVWX"], ["VWXY"], ["WXYZ"]
        ]);
        return _this;
    }
    AnyFourSequentialLetterInTheAlphabetValidatorRuleTests.prototype.addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleTrue1 = function () {
        var passWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    AnyFourSequentialLetterInTheAlphabetValidatorRuleTests.prototype.addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleTrue2 = function () {
        var passWord = new PassWord("NOT USED", "1--M-----v02010m----------0");
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    AnyFourSequentialLetterInTheAlphabetValidatorRuleTests.prototype.addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleTrue3 = function () {
        var sc = "#$%&'()";
        var passWord = new PassWord("", sc);
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    AnyFourSequentialLetterInTheAlphabetValidatorRuleTests.prototype.addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse1 = function () {
        var passWord = new PassWord("NOT USED", "a%n?m96965abcde");
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    AnyFourSequentialLetterInTheAlphabetValidatorRuleTests.prototype.addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse2 = function () {
        var passWord = new PassWord("NOT USED", "mfdlmgk kgl kfdmlkfd ld879ghjiklmn54545");
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    AnyFourSequentialLetterInTheAlphabetValidatorRuleTests.prototype.addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse3 = function (sc) {
        var passWord = new PassWord("NOT USED", "fjglkfdjgfkdlj" + sc);
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    AnyFourSequentialLetterInTheAlphabetValidatorRuleTests.prototype.addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse4 = function (sc) {
        var passWord = new PassWord("NOT USED", "fjglkfdjgfkdlj" + sc);
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    AnyFourSequentialLetterInTheAlphabetValidatorRuleTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return AnyFourSequentialLetterInTheAlphabetValidatorRuleTests;
}(TestClass));
var AnyFourSequentialLettersInTheKeyBordValidatorRuleTests = (function (_super) {
    __extends(AnyFourSequentialLettersInTheKeyBordValidatorRuleTests, _super);
    function AnyFourSequentialLettersInTheKeyBordValidatorRuleTests() {
        var _this = _super.call(this) || this;
        _this.anyFourSequentialLettersInTheKeyBordValidatorRule = new AnyFourSequentialLettersInTheKeyBordValidatorRule("#rule", 1);
        _this.parameterizeUnitTest(_this.addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsFalse3, [
            ["azert"], ["zerty"], ["ertyu"], ["rtyui"], ["tyuio"], ["yuiop"], ["uiopq"], ["iopqs"],
            ["opqsd"], ["pqsdf"], ["qsdfg"], ["sdfgh"], ["dfghj"], ["fghjk"], ["ghjkl"], ["hjklm"],
            ["jklmw"], ["klmwx"], ["lmwxc"], ["mwxcv"], ["wxcvb"], ["xcvbn"]
        ]);
        return _this;
    }
    AnyFourSequentialLettersInTheKeyBordValidatorRuleTests.prototype.addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsTrue0 = function () {
        var passWord = new PassWord("hfd jk fhsdkfjsd hjkds hjksd jk -* A 123456   789 12", "hjfhhj-*A12345678912");
        var result = this.anyFourSequentialLettersInTheKeyBordValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    AnyFourSequentialLettersInTheKeyBordValidatorRuleTests.prototype.addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsTrue1 = function () {
        var passWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.anyFourSequentialLettersInTheKeyBordValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    AnyFourSequentialLettersInTheKeyBordValidatorRuleTests.prototype.addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsTrue2 = function () {
        var passWord = new PassWord("NOT USED", "1--M-----v02010m----------0");
        var result = this.anyFourSequentialLettersInTheKeyBordValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    };
    AnyFourSequentialLettersInTheKeyBordValidatorRuleTests.prototype.addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsFalse1 = function () {
        var passWord = new PassWord("NOT USED", "azerty a%n?m96965abcde");
        var result = this.anyFourSequentialLettersInTheKeyBordValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    AnyFourSequentialLettersInTheKeyBordValidatorRuleTests.prototype.addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsFalse2 = function () {
        var passWord = new PassWord("NOT USED", "mfdlmgk kgl kfdmlkfd ld879ghjiklmn54545 hjklm");
        var result = this.anyFourSequentialLettersInTheKeyBordValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    AnyFourSequentialLettersInTheKeyBordValidatorRuleTests.prototype.addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsFalse3 = function (s) {
        var passWord = new PassWord("NOT USED", "fjglkfdjgfkdlj" + s);
        var result = this.anyFourSequentialLettersInTheKeyBordValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    };
    AnyFourSequentialLettersInTheKeyBordValidatorRuleTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return AnyFourSequentialLettersInTheKeyBordValidatorRuleTests;
}(TestClass));
var CallValidatorServiceTests = (function (_super) {
    __extends(CallValidatorServiceTests, _super);
    function CallValidatorServiceTests() {
        var _this = _super.call(this) || this;
        function createCallValidatorServiceCallToNextStep() {
            return new CallValidatorService([
                new NumberOfChararcterInPassWordValidatorRule("", 0, 3),
                new NumberOfChararcterInPassWordValidatorRule("", 0, 2)
            ]);
        }
        _this.callValidatorService = createCallValidatorServiceCallToNextStep();
        _this.parameterizeUnitTest(_this.addTestCallValidatorServiceTestsTrue1, [
            [false, '\u0042\u0042', "NOT USED"],
            [false, "%", "NOT USED"],
            [true, "U:-)v1000m!!", "Un sourire vaut mille mots!!"],
            [true, "L'hqv3000000000", "L'homme qui valait trois milliards"],
            [true, "Ugdcvmq10ad'e", "Un gramme de chance vaut mieux que dix ans d'expérience"],
            [true, "@c8rv,P75002", "adresse cnil 8 rue vienne, Paris 75002"],
            [true, "Oncglmja30a.", "On ne comprend guère le mot jeunesse avant trente ans."],
            [true, "Jcq4s4,S,&q8s8", "Je crois que deux et deux sont quatre, Sganarelle, et que quatre et quatre sont huit"],
            [true, "Lmc'erà2lpq'on'apet1", "Le mariage c'est résoudre à deux les problèmes qu'on n'aurait pas eus tout seul"],
            [true, "Lr*enl5s1638", "Le roi soleil est né le 5 septembre 1638"],
            [true, "L*eà1501000000dkdlt", "Le soleil est à 150 millions de km de la terre"],
            [true, "1#p4°d.Tscolml", "un carré possède quatre angles droits. Tous ses côtés ont la même longueur"],
            [true, "Lmd'1d3pceep", "La maison d'un des trois petits cochons est en pierre"],
            [true, "C:987654321781v", "Chiffre : neuf cent quatre-vingt-sept milliards six cent cinquante-quatre millions trois cent vingt et un mille sept cent quatre-vingt et une voiture"]
        ]);
        return _this;
    }
    CallValidatorServiceTests.prototype.addTestCallValidatorServiceTestsTrue1 = function (result, mdp, text) {
        var passWord = new PassWord(text, mdp);
        this.areIdentical(result, this.callValidatorService.callStepByStep(passWord, 0));
        this.areIdentical(true, this.callValidatorService.callStepByStep(passWord, 1));
    };
    CallValidatorServiceTests.prototype.addTestCallValidatorServiceTestsTrue2 = function () {
        function createCallValidatorServiceCallToNextStep() {
            return new CallValidatorService([
                new NumberOfChararcterInPassWordValidatorRule("", 0, 3),
                new NumberOfChararcterInPassWordValidatorRule("", 0, 3),
                new NumberOfChararcterInPassWordValidatorRule("", 1, 3)
            ]);
        }
        var callValidatorService = createCallValidatorServiceCallToNextStep();
        this.areIdentical(4, callValidatorService.callValidatorGetPointByStep(new PassWord("NOT USED", "123"), 0));
        this.areIdentical(4, callValidatorService.getMaxPointStepByStep(0));
        this.areIdentical(2, callValidatorService.getMaxPointStepByStep(1));
        this.areIdentical(0, callValidatorService.getMaxPointStepByStep(2));
    };
    CallValidatorServiceTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return CallValidatorServiceTests;
}(TestClass));
var IdenticalChararcterInPassWordValidatorRuleTests = (function (_super) {
    __extends(IdenticalChararcterInPassWordValidatorRuleTests, _super);
    function IdenticalChararcterInPassWordValidatorRuleTests() {
        var _this = _super.call(this) || this;
        _this.rule = new IdenticalChararcterInPassWordValidatorRule(".rule", 0);
        _this.parameterizeUnitTest(_this.identicalChararcterInPassWordValidatorRuleTest, [
            [true, "azertyyuio"],
            [true, "azertiiiuio"],
            [false, "azertèèèèuio"],
            [false, "azertèèè%%%%uio"],
            [true, "a"],
            [false, "aaaa"],
            [false, "aa===="],
            [false, "aaaa=="],
            [false, "azertii////uio"],
            [false, "azertyyyyuio"],
            [false, "azertyyyyyuio"],
        ]);
        return _this;
    }
    IdenticalChararcterInPassWordValidatorRuleTests.prototype.identicalChararcterInPassWordValidatorRuleTest = function (result, mdp) {
        this.areIdentical(result, this.rule.validate(new PassWord("text", mdp)));
    };
    IdenticalChararcterInPassWordValidatorRuleTests.prototype.tearDown = function () {
        tearDownCounter++;
    };
    return IdenticalChararcterInPassWordValidatorRuleTests;
}(TestClass));
