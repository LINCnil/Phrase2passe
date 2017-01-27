/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: phrase2passe.validation.test.ts 2017- 01 - 03
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
 * {@code SuiteOfNumberValidatorRule} test
 */
class SuiteOfNumberValidatorRuleTests extends TestClass {
    /**
     * @property suiteOfNumberValidatorRule
     * @private
     * @final
     * @type {SuiteOfNumberValidatorRule}
     */
    private suiteOfNumberValidatorRule: SuiteOfNumberValidatorRule = new SuiteOfNumberValidatorRule("#rule", 1);

   /**
     * Create a new {@code SuiteOfNumberValidatorRuleTests} test
     *
     * @constructor
     */
    constructor() {
        super();
        this.parameterizeUnitTest(this.addTestSuiteOfNumberValidatorRuleTestsTrue2, [
            ["1234"], ["2345"], ["3456"], ["4567"], ["5678"], ["6789"], ["6789"], ["0123456789"], ["0123456789a85"]
        ]);
        this.parameterizeUnitTest(this.addTestSuiteOfNumberValidatorRuleTestsFalse2, [
            ["7123 a 5789"], ["0234"], ["0345"], ["0456"], ["0567"], ["0678"], ["0789"],
            ["7892"], ["789012345"]
        ]);
    }

   /**
    * @public
    * @method addTestSuiteOfNumberValidatorRuleTestsTrue1
    */
    public addTestSuiteOfNumberValidatorRuleTestsTrue1() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.suiteOfNumberValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestSuiteOfNumberValidatorRuleTestsTrue2
    * @param {string} n1
    */
    public addTestSuiteOfNumberValidatorRuleTestsTrue2(n1: string) {
        let passWord: PassWord = new PassWord("NOT USED", n1);
        var result = this.suiteOfNumberValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method addTestSuiteOfNumberValidatorRuleTestsFalse1
    */
    public addTestSuiteOfNumberValidatorRuleTestsFalse1() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)v12345m!!");
        var result = this.suiteOfNumberValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method addTestSuiteOfNumberValidatorRuleTestsFalse2
    * @param {string} n
    */
    public addTestSuiteOfNumberValidatorRuleTestsFalse2(n: string) {
        let passWord: PassWord = new PassWord("NOT USED", n);
        var result = this.suiteOfNumberValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method tearDown
    * @override {TestClass.tearDown()}
    */
    public tearDown() {
        tearDownCounter++;
    }
}
/**
 * {@code NumberDifferentValidatorValidatorRule} test
 */
class NumberDifferentValidatorValidatorRuleTests extends TestClass {
    /**
     * @property numberDifferentValidatorValidatorRule
     * @private
     * @final
     * @type {NumberDifferentValidatorValidatorRule}
     */
    private numberDifferentValidatorValidatorRule: NumberDifferentValidatorValidatorRule = new NumberDifferentValidatorValidatorRule("#rule", 1);

   /**
    * @public
    * @method addTestNumberDifferentValidatorValidatorRuleTestsTrue1
    */
    public addTestNumberDifferentValidatorValidatorRuleTestsTrue1() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.numberDifferentValidatorValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestNumberDifferentValidatorValidatorRuleTestsTrue2
    */
    public addTestNumberDifferentValidatorValidatorRuleTestsTrue2() {
        let passWord: PassWord = new PassWord("NOT USED", "1------------------0");
        var result = this.numberDifferentValidatorValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestNumberDifferentValidatorValidatorRuleTestsFalse1
    */
    public addTestNumberDifferentValidatorValidatorRuleTestsFalse1() {
        let passWord: PassWord = new PassWord("NOT USED", "0 ------------------ 0");
        var result = this.numberDifferentValidatorValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestNumberDifferentValidatorValidatorRuleTestsFalse2
    */
    public addTestNumberDifferentValidatorValidatorRuleTestsFalse2() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)v0m!!");
        var result = this.numberDifferentValidatorValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestNumberDifferentValidatorValidatorRuleTestsFalse3
    */
    public addTestNumberDifferentValidatorValidatorRuleTestsFalse3() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)vm!!");
        var result = this.numberDifferentValidatorValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method tearDown
    * @override {TestClass.tearDown()}
    */
    public tearDown() {
        tearDownCounter++;
    }
}
/**
 * {@code YearValidatorValidatorRule} test
 */
class YearValidatorValidatorRuleTests extends TestClass {
    /**
     * @property yearValidatorValidatorRule
     * @private
     * @final
     * @type {YearValidatorValidatorRule}
     */
    private yearValidatorValidatorRule: YearValidatorValidatorRule = new YearValidatorValidatorRule("#rule", 1);

   /**
    * @public
    * @method addTestYearValidatorValidatorRuleTestsTrue1
    */
    public addTestYearValidatorValidatorRuleTestsTrue1() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.yearValidatorValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestYearValidatorValidatorRuleTestsTrue2
    */
    public addTestYearValidatorValidatorRuleTestsTrue2() {
        let passWord: PassWord = new PassWord("NOT USED", "1--------v02010m----------0");
        var result = this.yearValidatorValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestYearValidatorValidatorRuleTestsFalse1
    */
    public addTestYearValidatorValidatorRuleTestsFalse1() {
        let passWord: PassWord = new PassWord("NOT USED", "0-------1950---1852--------0");
        var result = this.yearValidatorValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method addTestYearValidatorValidatorRuleTestsFalse2
    */
    public addTestYearValidatorValidatorRuleTestsFalse2() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)v2010m!!");
        var result = this.yearValidatorValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method tearDown
    * @override {TestClass.tearDown()}
    */
    public tearDown() {
        tearDownCounter++;
    }
}
/**
 * {@code NumberOfChararcterInPassWordValidatorRule} test
 */
class NumberOfChararcterInPassWordValidatorRuleTests extends TestClass {
    /**
     * @property numberOfChararcterInPassWordValidatorRule
     * @private
     * @final
     * @type {NumberOfChararcterInPassWordValidatorRule}
     */
    private numberOfChararcterInPassWordValidatorRule: NumberOfChararcterInPassWordValidatorRule = new NumberOfChararcterInPassWordValidatorRule(".rule", 1, 8 );

   /**
    * @public
    * @method addTestNumberOfChararcterInPassWordValidatorRuleTestsTrue1
    */
    public addTestNumberOfChararcterInPassWordValidatorRuleTestsTrue1() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.numberOfChararcterInPassWordValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestNumberOfChararcterInPassWordValidatorRuleTestsTrue2
    */
    public addTestNumberOfChararcterInPassWordValidatorRuleTestsTrue2() {
        let passWord: PassWord = new PassWord("NOT USED", "1--------v02010m----------0");
        var result = this.numberOfChararcterInPassWordValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestNumberOfChararcterInPassWordValidatorRuleTestsFalse1
    */
    public addTestNumberOfChararcterInPassWordValidatorRuleTestsFalse1() {
        let passWord: PassWord = new PassWord("NOT USED", "0-----1");
        var result = this.numberOfChararcterInPassWordValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method addTestNumberOfChararcterInPassWordValidatorRuleTestsFalse2
    */
    public addTestNumberOfChararcterInPassWordValidatorRuleTestsFalse2() {
        let passWord: PassWord = new PassWord("NOT USED", "U");
        var result = this.numberOfChararcterInPassWordValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method tearDown
    * @override {TestClass.tearDown()}
    */
    public tearDown() {
        tearDownCounter++;
    }
}
/**
 * {@code ContainsCaracterSpecialValidatorRule} test
 */
class ContainsCaracterSpecialValidatorRuleTests extends TestClass {
    /**
     * @property numberOfChararcterInPassWordValidatorRule
     * @private
     * @final
     * @type {NumberOfChararcterInPassWordValidatorRule}
     */
    private containsCaracterSpecialValidatorRule: ContainsCaracterSpecialValidatorRule = new ContainsCaracterSpecialValidatorRule("#rule", 1);

   /**
     * Create a new {@code ContainsCaracterSpecialValidatorRuleTests} test
     *
     * @constructor
     */
    constructor() {
        super();
        this.parameterizeUnitTest(this.addTestContainsCaracterSpecialValidatorRuleTestsTrue3, [
            ["!"], ["@"], ["#"], ["$"], ["%"], ["^"], ["&"], ["*"],
            ["?"], ["_"], ["~"], ["("], [")"], [";"], ["\\"], ["+"],
            ["\/"], ["]"], ["["], ["."], ["{"], ["}"], [":"], ["'"],
            ["|"], ["°"], ["="], ["<"], [">"], ["€"], ["-"]
        ]);
    }

   /**
    * @public
    * @method addTestContainsCaracterSpecialValidatorRuleTestsTrue1
    */
    public addTestContainsCaracterSpecialValidatorRuleTestsTrue1() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.containsCaracterSpecialValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestContainsCaracterSpecialValidatorRuleTestsTrue2
    */
    public addTestContainsCaracterSpecialValidatorRuleTestsTrue2() {
        let passWord: PassWord = new PassWord("NOT USED", "1-------v02010m----------0");
        var result = this.containsCaracterSpecialValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestContainsCaracterSpecialValidatorRuleTestsTrue3
    * @param {string} c
    */
    public addTestContainsCaracterSpecialValidatorRuleTestsTrue3(c: string) {
        let passWord: PassWord = new PassWord("NOT USED", "aaaaaaaa" + c);
        var result = this.containsCaracterSpecialValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestContainsCaracterSpecialValidatorRuleTestsFalse1
    */
    public addTestContainsCaracterSpecialValidatorRuleTestsFalse1() {
        let passWord: PassWord = new PassWord("NOT USED", "0a ff f sdds 1");
        var result = this.containsCaracterSpecialValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method addTestContainsCaracterSpecialValidatorRuleTestsFalse2
    */
    public addTestContainsCaracterSpecialValidatorRuleTestsFalse2() {
        let passWord: PassWord = new PassWord("NOT USED", "U");
        var result = this.containsCaracterSpecialValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method tearDown
    * @override {TestClass.tearDown()}
    */
    public tearDown() {
        tearDownCounter++;
    }
}
/**
 * {@code PresenceLetterMinisculeValidatorRule} test
 */
class PresenceLetterMinisculeValidatorRuleTests extends TestClass {
    /**
     * @property presenceLetterMinisculeValidatorRule
     * @private
     * @final
     * @type {PresenceLetterMinisculeValidatorRule}
     */
    private presenceLetterMinisculeValidatorRule: PresenceLetterMinisculeValidatorRule = new PresenceLetterMinisculeValidatorRule("#rule", 1);

   /**
     * Create a new {@code PresenceLetterMinisculeValidatorRuleTests} test
     *
     * @constructor
     */
    constructor() {
        super();
        this.parameterizeUnitTest(this.addTestPresenceLetterMinisculeValidatorRuleTestsTrue3, [
            ["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"],
            ["i"], ["j"], ["k"], ["l"], ["m"], ["n"], ["o"], ["p"],
            ["q"], ["r"], ["s"], ["t"], ["u"], ["v"], ["w"], ["x"],
            ["y"], ["z"]
        ]);
    }

   /**
    * @public
    * @method addTestPresenceLetterMinisculeValidatorRuleTestsTrue1
    */
    public addTestPresenceLetterMinisculeValidatorRuleTestsTrue1() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.presenceLetterMinisculeValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestPresenceLetterMinisculeValidatorRuleTestsTrue2
    */
    public addTestPresenceLetterMinisculeValidatorRuleTestsTrue2() {
        let passWord: PassWord = new PassWord("NOT USED", "1-------v02010m----------0");
        var result = this.presenceLetterMinisculeValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestPresenceLetterMinisculeValidatorRuleTestsTrue3
    * @param {string} c
    */
    public addTestPresenceLetterMinisculeValidatorRuleTestsTrue3(c: string) {
        let passWord: PassWord = new PassWord("NOT USED", c);
        var result = this.presenceLetterMinisculeValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestPresenceLetterMinisculeValidatorRuleTestsFalse1
    */
    public addTestPresenceLetterMinisculeValidatorRuleTestsFalse1() {
        let passWord: PassWord = new PassWord("NOT USED", "A%N?N96965");
        var result = this.presenceLetterMinisculeValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method addTestPresenceLetterMinisculeValidatorRuleTestsFalse2
    */
    public addTestPresenceLetterMinisculeValidatorRuleTestsFalse2() {
        let passWord: PassWord = new PassWord("NOT USED", "UKLKLKL787954545");
        var result = this.presenceLetterMinisculeValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method tearDown
    * @override {TestClass.tearDown()}
    */
    public tearDown() {
        tearDownCounter++;
    }
}
/**
 * {@code PresenceLetterMajusculeValidatorRule} test
 */
class PresenceLetterMajusculeValidatorRuleTests extends TestClass {
    /**
     * @property presenceLetterMajusculeValidatorRule
     * @private
     * @final
     * @type {PresenceLetterMajusculeValidatorRule}
     */
    private presenceLetterMajusculeValidatorRule: PresenceLetterMajusculeValidatorRule = new PresenceLetterMajusculeValidatorRule("#rule", 1);

   /**
     * Create a new {@code PresenceLetterMajusculeValidatorRuleTests} test
     *
     * @constructor
     */
    constructor() {
        super();
        this.parameterizeUnitTest(this.addTestPresenceLetterMajusculeValidatorRuleTestsTrue3, [
            ["A"], ["B"], ["C"], ["D"], ["E"], ["F"], ["G"], ["H"],
            ["I"], ["J"], ["K"], ["L"], ["M"], ["N"], ["O"], ["P"],
            ["Q"], ["R"], ["S"], ["T"], ["U"], ["V"], ["W"], ["X"],
            ["Y"], ["Z"]
        ]);
    }

   /**
    * @public
    * @method addTestPresenceLetterMajusculeValidatorRuleTestsTrue1
    */
    public addTestPresenceLetterMajusculeValidatorRuleTestsTrue1() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.presenceLetterMajusculeValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestPresenceLetterMajusculeValidatorRuleTestsTrue2
    */
    public addTestPresenceLetterMajusculeValidatorRuleTestsTrue2() {
        let passWord: PassWord = new PassWord("NOT USED", "1--M-----v02010m----------0");
        var result = this.presenceLetterMajusculeValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestPresenceLetterMajusculeValidatorRuleTestsTrue3
    * @param {string} c
    */
    public addTestPresenceLetterMajusculeValidatorRuleTestsTrue3(c: string) {
        let passWord: PassWord = new PassWord("NOT USED", c);
        var result = this.presenceLetterMajusculeValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestPresenceLetterMajusculeValidatorRuleTestsFalse1
    */
    public addTestPresenceLetterMajusculeValidatorRuleTestsFalse1() {
        let passWord: PassWord = new PassWord("NOT USED", "a%n?m96965");
        var result = this.presenceLetterMajusculeValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method addTestPresenceLetterMajusculeValidatorRuleTestsFalse2
    */
    public addTestPresenceLetterMajusculeValidatorRuleTestsFalse2() {
        let passWord: PassWord = new PassWord("NOT USED", "mfdlmgk kgl kfdmlkfd ld87954545");
        var result = this.presenceLetterMajusculeValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method tearDown
    * @override {TestClass.tearDown()}
    */
    public tearDown() {
        tearDownCounter++;
    }
}
/**
 * {@code AnyFourSequentialLetterInTheAlphabetValidatorRule} test
 */
class AnyFourSequentialLetterInTheAlphabetValidatorRuleTests extends TestClass {
    /**
     * @property anyFourSequentialLetterInTheAlphabetValidatorRule
     * @private
     * @final
     * @type {AnyFourSequentialLetterInTheAlphabetValidatorRule}
     */
    private anyFourSequentialLetterInTheAlphabetValidatorRule: AnyFourSequentialLetterInTheAlphabetValidatorRule = new AnyFourSequentialLetterInTheAlphabetValidatorRule("#rule", 1);

   /**
     * Create a new {@code AnyFourSequentialLetterInTheAlphabetValidatorRuleTests} test
     *
     * @constructor
     */
    constructor() {
        super();
        //"abcdefghijklmnopqrstuvwxyz"
        this.parameterizeUnitTest(this.addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse3, [
            ["abcd"], ["bcde"], ["cdef"], ["defg"], ["efgh"], ["fghi"], ["ghij"], ["hijk"],
            ["ijkl"], ["jklm"], ["klmn"], ["lmno"], ["mnop"], ["nopq"], ["opqr"], ["pqrs"],
            ["qrst"], ["rstu"], ["stuv"], ["tuvw"], ["uvwx"], ["vwxy"], ["wxyz"]
        ]);
        //"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        this.parameterizeUnitTest(this.addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse4, [
            ["ABCD"], ["BCDE"], ["CDEF"], ["DEFG"], ["EFGH"], ["FGHI"], ["GHIJ"], ["HIJK"],
            ["IJKL"], ["JKLM"], ["KLMN"], ["LMNO"], ["MNOP"], ["NOPQ"], ["OPQR"], ["PQRS"],
            ["QRST"], ["RSTU"], ["STUV"], ["TUVW"], ["UVWX"], ["VWXY"], ["WXYZ"]
        ]);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleTrue1
    */
    public addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleTrue1() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleTrue2
    */
    public addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleTrue2() {
        let passWord: PassWord = new PassWord("NOT USED", "1--M-----v02010m----------0");
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleTrue3
    */
    public addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleTrue3() {
        let sc: string = "#$%&'()"; //35-36-37-38-39-40-41
        let passWord: PassWord = new PassWord("", sc);
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse1
    */
    public addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse1() {
        let passWord: PassWord = new PassWord("NOT USED", "a%n?m96965abcde");
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse2
    */
    public addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse2() {
        let passWord: PassWord = new PassWord("NOT USED", "mfdlmgk kgl kfdmlkfd ld879ghjiklmn54545");
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse3
    */
    public addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse3(sc: string) {
        let passWord: PassWord = new PassWord("NOT USED", "fjglkfdjgfkdlj" + sc);
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse4
    * @param {string} sc
    */
    public addTestAnyFourSequentialLetterInTheAlphabetValidatorRuleFalse4(sc: string) {
        let passWord: PassWord = new PassWord("NOT USED", "fjglkfdjgfkdlj" + sc);
        var result = this.anyFourSequentialLetterInTheAlphabetValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method tearDown
    * @override {TestClass.tearDown()}
    */
    public tearDown() {
        tearDownCounter++;
    }
}
/**
 * {@code AnyFourSequentialLettersInTheKeyBordValidatorRule} test
 */
class AnyFourSequentialLettersInTheKeyBordValidatorRuleTests extends TestClass {
    /**
     * @property anyFourSequentialLettersInTheKeyBordValidatorRule
     * @private
     * @final
     * @type {AnyFourSequentialLettersInTheKeyBordValidatorRule}
     */
    private anyFourSequentialLettersInTheKeyBordValidatorRule: AnyFourSequentialLettersInTheKeyBordValidatorRule = new AnyFourSequentialLettersInTheKeyBordValidatorRule("#rule", 1);

   /**
     * Create a new {@code AnyFourSequentialLettersInTheKeyBordValidatorRuleTests} test
     *
     * @constructor
     */
    constructor() {
        super();
        //"azertyuiopqsdfghjklmwxcvbn"
        this.parameterizeUnitTest(this.addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsFalse3, [
            ["azert"], ["zerty"], ["ertyu"], ["rtyui"], ["tyuio"], ["yuiop"], ["uiopq"], ["iopqs"],
            ["opqsd"], ["pqsdf"], ["qsdfg"], ["sdfgh"], ["dfghj"], ["fghjk"], ["ghjkl"], ["hjklm"],
            ["jklmw"], ["klmwx"], ["lmwxc"], ["mwxcv"], ["wxcvb"], ["xcvbn"]
        ]);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsTrue0
    */
    public addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsTrue0() {
        let passWord: PassWord = new PassWord("hfd jk fhsdkfjsd hjkds hjksd jk -* A 123456   789 12", "hjfhhj-*A12345678912");
        var result = this.anyFourSequentialLettersInTheKeyBordValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsTrue1
    */
    public addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsTrue1() {
        let passWord: PassWord = new PassWord("NOT USED", "U:-)v1000m!!");
        var result = this.anyFourSequentialLettersInTheKeyBordValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsTrue2
    */
    public addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsTrue2() {
        let passWord: PassWord = new PassWord("NOT USED", "1--M-----v02010m----------0");
        var result = this.anyFourSequentialLettersInTheKeyBordValidatorRule.validate(passWord);
        this.areIdentical(true, result);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsFalse1
    */
    public addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsFalse1() {
        let passWord: PassWord = new PassWord("NOT USED", "azerty a%n?m96965abcde");
        var result = this.anyFourSequentialLettersInTheKeyBordValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsFalse2
    */
    public addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsFalse2() {
        let passWord: PassWord = new PassWord("NOT USED", "mfdlmgk kgl kfdmlkfd ld879ghjiklmn54545 hjklm");
        var result = this.anyFourSequentialLettersInTheKeyBordValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsFalse3
    * @param {string} s
    */
    public addTestAnyFourSequentialLettersInTheKeyBordValidatorRuleTestsFalse3(s: string) {
        let passWord: PassWord = new PassWord("NOT USED", "fjglkfdjgfkdlj" + s);
        var result = this.anyFourSequentialLettersInTheKeyBordValidatorRule.validate(passWord);
        this.areIdentical(false, result);
    }

   /**
    * @public
    * @method tearDown
    * @override {TestClass.tearDown()}
    */
    public tearDown() {
        tearDownCounter++;
    }
}
/**
 * {@code CallValidatorServiceTests} test
 */
class CallValidatorServiceTests extends TestClass {
    /**
     * @property callValidatorService
     * @private
     * @final
     * @type {CallValidatorService}
     */
    private callValidatorService: CallValidatorService;

   /**
     * Create a new {@code CallValidatorServiceTests} test
     *
     * @constructor
     */
    constructor() {
        super();
        function createCallValidatorServiceCallToNextStep(): CallValidatorService {
            return new CallValidatorService([
                new NumberOfChararcterInPassWordValidatorRule("", 0 ,3),
                new NumberOfChararcterInPassWordValidatorRule("", 0 ,2)
            ]);
        }
        this.callValidatorService = createCallValidatorServiceCallToNextStep();

        // Parameter method addTestCallValidatorServiceTestsTrue1
        this.parameterizeUnitTest(this.addTestCallValidatorServiceTestsTrue1, [
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
    }

   /**
    * @public
    * @method addTestCallValidatorServiceTestsTrue1
    * @param {boolean} result
    * @param {string} mdp
    * @param {string} text
    */
    public addTestCallValidatorServiceTestsTrue1(result: boolean, mdp: string, text: string) {
        let passWord: PassWord = new PassWord(text, mdp);
        // NumberOfChararcterInPassWordValidatorRule test validation
        this.areIdentical(result, this.callValidatorService.callStepByStep(passWord, 0));
        // true because the list of validator to step 1 is empty
        this.areIdentical(true, this.callValidatorService.callStepByStep(passWord, 1));
    }

   /**
    * @public
    * @method addTestCallValidatorServiceTestsTrue2
    */
    public addTestCallValidatorServiceTestsTrue2() {
        function createCallValidatorServiceCallToNextStep(): CallValidatorService {
            return new CallValidatorService([
                new NumberOfChararcterInPassWordValidatorRule("", 0 , 3),
                new NumberOfChararcterInPassWordValidatorRule("", 0, 3),
                new NumberOfChararcterInPassWordValidatorRule("", 1, 3)
            ]);
        }
        let callValidatorService: CallValidatorService = createCallValidatorServiceCallToNextStep();
        this.areIdentical(4, callValidatorService.callValidatorGetPointByStep(new PassWord("NOT USED", "123"), 0));
        this.areIdentical(4, callValidatorService.getMaxPointStepByStep(0));
        this.areIdentical(2, callValidatorService.getMaxPointStepByStep(1));
        this.areIdentical(0, callValidatorService.getMaxPointStepByStep(2));
    }

   /**
    * @public
    * @method tearDown
    * @override {TestClass.tearDown()}
    */
    public tearDown() {
        tearDownCounter++;
    }
}
/**
 * {@code IdenticalChararcterInPassWordValidatorRuleTests} test
 */
class IdenticalChararcterInPassWordValidatorRuleTests extends TestClass {
    /**
     * @property rule
     * @private
     * @final
     * @type {IdenticalChararcterInPassWordValidatorRule}
     */
    private rule: IdenticalChararcterInPassWordValidatorRule;

    /**
      * Create a new {@code IdenticalChararcterInPassWordValidatorRuleTests} test
      *
      * @constructor
      */
    constructor() {
        super();
        this.rule = new IdenticalChararcterInPassWordValidatorRule(".rule",0);
        // Parameter method addTestCallValidatorServiceTestsTrue1
        this.parameterizeUnitTest(this.identicalChararcterInPassWordValidatorRuleTest, [
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
    }

    /**
     * @public
     * @method identicalChararcterInPassWordValidatorRuleTest
     * @param {boolean} result
     * @param {string} mdp
     */
    public identicalChararcterInPassWordValidatorRuleTest(result: boolean, mdp: string) {
        this.areIdentical(result, this.rule.validate(new PassWord("text", mdp)));
    }

    /**
     * @public
     * @method tearDown
     * @override {TestClass.tearDown()}
     */
    public tearDown() {
        tearDownCounter++;
    }
}