var Languages = (function () {
    function Languages() {
    }
    Languages.init = function () {
        return Languages.initLanguage([
            Languages.language_password_fr,
            Languages.language_password_en
        ]);
    };
    Languages.initLanguage = function (languages) {
        var language_password = [];
        languages.forEach(function (language) {
            language_password.push(language.language);
        });
        languages.forEach(function (language) {
            language_password[language.language] = language;
        });
        return language_password;
    };
    Languages.valueBykey = function (key) {
        return this.language_password[Languages.language][key];
    };
    return Languages;
}());
Languages.language_password_fr = {
    "language": "fr",
    "number": {
        'zéro': 0,
        'une': 1,
        'un': 1,
        'deux': 2,
        'trois': 3,
        'quatre': 4,
        'cinq': 5,
        'six': 6,
        'sept': 7,
        'huit': 8,
        'neuf': 9,
        'dix': 10,
        'onze': 11,
        'douze': 12,
        'treize': 13,
        'quatorze': 14,
        'quinze': 15,
        'seize': 16,
        'vingt': 20,
        'trente': 30,
        'quarante': 40,
        'cinquante': 50,
        'soixante': 60,
        'cent': 100,
        'cents': 100,
        'mille': 1000,
        'milles': 1000,
        'millier': 1000,
        'milliers': 1000,
        'million': 1000000,
        'millions': 1000000,
        'milliard': 1000000000,
        'milliards': 1000000000,
        'billion': 1000000000000,
        'billions': 1000000000000,
        'billiard': 1000000000000000,
        'billiards': 1000000000000000,
        'trillion': 1000000000000000000,
        'trillions': 1000000000000000000,
        'trilliard': 1000000000000000000000,
        'trilliards': 1000000000000000000000,
        'quadrillion': 1000000000000000000000000,
        'quadrillions': 1000000000000000000000000,
        'quadrilliard': 1000000000000000000000000000,
        'quadrilliards': 1000000000000000000000000000,
        'quintillion': 1000000000000000000000000000000,
        'quintillions': 1000000000000000000000000000000
    },
    "words": [
        ["étoile", "*"], ["etoile", "*"], ["astérisque", "*"], ["asterisque", "*"], ["soleil", "*"], ["flocon", "*"], ["neige", "*"],
        ["et", "&"], ["oiseau", "&"], ["poule", "&"], ["canard", "&"], ["oie", "&"],
        ["deux points", ":"],
        ["point virgule", ";"],
        ["chapeau", "^"], ["pointu", "^"], ["pointe", "^"], ["cône", "^"], ["cone", "^"], ["montagne", "^"], ["toit", "^"], ["sommet", "^"],
        ["plus", "+"], ["addition", "+"], ["plusieurs", "+"], ["augmente", "+"], ["augmenté", "+"], ["croissance", "+"],
        ["moins", "-"], ["union", "-"], ["trait", "-"], ["soustraction", "-"],
        ["bas", "_"], ["underscore", "_"], ["sol", "_"], ["planche", "_"],
        ["dollar", "$"], ["americain", "$"], ["amerique", "$"], ["usa", "$"],
        ["carré", "#"], ["dièse", "#"], ["diese", "#"],
        ["degré", "°"], ["alcool", "°"], ["angle", "°"], ["bulle", "°"],
        ["vague", "~"], ["tilde", "~"], ["mer", "~"], ["ocean", "~"], ["océan", "~"],
        ["égale", "="], ["egale", "="], ["égalité", "="], ["parité", "="], ["paire", "="], ["couple", "="], ["duo", "="],
        ["internet", "@"], ["email", "@"], ["e-mail", "@"], ["courriel", "@"], ["mail", "@"], ["adresse", "@"],
        ["question", "?"], ["interrogation", "?"], ["enigme", "?"], ["devinette", "?"], ["enquete", "?"], ["enquête", "?"], ["questionnaire", "?"],
        ["exclamation", "!"], ["attention", "!"], ["danger", "!"], ["prudence", "!"],
        ["clin d'oeil", ";-)"],
        ["sourire", ":-)"], ["smile", ":-)"], ["heureux", ":-)"], ["souri", ":-)"], ["plaisir", ":-)"], ["content", ":-)"],
        ["pourcent", "%"], ["pourcentage", "%"],
        ["euro", "€"], ["europe", "€"], ["européen", "€"], ["européenne", "€"], ["argent", "€"],
        ["point", "."], ["bille", "."], ["caillou", "."],
        ["descendu", "\\"], ["pente", "\\"], ["descente", "\\"], ["barre oblique", "\\"],
        ["barre", "|"], ["tige", "|"], ["mur", "|"], ["fil", "|"], ["ligne", "|"],
        ["monte", "/"], ["monté", "/"], ["cote", "/"], ["côte", "/"],
        ["crochet", "["], ["agrafe", "["],
        ["lol", ":-D"], ["mdr", ":-D"], ["rire", ":-D"], ["rigole", ":-D"], ["drole", ":-D"], ["drôle", ":-D"], ["amusant", ":-D"], ["langue", ":-P"],
        ["grimace", ":-("], ["triste", ":-("], ["malheureux", ":-("],
        ["inférieur", "<"], ["gauche", "<"],
        ["supérieur", ">"], ["droite", ">"],
        ["seul", "1"], ["unique", "1"], ["premier", "1"], ["première", "1"],
        ["virgule", ","],
        ["surpris", ":-o"], ["émerveillé", ":-o"], ["étonné", ":-o"], ["étonnant", ":-o"], ["épatant", ":-o"], ["surprenant", ":-o"],
        ["secret", ":-#"], ["confidentiel", ":-#"],
        ["méfiant", ":-/"], ["perplexe", ":-/"], ["indécis", ":-/"]
    ],
    "ReplaceWordBycharcterInPassWordTransFormer_updateIfFindWord_start": "Transformation du mot ",
    "ReplaceWordBycharcterInPassWordTransFormer_updateIfFindWord_middle": " en caract&egrave;re sp&eacute;cial ",
    "ConversioNnumberTransformer_detailTransform_start": "Transformation du nombre ",
    "ConversioNnumberTransformer_detailTransform_middle": " en ",
    "word_and": "et",
    "end_word": [" ", "es", "s", "e", "x", "r", "er"]
};
Languages.language_password_en = {
    "language": "en",
    "number": {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'cinq': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9,
        'ten': 10,
        'eleven': 11,
        'twelve': 12,
        'thirteen': 13,
        'fourteen': 14,
        'fifteen': 15,
        'sixteen ': 16,
        'seventeen ': 17,
        'eighteen  ': 18,
        'nineteen  ': 19,
        'twenty': 20,
        'thirty': 30,
        'forty': 40,
        'fifty': 50,
        'sixty': 60,
        'seventy': 70,
        'eighty': 80,
        'ninety': 90,
        'hundred': 100,
        'cents': 100,
        'thousand': 1000,
        'thousands': 1000,
        'million': 1000000,
        'millions': 1000000,
        'billion': 1000000000,
        'billions': 1000000000,
        'trillion': 1000000000000,
        'trillions': 1000000000000,
        'billiard': 1000000000000000,
        'billiards': 1000000000000000
    },
    "words": [
        ["bar", "|"], ["rod", "|"], ["wall", "|"], ["wire", "|"], ["line", "|"],
        ["star", "*"], ["asterisk", "*"], ["sun", "*"], ["flake", "*"], ["snowflake", "*"], ["snow", "*"],
        ["and", "&"], ["bird", "&"], ["chicken", "&"], ["duck", "&"], ["goose", "&"],
        ["two points", ":"], ["colon", ":"],
        ["semicolon", ";"],
        ["hat", "^"], ["sharp", "^"], ["point", "^"], ["cone", "^"], ["mountain", "^"], ["roof", "^"], ["summit", "^"],
        ["more", "+"], ["add", "+"], ["many", "+"], ["increase", "+"], ["growth", "+"],
        ["minus", "-"], ["union", "-"], ["trace", "-"], ["subtraction", "-"],
        ["low", "_"], ["underscore", "_"], ["ground", "_"], ["board", "_"], ["floor", "_"],
        ["dollar", "$"], ["american", "$"], ["america", "$"], ["usa", "$"], ["money", "$"],
        ["square", "#"], ["sharp", "#"],
        ["degree", "°"], ["fahrenheit", "°"], ["alcohol", "°"], ["angle", "°"], ["bubble", "°"],
        ["wave", "~"], ["tilde", "~"], ["sea", "~"], ["ocean", "~"], ["equivalence", "~"], ["similar", "~"],
        ["equal", "="], ["equality", "="], ["parity", "="], ["pair", "="], ["couple", "="], ["duo", "="],
        ["internet", "@"], ["email", "@"], ["e-mail", "@"], ["mail", "@"], ["address", "@"],
        ["question", "?"], ["search", "?"], ["enigma", "?"], ["riddle", "?"], ["investigation", "?"], ["survey", "?"],
        ["exclamation", "!"], ["warning", "!"], ["danger", "!"], ["dangerous", "!"], ["caution", "!"],
        ["wink", ";-)"],
        ["smile", ":-)"], ["happy", ":-)"], ["pleasure", ":-)"], ["joy", ":-)"], ["enjoyment", ":-)"], ["content", ":-)"],
        ["percent", "%"], ["percentage", "%"],
        ["euro", "€"], ["europe", "€"], ["european", "€"],
        ["point", "."], ["ball", "."], ["pebble", "."],
        ["descended", "\\"], ["slope", "\\"], ["descent", "\\"], ["slash", "\\"],
        ["mounted", "/"], ["climb", "/"], ["side", "/"],
        ["hook", "["], ["clip", "["],
        ["lol", ":-D"], ["laugh", ":-D"], ["funny", ":-D"], ["amusing", ":-D"], ["language", ":-P"],
        ["grimace", ":-("], ["grim", ":-("], ["sad", ":-("], ["unfortunate", ":-("],
        ["inferior", "<"], ["less", "<"], ["left", "<"],
        ["superior", ">"], ["right", ">"], ["greater", ">"],
        ["alone", "1"], ["unique", "1"], ["only", "1"], ["first", "1"],
        ["comma", ","],
        ["surprised", ":-o"], ["amazed", ":-o"], ["amazing", ":-o"], ["stunning", ":-o"], ["surprising", ":-o"],
        ["secret", ":-#"], ["confidential", ":-#"],
        ["mistrustful", ":-/"], ["suspicious", ":-/"], ["perplexed", ":-/"], ["undecided", ":-/"]
    ],
    "ReplaceWordBycharcterInPassWordTransFormer_updateIfFindWord_start": "Transformation of word ",
    "ReplaceWordBycharcterInPassWordTransFormer_updateIfFindWord_middle": " to special character ",
    "ConversioNnumberTransformer_detailTransform_start": "Transformation of number ",
    "ConversioNnumberTransformer_detailTransform_middle": " to ",
    "word_and": "and",
    "end_word": [" ", "ed", "es", "s"]
};
Languages.language = "fr";
Languages.language_password = Languages.init();
var PassWord = (function () {
    function PassWord(phare, password) {
        this.phrase = phare;
        this.password = password;
    }
    PassWord.prototype.getPassWord = function () {
        return this.password;
    };
    PassWord.prototype.getPhrase = function () {
        return this.phrase;
    };
    return PassWord;
}());
var StepChangeDescriptionEvent = (function () {
    function StepChangeDescriptionEvent(view, transFormerService) {
        this.view = view;
        this.transFormerService = transFormerService;
    }
    StepChangeDescriptionEvent.prototype.call = function (step, phrase) {
        var transformText = this.transFormerService.transformList(phrase, step);
        this.view.updateDescriptionTransformer(step + 1, transformText);
    };
    return StepChangeDescriptionEvent;
}());
var StepChangePreviousEvent = (function () {
    function StepChangePreviousEvent(view, transFormerService, callValidatorCallDirectAtStep) {
        this.view = view;
        this.transFormerService = transFormerService;
        this.callValidatorCallDirectAtStep = callValidatorCallDirectAtStep;
    }
    StepChangePreviousEvent.prototype.call = function (step, phrase) {
        if (step > 0) {
            var password = this.transFormerService.execute(phrase, step);
            this.view.updateClassCssMenuErrorValidation(step);
            this.view.goToUpdateClassCssMenuValidation(step - 1);
            var rulesWarning = this.callValidatorCallDirectAtStep.getSelectorsErrorByStep(password, step - 1);
            this.view.updateClassCssMenuErrorValidation(step - 1, rulesWarning);
            this.view.updateClassCssContentValidation(step - 1, rulesWarning);
            this.view.updateCssClassActionValidation(step - 1);
        }
    };
    return StepChangePreviousEvent;
}());
var NotUsedTransformerEvent = (function () {
    function NotUsedTransformerEvent(view, transFormerService) {
        this.view = view;
        this.transFormerService = transFormerService;
    }
    NotUsedTransformerEvent.prototype.call = function (step, phrase) {
        var trans = this.transFormerService.isTransform(phrase, step);
        var transformers = this.transFormerService.getTransformerNotUsed(phrase, step);
        this.view.updateNotUsedTransformer(step, phrase, trans, transformers);
    };
    return NotUsedTransformerEvent;
}());
var StepChangeAndValidAndNextEvent = (function () {
    function StepChangeAndValidAndNextEvent(callValidatorServiceCallToNextStep, view, callValidatorCallDirectAtStep, transFormerService) {
        this.callValidatorServiceCallToNextStep = callValidatorServiceCallToNextStep;
        this.view = view;
        this.callValidatorCallDirectAtStep = callValidatorCallDirectAtStep;
        this.transFormerService = transFormerService;
    }
    StepChangeAndValidAndNextEvent.prototype.call = function (step, phrase) {
        var password = this.transFormerService.execute(phrase, step);
        var errorRules = this.callValidatorServiceCallToNextStep.getSelectorsErrorByStep(password, step);
        this.view.updateClassCssMenuErrorValidation(step, errorRules);
        this.view.updateClassCssContentValidation(step, errorRules);
        if (this.callValidatorServiceCallToNextStep.callStepByStep(password, step)) {
            this.view.goToUpdateClassCssMenuValidation(step + 1);
            var rulesWarningError = this.callValidatorCallDirectAtStep.getSelectorsErrorByStep(password, step + 1);
            this.view.updatePassWord(password, step + 1);
            this.view.updateClassCssMenuErrorValidation(step + 1, rulesWarningError);
            this.view.updateClassCssContentValidation(step + 1, rulesWarningError);
            this.view.updateCssClassActionValidation(step + 1);
        }
    };
    return StepChangeAndValidAndNextEvent;
}());
var ProgressBarValidationEvent = (function () {
    function ProgressBarValidationEvent(callValidatorServiceCallToNextStep, view, transFormerService) {
        this.callValidatorServiceCallToNextStep = callValidatorServiceCallToNextStep;
        this.view = view;
        this.transFormerService = transFormerService;
    }
    ProgressBarValidationEvent.prototype.call = function (step, phrase) {
        var passWord = this.transFormerService.execute(phrase, step);
        var rulesError = this.callValidatorServiceCallToNextStep.getSelectorsErrorByStep(passWord, step);
        this.view.updateClassCssContentValidation(step, rulesError);
        if (passWord.getPhrase().length > 0) {
            var pourcentage = this.percentage(this.callValidatorServiceCallToNextStep.getMaxPointStepByStep(step), this.callValidatorServiceCallToNextStep.callValidatorGetPointByStep(passWord, step));
            if (pourcentage < 98) {
                this.updateProgressBarCssAndCheckImage(pourcentage, "error", "success", true);
            }
            else {
                if (this.callValidatorServiceCallToNextStep.callStepByStep(passWord, step)) {
                    this.updateProgressBarCssAndCheckImage(100, "success", "error", false);
                }
                else {
                    this.updateProgressBarCssAndCheckImage(100, "error", "success", false);
                }
            }
        }
        else {
            this.updateProgressBarCssAndCheckImage(0, "success", "error", true);
        }
    };
    ProgressBarValidationEvent.prototype.updateProgressBarCssAndCheckImage = function (pourcentage, cssClassAdd, cssClassRemove, checkImagePrint) {
        this.view.updateStyleProgressBar(pourcentage, cssClassAdd, cssClassRemove);
        this.view.updateStyleProgressBarCheckImage(checkImagePrint);
    };
    ProgressBarValidationEvent.prototype.percentage = function (total, value) {
        return Math.ceil(100 + (((value - total) / total) * 100));
    };
    return ProgressBarValidationEvent;
}());
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
var FirstLetterWordTransFormer = (function () {
    function FirstLetterWordTransFormer(step, selectorNoUsed) {
        if (selectorNoUsed === void 0) { selectorNoUsed = ""; }
        this.step = step;
        this.selectorNoUsed = selectorNoUsed;
    }
    FirstLetterWordTransFormer.prototype.transform = function (phrase) {
        var password = "";
        this.getWordsInParam(phrase.trim()).forEach(function (word) {
            password += word.charAt(0);
        });
        return password;
    };
    FirstLetterWordTransFormer.prototype.isTransform = function (phrase) {
        return phrase !== this.transform(phrase);
    };
    FirstLetterWordTransFormer.prototype.getWordsInParam = function (ph) {
        var _this = this;
        if (ph.length === 0) {
            return [];
        }
        var p = ph;
        var chars1 = [".", "", ",", ";", "'", '"', "-", "<", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "!", "@", "&", "%", "$", "*", "?", "_", "~", "(", ")", "/", "+", "[", "]", "{", "}", ":", "|", "°", "=", "€"];
        chars1.forEach(function (char) {
            p = _this.replaceAll(p, char, (" " + char + " "));
        });
        var chs = [];
        var j = 0;
        for (var i = 0; i < p.split(' ').length; i++) {
            if (p.split(' ')[i] && p.split(' ')[i] !== "" && p.split(' ')[i] !== " ") {
                chs[j] = p.split(' ')[i];
                j++;
            }
        }
        return (chs || []);
    };
    FirstLetterWordTransFormer.prototype.replaceAll = function (text, search, replace) {
        if (!search || !replace) {
            return text;
        }
        return text.replace(new RegExp('[' + search + ']', 'g'), replace);
    };
    FirstLetterWordTransFormer.prototype.getStep = function () {
        return this.step;
    };
    FirstLetterWordTransFormer.prototype.getSelectorNotUsed = function () {
        return this.selectorNoUsed;
    };
    FirstLetterWordTransFormer.prototype.isOptionalTransformation = function () {
        return false;
    };
    FirstLetterWordTransFormer.prototype.detailTransform = function (phrase) {
        return [];
    };
    return FirstLetterWordTransFormer;
}());
var SpaceTransformer = (function () {
    function SpaceTransformer(step, selectorNoUsed) {
        if (selectorNoUsed === void 0) { selectorNoUsed = ""; }
        this.step = step;
        this.selectorNoUsed = selectorNoUsed;
    }
    SpaceTransformer.prototype.transform = function (phrase) {
        var _this = this;
        if (phrase.length === 0) {
            return "";
        }
        var p = phrase;
        var chars1 = [".", "", ",", ";", "'", '"', "-", "<", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "!", "@", "&", "%", "$", "*", "?", "_", "~", "(", ")", "/", "+", "[", "]", "{", "}", ":", "|", "°", "=", "€"];
        chars1.forEach(function (char) {
            p = _this.replaceAll(p, char, (" " + char + " "));
        });
        return p;
    };
    SpaceTransformer.prototype.replaceAll = function (text, search, replace) {
        if (!search || !replace) {
            return text;
        }
        return text.replace(new RegExp('[' + search + ']', 'g'), replace);
    };
    SpaceTransformer.prototype.isTransform = function (phrase) {
        return phrase !== this.transform(phrase);
    };
    SpaceTransformer.prototype.getStep = function () {
        return this.step;
    };
    SpaceTransformer.prototype.getSelectorNotUsed = function () {
        return this.selectorNoUsed;
    };
    SpaceTransformer.prototype.isOptionalTransformation = function () {
        return false;
    };
    SpaceTransformer.prototype.detailTransform = function (phrase) {
        return [];
    };
    return SpaceTransformer;
}());
var ReplaceWordBycharcterInPassWordTransFormer = (function () {
    function ReplaceWordBycharcterInPassWordTransFormer(step, selectorNoUsed) {
        if (selectorNoUsed === void 0) { selectorNoUsed = ""; }
        this.step = step;
        this.selectorNoUsed = selectorNoUsed;
        this.digitsInWord = Languages.valueBykey("words");
    }
    ReplaceWordBycharcterInPassWordTransFormer.prototype.detailTransform = function (phrase) {
        var _this = this;
        var replaceTab = [];
        var phraseLowerCase = " " + phrase.toLocaleLowerCase() + " ";
        var endword = Languages.valueBykey("end_word");
        var _loop_1 = function (i) {
            endword.forEach(function (end) {
                _this.updateIfFindWord(phraseLowerCase, " " + _this.digitsInWord[i][0].toLocaleLowerCase() + end, replaceTab, _this.digitsInWord[i][1]);
                _this.updateIfFindWord(phraseLowerCase, "'" + _this.digitsInWord[i][0].toLocaleLowerCase() + end, replaceTab, _this.digitsInWord[i][1]);
            });
        };
        for (var i = 0; i < this.digitsInWord.length; i++) {
            _loop_1(i);
        }
        return replaceTab;
    };
    ReplaceWordBycharcterInPassWordTransFormer.prototype.updateIfFindWord = function (phrase, word, replace, reploaceString) {
        if (phrase.indexOf(word) > -1)
            replace.push(Languages.valueBykey("ReplaceWordBycharcterInPassWordTransFormer_updateIfFindWord_start") +
                "<b>" +
                word +
                "</b>" +
                Languages.valueBykey("ReplaceWordBycharcterInPassWordTransFormer_updateIfFindWord_middle") +
                "<b>" + reploaceString + "</b>");
    };
    ReplaceWordBycharcterInPassWordTransFormer.prototype.isTransform = function (phrase) {
        return ((" " + phrase + " ") != this.transform(phrase));
    };
    ReplaceWordBycharcterInPassWordTransFormer.prototype.transform = function (phrase) {
        phrase = " " + phrase + " ";
        for (var i = 0; i < this.digitsInWord.length; i++) {
            phrase = this.replaceStringAll(phrase, this.digitsInWord[i][0], this.digitsInWord[i][1]);
        }
        return phrase;
    };
    ReplaceWordBycharcterInPassWordTransFormer.prototype.replaceAll = function (text, search, replace) {
        if (!search || !replace) {
            return text;
        }
        return text.replace(new RegExp('[' + search + ']', 'g'), replace);
    };
    ReplaceWordBycharcterInPassWordTransFormer.prototype.replaceStringAll = function (text, search, replace) {
        if (!search || !replace) {
            return text;
        }
        var notCharRegex = "((?![ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzéèà]))";
        var endword = Languages.valueBykey("end_word");
        endword.forEach(function (end) {
            text = text.replace(new RegExp(" " + search + end, 'gi'), " " + replace + "  ");
            text = text.replace(new RegExp("'" + search + end, 'gi'), "'" + replace + "  ");
        });
        text = text.replace(new RegExp(" " + search + notCharRegex, 'gi'), " " + replace + "  ");
        text = text.replace(new RegExp("'" + search + notCharRegex, 'gi'), "'" + replace + "  ");
        return text;
    };
    ReplaceWordBycharcterInPassWordTransFormer.prototype.getStep = function () {
        return this.step;
    };
    ReplaceWordBycharcterInPassWordTransFormer.prototype.getSelectorNotUsed = function () {
        return this.selectorNoUsed;
    };
    ReplaceWordBycharcterInPassWordTransFormer.prototype.isOptionalTransformation = function () {
        return true;
    };
    return ReplaceWordBycharcterInPassWordTransFormer;
}());
var ConversioNnumberTransformer = (function () {
    function ConversioNnumberTransformer(step, selectorNoUsed) {
        if (selectorNoUsed === void 0) { selectorNoUsed = ""; }
        this.step = step;
        this.selectorNoUsed = selectorNoUsed;
        this.numbers = Languages.valueBykey("number");
        this.multiplicate = [
            20,
            100,
            1000,
            1000000,
            1000000000,
            1000000000000,
            1000000000000000,
            1000000000000000000,
            1000000000000000000000,
            1000000000000000000000000,
            1000000000000000000000000000,
            1000000000000000000000000000000
        ];
        this.replaceAll = function (phrase, search, replacement) {
            return phrase.replace(new RegExp(search, 'g'), replacement);
        };
    }
    ConversioNnumberTransformer.prototype.isMulti = function (num) {
        return this.multiplicate.indexOf(num) > -1;
    };
    ConversioNnumberTransformer.prototype.stringing = function (seq) {
        var res = '';
        for (var val in seq) {
            res += " " + seq[val];
        }
        return res;
    };
    ConversioNnumberTransformer.prototype.search = function (num) {
        if (num in this.numbers) {
            return this.numbers[num];
        }
        return 0;
    };
    ConversioNnumberTransformer.prototype.evaluate = function (max, tab) {
        for (var val in tab) {
            if (max <= tab[val]) {
                return tab[val];
            }
        }
        return 1;
    };
    ConversioNnumberTransformer.prototype.getSuffix = function (seq) {
        var suffix = '';
        var nb = 0;
        for (var val in seq) {
            if (this.search(seq[val]) > 0) {
                nb++;
            }
            else if (seq[val] !== '') {
                suffix += " " + seq[val];
            }
        }
        return suffix;
    };
    ConversioNnumberTransformer.prototype.createTabChiffre = function (seq) {
        var tab = [];
        var j = 0;
        for (var i = 0; i < seq.length; i++) {
            if (this.search(seq[i]) > 0) {
                tab[j] = this.search(seq[i]);
                j++;
            }
        }
        return tab;
    };
    ConversioNnumberTransformer.prototype.cal = function (tab) {
        var result = 0;
        for (var i = 0; i < tab.length; i++) {
            result += tab[i];
        }
        return result;
    };
    ConversioNnumberTransformer.prototype.findIndexPlusGrandMulti = function (tab) {
        var index = 0;
        var max = 0;
        for (var i = 0; i < tab.length; i++) {
            if (this.isMulti(tab[i])) {
                if (max <= tab[i]) {
                    max = tab[i];
                    index = i;
                }
            }
        }
        return index;
    };
    ConversioNnumberTransformer.prototype.splitTab = function (tab) {
        var result = 0;
        var indexPlusGrand = this.findIndexPlusGrandMulti(tab);
        var tabBefore = tab.splice(0, indexPlusGrand);
        var tabAfter = tab.splice(1, tab.length);
        if (tabBefore.length > 0) {
            result = this.splitTab(tabBefore) * tab[0];
        }
        else {
            for (var i = 0; i < tab.length; i++) {
                result += tab[i];
            }
        }
        if (tabAfter.length > 0) {
            result += this.splitTab(tabAfter);
        }
        return result;
    };
    ConversioNnumberTransformer.prototype.calculate = function (num) {
        var seq = num.replace(" " + Languages.valueBykey("word_and") + " ", " ").split(" ");
        var tab = this.createTabChiffre(seq);
        var res = "";
        if (tab.length > 0)
            res = this.splitTab(tab).toString();
        else
            res = "";
        return res + this.getSuffix(seq) + " ";
    };
    ConversioNnumberTransformer.prototype.isNumber = function (val) {
        var _this = this;
        var test = false;
        var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        numbers.forEach(function (num) {
            if (val === num) {
                test = true;
            }
            else if (_this.search(val)) {
                test = true;
            }
        });
        return test;
    };
    ConversioNnumberTransformer.prototype.replaceEtAndTiret = function (phrase) {
        var tab = phrase.split(" ");
        var ret = "";
        for (var i = 0; i < tab.length; i++) {
            if ((this.isNumber(tab[i - 1]) || tab[i - 1] === "-") && this.isNumber(tab[i + 1]) && (tab[i] === Languages.valueBykey("word_and") || tab[i] === "-" || tab[i] === "&")) {
                ret += " ";
            }
            else {
                ret += " " + tab[i];
            }
        }
        return ret.split(" ");
    };
    ConversioNnumberTransformer.prototype.isTransform = function (phrase) {
        return this.replaceAll(phrase, " ", "") != this.replaceAll(this.transform(phrase).replace(/ +(?= )/g, ''), " ", "");
    };
    ConversioNnumberTransformer.prototype.transform = function (phrase) {
        var ph = this.replaceAll(phrase, ",", " , ");
        ph = this.replaceAll(ph, "'", " ' ");
        ph = this.replaceAll(ph, "-", " - ").replace(/ +(?= )/g, '');
        var seqs = this.replaceEtAndTiret(ph);
        var result = '';
        var ind = 0;
        var tmp = [''];
        for (var s in seqs) {
            if (seqs[s] !== "") {
                if (tmp[ind]) {
                    tmp[ind] += " " + seqs[s];
                }
                else {
                    tmp[ind] = " " + seqs[s];
                }
                if (this.search(seqs[s]) === 0) {
                    ind++;
                }
            }
        }
        for (var val in tmp) {
            if (this.calculate(tmp[val]) === "0") {
                result += tmp[val];
            }
            else {
                result += this.calculate(tmp[val]);
            }
        }
        return result;
    };
    ConversioNnumberTransformer.prototype.getStep = function () {
        return this.step;
    };
    ConversioNnumberTransformer.prototype.getSelectorNotUsed = function () {
        return this.selectorNoUsed;
    };
    ConversioNnumberTransformer.prototype.isOptionalTransformation = function () {
        return true;
    };
    ConversioNnumberTransformer.prototype.detailTransform = function (phrase) {
        var ret = [];
        var ph = this.replaceAll(phrase, ",", " , ");
        ph = this.replaceAll(ph, "'", " ' ");
        ph = this.replaceAll(ph, "-", " - ").replace(/ +(?= )/g, '');
        var seqs = this.replaceEtAndTiret(ph);
        var result = '';
        var ind = 0;
        var tmp = [''];
        for (var s in seqs) {
            if (seqs[s] !== "") {
                if (tmp[ind] && this.search(seqs[s]) != 0) {
                    tmp[ind] += " " + seqs[s];
                }
                else {
                    if (this.search(seqs[s]) != 0) {
                        tmp[ind] = " " + seqs[s];
                    }
                }
                if (this.search(seqs[s]) === 0) {
                    ind++;
                }
            }
        }
        for (var val in tmp) {
            if (this.calculate(tmp[val]) != (tmp[val] + " "))
                ret.push(Languages.valueBykey("ConversioNnumberTransformer_detailTransform_start") +
                    " <b>" + tmp[val] + "</b> " +
                    Languages.valueBykey("ConversioNnumberTransformer_detailTransform_middle") +
                    " <b>" + this.calculate(tmp[val]) + "</b>");
        }
        return ret;
    };
    return ConversioNnumberTransformer;
}());
var TransFormerService = (function () {
    function TransFormerService(transformers) {
        this.transformers = transformers;
    }
    TransFormerService.prototype.transformList = function (phrase, step) {
        var value = "";
        this.transformers.forEach(function (transformer) {
            if (transformer.getStep() == step) {
                transformer.detailTransform(phrase).forEach(function (val) {
                    if (val)
                        value += "<li class=\"countli\">" + val + "</li>";
                });
            }
        });
        return value;
    };
    TransFormerService.prototype.isTransform = function (phrase, step) {
        var ret = false;
        this.transformers.forEach(function (transformer) {
            if (transformer.getStep() == step && transformer.isOptionalTransformation() && !transformer.isTransform(phrase))
                ret = true;
        });
        return ret;
    };
    TransFormerService.prototype.getTransformerNotUsed = function (phrase, step) {
        var ret = [];
        this.transformers.forEach(function (transformer) {
            if (transformer.getStep() == step && transformer.isOptionalTransformation() && !transformer.isTransform(phrase))
                ret.push(transformer);
        });
        return ret;
    };
    TransFormerService.prototype.execute = function (phrase, step) {
        var phraseTransformInPassWord = phrase;
        this.transformers.forEach(function (transformer) {
            if (transformer.getStep() == step) {
                phraseTransformInPassWord = transformer.transform(phraseTransformInPassWord);
            }
        });
        return new PassWord(phrase, phraseTransformInPassWord.split(' ').join(''));
    };
    return TransFormerService;
}());
var ViewSetp = (function () {
    function ViewSetp(rootHtmlElement, titleMenuHtmlElement, contentHtmlElement, phraseInput, phraseValidateSelector, ckeckImgRule, phraseSaisi, warningruleSelector, checkImageHTMLElement, listTransformationSelector, notUsedTransformerSelector, ruleSelector, previousLibelleButton, nextLibelleButton, cssRootPluginSelector) {
        this.contentHtmlElement = contentHtmlElement;
        this.phraseInputHtmlElement = phraseInput;
        this.phraseValidateSelector = phraseValidateSelector;
        this.ckeckImgRule = ckeckImgRule;
        this.phraseSaisi = phraseSaisi;
        this.warningruleSelector = warningruleSelector;
        this.checkImageHTMLElement = checkImageHTMLElement;
        this.listTransformationSelector = listTransformationSelector;
        this.notUsedTransformerSelector = notUsedTransformerSelector;
        this.ruleSelector = ruleSelector;
        this.previousLibelleButton = previousLibelleButton;
        this.nextLibelleButton = nextLibelleButton;
        ToolClassManaged.addClass(rootHtmlElement, cssRootPluginSelector);
        this.createValueDefault(this.phraseInputHtmlElement);
        rootHtmlElement.appendChild(this.createMenu(titleMenuHtmlElement));
        rootHtmlElement.appendChild(this.createContent(this.contentHtmlElement));
        rootHtmlElement.appendChild(this.createAction());
    }
    ViewSetp.prototype.createValueDefault = function (input) {
        if (input !== null) {
            input.style.color = "#555";
            this.defaultValueInput = input.value;
            var defaultValue_1 = input.value;
            input.addEventListener("focus", function () {
                this.style.color = "black";
                if (this.value === defaultValue_1) {
                    this.value = "";
                }
            }, false);
            input.onblur = function () {
                if (this.value === "") {
                    this.style.color = "#555";
                    this.value = defaultValue_1;
                }
            };
        }
    };
    ViewSetp.prototype.createMenuLiStep = function (step, headElement) {
        var li = document.createElement("li");
        if (step === 0)
            li.setAttribute("class", "first current");
        var a = document.createElement("a");
        var spanNumeroOfStep = document.createElement("span");
        ToolClassManaged.addClass(spanNumeroOfStep, "number");
        spanNumeroOfStep.innerHTML = (step + 1).toString() + " ";
        var spanLibelleOfStep = document.createElement("span");
        spanLibelleOfStep.innerHTML = headElement.innerHTML;
        a.appendChild(spanNumeroOfStep);
        a.appendChild(spanLibelleOfStep);
        li.appendChild(a);
        return li;
    };
    ViewSetp.prototype.createMenu = function (titleMenuHtmlElement) {
        var div = document.createElement("div");
        ToolClassManaged.addClass(div, "steps");
        var ul = document.createElement("ul");
        for (var i = 0; i < titleMenuHtmlElement.length; i++) {
            var headElement = titleMenuHtmlElement.item(i);
            ul.appendChild(this.createMenuLiStep(i, headElement));
            headElement.style.display = 'none';
        }
        this.rootTitleLisHtmlElement = ul.querySelectorAll("li");
        div.appendChild(ul);
        return div;
    };
    ViewSetp.prototype.createContent = function (contentHtmlElement) {
        var div = document.createElement("div");
        ToolClassManaged.addClass(div, "content");
        for (var i = 0; i < contentHtmlElement.length; i++) {
            ToolClassManaged.addClass(contentHtmlElement.item(i), "body");
            if (i > 0) {
                ToolClassManaged.addClass(contentHtmlElement.item(i), "hidden");
            }
            div.appendChild(contentHtmlElement.item(i));
        }
        return div;
    };
    ViewSetp.prototype.onInputEvent = function (events) {
        var view = this;
        this.phraseInputHtmlElement.onkeyup = function () {
            var _this = this;
            events.forEach(function (event) {
                event.call(view.getCurrentStep(), _this.value);
            });
        };
        var next = this.next;
        this.phraseInputHtmlElement.addEventListener("keypress", function (event) {
            if (event.keyCode == 13) {
                next.click();
                event.preventDefault();
            }
        });
    };
    ViewSetp.prototype.createAction = function () {
        var div = document.createElement("div");
        ToolClassManaged.addClass(div, "actions");
        var ul = document.createElement("ul");
        var linext = document.createElement("li");
        var liprevious = document.createElement("li");
        this.previous = this.createButton(this.getLibellePreviousButton(0));
        ToolClassManaged.addClass(this.previous, "notvisible");
        this.next = this.createButton(this.getLibelleNextButton(0), "active");
        linext.appendChild(this.next);
        liprevious.appendChild(this.previous);
        ul.appendChild(liprevious);
        ul.appendChild(linext);
        div.appendChild(ul);
        return div;
    };
    ViewSetp.prototype.createButton = function (text, classAdd) {
        var button = document.createElement("a");
        button.innerHTML = text;
        if (classAdd)
            ToolClassManaged.addClass(button, classAdd);
        return button;
    };
    ViewSetp.prototype.getLibelleNextButton = function (step) {
        var libelle = "Suivant";
        this.nextLibelleButton.forEach(function (libelleButtonList) {
            if (libelleButtonList[1] == step)
                libelle = libelleButtonList[0];
        });
        return libelle;
    };
    ViewSetp.prototype.getLibellePreviousButton = function (step) {
        var libelle = "Retour";
        this.previousLibelleButton.forEach(function (libelleButtonList) {
            if (libelleButtonList[1] == step)
                libelle = libelleButtonList[0];
        });
        return libelle;
    };
    ViewSetp.prototype.onClickButtonEvent = function (onClickEventNext, onClickEventPrevious) {
        var view = this;
        var phraseInputHTMLInputElementI = this.phraseInputHtmlElement;
        this.next.onclick = function () {
            if (!view.isLastStep(view.getCurrentStep())) {
                phraseInputHTMLInputElementI.focus();
                onClickEventNext.forEach(function (event) {
                    event.call(view.getCurrentStep(), phraseInputHTMLInputElementI.value);
                });
            }
        };
        this.previous.onclick = function () {
            onClickEventPrevious.forEach(function (event) {
                event.call(view.getCurrentStep(), phraseInputHTMLInputElementI.value);
            });
        };
    };
    ViewSetp.prototype.updateCssClassActionValidation = function (step) {
        this.previous.textContent = this.getLibellePreviousButton(step);
        if (step === 0) {
            ToolClassManaged.addClass(this.previous, "notvisible");
            ToolClassManaged.removeClass(this.previous, "active");
        }
        else {
            ToolClassManaged.addClass(this.previous, "active");
            ToolClassManaged.removeClass(this.previous, "notvisible");
        }
        this.next.textContent = this.getLibelleNextButton(step);
        if (this.isLastStep(step)) {
            ToolClassManaged.addClass(this.next, "notvisible");
            ToolClassManaged.removeClass(this.next, "active");
        }
        else {
            ToolClassManaged.removeClass(this.next, "notvisible");
            ToolClassManaged.addClass(this.next, "active");
        }
    };
    ViewSetp.prototype.updateStyleProgressBar = function (pourcentage, cssClassAdd, cssClassRemove) {
        ToolClassManaged.addClass(this.phraseInputHtmlElement.nextElementSibling, cssClassAdd);
        ToolClassManaged.removeClass(this.phraseInputHtmlElement.nextElementSibling, cssClassRemove);
        this.phraseInputHtmlElement.nextElementSibling.style.width = pourcentage + '%';
    };
    ViewSetp.prototype.updateStyleProgressBarCheckImage = function (checkImagePrint) {
        for (var i = 0; i < this.checkImageHTMLElement.length; i++) {
            if (checkImagePrint)
                ToolClassManaged.addClass(this.checkImageHTMLElement.item(i), "hidden");
            else
                ToolClassManaged.removeClass(this.checkImageHTMLElement.item(i), "hidden");
        }
    };
    ViewSetp.prototype.goToUpdateClassCssMenuValidation = function (step, move) {
        if (move === void 0) { move = 0; }
        for (var i = 0; i < this.rootTitleLisHtmlElement.length; i++) {
            if ((step + move) === i) {
                ToolClassManaged.addClass(this.rootTitleLisHtmlElement.item(i), "current");
            }
            else if ((step + move) > i) {
                ToolClassManaged.addClass(this.rootTitleLisHtmlElement.item(i), "active");
                ToolClassManaged.removeClass(this.rootTitleLisHtmlElement.item(i), "current");
            }
            else {
                ToolClassManaged.removeClass(this.rootTitleLisHtmlElement.item(i), "active");
                ToolClassManaged.removeClass(this.rootTitleLisHtmlElement.item(i), "current");
            }
        }
    };
    ViewSetp.prototype.updateClassCssMenuErrorValidation = function (step, errors) {
        if (errors === void 0) { errors = []; }
        ToolClassManaged.removeClass(this.rootTitleLisHtmlElement.item(step).querySelector("* > a"), "error");
        if (errors.length > 0)
            ToolClassManaged.addClass(this.rootTitleLisHtmlElement.item(step).querySelector("* > a"), "error");
    };
    ViewSetp.prototype.updateCheckImageByRule = function (step) {
        var elementsRule = this.getElementsInContentByStep(step, this.ruleSelector);
        for (var i = 0; i < elementsRule.length; i++) {
            var ckeckImgRuleElements = elementsRule.item(i).querySelectorAll(this.ckeckImgRule);
            if (ckeckImgRuleElements) {
                for (var j = 0; j < ckeckImgRuleElements.length; j++) {
                    if (this.phraseInputHtmlElement.value != this.defaultValueInput) {
                        ToolClassManaged.removeClass(ckeckImgRuleElements.item(j), "hidden");
                    }
                }
            }
        }
    };
    ViewSetp.prototype.showRuleError = function (step, errors) {
        var _this = this;
        errors.forEach(function (rule) {
            if (_this.getElementInContentByStep(step, rule) != null) {
                var warningrule = _this.getElementsInContentByStep(step, _this.warningruleSelector);
                var ruleHTMLElement = _this.getElementInContentByStep(step, rule);
                for (var j = 0; j < warningrule.length; j++) {
                    if (warningrule.item(j) == _this.getElementInContentByStep(step, rule)) {
                        ToolClassManaged.removeClass(ruleHTMLElement, "hidden");
                    }
                }
                ToolClassManaged.addClass(ruleHTMLElement.parentElement, "errorruleparent");
                ToolClassManaged.addClass(ruleHTMLElement, "errorrule");
                ToolClassManaged.addClass(ruleHTMLElement.querySelector(_this.ckeckImgRule), "hidden");
            }
        });
    };
    ViewSetp.prototype.updateClassCssContentValidation = function (step, errors) {
        if (errors === void 0) { errors = []; }
        this.removeAllErrorsInContent(step);
        this.updateCheckImageByRule(step);
        this.showRuleError(step, errors);
        for (var j = 0; j < this.contentHtmlElement.length; j++) {
            if (step === j)
                ToolClassManaged.removeClass(this.contentHtmlElement.item(j), "hidden");
            else
                ToolClassManaged.addClass(this.contentHtmlElement.item(j), "hidden");
        }
    };
    ViewSetp.prototype.removeAllErrorsInContent = function (step) {
        var errorNode = this.getElementsInContentByStep(step, ".errorrule");
        if (errorNode) {
            for (var i = 0; i < errorNode.length; i++) {
                if (errorNode.item(i)) {
                    ToolClassManaged.removeClass(errorNode.item(i).parentElement, "errorruleparent");
                    ToolClassManaged.removeClass(errorNode.item(i), "errorrule");
                    ToolClassManaged.addClass(errorNode.item(i).querySelector(this.ckeckImgRule), "hidden");
                    var e = this.getElementsInContentByStep(step, this.warningruleSelector);
                    for (var j = 0; j < e.length; j++) {
                        if (e.item(j) == errorNode.item(i)) {
                            ToolClassManaged.addClass(errorNode.item(i), "hidden");
                        }
                    }
                }
            }
        }
    };
    ViewSetp.prototype.isLastStep = function (step) {
        return this.rootTitleLisHtmlElement.item(step).nextSibling === null;
    };
    ViewSetp.prototype.getCountStep = function () {
        return this.rootTitleLisHtmlElement.length;
    };
    ViewSetp.prototype.getCurrentStep = function () {
        var step = 0;
        for (var i = 0; i < this.rootTitleLisHtmlElement.length; i++) {
            if (this.rootTitleLisHtmlElement.item(i).classList.contains("current")) {
                step = i;
            }
        }
        return step;
    };
    ViewSetp.prototype.updateDescriptionTransformer = function (step, transformText) {
        var descriptionTransformeHTMLElement = this.getElementInContentByStep(step, this.listTransformationSelector);
        if (descriptionTransformeHTMLElement) {
            if (transformText.length > 1)
                ToolClassManaged.removeClass(descriptionTransformeHTMLElement.parentElement.parentElement, "hidden");
            else
                ToolClassManaged.addClass(descriptionTransformeHTMLElement.parentElement.parentElement, "hidden");
            descriptionTransformeHTMLElement.innerHTML = transformText;
        }
    };
    ViewSetp.prototype.updateNotUsedTransformer = function (step, phrase, trans, transformers) {
        var _this = this;
        var notUsedTransformer = this.getElementInContentByStep(step + 1, this.notUsedTransformerSelector);
        if (notUsedTransformer) {
            var ll = notUsedTransformer.querySelectorAll("*");
            for (var i = 0; i < ll.length; i++) {
                if (ll.item(i).childElementCount == 0)
                    ll.item(i).classList.add("hidden");
            }
            if (!trans) {
                ToolClassManaged.addClass(notUsedTransformer, "hidden");
            }
            else {
                ToolClassManaged.removeClass(notUsedTransformer, "hidden");
                transformers.forEach(function (transformer) {
                    if (transformer.getSelectorNotUsed()) {
                        var t = _this.getElementInContentByStep(step + 1, transformer.getSelectorNotUsed());
                        if (t)
                            t.classList.remove("hidden");
                    }
                });
            }
        }
    };
    ViewSetp.prototype.updatePassWord = function (password, step) {
        var phraseValidateHTMLElement = this.getElementInContentByStep(step, this.phraseValidateSelector);
        if (phraseValidateHTMLElement) {
            var span = document.createElement("span");
            span.textContent = password.getPassWord().replace(/\s/g, '');
            phraseValidateHTMLElement.innerHTML = "";
            phraseValidateHTMLElement.appendChild(span);
        }
        for (var i = 0; i < this.phraseSaisi.length; i++) {
            this.phraseSaisi.item(i).textContent = this.phraseInputHtmlElement.value;
        }
    };
    ViewSetp.prototype.getElementsInContentByStep = function (step, selector) {
        return this.contentHtmlElement.item(step).querySelectorAll(selector);
    };
    ViewSetp.prototype.getElementInContentByStep = function (step, selector) {
        return this.contentHtmlElement.item(step).querySelector(selector);
    };
    return ViewSetp;
}());
var ToolClassManaged = (function () {
    function ToolClassManaged() {
    }
    ToolClassManaged.addClass = function (element, className) {
        if (element && element.className.indexOf(className) == -1) {
            element.className += " " + className;
            return true;
        }
        return false;
    };
    ToolClassManaged.removeClass = function (element, className) {
        if (element && element.className.indexOf(className) > -1) {
            element.classList.remove(className);
            return true;
        }
        return false;
    };
    return ToolClassManaged;
}());
var Phrase2Passe = (function () {
    function Phrase2Passe(options) {
        if (options === void 0) { options = {}; }
        this.defaults = {
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
            warningrule: ".warningrule",
            ruleSelector: ".rule",
            language: "fr",
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
                ["ReplaceWordBycharcterInPassWordTransFormer", 1, ".conversionWordInCaracterTransformerNotUsed"],
                ["ConversioNnumberTransformer", 1, ".conversionNumberTransformerNotUsed"],
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
        var settings = this.extend(this.defaults, options);
        Languages.language = settings.language;
        var rootsHtmlElement = document.querySelectorAll(" * > " + settings.rootHtmlElementSelector);
        for (var i = 0; i < rootsHtmlElement.length; i++)
            new Phrase2PasseInstance(rootsHtmlElement.item(i), settings);
    }
    Phrase2Passe.prototype.extend = function (defaults, options) {
        var a = Object.create(defaults);
        Object.keys(options).map(function (prop) {
            prop in a && (a[prop] = options[prop]);
        });
        return a;
    };
    return Phrase2Passe;
}());
var Phrase2PasseInstance = (function () {
    function Phrase2PasseInstance(rootHtmlElement, settings) {
        var contentHtmlElement = rootHtmlElement.querySelectorAll(" * > " + settings.contentTypeSelector);
        var titleMenuHtmlElement = rootHtmlElement.querySelectorAll(" *  > " + settings.headerTypeSelector);
        var phraseInputHtmlElement = rootHtmlElement.querySelector(settings.sentenceInputSelector);
        var phraseSaisiHtmlElement = rootHtmlElement.querySelectorAll(" *  > " + settings.phraseSaisi);
        var checkImageHtmlElement = rootHtmlElement.querySelectorAll(settings.checkImage);
        this.loader = new InstanceLoader(window, contentHtmlElement);
        var view = new ViewSetp(rootHtmlElement, titleMenuHtmlElement, contentHtmlElement, phraseInputHtmlElement, settings.phraseValidateSelector, settings.ckeckImgRule, phraseSaisiHtmlElement, settings.warningrule, checkImageHtmlElement, settings.listMotTransformer, settings.notUsedTransformer, settings.ruleSelector, settings.previousLibelleButton, settings.nextLibelleButton, settings.cssRootPluginSelector);
        var callValidatorServiceCallToNextStep = this.createValidatorServiceForNextStep(settings.validatorForNextStep);
        var callValidatorCallDirectAtStep = this.createValidatorServiceForWarningCurrentStep(settings.validatorForWarningCurrentStep);
        var transFormerService = this.createTransFormerService(settings.transformers);
        view.onInputEvent([new ProgressBarValidationEvent(callValidatorServiceCallToNextStep, view, transFormerService)]);
        view.onClickButtonEvent([new StepChangeDescriptionEvent(view, transFormerService),
            new NotUsedTransformerEvent(view, transFormerService),
            new StepChangeAndValidAndNextEvent(callValidatorServiceCallToNextStep, view, callValidatorCallDirectAtStep, transFormerService)], [new StepChangePreviousEvent(view, transFormerService, callValidatorCallDirectAtStep)]);
    }
    Phrase2PasseInstance.prototype.createTransFormerService = function (transformers) {
        return new TransFormerService(this.loader.getInstanceTransFormer(transformers));
    };
    Phrase2PasseInstance.prototype.createValidatorServiceForNextStep = function (validatorForNextStep) {
        return new CallValidatorService(this.loader.getInstanceValidatorRule(validatorForNextStep));
    };
    Phrase2PasseInstance.prototype.createValidatorServiceForWarningCurrentStep = function (validatorForWarningCurrentStep) {
        return new CallValidatorService(this.loader.getInstanceValidatorRule(validatorForWarningCurrentStep));
    };
    return Phrase2PasseInstance;
}());
var InstanceLoader = (function () {
    function InstanceLoader(context, contentHtmlElement) {
        this.context = context;
        this.contentHtmlElement = contentHtmlElement;
    }
    InstanceLoader.prototype.getInstanceValidatorRule = function (validators) {
        var list = new Array();
        for (var _i = 0, validators_1 = validators; _i < validators_1.length; _i++) {
            var validator = validators_1[_i];
            list.push(this.getInstance(validator[0], validator[1], this.getStepForASelectorHtmlElement(validator[1])));
        }
        return list;
    };
    InstanceLoader.prototype.getInstanceTransFormer = function (transFormers) {
        var list = new Array();
        for (var _i = 0, transFormers_1 = transFormers; _i < transFormers_1.length; _i++) {
            var transFormer = transFormers_1[_i];
            if (transFormer[2])
                list.push(this.getInstance(transFormer[0], transFormer[1], transFormer[2]));
            else
                list.push(this.getInstance(transFormer[0], transFormer[1]));
        }
        return list;
    };
    InstanceLoader.prototype.getStepForASelectorHtmlElement = function (selector) {
        for (var i = 0; i < this.contentHtmlElement.length; i++) {
            var element = this.contentHtmlElement.item(i).querySelectorAll(" * > " + selector);
            if (element.length > 0)
                return i;
        }
        return 0;
    };
    InstanceLoader.prototype.getInstance = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var instance = Object.create(this.context[name].prototype);
        instance.constructor.apply(instance, args);
        return instance;
    };
    return InstanceLoader;
}());
