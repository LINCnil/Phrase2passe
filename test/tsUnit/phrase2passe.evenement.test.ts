/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: phrase2passe.evenement.test.ts 2017- 01 - 03
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
 *   - Evenement
 *
 * @author Olivier PASQUET
 */

/**
 * {@code ProgressBarValidationEventTests test}
 */
class ProgressBarValidationEventTests extends TestClass {
    /**
     * @property view
     * @private
     * @final
     * @type {ViewSetp}
     */
    private view: ViewSetp;
    /**
     * @property callValidatorService
     * @private
     * @final
     * @type {CallValidatorService}
     */
    private callValidatorService: CallValidatorService;
    /**
     * @property progressBarValidationEvent
     * @private
     * @final
     * @type {ProgressBarValidationEvent}
     */
    private progressBarValidationEvent: ProgressBarValidationEvent;
    /**
     * @property progressbar
     * @private
     * @final
     * @type {HTMLDivElement}
     */
    private progressbar: HTMLDivElement;

    /**
     * Create a new {@code ProgressBarValidationEventTests} test
     *
     * @constructor
     */
    constructor() {
        super();
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
            phraseSaisi: ".phraseSaisi",
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

        // Local variable
        let settings = ToolEventTest.extend(defaults, {});
        let transFormerService: TransFormerService = ToolEventTest.createTransFormerService();

        // checkImage
        let checkImageTmp: HTMLDivElement = document.createElement("div");
        checkImageTmp.appendChild(document.createElement("img"));
        let checkImage: NodeListOf<HTMLElement> = checkImageTmp.getElementsByTagName("img");

        // phraseSaisi
        let p: HTMLDivElement = document.createElement("div");
        p.appendChild(document.createElement("div"));
        let phraseSaisi: NodeListOf<HTMLElement> = p.getElementsByTagName("div");

        // rootHtmlElement
        let rootHtmlElement: HTMLElement = document.createElement("div");
        // step 1
        rootHtmlElement.appendChild(document.createElement("h3"));
        let div: HTMLDivElement = document.createElement("div");
        let phraseInput: HTMLInputElement = document.createElement("input");
        this.progressbar = document.createElement("div");
        div.appendChild(phraseInput);
        div.appendChild(this.progressbar);
        rootHtmlElement.appendChild(div);
        // step 2
        rootHtmlElement.appendChild(document.createElement("h3"));
        rootHtmlElement.appendChild(document.createElement("div"));
        // step 3
        rootHtmlElement.appendChild(document.createElement("h3"));
        rootHtmlElement.appendChild(document.createElement("div"));

        let titleMenuHtmlElement: NodeListOf<HTMLElement> = rootHtmlElement.getElementsByTagName("h3");
        let contentHtmlElement: NodeListOf<HTMLElement> = rootHtmlElement.getElementsByTagName("div");

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

        // Construct service
        this.callValidatorService = ToolEventTest.createCallValidatorServiceCallToNextStep(settings);

        // Construct ProgressBarValidationEvent
        this.progressBarValidationEvent = new ProgressBarValidationEvent(this.callValidatorService, this.view, transFormerService);


        // Parameter method addTestInputProgressBarEventTest1
        this.parameterizeUnitTest(this.addTestInputProgressBarEventTest1, [
            ["76%", "a 125 ? U"],//0
            ["61%", "a 125 ?"],//1
            ["25%", "a"],//2
            ["25%", "?"],//3
            ["25%", "a"],//4
            ["43%", "8912"],//5
            ["28%", "\u0042\u0042"],//6
            ["25%", "%"],//7
            ["76%","Un sourire vaut mille mots!!"],//8
            ["76%", "L'homme qui valait trois milliards"],//9
            ["94%", "Un gramme de chance vaut mieux que dix ans d'expérience"],//10
            ["100%", "adresse cnil 8 rue vienne, Paris 75002"],//11
            ["94%", "On ne comprend guère le mot jeunesse avant trente ans."],//12
            ["94%", "Je crois que deux et deux sont quatre, Sganarelle, et que quatre et quatre sont huit"],//13
            ["94%", "Le mariage c'est résoudre à deux les problèmes qu'on n'aurait pas eus tout seul"],//14
            ["94%", "Le roi soleil est né le 5 septembre 1638"],//15
            ["94%", "Le soleil est à 150 millions de km de la terre"],//16
            ["94%", "un carré possède quatre angles droits. Tous ses côtés ont la même longueur"],//17
            ["94%", "La maison d'un des trois petits cochons est en pierre"],//18
            ["94%", "Chiffre : neuf cent quatre-vingt-sept milliards six cent cinquante-quatre millions trois cent vingt et un mille sept cent quatre-vingt et une voiture"]//19
        ]);

        // Parameter method addTestInputProgressBarEventTest2
        this.parameterizeUnitTest(this.addTestInputProgressBarEventTest2, [
            ["error", 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 125 ? U', "VALUE NOT USED"], //0
            ["error", 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa 125 ?', "VALUE NOT USED"], //1
            ["error", 'a', "VALUE NOT USED"], //2
            ["error", '?', "VALUE NOT USED"], //3
            ["error", 'a', "VALUE NOT USED"], //4
            ["error", '8912', "VALUE NOT USED"], //5
            ["error", '\u0042\u0042', "VALUE NOT USED"], //6
            ["error", "%", "VALUE NOT USED"], //7
            ["error", "U:-)v1000m!!", "Un sourire vaut mille mots!!"], //8
            ["error", "L'hqv3000000000", "L'homme qui valait trois milliards"], //9
            ["error", "Ugdcvmq10ad'e", "Un gramme de chance vaut mieux que dix ans d'expérience"], //10
            ["success", "@c8rv,P75002", "adresse cnil 8 rue vienne, Paris 75002"], //11
            ["error", "Oncglmja30a.", "On ne comprend guère le mot jeunesse avant trente ans."], //12
            ["error", "Jcq4s4,S,&q8s8", "Je crois que deux et deux sont quatre, Sganarelle, et que quatre et quatre sont huit"], //13
            ["error", "Lmc'erà2lpq'on'apet1", "Le mariage c'est résoudre à deux les problèmes qu'on n'aurait pas eus tout seul"], //14
            ["error", "Lr*enl5s1638", "Le roi soleil est né le 5 septembre 1638"], //15
            ["error", "L*eà1501000000dkdlt", "Le soleil est à 150 millions de km de la terre"], //16
            ["error", "1#p4°d.Tscolml", "un carré possède quatre angles droits. Tous ses côtés ont la même longueur"], //17
            ["error", "Lmd'1d3pceep", "La maison d'un des trois petits cochons est en pierre"], //18
            ["error", "C:987654321781v", "Chiffre : neuf cent quatre-vingt-sept milliards six cent cinquante-quatre millions trois cent vingt et un mille sept cent quatre-vingt et une voiture"] //19
        ]);
    }

   /**
    * @public
    * @method createTransFormerService
    * @returns {TransFormerService}
    * @param {string} percent
    * @param {string} mdp
    * @param {string} text
    */
    public addTestInputProgressBarEventTest1(percent: string, phrase: string) {
        this.progressBarValidationEvent.call(0, phrase);
        this.areIdentical(percent, this.progressbar.style.width);
    }

   /**
    * @public
    * @method addTestInputProgressBarEventTest2
    * @param {string} result
    * @param {string} mdp
    * @param {string} phrase
    */
    public addTestInputProgressBarEventTest2(result: string, mdp: string, phrase: string) {
        this.progressBarValidationEvent.call(0, phrase);
        let v: string = "";
        if (this.progressbar.classList.contains("error")) v = "error"; else v = "success";
        this.areIdentical(result, v);
    }

  /**
    * @public
    * @method tearDown
    * @returns {void}
    * @override {TestClass.tearDown()}
    */
    public tearDown() {
        tearDownCounter++;
    }
}
class ToolEventTest {
    /**
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
    * @private
    * @method extend
    * @returns {CallValidatorService}
    * @param {any} settings
    */
    public static extend(target: any, source: any): any {
        var a = Object.create(target);
        Object.keys(source).map(function (prop) {
            prop in a && (a[prop] = source[prop]);
        });
        return a;
    }

    /**
    * Returns a new {@code CallValidatorService} service
    * 
    * @private
    * @method createCallValidatorServiceCallToNextStep
    * @returns {CallValidatorService}
    * @param {any} settings
    */
    public static createCallValidatorServiceCallToNextStep(settings: any): CallValidatorService {
        // Create the validator executor
        return new CallValidatorService([
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0 ,1),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0 ,2),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 3),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 4),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 5),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 6),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 7),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 8),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 9),
            new NumberOfChararcterInPassWordValidatorRule(settings.numberOfWordValidatorSelector, 0, 10),
            new PresenceLetterMajusculeValidatorRule(settings.presenceLetterMajusculeValidatorSelector, 0),
            new PresenceLetterMinisculeValidatorRule(settings.presenceLetterMinisculeValidatorSelector, 0),
            new ContainsCaracterSpecialValidatorRule(settings.containsCaracterSpecialValidatorSelector, 0),
            new YearValidatorValidatorRule(settings.yearValidatorValidatorSelector, 0),
            new SuiteOfNumberValidatorRule(settings.suiteOfNumberValidatorSelector, 0),
            new NumberDifferentValidatorValidatorRule(settings.numberDifferentValidatorValidatorRule, 0)
        ]);
    }
}