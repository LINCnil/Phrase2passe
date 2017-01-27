/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: phrase2passe.validation.ts 2017- 01 - 03
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
 *   - Validator
 *
 * @author Olivier PASQUET
 */

/**
 * Package Validator
 *
 * @interface {ValidatorRule}
 */
interface ValidatorRule {

    /**
     * Method used to validate the query
     *
     * @method validate
     * @returns {boolean} true if the password is valid else false
     */
    validate(password: PassWord): boolean;

    /**
     * Method used to retrieve the selector
     *
     * @method getSelector
     * @returns {string} the selector html used to print the error
     */
    getSelector(): string;

    /**
     * Method used to retrieve the step
     *
     * @method getStep
     * @returns {number} the number step used by the validation object
     */
    getStep(): number;

    /**
     * Method used to retrieve the point
     *
     * @method getPoint
     * @returns {number} the number point attach to the validation rule
     */
    getPoint(): number;
}
/**
 * @class {SuiteOfNumberValidatorRule}
 * @implements {ValidatorRule}
 */
class SuiteOfNumberValidatorRule implements ValidatorRule {
    /**
      * Create a new {@code SuiteOfNumberValidatorRule} validator
      *
      * @constructor
      * @param {string} selector
      * @param {number} step
      */
    constructor(private selector: string,private step: number) {
    }

    /**
      * validate is used to validate the sentense
      *
      * @method validate
      * @public
      * @returns {boolean}
      * @override {ValidatorRule.validate()}
      */
    public validate(password: PassWord): boolean {
        let ret: boolean = true;
        if (password.getPassWord() !== null && password.getPassWord().split(' ').join('').match(/\d+/g) !== null) {
            password.getPassWord().split(' ').join('').match(/\d+/g).forEach(c=> {
                let count: number = 0;
                let suite: boolean = true;
                for (let i: number = 0; i < c.length - 1 && suite; i++) {
                    if ((parseInt(c[i]) + 1) == parseInt(c[i + 1])) {
                        count++;
                    } else {
                        suite = false;
                    }
                }
                if (count >= 3 && suite) {
                    ret = false;
                }
            });
        }
        return ret;
    }

    /**
     * Method used to retrieve the selector
     *
     * @method getSelector
     * @public
     * @returns {string}
     * @override {ValidatorRule.getSelector()}
     */
    public getSelector(): string {
        return this.selector;
    }

    /**
     * Method used to retrieve the step
     *
     * @method getStep
     * @public
     * @returns {number}
     * @override {ValidatorRule.getStep()}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * Method used to retrieve the point
     *
     * @method getPoint
     * @public
     * @returns {number}
     * @override {ValidatorRule.getPoint()}
     */
    public getPoint(): number {
        return 2;
    }

}

/**
  * NumberDifferentValidatorValidatorRule class
  *
  * @class {NumberDifferentValidatorValidatorRule}
  * @implements {ValidatorRule}
  */
class NumberDifferentValidatorValidatorRule implements ValidatorRule {
    /**
      * Create a new {@code NumberDifferentValidatorValidatorRule} validator
      *
      * @constructor
      * @param {string} selector
      * @param {number} step
      */
    constructor(private selector: string,private step: number) {
    }

    /**
      * validate is used to validate the sentense
      *
      * @method validate
      * @public
      * @param {PassWord} password
      * @returns {boolean}
      * @override {ValidatorRule.validate()}
      */
    public validate(password: PassWord): boolean {
        let tab: number[][] = [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0]];

        for (let i: number = 0; i < password.getPassWord().length; i++) {
            if (password.getPassWord()[i] == "0" || parseInt(password.getPassWord()[i])) {
                let caractereiMdp: number = parseInt(password.getPassWord()[i]);
       
                tab[caractereiMdp][1]++;
            }
        }
        let count: number = 0;
        
        for (let j: number = 0; j <= tab.length - 1; j++) {
            if (tab[j][1] > 0) count++;
        }
        return count >= 1 ? true : false;
    }

    /**
     * Method used to retrieve the selector
     *
     * @method getSelector
     * @public
     * @returns {string}
     * @override {ValidatorRule.getSelector()}
     */
    public getSelector(): string {
        return this.selector;
    }

    /**
     * Method used to retrieve the step
     *
     * @method getStep
     * @public
     * @returns {number}
     * @override {ValidatorRule.getStep()}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * Method used to retrieve the point
     *
     * @method getPoint
     * @public
     * @returns {number}
     * @override {ValidatorRule.getPoint()}
     */
    public getPoint(): number {
        return 2;
    }
}

/**
  * YearValidatorValidatorRule class
  *
  * @class {YearValidatorValidatorRule}
  * @implements {ValidatorRule}
  */
class YearValidatorValidatorRule implements ValidatorRule {

    /**
      * Create a new {@code YearValidatorValidatorRule} validator
      *
      * @constructor
      * @param {string} selector
      * @param {number} step
      */
    constructor(private selector: string,private  step: number) {
    }

    /**
      * validate is used to validate the sentense
      *
      * @method validate
      * @public
      * @param {PassWord} password
      * @returns {boolean}
      * @override {ValidatorRule.validate()}
      */
    public validate(password: PassWord): boolean {
        let valid: boolean = true;
        for (let year: number = 1950; year <= 2049 && valid === true; year++) {
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
    }

    /**
     * Method used to retrieve the selector
     *
     * @method getSelector
     * @public
     * @returns {string}
     * @override {ValidatorRule.getSelector()}
     */
    public getSelector(): string {
        return this.selector;
    }

    /**
     * Method used to retrieve the step
     *
     * @method getStep
     * @public
     * @returns {number}
     * @override {ValidatorRule.getStep()}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * Method used to retrieve the point
     *
     * @method getPoint
     * @public
     * @returns {number}
     * @override {ValidatorRule.getPoint()}
     */
    public getPoint(): number {
        return 2;
    }
}

/**
 * NumberOfWordValidatorRule validator
 * 
 * @class {NumberOfWordValidatorRule}
 * @implements {ValidatorRule}
 */
class NumberOfChararcterInPassWordValidatorRule implements ValidatorRule {
    /**
      * Create a new {@code NumberOfWordValidatorRule} validator
      *
      * @constructor
      * @param {string} selector
      * @param {number} step
      * @param {number} numberWord
      */
    constructor(private selector: string, private step: number, private numberWord: number =12 ) {
    }

    /**
      * validate is used to validate the sentense
      * 
      * @method validate
      * @public
      * @returns {boolean}
      * @param {PassWord} password
      * @override {ValidatorRule.validate()}
      */
    public validate(password: PassWord): boolean {
        return password.getPassWord().split(' ').join('').length >= this.numberWord;
    }

    /**
     * Method used to retrieve the selector
     *
     * @method getSelector
     * @public
     * @returns {string}
     * @override {ValidatorRule.getSelector()}
     */
    public getSelector(): string {
        return this.selector;
    }

    /**
     * Method used to retrieve the step
     *
     * @method getStep
     * @public
     * @returns {number}
     * @override {ValidatorRule.getStep()}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * Method used to retrieve the point
     *
     * @method getPoint
     * @public
     * @returns {number}
     * @override {ValidatorRule.getPoint()}
     */
    public getPoint(): number {
        return 2;
    }
}

/**
 * IdenticalChararcterInPassWordValidatorRule validator
 * 
 * @class {IdenticalChararcterInPassWordValidatorRule}
 * @implements {ValidatorRule}
 */
class IdenticalChararcterInPassWordValidatorRule implements ValidatorRule {
    /**
      * Create a new {@code IdenticalChararcterInPassWordValidatorRule} validator
      *
      * @constructor
      * @param {string} selector
      * @param {number} step
      */
    constructor(private selector: string, private step: number, private numberOfChar: number = 4) {
    }

    /**
      * validate is used to validate the sentense
      * 
      * @method validate
      * @public
      * @returns {boolean}
      * @param {PassWord} password
      * @override {ValidatorRule.validate()}
      */
    public validate(password: PassWord): boolean {
        let lastChar: string = "";
        let count: number = 1;
        let ret: boolean = true;
        for (let i = 0; i < password.getPassWord().length; i++) {
            if (lastChar == password.getPassWord().charAt(i)) {
                count++;
                if (count == this.numberOfChar) ret = false;
            } else {
                count = 1;
            }
            lastChar = password.getPassWord().charAt(i);
        }
        return ret;
    }

    /**
     * Method used to retrieve the selector
     *
     * @method getSelector
     * @public
     * @returns {string}
     * @override {ValidatorRule.getSelector()}
     */
    public getSelector(): string {
        return this.selector;
    }

    /**
     * Method used to retrieve the step
     *
     * @method getStep
     * @public
     * @returns {number}
     * @override {ValidatorRule.getStep()}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * Method used to retrieve the point
     *
     * @method getPoint
     * @public
     * @returns {number}
     * @override {ValidatorRule.getPoint()}
     */
    public getPoint(): number {
        return 2;
    }
}
/**
  * ContainsCaracterSpecialValidatorRule validator
  *
  * @class {ContainsCaracterSpecialValidatorRule}
  * @implements {ValidatorRule}
  */
class ContainsCaracterSpecialValidatorRule implements ValidatorRule {
    /**
      * Create a new {@code ContainsCaracterSpecialValidatorRule} validator
      * 
      * @constructor
      * @param {string} selector
      * @param {number} step
      */
    constructor(private selector: string, private step:number) {
    }

    /**
      * validate is used to validate the sentense
      * 
      * @returns {boolean}
      * @public
      * @param {PassWord} password
      * @override {ValidatorRule.validate()}
      */
    public validate(password: PassWord): boolean {
        return password.getPassWord() !== "" && password.getPassWord().match(/[!,@,#,$,%,^,&,*,?,_,~,(,),;,\/,\\,+,\[,\],.,{,},:,',|,°,=,<,>,€,-]/g) !== null;
    }

    /**
     * Method used to retrieve the selector
     *
     * @method getSelector
     * @public
     * @returns {string}
     * @override {ValidatorRule.getSelector()}
     */
    public getSelector(): string {
        return this.selector;
    }

    /**
     * Method used to retrieve the step
     *
     * @method getStep
     * @public
     * @returns {number}
     * @override {ValidatorRule.getStep()}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * Method used to retrieve the point
     *
     * @method getPoint
     * @public
     * @returns {number}
     * @override {ValidatorRule.getPoint()}
     */
    public getPoint(): number {
        return 2;
    }
}
/**
  * PresenceLetterMinisculeValidatorRule validator
  *
  * @class {PresenceLetterMinisculeValidatorRule}
  * @implements {ValidatorRule}
  */
class PresenceLetterMinisculeValidatorRule implements ValidatorRule {
    /**
      * Create a new {@code PresenceLetterMinisculeValidatorRule} validator
      * 
      * @constructor
      * @param {string} selector
      * @param {number} step
      */
    constructor(private selector: string, private step: number) {
    }

    /**
     * Method used to retrieve the selector
     *
     * @method getSelector
     * @public
     * @param {PassWord} password
     * @returns {string}
     * @override {ValidatorRule.getSelector()}
     */
    public validate(password: PassWord): boolean {
        return password.getPassWord().match(/[a-z]/) !== null;
    }

    /**
     * Method used to retrieve the selector
     *
     * @method getSelector
     * @public
     * @returns {string}
     * @override {ValidatorRule.getSelector()}
     */
    public getSelector(): string {
        return this.selector;
    }

    /**
     * Method used to retrieve the step
     *
     * @method getStep
     * @public
     * @returns {number}
     * @override {ValidatorRule.getStep()}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * Method used to retrieve the point
     *
     * @method getPoint
     * @public
     * @returns {number}
     * @override {ValidatorRule.getPoint()}
     */
    public getPoint(): number {
        return 2;
    }
}
/**
  * PresenceLetterMajusculeValidatorRule validator
  *
  * @class PresenceLetterMajusculeValidatorRule
  * @implements {ValidatorRule}
  */
class PresenceLetterMajusculeValidatorRule implements ValidatorRule {
    /**
      * Create a new {@code ContainsCaracterSpecialValidatorRule} validator
      * 
      * @constructor
      * @param {string} selector
      * @param {number} step
      */
    constructor(private selector: string, private step: number) {
    }

     /**
      * validate is used to validate the sentense
      *
      * @method validate
      * @returns {boolean}
      * @param {PassWord} password
      * @override {ValidatorRule.validate()}
      */
    public validate(password: PassWord): boolean {
        return password.getPassWord().match(/[A-Z]/) !== null;
    }

    /**
     * Method used to retrieve the selector
     *
     * @method getSelector
     * @returns {string}
     * @override {ValidatorRule.getSelector()}
     */
    public getSelector(): string {
        return this.selector;
    }

    /**
     * Method used to retrieve the step
     *
     * @method getStep
     * @returns {number}
     * @override {ValidatorRule.getStep()}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * Method used to retrieve the point
     *
     * @method getPoint
     * @public
     * @returns {number}
     * @override {ValidatorRule.getPoint()}
     */
    public getPoint(): number {
        return 3;
    }
}
/**
  * AnyFourSequentialLetterInTheAlphabetValidatorRule validator
  * {4 letters abcd or lmno}
  *
  * @class AnyFourSequentialLetterInTheAlphabetValidatorRule
  * @implements {ValidatorRule}
  */
class AnyFourSequentialLetterInTheAlphabetValidatorRule implements ValidatorRule {
    /**
      * Create a new {@code AnyFourSequentialLetterInTheAlphabetValidatorRule} validator
      * 
      * @constructor
      * @param {string} selector
      * @param {number} step
      */
    constructor(private selector: string, private step: number) {
    }

     /**
      * validate is used to validate the sentense
      *
      * @method validate
      * @returns {boolean}
      * @public
      * @param {PassWord} password
      * @override {ValidatorRule.validate()}
      */
    public validate(password: PassWord): boolean {
        let valid: boolean = false;
        if (password.getPassWord().length > 2) {
            let countCaractereSuiv: number = 0;
            for (let i: number = 0; i < password.getPassWord().length - 1; i++) {
                try {
                    let v: number = password.getPassWord().toLowerCase().charCodeAt(i);
                    if (((v >= 97 && v <= 122) || (v >= 65 && v <= 90)) && (password.getPassWord().toLowerCase().charCodeAt(i) + 1) === password.getPassWord().toLowerCase().charCodeAt(i + 1)) {
                        countCaractereSuiv++;
                    } else {
                        countCaractereSuiv = 0;
                    }
                    if (countCaractereSuiv >= 3) {
                        valid = true;
                    }
                } catch (e) {
                }
            }
        }
        return !valid;
    }

    /**
     * Method used to retrieve the selector
     *
     * @method getSelector
     * @public
     * @returns {string}
     * @override {ValidatorRule.getSelector()}
     */
    public getSelector(): string {
        return this.selector;
    }

    /**
     * Method used to retrieve the step
     *
     * @method getStep
     * @public
     * @returns {number}
     * @override {ValidatorRule.getStep()}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * Method used to retrieve the point
     *
     * @method getPoint
     * @public
     * @returns {number}
     * @override {ValidatorRule.getPoint()}
     */
    public getPoint(): number {
        return 2;
    }
}
/**
  * AnyFourSequentialLettersInTheKeyBordValidatorRule validator
  * {5 letters azerty}
  * 
  * @class AnyFourSequentialLettersInTheKeyBordValidatorRule
  * @implements {ValidatorRule}
  */
class AnyFourSequentialLettersInTheKeyBordValidatorRule implements ValidatorRule {
    /**
      * Create a new {@code AnyFourSequentialLettersInTheKeyBordValidatorRule} validator
      * 
      * @constructor
      * @param {string} selector
      * @param {number} step
      */
    constructor(private selector: string, private step: number) {
    }
     /**
      * validate is used to validate the sentense
      *
      * @method validate
      * @public
      * @returns {boolean}
      * @param {PassWord} password
      * @override {ValidatorRule.validate()}
      */
    public validate(password: PassWord): boolean {
        let testCountCaractereKeybordSuiv: boolean = false;

        if (password.getPassWord().length > 4) {  
            for (let i: number = 0; i < password.getPassWord().length - 4; i++) {
                try {
                    if ("azertyuiopqsdfghjklmwxcvbn".indexOf(password.getPassWord().toLowerCase().substr(i, 4)) !== -1) {
                        testCountCaractereKeybordSuiv = true;
                    }
                } catch (e) {
                }
            }
        }
        return !testCountCaractereKeybordSuiv;
    }

    /**
     * Method used to retrieve the selector
     *
     * @method getSelector
     * @public
     * @returns {string}
     * @override {ValidatorRule.getSelector()}
     */
    public getSelector(): string {
        return this.selector;
    }

    /**
     * Method used to retrieve the step
     *
     * @method getStep
     * @public
     * @returns {number}
     * @override {ValidatorRule.getStep()}
     */
    public getStep(): number {
        return this.step;
    }

    /**
     * Method used to retrieve the point
     *
     * @method getPoint
     * @public
     * @returns {number}
     * @override {ValidatorRule.getPoint()}
     */
    public getPoint(): number {
        return 2;
    }
}

/**
 * CallValidatorService
 * 
 * @class CallValidatorService
 */
class CallValidatorService {
    /**
     * Create a new {@code CallValidatorService}
     * 
     * @constructor
     * @param {ValidatorRule[]} validators
     */
    constructor(private validators: ValidatorRule[]) {
    }

    /**
     * @method getValidatorByStep
     * @private
     * @param {number} step
     * @returns {ValidatorRule[]}
     */
    private getValidatorByStep(step: number): ValidatorRule[] {
        let ret: ValidatorRule [] = [];
        this.validators.forEach(validatior => {
            if (validatior.getStep() === step) ret.push(validatior);
        });
        return ret;
    }

    /**
     * @method callStepByStep
     * @param {PassWord} password
     * @param {number} step
     * @returns {boolean}
     */
    public callStepByStep(password: PassWord, step:number): boolean {
        let ret: boolean = true;
        this.getValidatorByStep(step).forEach(validatior => {
            if (!validatior.validate(password)) ret = false;
        });
        return ret;
    }

    /**
     * @method getMaxPointStepByStep
     * @public
     * @param {number} step
     * @returns {number}
     */
    public getMaxPointStepByStep(step: number): number {
        let ret: number = 0;
        this.getValidatorByStep(step).forEach(validatior => {
            ret += validatior.getPoint();
        });
        return ret;
    }

    /**
     * @method getSelectorsErrorByStep
     * @public
     * @param {PassWord} password
     * @param {number} step
     * @returns {string []}
     */
    public getSelectorsErrorByStep(password: PassWord, step:number): string [] {
        let ret: string [] = [];
        this.getValidatorByStep(step).forEach(validatior => {
            if (!validatior.validate(password)) ret.push(validatior.getSelector());
        });
        return ret;
    }

    /**
     * @method callValidatorGetPointByStep
     * @public
     * @param {PassWord} password
     * @param {number} step
     * @returns {number}
     */
    public callValidatorGetPointByStep(password: PassWord, step: number): number {
        let ret: number = 0;
        this.getValidatorByStep(step).forEach(validatior => {
            if (validatior.validate(password)) ret += validatior.getPoint();
        });
        return ret;
    }
}