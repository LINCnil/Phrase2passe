/// <reference path="../../tsscript/phrase2passe.model.ts" />
/// <reference path="../../tsscript/phrase2passe.language.ts" />
/// <reference path="../../tsscript/phrase2passe.validation.ts" />
/// <reference path="../../tsscript/phrase2passe.transformation.ts" />
/// <reference path="../../tsscript/phrase2passe.view.ts" />
/// <reference path="../../tsscript/phrase2passe.evenement.ts" />

/// <reference path="phrase2passe.validation.test.ts" />
/// <reference path="phrase2passe.transformation.test.ts" />
/// <reference path="phrase2passe.view.test.ts" />
/// <reference path="phrase2passe.evenement.test.ts" />

/// <reference path="./tsUnit" />

/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: TestUnit.phrase2passe.ts 2017- 01 - 03
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
 * This class is used for the assembly of tests
 *
 * @author Olivier PASQUET
 */

/**
 * {@code ValidatorRuleTests}
 */
var tearDownCounter: number = 0;

/**
 * {@code PerFormanceTests test}
 */
class PerFormanceTests extends TestClass {
    /**
     * @property testValidatorRule
     *
     * @private
     * @final
     * @type {Test}
     */
    private testValidatorRule: Test;

    /**
     * @property testFormater
     *
     * @private
     * @final
     * @type {Test}
     */
    private testFormater: Test;

    /**
     * @property testService
     *
     * @private
     * @final
     * @type {Test}
     */
    private testService: Test;

    /**
     * @property testInterface
     *
     * @private
     * @final
     * @type {Test}
     */
    private testInterface: Test;

    /**
     * @property testEvent
     *
     * @private
     * @final
     * @type {Test}
     */
    private testEvent: Test;

    /**
     * Create a new {@code PerFormanceTests} object
     *
     * @constructor
     * @param {Test} testValidatorRule
     * @param {Test} testFormater
     * @param {Test} testService
     * @param {Test} testInterface
     * @param {Test} testEvent
     */
    constructor(testValidatorRule: Test, testFormater: Test, testService: Test, testInterface: Test, testEvent: Test) {
        super();
        this.testValidatorRule = testValidatorRule;
        this.testFormater = testFormater;
        this.testService = testService;
        this.testInterface = testInterface;
        this.testEvent = testEvent;
    }

   /**
    * @public
    * @method performancesFunction
    */
    public performancesFunction() {
        this.executesWithin(() => {
            this.testValidatorRule.run().showResults(document.getElementById('results1'));
            this.testFormater.run().showResults(document.getElementById('results2'));
            this.testService.run().showResults(document.getElementById('results3'));
            this.testInterface.run().showResults(document.getElementById('results4'));
            this.testEvent.run().showResults(document.getElementById('results6'));
        }, 2500);
    }

   /**
    * @public
    * @method countTest
    */
    public countTest() {
        this.areIdentical(447, tearDownCounter);
    }
}

/**
 * Executor of test
 */
class ExecuteTests {
    /**
     * @property testValidatorRule
     *
     * @private
     * @final
     * @type {Test}
     */
    private testValidatorRule: Test = new Test();

    /**
     * @property testFormater
     *
     * @private
     * @final
     * @type {Test}
     */
    private testFormater: Test = new Test();

    /**
     * @property testService
     *
     * @private
     * @final
     * @type {Test}
     */
    private testService: Test = new Test();

    /**
     * @property testInterface
     *
     * @private
     * @final
     * @type {Test}
     */
    private testInterface: Test = new Test();

    /**
     * @property testEvent
     *
     * @private
     * @final
     * @type {Test}
     */
    private testEvent: Test = new Test();

    /**
     * @property testPerFormance
     *
     * @private
     * @final
     * @type {Test}
     */
    private testPerFormance: Test = new Test();

    /**
     * Create a new {@code ExecuteTests} object
     *
     * @constructor
     */
    constructor() {
        // testInterface
        this.testInterface.addTestClass(new Phrase2PasseTests());
         
        // testValidatorRule
        this.testValidatorRule.addTestClass(new SuiteOfNumberValidatorRuleTests());
        this.testValidatorRule.addTestClass(new NumberDifferentValidatorValidatorRuleTests());
        this.testValidatorRule.addTestClass(new YearValidatorValidatorRuleTests());
        this.testValidatorRule.addTestClass(new NumberOfChararcterInPassWordValidatorRuleTests());
        this.testValidatorRule.addTestClass(new ContainsCaracterSpecialValidatorRuleTests());
        this.testValidatorRule.addTestClass(new PresenceLetterMinisculeValidatorRuleTests());
        this.testValidatorRule.addTestClass(new PresenceLetterMajusculeValidatorRuleTests());
        this.testValidatorRule.addTestClass(new AnyFourSequentialLetterInTheAlphabetValidatorRuleTests());
        this.testValidatorRule.addTestClass(new AnyFourSequentialLettersInTheKeyBordValidatorRuleTests());
        this.testValidatorRule.addTestClass(new IdenticalChararcterInPassWordValidatorRuleTests());

        // testFormater
        this.testFormater.addTestClass(new FirstLetterWordTransFormerTests());
        this.testFormater.addTestClass(new SpaceTransformerTests());
        this.testFormater.addTestClass(new ReplaceWordBycharcterInPassWordTransFormerTests());
        this.testFormater.addTestClass(new ConversioNnumberTransformerTests());

        // testService
        this.testService.addTestClass(new TransFormerServiceTests());
        this.testService.addTestClass(new CallValidatorServiceTests());

        // test event
        this.testEvent.addTestClass(new ProgressBarValidationEventTests());

        // testPerFormance        
        this.testPerFormance.addTestClass(new PerFormanceTests(this.testValidatorRule, this.testFormater, this.testService, this.testInterface, this.testEvent));
    }

    // -------------------------------------------
    // Run test : Use the built in results display
    // -------------------------------------------
    public run(): void {
        this.testPerFormance.run().showResults(document.getElementById('results5'));
    }
}
/**
 * Run all test
 */
window.onload = () => {
    new ExecuteTests().run();
};