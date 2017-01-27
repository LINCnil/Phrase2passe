var ViewSetp = (function () {
    function ViewSetp(rootHtmlElement, titleMenuHtmlElement, contentHtmlElement, phraseInput, phraseValidateSelector, ckeckImgRule, phraseSaisi, warningruleSelector, checkImageHTMLElement, listTransformationSelector, notUsedTransformerSelector, ruleSelector, previousLibelleButton, nextLibelleButton, cssRootPluginSelector) {
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
        ToolClassManaged.addClass(rootHtmlElement, cssRootPluginSelector);
        this.createValueDefault(this.phraseInputHtmlElement);
        rootHtmlElement.appendChild(this.createMenu(titleMenuHtmlElement));
        rootHtmlElement.appendChild(this.createContent(this.contentHtmlElement));
        rootHtmlElement.appendChild(this.createAction());
    }
    ViewSetp.prototype.createValueDefault = function (input) {
        if (input !== null) {
            input.style.color = "#555";
            this.defaultValueInput = input.value;
            var defaultValue_1 = input.value;
            input.addEventListener("focus", function () {
                this.style.color = "black";
                if (this.value === defaultValue_1) {
                    this.value = "";
                }
            }, false);
            input.onblur = function () {
                if (this.value === "") {
                    this.style.color = "#555";
                    this.value = defaultValue_1;
                }
            };
        }
    };
    ViewSetp.prototype.createMenuLiStep = function (step, headElement) {
        var li = document.createElement("li");
        if (step === 0)
            li.setAttribute("class", "first current");
        var a = document.createElement("a");
        var spanNumeroOfStep = document.createElement("span");
        ToolClassManaged.addClass(spanNumeroOfStep, "number");
        spanNumeroOfStep.innerHTML = (step + 1).toString() + " ";
        var spanLibelleOfStep = document.createElement("span");
        spanLibelleOfStep.innerHTML = headElement.innerHTML;
        a.appendChild(spanNumeroOfStep);
        a.appendChild(spanLibelleOfStep);
        li.appendChild(a);
        return li;
    };
    ViewSetp.prototype.createMenu = function (titleMenuHtmlElement) {
        var div = document.createElement("div");
        ToolClassManaged.addClass(div, "steps");
        var ul = document.createElement("ul");
        for (var i = 0; i < titleMenuHtmlElement.length; i++) {
            var headElement = titleMenuHtmlElement.item(i);
            ul.appendChild(this.createMenuLiStep(i, headElement));
            headElement.style.display = 'none';
        }
        this.rootTitleLisHtmlElement = ul.querySelectorAll("li");
        div.appendChild(ul);
        return div;
    };
    ViewSetp.prototype.createContent = function (contentHtmlElement) {
        var div = document.createElement("div");
        ToolClassManaged.addClass(div, "content");
        for (var i = 0; i < contentHtmlElement.length; i++) {
            ToolClassManaged.addClass(contentHtmlElement.item(i), "body");
            if (i > 0) {
                ToolClassManaged.addClass(contentHtmlElement.item(i), "hidden");
            }
            div.appendChild(contentHtmlElement.item(i));
        }
        return div;
    };
    ViewSetp.prototype.onInputEvent = function (events) {
        var view = this;
        this.phraseInputHtmlElement.onkeyup = function () {
            var _this = this;
            events.forEach(function (event) {
                event.call(view.getCurrentStep(), _this.value);
            });
        };
        var next = this.next;
        this.phraseInputHtmlElement.addEventListener("keypress", function (event) {
            if (event.keyCode == 13) {
                next.click();
                event.preventDefault();
            }
        });
    };
    ViewSetp.prototype.createAction = function () {
        var div = document.createElement("div");
        ToolClassManaged.addClass(div, "actions");
        var ul = document.createElement("ul");
        var linext = document.createElement("li");
        var liprevious = document.createElement("li");
        this.previous = this.createButton(this.getLibellePreviousButton(0));
        ToolClassManaged.addClass(this.previous, "notvisible");
        this.next = this.createButton(this.getLibelleNextButton(0), "active");
        linext.appendChild(this.next);
        liprevious.appendChild(this.previous);
        ul.appendChild(liprevious);
        ul.appendChild(linext);
        div.appendChild(ul);
        return div;
    };
    ViewSetp.prototype.createButton = function (text, classAdd) {
        var button = document.createElement("a");
        button.innerHTML = text;
        if (classAdd)
            ToolClassManaged.addClass(button, classAdd);
        return button;
    };
    ViewSetp.prototype.getLibelleNextButton = function (step) {
        var libelle = "Suivant";
        this.nextLibelleButton.forEach(function (libelleButtonList) {
            if (libelleButtonList[1] == step)
                libelle = libelleButtonList[0];
        });
        return libelle;
    };
    ViewSetp.prototype.getLibellePreviousButton = function (step) {
        var libelle = "Retour";
        this.previousLibelleButton.forEach(function (libelleButtonList) {
            if (libelleButtonList[1] == step)
                libelle = libelleButtonList[0];
        });
        return libelle;
    };
    ViewSetp.prototype.onClickButtonEvent = function (onClickEventNext, onClickEventPrevious) {
        var view = this;
        var phraseInputHTMLInputElementI = this.phraseInputHtmlElement;
        this.next.onclick = function () {
            if (!view.isLastStep(view.getCurrentStep())) {
                phraseInputHTMLInputElementI.focus();
                onClickEventNext.forEach(function (event) {
                    event.call(view.getCurrentStep(), phraseInputHTMLInputElementI.value);
                });
            }
        };
        this.previous.onclick = function () {
            onClickEventPrevious.forEach(function (event) {
                event.call(view.getCurrentStep(), phraseInputHTMLInputElementI.value);
            });
        };
    };
    ViewSetp.prototype.updateCssClassActionValidation = function (step) {
        this.previous.innerHTML = this.getLibellePreviousButton(step);
        if (step === 0) {
            ToolClassManaged.addClass(this.previous, "notvisible");
            ToolClassManaged.removeClass(this.previous, "active");
        }
        else {
            ToolClassManaged.addClass(this.previous, "active");
            ToolClassManaged.removeClass(this.previous, "notvisible");
        }
        this.next.innerHTML = this.getLibelleNextButton(step);
        if (this.isLastStep(step)) {
            ToolClassManaged.addClass(this.next, "notvisible");
            ToolClassManaged.removeClass(this.next, "active");
        }
        else {
            ToolClassManaged.removeClass(this.next, "notvisible");
            ToolClassManaged.addClass(this.next, "active");
        }
    };
    ViewSetp.prototype.updateStyleProgressBar = function (pourcentage, cssClassAdd, cssClassRemove) {
        ToolClassManaged.addClass(this.phraseInputHtmlElement.nextElementSibling, cssClassAdd);
        ToolClassManaged.removeClass(this.phraseInputHtmlElement.nextElementSibling, cssClassRemove);
        this.phraseInputHtmlElement.nextElementSibling.style.width = pourcentage + '%';
    };
    ViewSetp.prototype.updateStyleProgressBarCheckImage = function (checkImagePrint) {
        for (var i = 0; i < this.checkImageHTMLElement.length; i++) {
            if (checkImagePrint)
                ToolClassManaged.addClass(this.checkImageHTMLElement.item(i), "hidden");
            else
                ToolClassManaged.removeClass(this.checkImageHTMLElement.item(i), "hidden");
        }
    };
    ViewSetp.prototype.goToUpdateClassCssMenuValidation = function (step, move) {
        if (move === void 0) { move = 0; }
        for (var i = 0; i < this.rootTitleLisHtmlElement.length; i++) {
            if ((step + move) === i) {
                ToolClassManaged.addClass(this.rootTitleLisHtmlElement.item(i), "current");
            }
            else if ((step + move) > i) {
                ToolClassManaged.addClass(this.rootTitleLisHtmlElement.item(i), "active");
                ToolClassManaged.removeClass(this.rootTitleLisHtmlElement.item(i), "current");
            }
            else {
                ToolClassManaged.removeClass(this.rootTitleLisHtmlElement.item(i), "active");
                ToolClassManaged.removeClass(this.rootTitleLisHtmlElement.item(i), "current");
            }
        }
    };
    ViewSetp.prototype.updateClassCssMenuErrorValidation = function (step, errors) {
        if (errors === void 0) { errors = []; }
        ToolClassManaged.removeClass(this.rootTitleLisHtmlElement.item(step).querySelector("* > a"), "error");
        if (errors.length > 0)
            ToolClassManaged.addClass(this.rootTitleLisHtmlElement.item(step).querySelector("* > a"), "error");
    };
    ViewSetp.prototype.updateCheckImageByRule = function (step) {
        var elementsRule = this.getElementsInContentByStep(step, this.ruleSelector);
        for (var i = 0; i < elementsRule.length; i++) {
            var ckeckImgRuleElements = elementsRule.item(i).querySelectorAll(this.ckeckImgRule);
            if (ckeckImgRuleElements) {
                for (var j = 0; j < ckeckImgRuleElements.length; j++) {
                    if (this.phraseInputHtmlElement.value != this.defaultValueInput) {
                        ToolClassManaged.removeClass(ckeckImgRuleElements.item(j), "hidden");
                    }
                }
            }
        }
    };
    ViewSetp.prototype.showRuleError = function (step, errors) {
        var _this = this;
        errors.forEach(function (rule) {
            if (_this.getElementInContentByStep(step, rule) != null) {
                var warningrule = _this.getElementsInContentByStep(step, _this.warningruleSelector);
                var ruleHTMLElement = _this.getElementInContentByStep(step, rule);
                for (var j = 0; j < warningrule.length; j++) {
                    if (warningrule.item(j) == _this.getElementInContentByStep(step, rule)) {
                        ToolClassManaged.removeClass(ruleHTMLElement, "hidden");
                    }
                }
                ToolClassManaged.addClass(ruleHTMLElement.parentElement, "errorruleparent");
                ToolClassManaged.addClass(ruleHTMLElement, "errorrule");
                ToolClassManaged.addClass(ruleHTMLElement.querySelector(_this.ckeckImgRule), "hidden");
            }
        });
    };
    ViewSetp.prototype.updateClassCssContentValidation = function (step, errors) {
        if (errors === void 0) { errors = []; }
        this.removeAllErrorsInContent(step);
        this.updateCheckImageByRule(step);
        this.showRuleError(step, errors);
        for (var j = 0; j < this.contentHtmlElement.length; j++) {
            if (step === j)
                ToolClassManaged.removeClass(this.contentHtmlElement.item(j), "hidden");
            else
                ToolClassManaged.addClass(this.contentHtmlElement.item(j), "hidden");
        }
    };
    ViewSetp.prototype.removeAllErrorsInContent = function (step) {
        var errorNode = this.getElementsInContentByStep(step, ".errorrule");
        if (errorNode) {
            for (var i = 0; i < errorNode.length; i++) {
                if (errorNode.item(i)) {
                    ToolClassManaged.removeClass(errorNode.item(i).parentElement, "errorruleparent");
                    ToolClassManaged.removeClass(errorNode.item(i), "errorrule");
                    ToolClassManaged.addClass(errorNode.item(i).querySelector(this.ckeckImgRule), "hidden");
                    var e = this.getElementsInContentByStep(step, this.warningruleSelector);
                    for (var j = 0; j < e.length; j++) {
                        if (e.item(j) == errorNode.item(i)) {
                            ToolClassManaged.addClass(errorNode.item(i), "hidden");
                        }
                    }
                }
            }
        }
    };
    ViewSetp.prototype.isLastStep = function (step) {
        return this.rootTitleLisHtmlElement.item(step).nextSibling === null;
    };
    ViewSetp.prototype.getCountStep = function () {
        return this.rootTitleLisHtmlElement.length;
    };
    ViewSetp.prototype.getCurrentStep = function () {
        var step = 0;
        for (var i = 0; i < this.rootTitleLisHtmlElement.length; i++) {
            if (this.rootTitleLisHtmlElement.item(i).classList.contains("current")) {
                step = i;
            }
        }
        return step;
    };
    ViewSetp.prototype.updateDescriptionTransformer = function (step, transformText) {
        var descriptionTransformeHTMLElement = this.getElementInContentByStep(step, this.listTransformationSelector);
        if (descriptionTransformeHTMLElement) {
            if (transformText.length > 1)
                ToolClassManaged.removeClass(descriptionTransformeHTMLElement.parentElement.parentElement, "hidden");
            else
                ToolClassManaged.addClass(descriptionTransformeHTMLElement.parentElement.parentElement, "hidden");
            descriptionTransformeHTMLElement.innerHTML = transformText;
        }
    };
    ViewSetp.prototype.updateNotUsedTransformer = function (step, phrase, trans, transformers) {
        var _this = this;
        var notUsedTransformer = this.getElementInContentByStep(step + 1, this.notUsedTransformerSelector);
        if (notUsedTransformer) {
            var ll = notUsedTransformer.querySelectorAll("*");
            for (var i = 0; i < ll.length; i++) {
                if (ll.item(i).childElementCount == 0)
                    ll.item(i).classList.add("hidden");
            }
            if (!trans) {
                ToolClassManaged.addClass(notUsedTransformer, "hidden");
            }
            else {
                ToolClassManaged.removeClass(notUsedTransformer, "hidden");
                transformers.forEach(function (transformer) {
                    if (transformer.getSelectorNotUsed()) {
                        var t = _this.getElementInContentByStep(step + 1, transformer.getSelectorNotUsed());
                        if (t)
                            t.classList.remove("hidden");
                    }
                });
            }
        }
    };
    ViewSetp.prototype.updatePassWord = function (password, step) {
        var phraseValidateHTMLElement = this.getElementInContentByStep(step, this.phraseValidateSelector);
        if (phraseValidateHTMLElement) {
            var span = document.createElement("span");
            span.innerHTML = password.getPassWord().replace(/\s/g, '');
            phraseValidateHTMLElement.innerHTML = "";
            phraseValidateHTMLElement.appendChild(span);
        }
        for (var i = 0; i < this.phraseSaisi.length; i++) {
            this.phraseSaisi.item(i).innerHTML = this.phraseInputHtmlElement.value;
        }
    };
    ViewSetp.prototype.getElementsInContentByStep = function (step, selector) {
        return this.contentHtmlElement.item(step).querySelectorAll(selector);
    };
    ViewSetp.prototype.getElementInContentByStep = function (step, selector) {
        return this.contentHtmlElement.item(step).querySelector(selector);
    };
    return ViewSetp;
}());
var ToolClassManaged = (function () {
    function ToolClassManaged() {
    }
    ToolClassManaged.addClass = function (element, className) {
        if (element && element.className.indexOf(className) == -1) {
            element.className += " " + className;
            return true;
        }
        return false;
    };
    ToolClassManaged.removeClass = function (element, className) {
        if (element && element.className.indexOf(className) > -1) {
            element.classList.remove(className);
            return true;
        }
        return false;
    };
    return ToolClassManaged;
}());
