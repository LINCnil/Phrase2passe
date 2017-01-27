var PassWord = (function () {
    function PassWord(phare, password) {
        this.phrase = phare;
        this.password = password;
    }
    PassWord.prototype.getPassWord = function () {
        return this.password;
    };
    PassWord.prototype.getPhrase = function () {
        return this.phrase;
    };
    return PassWord;
}());
