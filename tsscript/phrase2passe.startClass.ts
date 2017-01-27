/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: phrase2passe.startClass.ts 2017- 01 - 03
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
 * This file "phrase2passe.startClass.ts" is used to run the plugin
 *
 * Package of plugin :
 *   - Start Class
 *  
 * to example of using :
 * <p>
 *   <script type="text/javascript" >
 *     var options  = {
 *       // HTML Element
 *       rootHtmlElementSelector: '#passwordBloc',
 *       headerTypeSelector: "h3",
 *       contentTypeSelector: ".contentElement",
 *       sentenceInputSelector: "#sentenceInput",
 *       phraseValidateSelector: ".sentenceValidate",
 *       checkImage: "#checkImage",
 *       listMotTransformer: ".listMotTransformer",
 *       ckeckImgRule: ".ckeckImgRule",
 *       phraseSaisi: ".phraseSaisi",
 *       notUsedTransformer: ".notUsedTransformer",
 *       warningrule: ".warningrule",
 *       ruleSelector: ".rule",
 *       language: "fr",
 *
 *       // Bean name class typescript
 *       validatorForNextStep: [
 *           ["NumberOfChararcterInPassWordValidatorRule", ".rule1"],
 *           ["PresenceLetterMajusculeValidatorRule", ".rule2"],
 *           ["ContainsCaracterSpecialValidatorRule", ".rule4"],
 *           ["NumberDifferentValidatorValidatorRule", ".rule7"]
 *       ],
 *       validatorForWarningCurrentStep: [
 *           ["PresenceLetterMinisculeValidatorRule", ".rule3"],
 *           ["YearValidatorValidatorRule", ".rule5"],
 *           ["SuiteOfNumberValidatorRule", ".rule6"],
 *           ["AnyFourSequentialLetterInTheAlphabetValidatorRule", ".rule8"],
 *           ["AnyFourSequentialLettersInTheKeyBordValidatorRule", ".rule9"],
 *           ["IdenticalChararcterInPassWordValidatorRule", ".ruleCountIdenticalChar"]
 *       ],
 *       transformers: [
 *           ["FirstLetterWordTransFormer", 0],
 *           ["SpaceTransformer", 0],
 *           ["ReplaceWordBycharcterInPassWordTransFormer", 1],
 *           ["ConversioNnumberTransformer", 1],
 *           ["FirstLetterWordTransFormer", 1],
 *           ["SpaceTransformer", 1]
 *       ],
 *       nextLibelleButton: [
 *           ["Générer votre mot de passe",0],
 *           ["Renforcer votre mot de passe", 1]
 *       ],
 *       previousLibelleButton: [
 *           ["Retour", 1],
 *           ["Retour", 2]
 *       ],
 *       cssRootPluginSelector : "wizard"
 *     };
 *     new Phrase2Passe(options);
 *   </script>
 * </p>
 * OR
 * <p>
 *   <script type="text/javascript" >
 *     new Phrase2Passe();
 *   </script>
 * </p>
 *
 * @author Olivier PASQUET
 */

/**
 * 
 * Package Start Class
 * 
 * @class {@code Phrase2Passe}
 */
class Phrase2Passe {

    /**
     * default value option
     * 
     * @property defaults
     * @private
     * @final
     * @type {any}
     */
    private defaults = {
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
        warningrule: ".warningrule",
        ruleSelector: ".rule",
        language: "fr",

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
            ["ReplaceWordBycharcterInPassWordTransFormer", 1,".conversionWordInCaracterTransformerNotUsed"],
            ["ConversioNnumberTransformer", 1,".conversionNumberTransformerNotUsed"],
            ["FirstLetterWordTransFormer", 1],
            ["SpaceTransformer", 1]
        ],
        nextLibelleButton: [
            ["Générer votre mot de passe",0],
            ["Renforcer votre mot de passe", 1]
        ],
        previousLibelleButton: [
            ["Retour", 1],
            ["Retour", 2]
        ],
        cssRootPluginSelector : "wizard"
    };

    /**
     * Create a new {@code Phrase2Passe} object
     *
     * @constructor
     * @param {any} options default value {}
     */
    public constructor(options = {}) {


        // Merge options plugin
        let settings:any = this.extend(this.defaults, options);

        // Init language
        Languages.language = settings.language;
    
        // Get root html element plugin 
        let rootsHtmlElement: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>>document.querySelectorAll(" * > " + settings.rootHtmlElementSelector);
 
        // Init the plugin
        for (let i = 0; i < rootsHtmlElement.length; i++)
            new Phrase2PasseInstance(rootsHtmlElement.item(i), settings);
    }

    /**
     * Merge defaults with user options
     *
     * @private
     * @param {any} defaults Default settings
     * @param {any} options User options
     * @returns {any} Merged values of defaults and options
     */
    private extend(defaults: any, options : any): any {
        var a = Object.create(defaults);
        Object.keys(options).map(function (prop) {
            prop in a && (a[prop] = options[prop]);
        });
        return a;
    }
}
/**
 * @class Phrase2PasseInstance
 */
class Phrase2PasseInstance {
    /**
     * @property loader
     *
     * @private
     * @final
     * @type {InstanceLoader}
     */
    private loader: InstanceLoader;

    /**
     * Create a new {@code Phrase2PasseInstance} object
     *
     * @constructor
     * @param {HTMLElement} rootHtmlElement
     */
    public constructor(rootHtmlElement: HTMLElement, settings: any) {
        // Get element HTML plugin
        let contentHtmlElement: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>>rootHtmlElement.querySelectorAll(" * > " + settings.contentTypeSelector);
        let titleMenuHtmlElement = <NodeListOf<HTMLElement>>rootHtmlElement.querySelectorAll(" *  > " + settings.headerTypeSelector);

        // Get the element HTML input and element used to display the password
        let phraseInputHtmlElement = <HTMLInputElement>rootHtmlElement.querySelector(settings.sentenceInputSelector);
        let phraseSaisiHtmlElement: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>>rootHtmlElement.querySelectorAll(" *  > " + settings.phraseSaisi);

        // image checkBox in input HTMLElement
        let checkImageHtmlElement: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>>rootHtmlElement.querySelectorAll(settings.checkImage);

        // Init local variable HTMLElement
        this.loader = new InstanceLoader(window, contentHtmlElement);

        // Instanciate view
        let view: ViewSetp = new ViewSetp(rootHtmlElement,
                                        titleMenuHtmlElement,
                                        contentHtmlElement,
                                        phraseInputHtmlElement,
                                        settings.phraseValidateSelector,
                                        settings.ckeckImgRule,
                                        phraseSaisiHtmlElement,
                                        settings.warningrule,
                                        checkImageHtmlElement,
                                        settings.listMotTransformer,
                                        settings.notUsedTransformer,
                                        settings.ruleSelector,
                                        settings.previousLibelleButton,
                                        settings.nextLibelleButton,
                                        settings.cssRootPluginSelector);

        // Create the service executor of validators
        let callValidatorServiceCallToNextStep: CallValidatorService = this.createValidatorServiceForNextStep(settings.validatorForNextStep);
        let callValidatorCallDirectAtStep: CallValidatorService = this.createValidatorServiceForWarningCurrentStep(settings.validatorForWarningCurrentStep);

        // Create the service executor of transformer
        let transFormerService: TransFormerService = this.createTransFormerService(settings.transformers);

        // Add the event input (update progress bar and error message)
        view.onInputEvent([new ProgressBarValidationEvent(callValidatorServiceCallToNextStep, view, transFormerService)]);

        // Attach event on button
        view.onClickButtonEvent(
            [new StepChangeDescriptionEvent(view, transFormerService),
                new NotUsedTransformerEvent(view, transFormerService),
                new StepChangeAndValidAndNextEvent(callValidatorServiceCallToNextStep, view, callValidatorCallDirectAtStep, transFormerService)]
            , [new StepChangePreviousEvent(view, transFormerService, callValidatorCallDirectAtStep)]
        );

    }

    /**
     * This method is a factory of {TransFormerService}
     * 
     * @method createTransFormerService
     * @private
     * @param {string[][]} transformers
     * @returns {TransFormer[]}
     */
    private createTransFormerService(transformers: string[][]): TransFormerService {
        return new TransFormerService(this.loader.getInstanceTransFormer(transformers));
    }

    /**
     * This method is a factory of {CallValidatorService}, this service is used to generate an errors
     * 
     * @method createValidatorServiceForNextStep
     * @private
     * @param {string[][]} validatorForNextStep
     * @returns {CallValidatorService}
     */
    private createValidatorServiceForNextStep(validatorForNextStep: string[][]): CallValidatorService {
        // Create the validator executor
        return new CallValidatorService(this.loader.getInstanceValidatorRule(validatorForNextStep));
    }

    /**
     * This method is a factory of {CallValidatorService} , this service is used to generate a warning
     * 
     * @method createValidatorServiceForWarningCurrentStep
     * @private
     * @param {string[][]} validatorForWarningCurrentStep
     * @returns {CallValidatorService}
     */
    private createValidatorServiceForWarningCurrentStep(validatorForWarningCurrentStep: string[][]): CallValidatorService {
        // Create the validator executor
        return new CallValidatorService(this.loader.getInstanceValidatorRule(validatorForWarningCurrentStep));
    }
}
/**
 * @class InstanceLoader
 */
class InstanceLoader {
    /**
     * Create a new {@code InstanceLoader} loader
     *
     * @constructor
     * @param {Object} context
     * @param {NodeListOf<HTMLElement>} contentHtmlElement
     */
    constructor(private context: Object, private contentHtmlElement: NodeListOf<HTMLElement>) {
    }

     /**
      * This method is used to create a array of validator
      * 
      * @method getInstanceValidatorRule
      * @public
      * @param {string[][]} validators
      * @returns {Array<ValidatorRule>}
      */
    public getInstanceValidatorRule(validators: string[][]): Array<ValidatorRule> {
        let list: Array<ValidatorRule> = new Array<ValidatorRule> ();
        for (let validator of validators) {
            list.push(this.getInstance<ValidatorRule>(validator[0], validator[1], this.getStepForASelectorHtmlElement(validator[1])));
        }
        return list;
    }

    /**
     * This method is used to create a array of transformer
     * 
     * @method getInstanceTransFormer
     * @public
     * @param {string[][]} transFormers
     * @returns {Array<TransFormer>}
     */
    public getInstanceTransFormer(transFormers: string[][]): Array<TransFormer> {
        let list: Array<TransFormer> = new Array<TransFormer>();
        for (let transFormer of transFormers) {
            if (transFormer[2])
                list.push(this.getInstance<TransFormer>(transFormer[0], transFormer[1], transFormer[2]));
            else
                list.push(this.getInstance<TransFormer>(transFormer[0], transFormer[1]));
        }
        return list;
    }

    /**
      * This method is used to find the number step of element
      * 
      * @method getStepForASelectorHtmlElement
      * @private
      * @param {string} selector
      * @returns {number}
      */
    private getStepForASelectorHtmlElement(selector: string): number {
        for (let i: number = 0; i < this.contentHtmlElement.length; i++) {
            let element = this.contentHtmlElement.item(i).querySelectorAll(" * > " + selector);
            if (element.length > 0) return i;
        }
        return 0;
    }

     /**
      * This method is used to create an isntance of objet
      * 
      * @method getInstance
      * @private
      * @param {string} name
      * @param {any[]} args
      * @returns {T}
      */
    private getInstance <T> (name: string, ...args: any[]): T {
        var instance = Object.create(this.context[name].prototype);
        instance.constructor.apply(instance, args);
        return instance;
    }
}