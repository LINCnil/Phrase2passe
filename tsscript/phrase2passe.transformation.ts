/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: phrase2passe.transformation.ts 2017- 01 - 03
 * 
 * Password Cnil is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * Password Cnil is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with Password Cnil.  If not, see <http://www.gnu.org/licenses/>.
 *
 *
 * The plugin is used to help the user at choice a password
 * 
 * Package of plugin :
 *   - TransFormer
 *
 * @author Olivier PASQUET
 */

/** 
 * Package TransFormer
 *
 * Genrric interface TransFormer
 * @interface {@code TransFormer}
 */
interface TransFormer {

    /**
     * @method isTransform
     * @param {string} phrase
     * @returns {boolean}
     */
    isTransform(phrase: string): boolean;

    /**
     * @method transform
     * @param {string} phrase
     * @returns {string}
     */
    transform(phrase: string): string;

    /**
     * @method getStep
     * @returns {number}
     */
    getStep(): number;

    /**
     * @method getSelectorNotUsed
     * @returns {string}
     */
    getSelectorNotUsed(): string;

    /**
     * @method isOptionalTransformation
     * @returns {boolean}
     */
    isOptionalTransformation(): boolean;

    /**
     * @method detailTransform
     * @param {string} phrase
     * @returns {string []}
     */
    detailTransform(phrase:string): string [];
}
/**
 * @implements TransFormer
 * @class FirstLetterWordTransFormer
 */
class FirstLetterWordTransFormer implements TransFormer {

    /**
      * Create a new {@code FirstLetterWordTransFormer} validator
      *
      * @constructor
      * @param {number} step
      * @param {string} selectorNoUsed
      */
    constructor(private step: number, private selectorNoUsed: string = "") {
    }

    /**
    * Returns the password
    * 
    * @method transform
    * @public
    * @param {string} phrase
    * @returns {string}
    * @override {TransFormer.transform()}
    */
    public transform(phrase: string): string {
        let password: string = "";
        this.getWordsInParam(phrase.trim()).forEach(word => {
            password += word.charAt(0);
        });
        return password;
    }

    /**
      * @method isTransform
      * @public
      * @param {phrase} string
      * @overide {TransFormer.isTransform()}
      * @returns {boolean}
      */
    public isTransform(phrase: string): boolean {
        return phrase !== this.transform(phrase);
    }

    /**
      * Returns the list word split
      *
      * @method getWordsInParam
      * @private
      * @param {string} ph
      * @returns {string []} the list word split
      */

    private getWordsInParam(ph: string): string[] {
        if (ph.length === 0) {
            return [];
        }
        let p: string = ph;
        // Special char
        let chars1: string[] = [".", "", ",", ";", "'", '"', "-", "<", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "!", "@", "&", "%", "$", "*", "?", "_", "~", "(", ")", "/", "+", "[", "]", "{", "}", ":", "|", "°", "=", "€"];
        chars1.forEach(char => {
            p = this.replaceAll(p, char, (" " + char + " "));
        });

        let chs: string[] = [];
        let j: number = 0;
        for (let i: number = 0; i < p.split(' ').length; i++) {
            if (p.split(' ')[i] && p.split(' ')[i] !== "" && p.split(' ')[i] !== " ") {
                chs[j] = p.split(' ')[i];
                j++;
            }
        }
        return (chs || []);
    }

    /**
     * 
     * @method replaceAll
     * @private
     * @param {string} text
     * @param {string} search
     * @param {string} replace
     * @returns {string} the new string
     */
    private replaceAll(text: string, search: string, replace: string): string {
        //if search entry or replace entry empty return the string
        if (!search || !replace) { return text; } 
        //global RegEx search for all instances ("g") of your search entry and replace them all.
        return text.replace(new RegExp('[' + search + ']', 'g'), replace);
    }

    /**
     * @method getStep
     * @public
     * @override {TransFormer.getStep()}
     * @returns {number}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * @method getSelectorNotUsed
     * @public
     * @overide {TransFormer.getSelectorNotUsed()}
     * @returns {string}
     */
    public getSelectorNotUsed(): string {
        return this.selectorNoUsed;
    }

    /**
     * @method isOptionalTransformation
     * @public
     * @overide {TransFormer.isOptionalTransformation()}
     * @returns {boolean}
     */
    public isOptionalTransformation(): boolean {
        return false;
    }

    /**
     * @method detailTransform
     * @public
     * @param {string} phrase
     * @overide {TransFormer.detailTransform()}
     * @returns {string []}
     */
    public detailTransform(phrase: string): string[] {
        //let replaceTab: string[] = [];
        //this.getWordsInParam(phrase.trim()).forEach(word => {
        //    replaceTab.push("Premère lettre du " + word + " conservé " + word.charAt(0) );
        //});
        return [];
    }
    
}
/**
 * @implements TransFormer
 * @class SpaceTransformer
 */
class SpaceTransformer implements TransFormer {

    /**
      * Create a new {@code SpaceTransformer} validator
      *
      * @constructor
      * @param {number} step
      * @param {string} selectorNoUsed
      */
    constructor(private step: number, private selectorNoUsed: string = "") {
    }

    /**
      * Returns the phrase update
      *
      * @method transform
      * @public
      * @param {string} phrase
      * @override {TransFormer.transform()}
      * @retrun {string}
      */
    public transform(phrase: string): string {
        if (phrase.length === 0) {
            return "";
        }
        let p: string = phrase;
        // Special char
        let chars1: string[] = [".", "", ",", ";", "'", '"', "-", "<", ">", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
            "!", "@", "&", "%", "$", "*", "?", "_", "~", "(", ")", "/", "+", "[", "]", "{", "}", ":", "|", "°", "=", "€"];
        // Replace (char) by (space + char + space)
        chars1.forEach(char => {
            p = this.replaceAll(p, char, (" " + char + " "));
        });
        return p;
    }

    /**
     * 
     * @method replaceAll
     * @private
     * @param {string} text
     * @param {string} search
     * @param {string} replace
     * @returns {string} the new string
     */
    private replaceAll(text: string, search: string, replace: string): string {
        //if search entry or replace entry empty return the string
        if (!search || !replace) { return text; } 
        //global RegEx search for all instances ("g") of your search entry and replace them all.
        return text.replace(new RegExp('[' + search + ']', 'g'), replace);
    }

    /**
      * @method isTransform
      * @public
      * @param {string} phrase
      * @overide {TransFormer.isTransform()}
      * @returns {boolean}
      */
    public isTransform(phrase: string): boolean {
        return phrase !== this.transform(phrase);
    }

    /**
     * @method getStep
     * @public
     * @override {TransFormer.getStep()}
     * @returns {number}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * @method getSelectorNotUsed
     * @public
     * @overide {TransFormer.getSelectorNotUsed()}
     * @returns {string}
     */
    public getSelectorNotUsed(): string {
        return this.selectorNoUsed;
    }

    /**
     * @method isOptionalTransformation
     * @public
     * @overide {TransFormer.isOptionalTransformation()}
     * @returns {boolean}
     */
    public isOptionalTransformation(): boolean {
        return false;
    }

    /**
     * @method detailTransform
     * @public
     * @param {string} phrase
     * @overide {TransFormer.detailTransform()}
     * @returns {string []}
     */
    public detailTransform(phrase: string): string[] {
        return [];
    }
}
/**
 * @implements TransFormer
 * @class ReplaceWordBycharcterInPassWordTransFormer
 */
class ReplaceWordBycharcterInPassWordTransFormer implements TransFormer {

    /**
      * Create a new {@code ReplaceWordBycharcterInPassWordTransFormer} validator
      *
      * @constructor
      * @param {number} step
      * @param {string} selectorNoUsed
      */
    constructor(private step: number, private selectorNoUsed: string = "") {
    }

    /**
     * @property digitsInWord
     *
     * @private
     * @final
     * @type {string[][]}
     */
    private digitsInWord: string[][] = Languages.valueBykey("words");

      /**
       * @method detailTransform
       * @public
       * @param {string} phrase
       * @override {TransFormer.detailTransform()}
       * @returns {string[]}
       */
    public detailTransform(phrase: string): string []{
         // local variable
         let replaceTab: string[] = [];
         let phraseLowerCase = " " + phrase.toLocaleLowerCase() + " ";
         let endword: string[] = Languages.valueBykey("end_word");

         // find change
         for (let i: number = 0; i < this.digitsInWord.length; i++) {
             // Search word
             // Search word granted to the plural
             // Search word granted to the feminine and the plural
             // Search word granted to the feminine
             // Search word granted to the plural
             // Search word infinitif

             endword.forEach(end => {
                 this.updateIfFindWord(phraseLowerCase, " " + this.digitsInWord[i][0].toLocaleLowerCase() + end, replaceTab, this.digitsInWord[i][1]);
                 this.updateIfFindWord(phraseLowerCase, "'" + this.digitsInWord[i][0].toLocaleLowerCase() + end, replaceTab, this.digitsInWord[i][1]);
             });
         }
         return replaceTab;
     }

    /**
    * @method updateIfFindWord
    * @private
    * @param {string} phrase
    * @param {string} word
    * @param {string []} replace
    * @param {string} reploaceString
    */
    private updateIfFindWord(phrase: string, word: string, replace: string[],reploaceString : string) {
        if (phrase.indexOf(word) > -1)
            replace.push(Languages.valueBykey("ReplaceWordBycharcterInPassWordTransFormer_updateIfFindWord_start") +
                "<b>" +
                word +
                "</b>" +
                Languages.valueBykey("ReplaceWordBycharcterInPassWordTransFormer_updateIfFindWord_middle") +
                "<b>" + reploaceString + "</b>");
    }

     /**
       * @method isTransform
       * @public
       * @param {string} phrase
       * @overide {TransFormer.isTransform()}
       * @returns {boolean}
       */
     public isTransform(phrase: string): boolean {
         return ((" " + phrase + " ") != this.transform(phrase));
     }

    /**
     * Returns the phrase update
     * 
     * @method transform
     * @public
     * @override {TransFormer.transform()}
     * @param {string} phrase
     * @retruns {string}
     */
    public transform(phrase: string): string {
        phrase = " " + phrase + " ";
        for (let i: number = 0; i < this.digitsInWord.length; i++) {
            phrase = this.replaceStringAll(phrase, this.digitsInWord[i][0], this.digitsInWord[i][1]);
        }
        return phrase;
    }

    /**
     * 
     * @method replaceAll
     * @private
     * @param {string} text
     * @param {string} search
     * @param {string} replace
     * @returns {string} the new string
     */
    private replaceAll(text: string, search: string, replace: string): string {
        //if search entry or replace entry empty return the string
        if (!search || !replace) { return text; } 
        //global RegEx search for all instances ("g") of your search entry and replace them all.
        return text.replace(new RegExp('[' + search + ']', 'g'), replace);
    }

    /**
    * 
    * @method replaceAll
    * @private
    * @param {string} text
    * @param {string} search
    * @param {string} replace
    * @returns {string} the new string
    */
    private replaceStringAll(text: string, search: string, replace: string): string {
        //if search entry or replace entry empty return the string
        if (!search || !replace) { return text; }

        let notCharRegex: string = "((?![ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzéèà]))";

        let endword: string[] = Languages.valueBykey("end_word");

        // global RegEx search for all instances ("g") of your search entry and replace them all.
        endword.forEach(end => {
            text = text.replace(new RegExp(" " + search + end, 'gi'), " " + replace + "  ");
            text = text.replace(new RegExp("'" + search + end, 'gi'), "'" + replace + "  ");
            //this.updateIfFindWord(phraseLowerCase, this.digitsInWord[i][0].toLocaleLowerCase() + end, replaceTab, this.digitsInWord[i][1]);
        });

        text = text.replace(new RegExp(" " + search + notCharRegex, 'gi'), " " + replace + "  ");
        text = text.replace(new RegExp("'" + search + notCharRegex, 'gi'), "'" + replace + "  ");
        return text;
    }

    /**
     * @method getStep
     * @public
     * @override {TransFormer.getStep()}
     * @returns {number}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * @method getSelectorNotUsed
     * @public
     * @overide {TransFormer.getSelectorNotUsed()}
     * @returns {string}
     */
    public getSelectorNotUsed(): string {
        return this.selectorNoUsed;
    }

    /**
     * @method isOptionalTransformation
     * @public
     * @overide {TransFormer.isOptionalTransformation() }
     * @returns {boolean}
     */
    public isOptionalTransformation(): boolean {
        return true;
    }
}

/*
 * @implements TransFormer
 * 
 * Obligatory used {@code SpaceTransformer} before
 * @class ConversioNnumber
 */
class ConversioNnumberTransformer implements TransFormer {

    /**
      * Create a new {@code ConversioNnumberTransformer} validator
      *
      * @constructor
      * @param {number} step
      * @param {string} selectorNoUsed
      */
    constructor(private step: number, private selectorNoUsed: string = "") {
    }

    /**
     * @property numbers
     *
     * @private
     * @final
     * @type {Integer}
     */
    private numbers: { [key: string]: number; } = Languages.valueBykey("number");

    /**
     * @property multiplicate
     *
     * @private
     * @final
     * @type {Integer}
     */
    private multiplicate = [
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

    /**
     * @method isMulti
     * @private
     * @param {number} num
     * @returns {boolean}
     */
    private isMulti(num: number): boolean {
        return this.multiplicate.indexOf(num) > -1;
    }

    /**
     * @method stringing
     * @private
     * @param {string []} seq
     * @returns {string}
     */
    private stringing(seq: string[]): string {
        let res: string = '';
        for (var val in seq) {
            res += " " + seq[val];
        }
        return res;
    }

    /**
     * @method search
     * @private
     * @param {string} num
     * @returns {number}
     */
    private search(num: string): number {
        if (num in this.numbers) {
            return this.numbers[num];
        }
        return 0;
    }

    /**
     * @method evaluate
     * @private
     * @param {number} max
     * @param {number []}  tab
     * @returns {number}
     */
    private evaluate(max: number, tab: number[]): number {
        for (var val in tab) {
            if (max <= tab[val]) {
                return tab[val];
            }
        }
        return 1;
    }

    /**
      * @method getSuffix
      * @private
      * @param {string []} seq
      * @returns {string}
      */
    private getSuffix(seq: string[]): string {
        let suffix: string = '';
        let nb: number = 0;

        for (var val in seq) {
            if (this.search(seq[val]) > 0) {
                nb++;
            } else if (seq[val] !== '') {
                suffix += " " + seq[val];

            }
        }
        return suffix;
    }

    /**
     * @method createTabChiffre
     * @private
     * @param {string []} seq
     * @returns {any}
     */
    private createTabChiffre(seq: string[]): any {
        let tab = [];
        let j: number = 0;
        for (let i = 0; i < seq.length; i++) {
            if (this.search(seq[i]) > 0) {
                tab[j] = this.search(seq[i]);
                j++;
            }
        }
        return tab;
    }

    /**
     * @method cal
     * @private
     * @param {any} tab
     * @returns {number}
     */
    private cal(tab: any): number {
        let result: number = 0;
        for (let i: number = 0; i < tab.length; i++) {
            result += tab[i];
        }
        return result;
    }

    /**
     * @method findIndexPlusGrandMulti
     * @private
     * @param {any} tab
     * @returns {number}
     */
    private findIndexPlusGrandMulti(tab: any): number {
        let index: number = 0;
        let max: number = 0;
        for (let i: number = 0; i < tab.length; i++) {
            if (this.isMulti(tab[i])) {
                if (max <= tab[i]) {
                    max = tab[i];
                    index = i;
                }
            }
        }
        return index;
    }

    /**
     * @method splitTab
     * @private
     * @param {any} tab
     * @returns {number}
     */
    private splitTab(tab: any): number {
        let result = 0;
        let indexPlusGrand: number = this.findIndexPlusGrandMulti(tab);
        let tabBefore = tab.splice(0, indexPlusGrand);
        let tabAfter = tab.splice(1, tab.length);

        if (tabBefore.length > 0) {
            result = this.splitTab(tabBefore) * tab[0];
        } else {
            for (let i: number = 0; i < tab.length; i++) {
                result += tab[i];
            }
        }
        if (tabAfter.length > 0) {
            result += this.splitTab(tabAfter);
        }
        return result;
    }

    /**
     * @method calculate
     * @private
     * @param {string} num
     * @returns {string}
     */
    private calculate(num: string): string {
        let seq: string[] = num.replace(" " + Languages.valueBykey("word_and")+" ", " ").split(" ");
        let tab = this.createTabChiffre(seq);
        let res: string = "";
        if (tab.length > 0)
            res = this.splitTab(tab).toString();
        else
            res = "";
        return res + this.getSuffix(seq) + " ";
    }

    /**
      * @method isNumber
      * @private
      * @param {string} val
      * @returns {boolean}
      */
    private isNumber(val: string): boolean {
        let test: boolean = false;
        let numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        numbers.forEach(num=> {
            if (val === num) {
                test = true;
            } else if (this.search(val)) {
                test = true;
            }
        });
        return test;
    }

    /**
      * @method replaceEtAndTiret
      * @private
      * @param {string} phrase
      * @returns {string []}
      */
    private replaceEtAndTiret(phrase: string): string[] {
        let tab: string[] = phrase.split(" ");
        let ret: string = "";
        for (let i: number = 0; i < tab.length; i++) {
            if ((this.isNumber(tab[i - 1]) || tab[i - 1] === "-") && this.isNumber(tab[i + 1]) && (tab[i] === Languages.valueBykey("word_and") || tab[i] === "-" || tab[i] === "&")) {
                ret += " ";
            } else {
                ret += " " + tab[i];
            }
        }
        return ret.split(" ");
    }

    /**
      * @method isTransform
      * @public
      * @param {string} phrase
      * @overide {TransFormer.isTransform()}
      * @returns {boolean}
      */
    public isTransform(phrase: string): boolean {
        return this.replaceAll(phrase, " ", "") != this.replaceAll(this.transform(phrase).replace(/ +(?= )/g, ''), " ", "");
    }

    /**
      * @method replaceAll
      * @public
      * @param {string} phrase
      * @param {string} search
      * @param {string} replacement
      * @returns {string}
      */
    private replaceAll = function (phrase:string, search: string, replacement:string) : string {
        return phrase.replace(new RegExp(search, 'g'), replacement);
    }

    /**
      * @method transform
      * @public
      * @param {string} phrase
      * @overide {TransFormer.transform()}
      * @returns {string}
      */
    public transform(phrase: string): string {
        // local variable and format phrase
        let ph: string = this.replaceAll(phrase, ",", " , ");
        ph = this.replaceAll(ph, "'", " ' ");
        ph = this.replaceAll(ph, "-", " - ").replace(/ +(?= )/g, '');
        let seqs: string[] = this.replaceEtAndTiret(ph);
        let result: string = '';
        let ind: number = 0;
        let tmp: string[] = [''];

        for (let s in seqs) {
            if (seqs[s] !== "") {
                if (tmp[ind]) {
                    tmp[ind] += " " + seqs[s];
                } else {
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
            } else {
                result += this.calculate(tmp[val]);
            }
        }
        return result;
    }

    /**
     * @method
     * @public
     * @override {TransFormer.getStep()}
     * @returns {number}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * @method getSelectorNotUsed
     * @public
     * @overide {TransFormer.getSelectorNotUsed()}
     * @returns {string}
     */
    public getSelectorNotUsed(): string {
        return this.selectorNoUsed;
    }

    /**
     * @method isOptionalTransformation
     * @public
     * @overide {TransFormer.isOptionalTransformation()}
     * @returns {boolean}
     */
    public isOptionalTransformation(): boolean {
        return true;
    }

    /**
     * @method detailTransform
     * @public
     * @param {string} phrase
     * @overide {TransFormer.detailTransform()}
     * @returns {string[]}
     */
    public detailTransform(phrase: string): string[] {
        // local variable and format phrase
        let ret: string[] = [];
        let ph: string = this.replaceAll(phrase, ",", " , ");
        ph = this.replaceAll(ph, "'", " ' ");
        ph = this.replaceAll(ph, "-", " - ").replace(/ +(?= )/g, '');
        let seqs: string[] = this.replaceEtAndTiret(ph);
        let result: string = '';
        let ind: number = 0;
        let tmp: string[] = [''];
        
        for (let s in seqs) {
            if (seqs[s] !== "") {
                if (tmp[ind] && this.search(seqs[s]) != 0) {
                    tmp[ind] += " " + seqs[s];
                } else {
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
    }
}

/**
 * @class TransFormerService
 */
class TransFormerService {
    /**
     * Create a new {@code TransFormerService} service
     *
     * @constructor
     * @param {TransFormer[]} transformers
     */
    constructor(private transformers: TransFormer[]) {
    }

    /**
     * @method transformList
     * @param {string} phrase
     * @param {number} step
     * @returns {string} the list of error
     */
    public transformList(phrase: string, step: number): string {
        let value: string = "";
        this.transformers.forEach(transformer => {
            if (transformer.getStep() == step) {
                transformer.detailTransform(phrase).forEach(function (val) {
                    if (val) value += "<li class=\"countli\">" + val + "</li>";
                });
            }
        });

        return value;
    }

   /**
     * @method isTransform
     * @public
     * @param {string} phrase
     * @param {number} step
     * @returns {boolean} true if change detected else false
     */
    public isTransform(phrase: string, step: number): boolean {
        // local variable
        let ret: boolean = false;

        // Run detect change
        this.transformers.forEach(transformer => {
            if (transformer.getStep() == step && transformer.isOptionalTransformation() && !transformer.isTransform(phrase))
                ret = true;
        });
        return ret;
    }

    /**
     * Returns the list of transformer not used according to sentence
     *
     * @method getTransformerNotUsed
     * @public
     * @param {string} phrase
     * @param {number} step
     * @returns {TransFormer []} transformer not used according to sentence
     */
    public getTransformerNotUsed(phrase: string, step: number): TransFormer[] {
        let ret: TransFormer[] = [];
        this.transformers.forEach(transformer => {
            if (transformer.getStep() == step && transformer.isOptionalTransformation() && !transformer.isTransform(phrase))
                ret.push(transformer);
        });
        return ret;
    }

    /**
     * @method execute
     * @param {string} phrase
     * @param {number} step
     * @returns {PassWord}
     */
    public execute(phrase: string, step: number): PassWord {
        // local variable
        let phraseTransformInPassWord: string = phrase;

        // Transformation by step
        this.transformers.forEach(transformer => {
            if (transformer.getStep() == step) {
                phraseTransformInPassWord = transformer.transform(phraseTransformInPassWord);
            }
        });

        return new PassWord(phrase, phraseTransformInPassWord.split(' ').join(''));
    }
}