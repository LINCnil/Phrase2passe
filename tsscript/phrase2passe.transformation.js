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
