/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: phrase2passe.view.ts 2017- 01 - 03
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
 * This file "phrase2passe.view.ts" is used to create a HTML plugin
 * 
 * Package of plugin :
 *   - View
 *
 * @author Olivier PASQUET
 */


/**
 * Package View (IHM)
 *
 * @class {@code ViewSetp}
 */
class ViewSetp {
    /**
     * @property rootTitleLisHtmlElement
     *
     * @private
     * @final
     * @type {NodeListOf<Element>}
     */
    private rootTitleLisHtmlElement: NodeListOf<HTMLElement>;

    /**
     * @property phraseInputHtmlElement
     *
     * @final
     * @private
     * @type {HTMLInputElement}
     */
    private phraseInputHtmlElement: HTMLInputElement;

    /**
     * @property phraseValidateSelector
     *
     * @final
     * @private
     * @type {string}
     */
    private phraseValidateSelector: string;

    /**
     * @property contentHtmlElement
     *
     * @final
     * @private
     * @type {NodeListOf<Element>}
     */
    private contentHtmlElement: NodeListOf<HTMLElement>;

    /**
     * @property next
     *
     * @final
     * @private
     * @type {HTMLAnchorElement}
     */
    private next: HTMLAnchorElement;

   /**
     * @property previous
     * @final
     * @private
     * @type {HTMLAnchorElement}
     */
    private previous: HTMLAnchorElement;

    /**
     * @property ckeckImgRule
     *
     * @private
     * @final
     * @type {string}
     */
    private ckeckImgRule: string;
    
    /**
     * @property phraseSaisi
     *
     * @private
     * @final
     * @type {NodeListOf<HTMLElement>}
     */
    private phraseSaisi: NodeListOf<HTMLElement>;

    /**
     * @property warningruleSelector
     *
     * @private
     * @final
     * @type {string}
     */
    private warningruleSelector: string;

    /**
     * @property checkImageHTMLElement
     *
     * @private
     * @final
     * @type {NodeListOf<HTMLElement>}
     */
    private checkImageHTMLElement: NodeListOf<HTMLElement>;

    /**
     * @property listTransformationSelector
     *
     * @private
     * @final
     * @type {string}
     */
    private listTransformationSelector: string;

    /**
     * @property notUsedTransformerSelector
     * @final
     * @private
     * @type {string}
     */
    private notUsedTransformerSelector: string;

    /**
     * @property ruleSelector
     * @final
     * @private
     * @type {string}
     */
    private ruleSelector: string;

    /**
     * @property previousLibelleButton
     *
     * @final
     * @private
     * @type {any[]}
     */
    private previousLibelleButton: any[];

    /**
     * @property nextLibelleButton
     *
     * @final
     * @private
     * @type {any[]}
     */
    private nextLibelleButton: any[];

    /**
     * @property defaultValueInput
     *
     * @final
     * @private
     * @type {string}
     */
    private defaultValueInput: string;

    /**
     * Create a new {@code ViewSetp} object
     *
     * @constructor
     * @param {HTMLElement} rootHtmlElement
     * @param {NodeListOf<HTMLElement>} titleMenuHtmlElement
     * @param {NodeListOf<HTMLElement>} contentHtmlElement
     * @param {HTMLInputElement} phraseInput
     * @param {string} phraseValidateSelector
     * @param {string} ckeckImgRule
     * @param {string} phraseSaisi
     * @param {NodeListOf<HTMLElement>} phraseSaisi
     * @param {string} warningrule
     * @param {HTMLElement} checkImage
     * @param {string} listTransformationSelector
     * @param {string} notUsedTransformerSelector
     * @param {string} ruleSelector
     * @param {any[]} previousLibelleButton
     * @param {any[]} nextLibelleButton
     * @param {string} cssRootPluginSelector
     */
    public constructor(rootHtmlElement: HTMLElement, titleMenuHtmlElement: NodeListOf<HTMLElement>, contentHtmlElement: NodeListOf<HTMLElement>, phraseInput: HTMLInputElement, phraseValidateSelector: string, ckeckImgRule: string, phraseSaisi: NodeListOf<HTMLElement>, warningruleSelector: string, checkImageHTMLElement: NodeListOf<HTMLElement>, listTransformationSelector: string, notUsedTransformerSelector: string, ruleSelector: string, previousLibelleButton: any[], nextLibelleButton: any[],cssRootPluginSelector:string) {
        // local variable
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
 
        // update class css root element
        ToolClassManaged.addClass(rootHtmlElement, cssRootPluginSelector);

        // Default value
        this.createValueDefault(this.phraseInputHtmlElement);

        // Cerate and add the menu to element racine - top
        rootHtmlElement.appendChild(this.createMenu(titleMenuHtmlElement));
       
        // Create and add the content ihm - middle
        rootHtmlElement.appendChild(this.createContent(this.contentHtmlElement));

        // Create and add the action ihm (button) - bottom
        rootHtmlElement.appendChild(this.createAction());
    }

    /**
     * Add event to field
     *
     * @method createValueDefault
     * @private
     * @param {HTMLInputElement} input
     */
    private createValueDefault(input: HTMLInputElement) {
        if (input !== null) {
            input.style.color = "#555";
            this.defaultValueInput = input.value;
            // local variable
            let defaultValue: string = input.value;
            // Add event input phrase
            input.addEventListener("focus", function (this: HTMLInputElement) {
                this.style.color = "black";
                if (this.value === defaultValue) {
                    this.value = "";
                }
            }, false);

            input.onblur = function (this: HTMLInputElement) {
                if (this.value === "") {
                    this.style.color = "#555";
                    this.value = defaultValue;
                }
            }
        }
    }

    /**
     * Create a the new item menu
     *
     * @method createMenuLiStep
     * @private
     * @param {number} step
     * @param {HTMLHeadElement} headElement
     * @returns {HTMLLIElement}
     */
    private createMenuLiStep(step: number, headElement: HTMLHeadElement): HTMLLIElement {
        // Create the element menu
        let li: HTMLLIElement = document.createElement("li");

        // First element menu
        if (step === 0) li.setAttribute("class", "first current");

        // Create a new item menu
        let a: HTMLAnchorElement = document.createElement("a");

        // Add the numero of step
        let spanNumeroOfStep: HTMLSpanElement = document.createElement("span");
        ToolClassManaged.addClass(spanNumeroOfStep, "number");

        spanNumeroOfStep.innerHTML = (step + 1).toString() + " ";

        // Add the libelle of step
        let spanLibelleOfStep: HTMLSpanElement = document.createElement("span");
        spanLibelleOfStep.innerHTML = headElement.innerHTML;

        // Update dom to add a new item
        a.appendChild(spanNumeroOfStep);
        a.appendChild(spanLibelleOfStep);
        li.appendChild(a);

        // return the new item menu
        return li;
    }

    /**
     * Create a the menu interface
     *
     * @method createMenu
     * @private
     * @param {NodeListOf<Element>} titleMenuHtmlElement
     * @returns {HTMLDivElement}
     */
    private createMenu(titleMenuHtmlElement: NodeListOf<HTMLElement>): HTMLDivElement {
        // create the div to include the title
        let div: HTMLDivElement = document.createElement("div");
        ToolClassManaged.addClass(div, "steps");

        // create the ul to include and format the ul
        let ul: HTMLUListElement = document.createElement("ul");

        // for each element in the title
        for (let i: number = 0; i < titleMenuHtmlElement.length; i++) {
            let headElement: HTMLHeadElement = <HTMLHeadElement> titleMenuHtmlElement.item(i);

            // Append item menu
            ul.appendChild(this.createMenuLiStep(i, headElement));

            // hide the old menu
            headElement.style.display = 'none';
        }
        // Save the new item element of menu
        this.rootTitleLisHtmlElement = <NodeListOf<HTMLElement>>ul.querySelectorAll("li");

        // Add the new menu element in the HTML dom
        div.appendChild(ul);
        return div;
    }

    /**
     * Create a the content interface
     *
     * @method createContent
     * @private
     * @param {NodeListOf<HTMLElement>} contentHtmlElement
     * @returns HTMLDivElement
     */
    private createContent(contentHtmlElement: NodeListOf<HTMLElement>): HTMLDivElement {
        // create div root conent
        let div: HTMLDivElement = document.createElement("div");
        ToolClassManaged.addClass(div, "content");

        // for each element update the dom of html
        for (let i: number = 0; i < contentHtmlElement.length; i++) {
            ToolClassManaged.addClass(contentHtmlElement.item(i), "body");
            if (i > 0) {
                ToolClassManaged.addClass(contentHtmlElement.item(i), "hidden");
            }
            div.appendChild(contentHtmlElement.item(i));
        }
        return div;
    }

    
    /**
     * Create and and the event
     *
     * @method onInputEvent
     * @public
     * @param {StepEvent []} events
     */
    public onInputEvent(events: StepEvent []) {
        // Add event input phrase
        let view: ViewSetp = this;

        // Add event input phrase if key up
        this.phraseInputHtmlElement.onkeyup = function (this: HTMLInputElement) {
            //Run all event click button next
            events.forEach(event => {
                event.call(view.getCurrentStep(), this.value);
            });
        }

        // Add event input phrase if press enter
        let next: HTMLAnchorElement = this.next;
        this.phraseInputHtmlElement.addEventListener("keypress", function (event: KeyboardEvent) {
            if (event.keyCode == 13) {
                next.click();
                event.preventDefault();
            }
            
        });
    }

    /**
     * Create a the action interface
     *
     * @method createAction
     * @private
     * @returns {HTMLDivElement}
     */
    private createAction(): HTMLDivElement {
        // create root div html element zone
        let div: HTMLDivElement = document.createElement("div");
        ToolClassManaged.addClass(div, "actions");

        // Update the HTML dom to format the action zone
        let ul: HTMLUListElement = document.createElement("ul");
        let linext: HTMLLIElement = document.createElement("li");
        let liprevious: HTMLLIElement = document.createElement("li");

        // create the next button
        this.previous = this.createButton(this.getLibellePreviousButton(0));
        ToolClassManaged.addClass(this.previous, "notvisible");

        // create the next button
        this.next = this.createButton(this.getLibelleNextButton(0), "active");

        // Append all element in interface
        linext.appendChild(this.next);
        liprevious.appendChild(this.previous);
        ul.appendChild(liprevious);
        ul.appendChild(linext);
        div.appendChild(ul);
        return div;
    }

    /**
      * Create a new {@code HTMLAnchorElement} button action
      *
      * @method createButton
      * @private
      * @param {string} text
      * @param {string} classAdd
      * @returns {HTMLAnchorElement}
      */
    private createButton(text: string, classAdd?: string): HTMLAnchorElement {
        let button: HTMLAnchorElement = document.createElement("a");
        button.innerHTML = text;
        if (classAdd) ToolClassManaged.addClass(button, classAdd);
        return button;
    }

    /**
     * @method getLibelleNextButton
     * @private
     * @param {number} step
     * @returns {string} libelle button next
     */
    private getLibelleNextButton(step: number): string {
        let libelle: string = "Suivant";
        this.nextLibelleButton.forEach(libelleButtonList => {
            if (libelleButtonList[1] == step) libelle = libelleButtonList[0];
        });
        return libelle;
    }

    /**
     * @method getLibellePreviousButton
     * @private
     * @param {number} step
     * @returns {string} libelle button previous
     */
    private getLibellePreviousButton(step: number): string {
        let libelle: string = "Retour";
        this.previousLibelleButton.forEach(libelleButtonList => {
            if (libelleButtonList[1] == step) libelle = libelleButtonList[0];
        });
        return libelle;
    }

    /**
     * Create a event button
     *
     * @method onClickButtonEvent
     * @param {StepEvent[]} onClickEventNext
     * @param {StepEvent[]} onClickEventPrevious
     */
    public onClickButtonEvent(onClickEventNext: StepEvent[], onClickEventPrevious: StepEvent[]) {
        // local variable
        let view: ViewSetp = this;
        let phraseInputHTMLInputElementI: HTMLInputElement = this.phraseInputHtmlElement;

        // event next button        
        this.next.onclick = function () {
            // if not last step
            if (!view.isLastStep(view.getCurrentStep())) {
                // Remove default value
                phraseInputHTMLInputElementI.focus();
                //Run all event click button next
                onClickEventNext.forEach(event => {
                    event.call(view.getCurrentStep(), phraseInputHTMLInputElementI.value);
                });
            }
        }

        // event previous button
        this.previous.onclick = function () {
            //Run all event click button previous
            onClickEventPrevious.forEach(event => {
                event.call(view.getCurrentStep(), phraseInputHTMLInputElementI.value);
            });
        }
    }

    /**
     * @method updateCssClassActionValidation
     * @public
     * @param {number}  step
     */
    public updateCssClassActionValidation(step: number) {
        // update css button previous
        this.previous.innerHTML = this.getLibellePreviousButton(step);
        if (step === 0) {
            ToolClassManaged.addClass(this.previous, "notvisible");
            ToolClassManaged.removeClass(this.previous, "active");
        }
        else {
            ToolClassManaged.addClass(this.previous, "active");
            ToolClassManaged.removeClass(this.previous, "notvisible");
        }

        // update css button next
        this.next.innerHTML = this.getLibelleNextButton(step);
        if (this.isLastStep(step)) {
            ToolClassManaged.addClass(this.next, "notvisible");
            ToolClassManaged.removeClass(this.next, "active");
        }
        else {
            ToolClassManaged.removeClass(this.next, "notvisible");
            ToolClassManaged.addClass(this.next, "active");
        }
    }

    /**
     * Update progression progress bar
     * 
     * @method updateStyleProgressBar
     * @public
     * @param {number}  pourcentage
     * @param {string}  cssClassAdd
     * @param {string}  cssClassRemove
     */
    public updateStyleProgressBar(pourcentage: number, cssClassAdd: string, cssClassRemove: string) {
        ToolClassManaged.addClass(<HTMLElement>this.phraseInputHtmlElement.nextElementSibling, cssClassAdd);
        ToolClassManaged.removeClass(<HTMLElement>this.phraseInputHtmlElement.nextElementSibling, cssClassRemove);
        (<HTMLElement>this.phraseInputHtmlElement.nextElementSibling).style.width = pourcentage + '%';
    }

    /**
     * @method updateStyleProgressBarCheckImage
     * @public
     * @param {boolean}  checkImagePrint
     */
    public updateStyleProgressBarCheckImage(checkImagePrint: boolean) {
        for (let i = 0; i < this.checkImageHTMLElement.length; i++) {
            if (checkImagePrint) ToolClassManaged.addClass(this.checkImageHTMLElement.item(i), "hidden");
            else ToolClassManaged.removeClass(this.checkImageHTMLElement.item(i), "hidden");
        }
    }

    /**
     * @method goToUpdateClassCssMenuValidation
     * @param {number} step
     * @param {number} move default value is 0
     */
    public goToUpdateClassCssMenuValidation(step: number, move: number = 0) {
        // For each element in menu
        for (let i: number = 0; i < this.rootTitleLisHtmlElement.length; i++) {
            // if the new current element
            if ((step + move) === i) {
                ToolClassManaged.addClass(this.rootTitleLisHtmlElement.item(i), "current");
            // if the previous element
            } else if ((step + move) > i) {
                ToolClassManaged.addClass(this.rootTitleLisHtmlElement.item(i), "active");
                ToolClassManaged.removeClass(this.rootTitleLisHtmlElement.item(i), "current");
            //if the next element
            } else {
                ToolClassManaged.removeClass(this.rootTitleLisHtmlElement.item(i), "active");
                ToolClassManaged.removeClass(this.rootTitleLisHtmlElement.item(i), "current");
            }
        }
    }

    /**
     * @method updateClassCssMenuErrorValidation
     * @public
     * @param {number}  step
     * @param {string[]} errors default value is []
     */
    public updateClassCssMenuErrorValidation(step: number, errors: string[] = []) {
        // Update the menu zone
        ToolClassManaged.removeClass(<HTMLElement>this.rootTitleLisHtmlElement.item(step).querySelector("* > a"), "error");
        // Add error css class to current menu item
        if (errors.length > 0) ToolClassManaged.addClass(<HTMLElement>this.rootTitleLisHtmlElement.item(step).querySelector("* > a"), "error");
    }

    /**
     * @method updateCheckImageByRule
     * @private
     * @param {number} step
     */
    private updateCheckImageByRule(step: number) {
        // Get all rule
        let elementsRule: NodeListOf<HTMLElement> = this.getElementsInContentByStep(step, this.ruleSelector);
        for (let i: number = 0; i < elementsRule.length; i++) {
            // Get css check image rule
            let ckeckImgRuleElements: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>>elementsRule.item(i).querySelectorAll(this.ckeckImgRule);

            // Update css check image rule
            if (ckeckImgRuleElements) {
                for (let j: number = 0; j < ckeckImgRuleElements.length; j++) {
                    if (this.phraseInputHtmlElement.value != this.defaultValueInput) {
                        ToolClassManaged.removeClass(ckeckImgRuleElements.item(j), "hidden");
                    }
                }
            }
        }
    }

    /**
     * @method showRuleError
     * @private
     * @param {number}  step
     * @param {string[]} errors
     */ 
    private showRuleError(step: number, errors: string[]) {
        // For each errors found add css class "errorrule"
        errors.forEach(rule => {
            if (this.getElementInContentByStep(step, rule) != null) {
                // Update row rule css parent
                let warningrule: NodeListOf<HTMLElement> = this.getElementsInContentByStep(step, this.warningruleSelector);
                //Get html element rule
                let ruleHTMLElement: HTMLElement = this.getElementInContentByStep(step, rule);
                //Update Element
                for (let j: number = 0; j < warningrule.length; j++) {
                    if (warningrule.item(j) == this.getElementInContentByStep(step, rule)) {
                        ToolClassManaged.removeClass(ruleHTMLElement, "hidden");
                    }
                }

                // Update row rule css parent
                ToolClassManaged.addClass(ruleHTMLElement.parentElement, "errorruleparent");

                // Update row rule css
                ToolClassManaged.addClass(ruleHTMLElement, "errorrule");

                // Update check image rule css
                ToolClassManaged.addClass(<HTMLElement>ruleHTMLElement.querySelector(this.ckeckImgRule), "hidden");
            }
        });
    }
    /**
     * Update the css for the content element
     * 
     * @method updateClassCssContentValidation
     * @public
     * @param {number}  step
     * @param {string[]}  errors default value is []
     */
    public updateClassCssContentValidation(step: number, errors: string[] = []) {
        // Remove all errors found
        this.removeAllErrorsInContent(step);

        // Update check image by rule in the step
        this.updateCheckImageByRule(step);

        // Show error rule
        this.showRuleError(step, errors);

        // Update to print the content zone
        for (let j: number = 0; j < this.contentHtmlElement.length; j++) {
            if (step === j) ToolClassManaged.removeClass(this.contentHtmlElement.item(j), "hidden");
            else ToolClassManaged.addClass(<HTMLElement>this.contentHtmlElement.item(j), "hidden");
        }

    }

    /**
     * 
     * @method removeAllErrorsInContent
     * @private
     * @param {number} step
     */
    private removeAllErrorsInContent(step: number) {
        // Get all error in a step
        let errorNode: NodeListOf<HTMLElement> = this.getElementsInContentByStep(step, ".errorrule");

        // if error in content step
        if (errorNode) {
            // Remove all error found in content zone
            for (let i: number = 0; i < errorNode.length; i++) {
                if (errorNode.item(i)) {
                    //Remove error css in element
                    ToolClassManaged.removeClass(errorNode.item(i).parentElement, "errorruleparent");
                    ToolClassManaged.removeClass(errorNode.item(i), "errorrule");

                    // Update check image rule css
                    ToolClassManaged.addClass(<HTMLElement>errorNode.item(i).querySelector(this.ckeckImgRule), "hidden");

                    // Update error
                    let e: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>>this.getElementsInContentByStep(step, this.warningruleSelector);
                    for (let j: number = 0; j < e.length; j++) {
                        if (e.item(j) == errorNode.item(i)) {
                            ToolClassManaged.addClass(errorNode.item(i), "hidden");
                        }
                    }
                }
            }
        }
    }

    /**
     * Retuns result test is the last step
     * 
     * @method isLastStep
     * @private
     * @param {number} step
     * @returns {boolean} result test is the last step
     */
    private isLastStep(step:number): boolean {
        return this.rootTitleLisHtmlElement.item(step).nextSibling === null;
    }

    /**
     * Retuns the number of step
     * 
     * @method getCountStep
     * @private
     * @returns {number} the number of step
     */
    private getCountStep(): number {
        return this.rootTitleLisHtmlElement.length;
    }

    /**
     * Retuns the number of current step
     * 
     * @method getCurrentStep
     * @private
     * @returns {number} the number of current step
     */
    private getCurrentStep(): number {
        let step: number = 0;
        for (let i: number = 0; i < this.rootTitleLisHtmlElement.length; i++) {
            if (this.rootTitleLisHtmlElement.item(i).classList.contains("current")) {
                step = i;
            }
        }
        return step;
    }

    /**
      * @method updateDescriptionTransformer
      * @public
      * @param {number} step
      * @param {string} transformText
      */
    public updateDescriptionTransformer(step: number, transformText : string) {
        // Get element html to a step
        let descriptionTransformeHTMLElement: HTMLElement = <HTMLElement>this.getElementInContentByStep(step, this.listTransformationSelector);

        // if onglet has element (description transformation)
        if (descriptionTransformeHTMLElement) {

            //Update HTML print if content else hidden
            if (transformText.length > 1) ToolClassManaged.removeClass(descriptionTransformeHTMLElement.parentElement.parentElement, "hidden");
            else ToolClassManaged.addClass(descriptionTransformeHTMLElement.parentElement.parentElement, "hidden");

            // Update html element add content
            descriptionTransformeHTMLElement.innerHTML = transformText;
        }
    }

    /**
     * @method updateNotUsedTransformer
     * @public
     * @param {number} step
     * @param {string} phrase
     * @param {boolean} trans
     * @param {TransFormer[]} transformers
     */
    public updateNotUsedTransformer(step: number, phrase: string, trans: boolean, transformers: TransFormer[]) {
        let notUsedTransformer: HTMLElement = this.getElementInContentByStep(step + 1, this.notUsedTransformerSelector);
        //if onglet has element
        if (notUsedTransformer) {
            let ll: NodeListOf<HTMLElement> = <NodeListOf<HTMLElement>>notUsedTransformer.querySelectorAll("*");
            for (let i = 0; i < ll.length; i++) {
                if(ll.item(i).childElementCount == 0) ll.item(i).classList.add("hidden");
            }
            // Print message if password contains a text transformable by a transformer not always call
            if (!trans) {
                ToolClassManaged.addClass(notUsedTransformer, "hidden");
            } else {
                ToolClassManaged.removeClass(notUsedTransformer, "hidden");
                transformers.forEach(transformer => {
                    if (transformer.getSelectorNotUsed()) {
                        let t: HTMLElement = this.getElementInContentByStep(step + 1, transformer.getSelectorNotUsed());
                        if(t) t.classList.remove("hidden");
                    }
                });

            }
        }
    }
   /**
     * Update final the pawword
     * 
     * @method updatePassWord
     * @public
     * @param {PassWord} password
     * @param {number} step
     */
    public updatePassWord(password: PassWord, step: number) {
        // Initalisation of content password
        let phraseValidateHTMLElement: HTMLElement = this.getElementInContentByStep(step, this.phraseValidateSelector);
        if (phraseValidateHTMLElement) {
            // Create password
            let span: HTMLSpanElement = document.createElement("span");
            span.innerHTML = password.getPassWord().replace(/\s/g, '');

            //Update view
            phraseValidateHTMLElement.innerHTML = "";
            phraseValidateHTMLElement.appendChild(span);
        }
        // Update All phrase phraseSaisi element
        for (let i: number = 0; i < this.phraseSaisi.length; i++) {
            this.phraseSaisi.item(i).innerHTML = this.phraseInputHtmlElement.value;
        }
    }

    /**
     * Get all elements HTML in step content for a selector
     * 
     * @method getElementsInContentByStep
     * @private
     * @param {number} step
     * @param {string} selector
     * @returns {NodeListOf<HTMLElement>}
     */
    private getElementsInContentByStep(step: number, selector: string): NodeListOf<HTMLElement> {
        return <NodeListOf<HTMLElement>>this.contentHtmlElement.item(step).querySelectorAll(selector);
    }

    /**
     * Get a element HTML in step content
     * 
     * @method getElementInContentByStep
     * @public
     * @param {number} step
     * @param {string} selector
     * @returns {HTMLElement}
     */
    public getElementInContentByStep(step: number, selector:string): HTMLElement {
        return <HTMLElement>this.contentHtmlElement.item(step).querySelector(selector);
    }
}

/**
 * It 's CSS Class tool
 *
 * @class {@code ToolClassManaged}
 */
class ToolClassManaged {
    /**
     * Add class css to element html
     * 
     * @method addClass
     * @static
     * @param {HTMLElement} element
     * @param {string} className
     * @returns {boolean} true if add else false
     */
    public static addClass(element: HTMLElement, className: string): boolean {
        if (element && element.className.indexOf(className) == -1) {
            element.className += " " + className;
            return true;
        }
        return false;
    }
    /**
     * Remove class css to element html
     * 
     * @method removeClass
     * @static
     * @param {HTMLElement} element
     * @param {string} className
     * @returns {boolean} true if remove else false
     */
    public static removeClass(element: HTMLElement, className: string): boolean {
        if (element && element.className.indexOf(className) > -1) {
            element.classList.remove(className);
            return true;
        }
        return false;
    }
}