var SuiteOfNumberValidatorRule = (function () {
    function SuiteOfNumberValidatorRule(selector, step) {
        this.selector = selector;
        this.step = step;
    }
    SuiteOfNumberValidatorRule.prototype.validate = function (password) {
        var ret = true;
        if (password.getPassWord() !== null && password.getPassWord().split(' ').join('').match(/\d+/g) !== null) {
            password.getPassWord().split(' ').join('').match(/\d+/g).forEach(function (c) {
                var count = 0;
                var suite = true;
                for (var i = 0; i < c.length - 1 && suite; i++) {
                    if ((parseInt(c[i]) + 1) == parseInt(c[i + 1])) {
                        count++;
                    }
                    else {
                        suite = false;
                    }
                }
                if (count >= 3 && suite) {
                    ret = false;
                }
            });
        }
        return ret;
    };
    SuiteOfNumberValidatorRule.prototype.getSelector = function () {
        return this.selector;
    };
    SuiteOfNumberValidatorRule.prototype.getStep = function () {
        return this.step;
    };
    SuiteOfNumberValidatorRule.prototype.getPoint = function () {
        return 2;
    };
    return SuiteOfNumberValidatorRule;
}());
var NumberDifferentValidatorValidatorRule = (function () {
    function NumberDifferentValidatorValidatorRule(selector, step) {
        this.selector = selector;
        this.step = step;
    }
    NumberDifferentValidatorValidatorRule.prototype.validate = function (password) {
        var tab = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0]];
        for (var i = 0; i < password.getPassWord().length; i++) {
            if (password.getPassWord()[i] == "0" || parseInt(password.getPassWord()[i])) {
                var caractereiMdp = parseInt(password.getPassWord()[i]);
                tab[caractereiMdp][1]++;
            }
        }
        var count = 0;
        for (var j = 0; j <= tab.length - 1; j++) {
            if (tab[j][1] > 0)
                count++;
        }
        return count >= 1 ? true : false;
    };
    NumberDifferentValidatorValidatorRule.prototype.getSelector = function () {
        return this.selector;
    };
    NumberDifferentValidatorValidatorRule.prototype.getStep = function () {
        return this.step;
    };
    NumberDifferentValidatorValidatorRule.prototype.getPoint = function () {
        return 2;
    };
    return NumberDifferentValidatorValidatorRule;
}());
var YearValidatorValidatorRule = (function () {
    function YearValidatorValidatorRule(selector, step) {
        this.selector = selector;
        this.step = step;
    }
    YearValidatorValidatorRule.prototype.validate = function (password) {
        var valid = true;
        for (var year = 1950; year <= 2049 && valid === true; year++) {
            if (password.getPassWord().split(' ').join('').match(year.toString())) {
                valid = false;
            }
            if (password.getPassWord().split(' ').join('').match(year.toString() + "\\d+")) {
                valid = true;
            }
            if (password.getPassWord().split(' ').join('').match("\\d+" + year.toString())) {
                valid = true;
            }
        }
        return valid;
    };
    YearValidatorValidatorRule.prototype.getSelector = function () {
        return this.selector;
    };
    YearValidatorValidatorRule.prototype.getStep = function () {
        return this.step;
    };
    YearValidatorValidatorRule.prototype.getPoint = function () {
        return 2;
    };
    return YearValidatorValidatorRule;
}());
var NumberOfChararcterInPassWordValidatorRule = (function () {
    function NumberOfChararcterInPassWordValidatorRule(selector, step, numberWord) {
        if (numberWord === void 0) { numberWord = 12; }
        this.selector = selector;
        this.step = step;
        this.numberWord = numberWord;
    }
    NumberOfChararcterInPassWordValidatorRule.prototype.validate = function (password) {
        return password.getPassWord().split(' ').join('').length >= this.numberWord;
    };
    NumberOfChararcterInPassWordValidatorRule.prototype.getSelector = function () {
        return this.selector;
    };
    NumberOfChararcterInPassWordValidatorRule.prototype.getStep = function () {
        return this.step;
    };
    NumberOfChararcterInPassWordValidatorRule.prototype.getPoint = function () {
        return 2;
    };
    return NumberOfChararcterInPassWordValidatorRule;
}());
var IdenticalChararcterInPassWordValidatorRule = (function () {
    function IdenticalChararcterInPassWordValidatorRule(selector, step, numberOfChar) {
        if (numberOfChar === void 0) { numberOfChar = 4; }
        this.selector = selector;
        this.step = step;
        this.numberOfChar = numberOfChar;
    }
    IdenticalChararcterInPassWordValidatorRule.prototype.validate = function (password) {
        var lastChar = "";
        var count = 1;
        var ret = true;
        for (var i = 0; i < password.getPassWord().length; i++) {
            if (lastChar == password.getPassWord().charAt(i)) {
                count++;
                if (count == this.numberOfChar)
                    ret = false;
            }
            else {
                count = 1;
            }
            lastChar = password.getPassWord().charAt(i);
        }
        return ret;
    };
    IdenticalChararcterInPassWordValidatorRule.prototype.getSelector = function () {
        return this.selector;
    };
    IdenticalChararcterInPassWordValidatorRule.prototype.getStep = function () {
        return this.step;
    };
    IdenticalChararcterInPassWordValidatorRule.prototype.getPoint = function () {
        return 2;
    };
    return IdenticalChararcterInPassWordValidatorRule;
}());
var ContainsCaracterSpecialValidatorRule = (function () {
    function ContainsCaracterSpecialValidatorRule(selector, step) {
        this.selector = selector;
        this.step = step;
    }
    ContainsCaracterSpecialValidatorRule.prototype.validate = function (password) {
        return password.getPassWord() !== "" && password.getPassWord().match(/[!,@,#,$,%,^,&,*,?,_,~,(,),;,\/,\\,+,\[,\],.,{,},:,',|,°,=,<,>,€,-]/g) !== null;
    };
    ContainsCaracterSpecialValidatorRule.prototype.getSelector = function () {
        return this.selector;
    };
    ContainsCaracterSpecialValidatorRule.prototype.getStep = function () {
        return this.step;
    };
    ContainsCaracterSpecialValidatorRule.prototype.getPoint = function () {
        return 2;
    };
    return ContainsCaracterSpecialValidatorRule;
}());
var PresenceLetterMinisculeValidatorRule = (function () {
    function PresenceLetterMinisculeValidatorRule(selector, step) {
        this.selector = selector;
        this.step = step;
    }
    PresenceLetterMinisculeValidatorRule.prototype.validate = function (password) {
        return password.getPassWord().match(/[a-z]/) !== null;
    };
    PresenceLetterMinisculeValidatorRule.prototype.getSelector = function () {
        return this.selector;
    };
    PresenceLetterMinisculeValidatorRule.prototype.getStep = function () {
        return this.step;
    };
    PresenceLetterMinisculeValidatorRule.prototype.getPoint = function () {
        return 2;
    };
    return PresenceLetterMinisculeValidatorRule;
}());
var PresenceLetterMajusculeValidatorRule = (function () {
    function PresenceLetterMajusculeValidatorRule(selector, step) {
        this.selector = selector;
        this.step = step;
    }
    PresenceLetterMajusculeValidatorRule.prototype.validate = function (password) {
        return password.getPassWord().match(/[A-Z]/) !== null;
    };
    PresenceLetterMajusculeValidatorRule.prototype.getSelector = function () {
        return this.selector;
    };
    PresenceLetterMajusculeValidatorRule.prototype.getStep = function () {
        return this.step;
    };
    PresenceLetterMajusculeValidatorRule.prototype.getPoint = function () {
        return 3;
    };
    return PresenceLetterMajusculeValidatorRule;
}());
var AnyFourSequentialLetterInTheAlphabetValidatorRule = (function () {
    function AnyFourSequentialLetterInTheAlphabetValidatorRule(selector, step) {
        this.selector = selector;
        this.step = step;
    }
    AnyFourSequentialLetterInTheAlphabetValidatorRule.prototype.validate = function (password) {
        var valid = false;
        if (password.getPassWord().length > 2) {
            var countCaractereSuiv = 0;
            for (var i = 0; i < password.getPassWord().length - 1; i++) {
                try {
                    var v = password.getPassWord().toLowerCase().charCodeAt(i);
                    if (((v >= 97 && v <= 122) || (v >= 65 && v <= 90)) && (password.getPassWord().toLowerCase().charCodeAt(i) + 1) === password.getPassWord().toLowerCase().charCodeAt(i + 1)) {
                        countCaractereSuiv++;
                    }
                    else {
                        countCaractereSuiv = 0;
                    }
                    if (countCaractereSuiv >= 3) {
                        valid = true;
                    }
                }
                catch (e) {
                }
            }
        }
        return !valid;
    };
    AnyFourSequentialLetterInTheAlphabetValidatorRule.prototype.getSelector = function () {
        return this.selector;
    };
    AnyFourSequentialLetterInTheAlphabetValidatorRule.prototype.getStep = function () {
        return this.step;
    };
    AnyFourSequentialLetterInTheAlphabetValidatorRule.prototype.getPoint = function () {
        return 2;
    };
    return AnyFourSequentialLetterInTheAlphabetValidatorRule;
}());
var AnyFourSequentialLettersInTheKeyBordValidatorRule = (function () {
    function AnyFourSequentialLettersInTheKeyBordValidatorRule(selector, step) {
        this.selector = selector;
        this.step = step;
    }
    AnyFourSequentialLettersInTheKeyBordValidatorRule.prototype.validate = function (password) {
        var testCountCaractereKeybordSuiv = false;
        if (password.getPassWord().length > 4) {
            for (var i = 0; i < password.getPassWord().length - 4; i++) {
                try {
                    if ("azertyuiopqsdfghjklmwxcvbn".indexOf(password.getPassWord().toLowerCase().substr(i, 4)) !== -1) {
                        testCountCaractereKeybordSuiv = true;
                    }
                }
                catch (e) {
                }
            }
        }
        return !testCountCaractereKeybordSuiv;
    };
    AnyFourSequentialLettersInTheKeyBordValidatorRule.prototype.getSelector = function () {
        return this.selector;
    };
    AnyFourSequentialLettersInTheKeyBordValidatorRule.prototype.getStep = function () {
        return this.step;
    };
    AnyFourSequentialLettersInTheKeyBordValidatorRule.prototype.getPoint = function () {
        return 2;
    };
    return AnyFourSequentialLettersInTheKeyBordValidatorRule;
}());
var CallValidatorService = (function () {
    function CallValidatorService(validators) {
        this.validators = validators;
    }
    CallValidatorService.prototype.getValidatorByStep = function (step) {
        var ret = [];
        this.validators.forEach(function (validatior) {
            if (validatior.getStep() === step)
                ret.push(validatior);
        });
        return ret;
    };
    CallValidatorService.prototype.callStepByStep = function (password, step) {
        var ret = true;
        this.getValidatorByStep(step).forEach(function (validatior) {
            if (!validatior.validate(password))
                ret = false;
        });
        return ret;
    };
    CallValidatorService.prototype.getMaxPointStepByStep = function (step) {
        var ret = 0;
        this.getValidatorByStep(step).forEach(function (validatior) {
            ret += validatior.getPoint();
        });
        return ret;
    };
    CallValidatorService.prototype.getSelectorsErrorByStep = function (password, step) {
        var ret = [];
        this.getValidatorByStep(step).forEach(function (validatior) {
            if (!validatior.validate(password))
                ret.push(validatior.getSelector());
        });
        return ret;
    };
    CallValidatorService.prototype.callValidatorGetPointByStep = function (password, step) {
        var ret = 0;
        this.getValidatorByStep(step).forEach(function (validatior) {
            if (validatior.validate(password))
                ret += validatior.getPoint();
        });
        return ret;
    };
    return CallValidatorService;
}());
