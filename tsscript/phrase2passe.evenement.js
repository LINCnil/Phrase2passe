var StepChangeDescriptionEvent = (function () {
    function StepChangeDescriptionEvent(view, transFormerService) {
        this.view = view;
        this.transFormerService = transFormerService;
    }
    StepChangeDescriptionEvent.prototype.call = function (step, phrase) {
        var transformText = this.transFormerService.transformList(phrase, step);
        this.view.updateDescriptionTransformer(step + 1, transformText);
    };
    return StepChangeDescriptionEvent;
}());
var StepChangePreviousEvent = (function () {
    function StepChangePreviousEvent(view, transFormerService, callValidatorCallDirectAtStep) {
        this.view = view;
        this.transFormerService = transFormerService;
        this.callValidatorCallDirectAtStep = callValidatorCallDirectAtStep;
    }
    StepChangePreviousEvent.prototype.call = function (step, phrase) {
        if (step > 0) {
            var password = this.transFormerService.execute(phrase, step);
            this.view.updateClassCssMenuErrorValidation(step);
            this.view.goToUpdateClassCssMenuValidation(step - 1);
            var rulesWarning = this.callValidatorCallDirectAtStep.getSelectorsErrorByStep(password, step - 1);
            this.view.updateClassCssMenuErrorValidation(step - 1, rulesWarning);
            this.view.updateClassCssContentValidation(step - 1, rulesWarning);
            this.view.updateCssClassActionValidation(step - 1);
        }
    };
    return StepChangePreviousEvent;
}());
var NotUsedTransformerEvent = (function () {
    function NotUsedTransformerEvent(view, transFormerService) {
        this.view = view;
        this.transFormerService = transFormerService;
    }
    NotUsedTransformerEvent.prototype.call = function (step, phrase) {
        var trans = this.transFormerService.isTransform(phrase, step);
        var transformers = this.transFormerService.getTransformerNotUsed(phrase, step);
        this.view.updateNotUsedTransformer(step, phrase, trans, transformers);
    };
    return NotUsedTransformerEvent;
}());
var StepChangeAndValidAndNextEvent = (function () {
    function StepChangeAndValidAndNextEvent(callValidatorServiceCallToNextStep, view, callValidatorCallDirectAtStep, transFormerService) {
        this.callValidatorServiceCallToNextStep = callValidatorServiceCallToNextStep;
        this.view = view;
        this.callValidatorCallDirectAtStep = callValidatorCallDirectAtStep;
        this.transFormerService = transFormerService;
    }
    StepChangeAndValidAndNextEvent.prototype.call = function (step, phrase) {
        var password = this.transFormerService.execute(phrase, step);
        var errorRules = this.callValidatorServiceCallToNextStep.getSelectorsErrorByStep(password, step);
        this.view.updateClassCssMenuErrorValidation(step, errorRules);
        this.view.updateClassCssContentValidation(step, errorRules);
        if (this.callValidatorServiceCallToNextStep.callStepByStep(password, step)) {
            this.view.goToUpdateClassCssMenuValidation(step + 1);
            var rulesWarningError = this.callValidatorCallDirectAtStep.getSelectorsErrorByStep(password, step + 1);
            this.view.updatePassWord(password, step + 1);
            this.view.updateClassCssMenuErrorValidation(step + 1, rulesWarningError);
            this.view.updateClassCssContentValidation(step + 1, rulesWarningError);
            this.view.updateCssClassActionValidation(step + 1);
        }
    };
    return StepChangeAndValidAndNextEvent;
}());
var ProgressBarValidationEvent = (function () {
    function ProgressBarValidationEvent(callValidatorServiceCallToNextStep, view, transFormerService) {
        this.callValidatorServiceCallToNextStep = callValidatorServiceCallToNextStep;
        this.view = view;
        this.transFormerService = transFormerService;
    }
    ProgressBarValidationEvent.prototype.call = function (step, phrase) {
        var passWord = this.transFormerService.execute(phrase, step);
        var rulesError = this.callValidatorServiceCallToNextStep.getSelectorsErrorByStep(passWord, step);
        this.view.updateClassCssContentValidation(step, rulesError);
        if (passWord.getPhrase().length > 0) {
            var pourcentage = this.percentage(this.callValidatorServiceCallToNextStep.getMaxPointStepByStep(step), this.callValidatorServiceCallToNextStep.callValidatorGetPointByStep(passWord, step));
            if (pourcentage < 98) {
                this.updateProgressBarCssAndCheckImage(pourcentage, "error", "success", true);
            }
            else {
                if (this.callValidatorServiceCallToNextStep.callStepByStep(passWord, step)) {
                    this.updateProgressBarCssAndCheckImage(100, "success", "error", false);
                }
                else {
                    this.updateProgressBarCssAndCheckImage(100, "error", "success", false);
                }
            }
        }
        else {
            this.updateProgressBarCssAndCheckImage(0, "success", "error", true);
        }
    };
    ProgressBarValidationEvent.prototype.updateProgressBarCssAndCheckImage = function (pourcentage, cssClassAdd, cssClassRemove, checkImagePrint) {
        this.view.updateStyleProgressBar(pourcentage, cssClassAdd, cssClassRemove);
        this.view.updateStyleProgressBarCheckImage(checkImagePrint);
    };
    ProgressBarValidationEvent.prototype.percentage = function (total, value) {
        return Math.ceil(100 + (((value - total) / total) * 100));
    };
    return ProgressBarValidationEvent;
}());
