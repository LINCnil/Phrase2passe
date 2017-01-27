/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: phrase2passe.view.test.ts 2017- 01 - 03
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
 *   - View
 *
 * @author Olivier PASQUET
 */

/**
 * {@code Phrase2PasseTests test}
 */
class Phrase2PasseTests extends TestClass {
    /**
     * @property view
     * @private
     * @final
     * @type {ViewSetp}
     */
    private view: ViewSetp;

   /**
     * Create a new {@code Phrase2PasseTests} test
     *
     * @constructor
     */
    constructor() {
        super();
        // service transformer
        let transFormerService: TransFormerService = ToolViewTest.createTransFormerService();

        // checkImage HTML Element
        let checkImageTmp: HTMLDivElement = document.createElement("div");
        checkImageTmp.appendChild(document.createElement("div"));
        let checkImage: NodeListOf<HTMLElement> = checkImageTmp.getElementsByTagName("img");

        // phraseSaisi HTML Element
        let p: HTMLDivElement = document.createElement("div");
        p.appendChild(document.createElement("div"));
        let phraseSaisi: NodeListOf<HTMLElement> = p.getElementsByTagName("div");

        // Root html element plugin
        let rootHtmlElement: HTMLElement = document.createElement("div");
        rootHtmlElement.appendChild(document.createElement("h3"));
        rootHtmlElement.appendChild(document.createElement("div"));
        rootHtmlElement.appendChild(document.createElement("h3"));
        rootHtmlElement.appendChild(document.createElement("div"));
        rootHtmlElement.appendChild(document.createElement("h3"));
        rootHtmlElement.appendChild(document.createElement("div"));

        // Title html element
        let titleMenuHtmlElement: NodeListOf<HTMLElement> = rootHtmlElement.getElementsByTagName("h3");

        // Content html element
        let contentHtmlElement: NodeListOf<HTMLElement> = rootHtmlElement.getElementsByTagName("div");

        // PhraseInput
        let phraseInput: HTMLInputElement = document.createElement("input");

        // default value option
        let defaults = {
            // HTML Element
            rootHtmlElementSelector: '#passwordBloc',
            headerTypeSelector: "h3",
            contentTypeSelector: ".contentElement",
            sentenceInputSelector: "#sentenceInput",
            phraseValidateSelector: ".sentenceValidate",
            checkImage: "#checkImage",
            listMotTransformer: ".listMotTransformer",
            ckeckImgRule: ".ckeckImgRule",
            phraseSaisi: "#phraseSaisi",
            notUsedTransformer: ".notUsedTransformer",
            ruleSelector: ".rule",

            // Bean name class typescript
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
        }
        let settings = ToolViewTest.extend(defaults, {});

        // Construct view
        this.view = new ViewSetp(rootHtmlElement,
            titleMenuHtmlElement,
            contentHtmlElement,
            phraseInput,
            settings.phraseValidateSelector,
            settings.ckeckImgRule,
            phraseSaisi,
            settings.warningrule,
            checkImage,
            settings.phraseValidateSelector,
            settings.notUsedTransformer,
            settings.ruleSelector,
            settings.previousLibelleButton,
            settings.nextLibelleButton,
            settings.cssRootPluginSelector);
    }

   /**
    * @public
    * @method addTestPhrase2passeTest
    */
    public addTestPhrase2passeTest() {
        this.view.goToUpdateClassCssMenuValidation(-1);
        this.view.goToUpdateClassCssMenuValidation(2);
        this.view.goToUpdateClassCssMenuValidation(5);
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
class ToolViewTest {
    /**
     * Returns a new {@code TransFormerService}
     * 
     * @private
     * @method createTransFormerService
     * @returns {TransFormerService}
     */
    public static createTransFormerService(): TransFormerService {
        return new TransFormerService([
            new FirstLetterWordTransFormer(0),
            new SpaceTransformer(0),
            new ConversioNnumberTransformer(0),
            new ReplaceWordBycharcterInPassWordTransFormer(0)
        ]);
    }

    /**
     * Returns a new {@code any}
     * 
     * @private
     * @method extend
     * @param {any} target
     * @param {any} source
     * @returns {any}
     */
    public static extend(target: any, source: any): any {
        var a = Object.create(target);
        Object.keys(source).map(function (prop) {
            prop in a && (a[prop] = source[prop]);
        });
        return a;
    }
}