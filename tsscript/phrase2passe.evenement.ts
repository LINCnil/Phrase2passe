/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: phrase2passe.evenement.ts 2017- 01 - 03
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
 * This file "phrase2passe.evenement.ts" is used to managed the HTML event
 *
 * Package of plugin :
 *   - Evenement
 *
 * @author Olivier PASQUET
 */

/**
 *
 * Package Evenement (IHM)
 *
 * Genrric interface Event
 * @class {@code StepEvent}
 */
interface StepEvent {
    /**
     * Event 
     * 
     * @method call
     * @param {number} step
     * @param {string} phrase
     */
    call(step: number, phrase: string);
}

/**
 * @implements StepEvent
 * @class StepChangeDescriptionEvent
 */
class StepChangeDescriptionEvent implements StepEvent {

    /**
     * Create a new {@code StepChangeDescriptionEvent}
     *
     * @constructor
     * @param {ViewSetp} view
     * @param {TransFormerService} transFormerService
     */
    public constructor(private view: ViewSetp, private transFormerService: TransFormerService) {
    }

    /**
     * Update HTMLElement description transformer
     *
     * @method call
     * @override {StepEvent.call()}
     * @param {number} step
     * @param {string} phrase
     */
    public call(step: number, phrase: string) {
        //Get text transformation possible
        let transformText: string = this.transFormerService.transformList(phrase, step);

        // Update view
        this.view.updateDescriptionTransformer(step + 1, transformText);
    }
}

/**
 * Update HTMLElement transformer not used in step
 *
 * @implements StepEvent
 * @class StepChangePreviousEvent
 */
class StepChangePreviousEvent implements StepEvent {

    /**
     * Create a new {@code StepChangePreviousEvent}
     *
     * @constructor
     * @param {ViewSetp} view
     */
    public constructor(private view: ViewSetp, private transFormerService: TransFormerService, private callValidatorCallDirectAtStep: CallValidatorService) {
    }

    /**
     * Function call when click on next button
     * 
     * @method call
     * @override {StepEvent.call()}
     * @param {number} step
     * @param {string} phrase
     */
    public call(step: number, phrase: string) {
        // if not first step
        if (step > 0) {
            // Get the password transformed
            let password: PassWord = this.transFormerService.execute(phrase, step);

            this.view.updateClassCssMenuErrorValidation(step);

            // Update css to move at the next step
            this.view.goToUpdateClassCssMenuValidation(step - 1);

            // Get the warning rule error
            let rulesWarning: string[] = this.callValidatorCallDirectAtStep.getSelectorsErrorByStep(password, step - 1);

            // Update next step
            this.view.updateClassCssMenuErrorValidation(step - 1, rulesWarning);
            this.view.updateClassCssContentValidation(step - 1, rulesWarning);

            // Update css class button
            this.view.updateCssClassActionValidation(step - 1);
        }
    }
}

/**
 * Update HTMLElement transformer not used in step
 *
 * @implements StepEvent
 * @class NotUsedTransformerEvent
 */
class NotUsedTransformerEvent implements StepEvent {

    /**
     * Create a new {@code NotUsedTransformerEvent}
     *
     * @constructor
     * @param {ViewSetp} view
     * @param {TransFormerService} transFormerService
     */
    public constructor(private view: ViewSetp, private transFormerService: TransFormerService) {
    }

    /**
     * Function call when click on next button
     * 
     * @method call
     * @override {StepEvent.call()}
     * @param {number} step
     * @param {string} phrase
     */
    public call(step: number, phrase: string) {
        let trans: boolean = this.transFormerService.isTransform(phrase, step);
        let transformers: TransFormer [] = this.transFormerService.getTransformerNotUsed(phrase, step);
        this.view.updateNotUsedTransformer(step, phrase, trans, transformers);
    }
}

/**
 * Valid a sentence and run to next
 *
 * @implements StepEvent
 * @class StepValidAndMoveEvent
 */
class StepChangeAndValidAndNextEvent implements StepEvent {

    /**
     * Create a new {@code StepValidAndMoveEvent}
     *
     * @constructor
     * @param {CallValidatorService} callValidatorServiceCallToNextStep
     * @param {ViewSetp} viewSetp
     * @param {CallValidatorService} callValidatorCallDirectAtStep
     * @param {TransFormerService} transFormerService
     */
    public constructor(private callValidatorServiceCallToNextStep: CallValidatorService, private view: ViewSetp, private callValidatorCallDirectAtStep: CallValidatorService, private transFormerService: TransFormerService ) {
    }

    /**
     * Function call when click on next button
     * 
     * @method call
     * @override {StepEvent.call()}
     * @param {number} step
     * @param {string} phrase
     */
    public call(step: number, phrase: string) {

        // Get the password transformed
        let password: PassWord = this.transFormerService.execute(phrase, step);
 
        // Call validator current step
        let errorRules: string[] = this.callValidatorServiceCallToNextStep.getSelectorsErrorByStep(password, step);

        // Update css error current step
        this.view.updateClassCssMenuErrorValidation(step, errorRules);
        this.view.updateClassCssContentValidation(step, errorRules);

        // if step is valid
        if (this.callValidatorServiceCallToNextStep.callStepByStep(password, step)) {

            // Update css to move at the next step
            this.view.goToUpdateClassCssMenuValidation(step +1);

            // update final password
            let rulesWarningError: string[] = this.callValidatorCallDirectAtStep.getSelectorsErrorByStep(password, step + 1);

            // Update password in IHM
            this.view.updatePassWord(password,step +1);
 
            // Update next step
            this.view.updateClassCssMenuErrorValidation(step + 1, rulesWarningError);
            this.view.updateClassCssContentValidation(step + 1, rulesWarningError);

            // Update css class button
            this.view.updateCssClassActionValidation(step + 1);
        }

    }
}

/**
 * Update the progressbar
 *
 * @implements StepEvent
 * @class ProgressBarValidationEvent
 */
class ProgressBarValidationEvent implements StepEvent {
    /**
     * Create a new {@code ProgressBarValidationEvent} object
     * 
     * @param {CallValidatorService} callValidatorServiceCallToNextStep
     * @param {ViewSetp} view
     * @param {TransFormerService} transFormerService
     * @constructor
     */
    public constructor(private callValidatorServiceCallToNextStep: CallValidatorService,private view: ViewSetp,private transFormerService: TransFormerService) {
    }

    /**
     * 
     * @method call
     * @override {StepEvent.call()}
     * @param {number} step
     * @param {string} phrase
     */
    public call(step: number, phrase: string) {
        //Get the password
        let passWord: PassWord = this.transFormerService.execute(phrase,step);

        // Get the list of error
        let rulesError: string[] = this.callValidatorServiceCallToNextStep.getSelectorsErrorByStep(passWord, step);

        // Update Content error
        this.view.updateClassCssContentValidation(step, rulesError);

        // if phrase exist
        if (passWord.getPhrase().length > 0) {
            // Calcul percentage
            let pourcentage: number = this.percentage(this.callValidatorServiceCallToNextStep.getMaxPointStepByStep(step), this.callValidatorServiceCallToNextStep.callValidatorGetPointByStep(passWord, step));
            // Update progress HTML and CSS Element
            if (pourcentage < 98) {
                this.updateProgressBarCssAndCheckImage(pourcentage, "error", "success",true);
            } else {
                if (this.callValidatorServiceCallToNextStep.callStepByStep(passWord, step)) {
                    this.updateProgressBarCssAndCheckImage(100, "success", "error",false);
                } else {
                    this.updateProgressBarCssAndCheckImage(100, "error", "success",false);
                }
            }
        } else {
            this.updateProgressBarCssAndCheckImage(0, "success", "error",true);
        }
    }

    /**
     * @method updateProgressBarCssAndCheckImage
     * @private
     * @param {number} pourcentage
     * @param {string} cssClassAdd
     * @param {string} cssClassRemove
     * @param {boolean} checkImagePrint
     */
    private updateProgressBarCssAndCheckImage(pourcentage: number, cssClassAdd:string, cssClassRemove:string, checkImagePrint:boolean) {
        this.view.updateStyleProgressBar(pourcentage, cssClassAdd, cssClassRemove);
        this.view.updateStyleProgressBarCheckImage(checkImagePrint);
    }

    /**
     * @method percentage
     * @private
     * @param {number} total
     * @param {number} value
     * @retruns {number} the percentage
     */
    private percentage(total: number, value: number): number {
        return Math.ceil(100 + (((value - total) / total) * 100));
        
    }
}