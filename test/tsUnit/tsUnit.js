var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Test = (function () {
    function Test() {
        var testModules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            testModules[_i] = arguments[_i];
        }
        this.privateMemberPrefix = '_';
        this.passes = [];
        this.errors = [];
        this.tests = [];
        this.reservedMethodNameContainer = new TestClass();
        this.createTestLimiter();
        for (var i = 0; i < testModules.length; i++) {
            var testModule = testModules[i];
            if (testModule.hasOwnProperty("name")) {
                var name = testModule["name"];
                this.addTestClass(new testModule, name);
            }
            else {
                for (var prop in testModule) {
                    this.addTestClass(new testModule[prop], prop);
                }
            }
        }
    }
    Test.prototype.addTestClass = function (testClass, name) {
        if (name === void 0) { name = 'Tests'; }
        this.tests.push(new TestDefinition(testClass, name));
    };
    Test.prototype.run = function (testRunLimiter) {
        if (testRunLimiter === void 0) { testRunLimiter = null; }
        var parameters = null;
        var testContext = new TestContext();
        if (testRunLimiter == null) {
            testRunLimiter = this.testRunLimiter;
        }
        for (var i = 0; i < this.tests.length; ++i) {
            var testClass = this.tests[i].testClass;
            var dynamicTestClass = testClass;
            var testsGroupName = this.tests[i].name;
            if (testRunLimiter && !testRunLimiter.isTestsGroupActive(testsGroupName)) {
                continue;
            }
            var propertyNames = FunctionPropertyHelper.getFunctionNames(testClass);
            for (var j = 0; j < propertyNames.length; j++) {
                var unitTestName = propertyNames[j];
                if (this.isReservedFunctionName(unitTestName)
                    || (unitTestName.substring(0, this.privateMemberPrefix.length) === this.privateMemberPrefix)
                    || (typeof dynamicTestClass[unitTestName] !== 'function')
                    || (testRunLimiter && !testRunLimiter.isTestActive(unitTestName))) {
                    continue;
                }
                if (typeof dynamicTestClass[unitTestName].parameters !== 'undefined') {
                    parameters = dynamicTestClass[unitTestName].parameters;
                    for (var parameterIndex = 0; parameterIndex < parameters.length; parameterIndex++) {
                        if (testRunLimiter && !testRunLimiter.isParametersSetActive(parameterIndex)) {
                            continue;
                        }
                        this.runSingleTest(testClass, unitTestName, testsGroupName, parameters, parameterIndex);
                    }
                }
                else {
                    this.runSingleTest(testClass, unitTestName, testsGroupName);
                }
            }
        }
        return this;
    };
    Test.prototype.showResults = function (target) {
        var elem;
        if (typeof target === 'string') {
            var id = target;
            elem = document.getElementById(id);
        }
        else {
            elem = target;
        }
        var template = '<article>' +
            '<h1>' + this.getTestResult() + '</h1>' +
            '<p>' + this.getTestSummary() + '</p>' +
            this.testRunLimiter.getLimitCleaner() +
            '<section id="tsFail">' +
            '<h2>Errors</h2>' +
            '<ul class="bad">' + this.getTestResultList(this.errors) + '</ul>' +
            '</section>' +
            '<section id="tsOkay">' +
            '<h2>Passing Tests</h2>' +
            '<ul class="good">' + this.getTestResultList(this.passes) + '</ul>' +
            '</section>' +
            '</article>' +
            this.testRunLimiter.getLimitCleaner();
        elem.innerHTML = template;
        return this;
    };
    Test.prototype.getTapResults = function () {
        var newLine = '\r\n';
        var template = '1..' + (this.passes.length + this.errors.length).toString() + newLine;
        for (var i = 0; i < this.errors.length; i++) {
            template += 'not ok ' + this.errors[i].message + ' ' + this.errors[i].testName + ':' + this.errors[i].funcName + newLine;
        }
        for (var i = 0; i < this.passes.length; i++) {
            template += 'ok ' + this.passes[i].testName + ':' + this.passes[i].funcName + newLine;
        }
        return template;
    };
    Test.prototype.createTestLimiter = function () {
        try {
            if (typeof window !== 'undefined') {
                this.testRunLimiter = new TestRunLimiter();
            }
        }
        catch (ex) { }
    };
    Test.prototype.isReservedFunctionName = function (functionName) {
        return FunctionPropertyHelper
            .getFunctionNames(this.reservedMethodNameContainer)
            .some(function (mem) { return mem === functionName; });
    };
    Test.prototype.runSingleTest = function (testClass, unitTestName, testsGroupName, parameters, parameterSetIndex) {
        if (parameters === void 0) { parameters = null; }
        if (parameterSetIndex === void 0) { parameterSetIndex = null; }
        if (typeof testClass['setUp'] === 'function') {
            testClass['setUp']();
        }
        try {
            var dynamicTestClass = testClass;
            var args = (parameterSetIndex !== null) ? parameters[parameterSetIndex] : null;
            dynamicTestClass[unitTestName].apply(testClass, args);
            this.passes.push(new TestDescription(testsGroupName, unitTestName, parameterSetIndex, 'OK'));
        }
        catch (err) {
            this.errors.push(new TestDescription(testsGroupName, unitTestName, parameterSetIndex, err.toString()));
        }
        if (typeof testClass['tearDown'] === 'function') {
            testClass['tearDown']();
        }
    };
    Test.prototype.getTestResult = function () {
        return this.errors.length === 0 ? 'Test Passed' : 'Test Failed';
    };
    Test.prototype.getTestSummary = function () {
        return 'Total tests: <span id="tsUnitTotalCout">' + (this.passes.length + this.errors.length).toString() + '</span>. ' +
            'Passed tests: <span id="tsUnitPassCount" class="good">' + this.passes.length + '</span>. ' +
            'Failed tests: <span id="tsUnitFailCount" class="bad">' + this.errors.length + '</span>.';
    };
    Test.prototype.getTestResultList = function (testResults) {
        var list = '';
        var group = '';
        var isFirst = true;
        for (var i = 0; i < testResults.length; ++i) {
            var result = testResults[i];
            if (result.testName !== group) {
                group = result.testName;
                if (isFirst) {
                    isFirst = false;
                }
                else {
                    list += '</li></ul>';
                }
                list += '<li>' + this.testRunLimiter.getLimiterForGroup(group) + result.testName + '<ul>';
            }
            var resultClass = (result.message === 'OK') ? 'success' : 'error';
            var functionLabal = result.funcName + ((result.parameterSetNumber === null)
                ? '()'
                : '(' + this.testRunLimiter.getLimiterForTest(group, result.funcName, result.parameterSetNumber) + ' paramater set: ' + result.parameterSetNumber + ')');
            list += '<li class="' + resultClass + '">' + this.testRunLimiter.getLimiterForTest(group, result.funcName) + functionLabal + ': ' + this.encodeHtmlEntities(result.message) + '</li>';
        }
        return list + '</ul>';
    };
    Test.prototype.encodeHtmlEntities = function (input) {
        return input.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    };
    return Test;
}());
var TestRunLimiterRunAll = (function () {
    function TestRunLimiterRunAll() {
    }
    TestRunLimiterRunAll.prototype.isTestsGroupActive = function (groupName) {
        return true;
    };
    TestRunLimiterRunAll.prototype.isTestActive = function (testName) {
        return true;
    };
    TestRunLimiterRunAll.prototype.isParametersSetActive = function (paramatersSetNumber) {
        return true;
    };
    return TestRunLimiterRunAll;
}());
var TestRunLimiter = (function () {
    function TestRunLimiter() {
        this.groupName = null;
        this.testName = null;
        this.parameterSet = null;
        this.setRefreshOnLinksWithHash();
        this.translateStringIntoTestsLimit(window.location.hash);
    }
    TestRunLimiter.prototype.isTestsGroupActive = function (groupName) {
        if (this.groupName === null) {
            return true;
        }
        return this.groupName === groupName;
    };
    TestRunLimiter.prototype.isTestActive = function (testName) {
        if (this.testName === null) {
            return true;
        }
        return this.testName === testName;
    };
    TestRunLimiter.prototype.isParametersSetActive = function (paramatersSet) {
        if (this.parameterSet === null) {
            return true;
        }
        return this.parameterSet === paramatersSet;
    };
    TestRunLimiter.prototype.getLimiterForTest = function (groupName, testName, parameterSet) {
        if (parameterSet === void 0) { parameterSet = null; }
        if (parameterSet !== null) {
            testName += '(' + parameterSet + ')';
        }
        return '&nbsp;<a href="#' + groupName + '/' + testName + '\" class="ascii">&#9658;</a>&nbsp;';
    };
    TestRunLimiter.prototype.getLimiterForGroup = function (groupName) {
        return '&nbsp;<a href="#' + groupName + '" class="ascii">&#9658;</a>&nbsp;';
    };
    TestRunLimiter.prototype.getLimitCleaner = function () {
        return '<p><a href="#">Run all tests <span class="ascii">&#9658;</span></a></p>';
    };
    TestRunLimiter.prototype.setRefreshOnLinksWithHash = function () {
        var previousHandler = window.onhashchange;
        window.onhashchange = function (ev) {
            window.location.reload();
            if (typeof previousHandler === 'function') {
                previousHandler.call(window, ev);
            }
        };
    };
    TestRunLimiter.prototype.translateStringIntoTestsLimit = function (value) {
        var regex = /^#([_a-zA-Z0-9]+)((\/([_a-zA-Z0-9]+))(\(([0-9]+)\))?)?$/;
        var result = regex.exec(value);
        if (result === null) {
            return;
        }
        if (result.length > 1 && !!result[1]) {
            this.groupName = result[1];
        }
        if (result.length > 4 && !!result[4]) {
            this.testName = result[4];
        }
        if (result.length > 6 && !!result[6]) {
            this.parameterSet = parseInt(result[6], 10);
        }
    };
    return TestRunLimiter;
}());
var TestContext = (function () {
    function TestContext() {
    }
    TestContext.prototype.setUp = function () {
    };
    TestContext.prototype.tearDown = function () {
    };
    TestContext.prototype.areIdentical = function (expected, actual, message) {
        if (message === void 0) { message = ''; }
        if (expected !== actual) {
            throw this.getError('areIdentical failed when given ' +
                this.printVariable(expected) + ' and ' + this.printVariable(actual), message);
        }
    };
    TestContext.prototype.areNotIdentical = function (expected, actual, message) {
        if (message === void 0) { message = ''; }
        if (expected === actual) {
            throw this.getError('areNotIdentical failed when given ' +
                this.printVariable(expected) + ' and ' + this.printVariable(actual), message);
        }
    };
    TestContext.prototype.areCollectionsIdentical = function (expected, actual, message) {
        var _this = this;
        if (message === void 0) { message = ''; }
        function resultToString(result) {
            var msg = '';
            while (result.length > 0) {
                msg = '[' + result.pop() + ']' + msg;
            }
            return msg;
        }
        var compareArray = function (expected, actual, result) {
            var indexString = '';
            if (expected === null) {
                if (actual !== null) {
                    indexString = resultToString(result);
                    throw _this.getError('areCollectionsIdentical failed when array a' +
                        indexString + ' is null and b' +
                        indexString + ' is not null', message);
                }
                return;
            }
            else if (actual === null) {
                indexString = resultToString(result);
                throw _this.getError('areCollectionsIdentical failed when array a' +
                    indexString + ' is not null and b' +
                    indexString + ' is null', message);
            }
            if (expected.length !== actual.length) {
                indexString = resultToString(result);
                throw _this.getError('areCollectionsIdentical failed when length of array a' +
                    indexString + ' (length: ' + expected.length + ') is different of length of array b' +
                    indexString + ' (length: ' + actual.length + ')', message);
            }
            for (var i = 0; i < expected.length; i++) {
                if ((expected[i] instanceof Array) && (actual[i] instanceof Array)) {
                    result.push(i);
                    compareArray(expected[i], actual[i], result);
                    result.pop();
                }
                else if (expected[i] !== actual[i]) {
                    result.push(i);
                    indexString = resultToString(result);
                    throw _this.getError('areCollectionsIdentical failed when element a' +
                        indexString + ' (' + _this.printVariable(expected[i]) + ') is different than element b' +
                        indexString + ' (' + _this.printVariable(actual[i]) + ')', message);
                }
            }
            return;
        };
        compareArray(expected, actual, []);
    };
    TestContext.prototype.areCollectionsNotIdentical = function (expected, actual, message) {
        if (message === void 0) { message = ''; }
        try {
            this.areCollectionsIdentical(expected, actual);
        }
        catch (ex) {
            return;
        }
        throw this.getError('areCollectionsNotIdentical failed when both collections are identical', message);
    };
    TestContext.prototype.isTrue = function (actual, message) {
        if (message === void 0) { message = ''; }
        if (!actual) {
            throw this.getError('isTrue failed when given ' + this.printVariable(actual), message);
        }
    };
    TestContext.prototype.isFalse = function (actual, message) {
        if (message === void 0) { message = ''; }
        if (actual) {
            throw this.getError('isFalse failed when given ' + this.printVariable(actual), message);
        }
    };
    TestContext.prototype.isTruthy = function (actual, message) {
        if (message === void 0) { message = ''; }
        if (!actual) {
            throw this.getError('isTrue failed when given ' + this.printVariable(actual), message);
        }
    };
    TestContext.prototype.isFalsey = function (actual, message) {
        if (message === void 0) { message = ''; }
        if (actual) {
            throw this.getError('isFalse failed when given ' + this.printVariable(actual), message);
        }
    };
    TestContext.prototype.throws = function (a, message, errorString) {
        if (message === void 0) { message = ''; }
        if (errorString === void 0) { errorString = ''; }
        var actual;
        if (typeof a === 'function') {
            actual = a;
        }
        else if (a.fn) {
            actual = a.fn;
            message = a.message;
            errorString = a.exceptionString;
        }
        var isThrown = false;
        try {
            actual();
        }
        catch (ex) {
            if (!errorString || ex.message === errorString) {
                isThrown = true;
            }
            if (errorString && ex.message !== errorString) {
                throw this.getError('different error string than supplied');
            }
        }
        if (!isThrown) {
            throw this.getError('did not throw an error', message || '');
        }
    };
    TestContext.prototype.doesNotThrow = function (actual, message) {
        try {
            actual();
        }
        catch (ex) {
            throw this.getError('threw an error ' + ex, message || '');
        }
    };
    TestContext.prototype.executesWithin = function (actual, timeLimit, message) {
        if (message === void 0) { message = null; }
        function getTime() {
            return window.performance.now();
        }
        function timeToString(value) {
            return Math.round(value * 100) / 100;
        }
        var startOfExecution = getTime();
        try {
            actual();
        }
        catch (ex) {
            throw this.getError('isExecuteTimeLessThanLimit fails when given code throws an exception: "' + ex + '"', message);
        }
        var executingTime = getTime() - startOfExecution;
        if (executingTime > timeLimit) {
            throw this.getError('isExecuteTimeLessThanLimit fails when execution time of given code (' + timeToString(executingTime) + ' ms) ' +
                'exceed the given limit(' + timeToString(timeLimit) + ' ms)', message);
        }
    };
    TestContext.prototype.fail = function (message) {
        if (message === void 0) { message = ''; }
        throw this.getError('fail', message);
    };
    TestContext.prototype.getError = function (resultMessage, message) {
        if (message === void 0) { message = ''; }
        if (message) {
            return new Error(resultMessage + '. ' + message);
        }
        return new Error(resultMessage);
    };
    TestContext.getNameOfClass = function (inputClass) {
        var funcNameRegex = /function (.{1,})\(/;
        var results = (funcNameRegex).exec(inputClass.constructor.toString());
        return (results && results.length > 1) ? results[1] : '';
    };
    TestContext.prototype.printVariable = function (variable) {
        if (variable === null) {
            return '"null"';
        }
        if (typeof variable === 'object') {
            return '{object: ' + TestContext.getNameOfClass(variable) + '}';
        }
        return '{' + (typeof variable) + '} "' + variable + '"';
    };
    return TestContext;
}());
var TestClass = (function (_super) {
    __extends(TestClass, _super);
    function TestClass() {
        return _super.apply(this, arguments) || this;
    }
    TestClass.prototype.parameterizeUnitTest = function (method, parametersArray) {
        method.parameters = parametersArray;
    };
    return TestClass;
}(TestContext));
var FakeFactory = (function () {
    function FakeFactory() {
    }
    FakeFactory.getFake = function (obj) {
        var implementations = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            implementations[_i - 1] = arguments[_i];
        }
        var fakeType = function () { };
        this.populateFakeType(fakeType, obj);
        var fake = new fakeType();
        var propertyNames = FunctionPropertyHelper.getAllPropertyNames(obj);
        for (var k = 0; k < propertyNames.length; k++) {
            fake[propertyNames[k]] = function () { console.log('Default fake called.'); };
        }
        var memberNameIndex = 0;
        var memberValueIndex = 1;
        for (var i = 0; i < implementations.length; i++) {
            var impl = implementations[i];
            fake[impl[memberNameIndex]] = impl[memberValueIndex];
        }
        return fake;
    };
    FakeFactory.populateFakeType = function (fake, toCopy) {
        var properties = FunctionPropertyHelper.getAllPropertyNames(toCopy);
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            fake[property] = toCopy[property];
        }
        var __ = function () {
            this.constructor = fake;
        };
        __.prototype = toCopy.prototype;
        fake.prototype = new __();
    };
    return FakeFactory;
}());
var TestDefinition = (function () {
    function TestDefinition(testClass, name) {
        this.testClass = testClass;
        this.name = name;
    }
    return TestDefinition;
}());
var TestDescription = (function () {
    function TestDescription(testName, funcName, parameterSetNumber, message) {
        this.testName = testName;
        this.funcName = funcName;
        this.parameterSetNumber = parameterSetNumber;
        this.message = message;
    }
    return TestDescription;
}());
var FunctionPropertyHelper = (function () {
    function FunctionPropertyHelper() {
    }
    FunctionPropertyHelper.addIfNotExist = function (results, value) {
        if (results.indexOf(value) < 0)
            return results.push(value);
        return 0;
    };
    FunctionPropertyHelper.walkImpl = function (obj, results) {
        var _this = this;
        if (obj == null) {
            return;
        }
        var ownPropertiesOfObj = Object.getOwnPropertyNames(obj);
        ownPropertiesOfObj.forEach(function (mem) { return _this.addIfNotExist(results, mem); });
        var prototype = Object.getPrototypeOf(obj);
        if (prototype == null) {
            return null;
        }
        var propNames = Object.getOwnPropertyNames(prototype);
        propNames.forEach(function (mem) { return _this.addIfNotExist(results, mem); });
        this.walkImpl(obj.prototype, results);
        this.walkImpl(prototype, results);
    };
    FunctionPropertyHelper.walk = function (obj) {
        var results = new Array();
        this.walkImpl(obj, results);
        return results;
    };
    FunctionPropertyHelper.getFunctionNames = function (type) {
        return this.walk(type)
            .filter(function (mem) {
            var method = type[mem];
            return method instanceof Function &&
                (method !== type &&
                    method.prototype !==
                        Object
                            .getPrototypeOf(type));
        });
    };
    FunctionPropertyHelper.getAllPropertyNames = function (type) {
        var properties = this.walk(type);
        if (typeof type === "function") {
            var functionProps = this.walk(Function);
            return properties.filter(function (mem) { return !functionProps.some(function (funcProp) { return funcProp === mem; }); });
        }
        return properties.filter(function (mem) {
            var method = type[mem];
            return method !== type &&
                method.prototype !==
                    Object
                        .getPrototypeOf(type);
        });
    };
    return FunctionPropertyHelper;
}());
