/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: phrase2passe.language.ts 2017- 01 - 03
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
 * This file "phrase2passe.language.ts" is used to managed the HTML event
 *
 * Package of plugin :
 *   - Language
 *
 * @author Olivier PASQUET
 */

/**
 * @class {@code Languages}
 */
class Languages {

    /**
     * Language french
     *
     * @property language_password_fr
     * @private
     * @final
     * @static
     * @type {any}
     */
    private static language_password_fr: any =
    {
        "language": "fr",
        "number": {
            'zéro': 0,
            'une': 1,
            'un': 1,
            'deux': 2,
            'trois': 3,
            'quatre': 4,
            'cinq': 5,
            'six': 6,
            'sept': 7,
            'huit': 8,
            'neuf': 9,
            'dix': 10,
            'onze': 11,
            'douze': 12,
            'treize': 13,
            'quatorze': 14,
            'quinze': 15,
            'seize': 16,
            'vingt': 20,
            'trente': 30,
            'quarante': 40,
            'cinquante': 50,
            'soixante': 60,
            'cent': 100,
            'cents': 100,
            'mille': 1000,
            'milles': 1000,
            'millier': 1000,
            'milliers': 1000,
            'million': 1000000,
            'millions': 1000000,
            'milliard': 1000000000,
            'milliards': 1000000000,
            'billion': 1000000000000,
            'billions': 1000000000000,
            'billiard': 1000000000000000,
            'billiards': 1000000000000000,
            'trillion': 1000000000000000000,
            'trillions': 1000000000000000000,
            'trilliard': 1000000000000000000000,
            'trilliards': 1000000000000000000000,
            'quadrillion': 1000000000000000000000000,
            'quadrillions': 1000000000000000000000000,
            'quadrilliard': 1000000000000000000000000000,
            'quadrilliards': 1000000000000000000000000000,
            'quintillion': 1000000000000000000000000000000,
            'quintillions': 1000000000000000000000000000000
        },
        "words" : [
            ["étoile", "*"], ["etoile", "*"], ["astérisque", "*"], ["asterisque", "*"], ["soleil", "*"], ["flocon", "*"], ["neige", "*"],
            ["et", "&"], ["oiseau", "&"], ["poule", "&"], ["canard", "&"], ["oie", "&"],
            ["deux points", ":"],
            ["point virgule", ";"],
            ["chapeau", "^"], ["pointu", "^"], ["pointe", "^"], ["cône", "^"], ["cone", "^"], ["montagne", "^"], ["toit", "^"], ["sommet", "^"],
            ["plus", "+"], ["addition", "+"], ["plusieurs", "+"], ["augmente", "+"], ["augmenté", "+"], ["croissance", "+"],
            ["moins", "-"], ["union", "-"], ["trait", "-"], ["soustraction", "-"],
            ["bas", "_"], ["underscore", "_"], ["sol", "_"], ["planche", "_"],
            ["dollar", "$"], ["americain", "$"], ["amerique", "$"], ["usa", "$"],
            ["carré", "#"], ["dièse", "#"], ["diese", "#"],
            ["degré", "°"], ["alcool", "°"], ["angle", "°"], ["bulle", "°"],
            ["vague", "~"], ["tilde", "~"], ["mer", "~"], ["ocean", "~"], ["océan", "~"],
            ["égale", "="], ["egale", "="], ["égalité", "="], ["parité", "="], ["paire", "="], ["couple", "="], ["duo", "="],
            ["internet", "@"], ["email", "@"], ["e-mail", "@"], ["courriel", "@"], ["mail", "@"], ["adresse", "@"],
            ["question", "?"], ["interrogation", "?"], ["enigme", "?"], ["devinette", "?"], ["enquete", "?"], ["enquête", "?"], ["questionnaire", "?"],
            ["exclamation", "!"], ["attention", "!"], ["danger", "!"], ["prudence", "!"],
            ["clin d'oeil", ";-)"],
            ["sourire", ":-)"], ["smile", ":-)"], ["heureux", ":-)"], ["souri", ":-)"], ["plaisir", ":-)"], ["content", ":-)"],
            ["pourcent", "%"], ["pourcentage", "%"],
            ["euro", "€"], ["europe", "€"], ["européen", "€"], ["européenne", "€"], ["argent", "€"],
            ["point", "."], ["bille", "."], ["caillou", "."],
            ["descendu", "\\"], ["pente", "\\"], ["descente", "\\"], ["barre oblique", "\\"],
            ["barre", "|"], ["tige", "|"], ["mur", "|"], ["fil", "|"], ["ligne", "|"],
            ["monte", "/"], ["monté", "/"], ["cote", "/"], ["côte", "/"],
            ["crochet", "["], ["agrafe", "["],
            ["lol", ":-D"], ["mdr", ":-D"], ["rire", ":-D"], ["rigole", ":-D"], ["drole", ":-D"], ["drôle", ":-D"], ["amusant", ":-D"], ["langue", ":-P"],
            ["grimace", ":-("], ["triste", ":-("], ["malheureux", ":-("],
            ["inférieur", "<"], ["gauche", "<"],
            ["supérieur", ">"], ["droite", ">"],
            ["seul", "1"], ["unique", "1"], ["premier", "1"], ["première", "1"],
            ["virgule", ","],
            ["surpris", ":-o"], ["émerveillé", ":-o"], ["étonné", ":-o"], ["étonnant", ":-o"], ["épatant", ":-o"], ["surprenant", ":-o"],
            ["secret", ":-#"], ["confidentiel", ":-#"],
            ["méfiant", ":-/"], ["perplexe", ":-/"], ["indécis", ":-/"]
        ],
        "ReplaceWordBycharcterInPassWordTransFormer_updateIfFindWord_start": "Transformation du mot ",
        "ReplaceWordBycharcterInPassWordTransFormer_updateIfFindWord_middle": " en caract&egrave;re sp&eacute;cial ",
        "ConversioNnumberTransformer_detailTransform_start": "Transformation du nombre ",
        "ConversioNnumberTransformer_detailTransform_middle": " en ",
        "word_and": "et",
        "end_word": [" ", "es", "s",  "e", "x", "r", "er"]
        
    };


    /**
     * Language english
     *
     * @property language_password_en
     * @private
     * @final
     * @static
     * @type {any}
     */
    private static language_password_en: any =
    {
        "language": "en",
        "number": {
            'zero': 0,
            'one': 1,
            'two': 2,
            'three': 3,
            'four': 4,
            'cinq': 5,
            'six': 6,
            'seven': 7,
            'eight': 8,
            'nine': 9,
            'ten': 10,
            'eleven': 11,
            'twelve': 12,
            'thirteen': 13,
            'fourteen': 14,
            'fifteen': 15,
            'sixteen ': 16,
            'seventeen ': 17,
            'eighteen  ': 18,
            'nineteen  ': 19,
            'twenty': 20,
            'thirty': 30,
            'forty': 40,
            'fifty': 50,
            'sixty': 60,
            'seventy': 70,
            'eighty': 80,
            'ninety': 90,
            'hundred': 100,
            'cents': 100,
            'thousand': 1000,
            'thousands': 1000,
            'million': 1000000,
            'millions': 1000000,
            'billion': 1000000000,
            'billions': 1000000000,
            'trillion': 1000000000000,
            'trillions': 1000000000000,
            'billiard': 1000000000000000,
            'billiards': 1000000000000000
        },
        "words": [
            ["bar", "|"], ["rod", "|"], ["wall", "|"], ["wire", "|"], ["line", "|"],
            ["star", "*"], ["asterisk", "*"], ["sun", "*"], ["flake", "*"], ["snowflake", "*"], ["snow", "*"],
            ["and", "&"], ["bird", "&"], ["chicken", "&"], ["duck", "&"], ["goose", "&"],
            ["two points", ":"], ["colon", ":"],
            ["semicolon", ";"],
            ["hat", "^"], ["sharp", "^"], ["point", "^"], ["cone", "^"], ["mountain", "^"], ["roof", "^"], ["summit", "^"],
            ["more", "+"], ["add", "+"], ["many", "+"], ["increase", "+"], ["growth", "+"],
            ["minus", "-"], ["union", "-"], ["trace", "-"], ["subtraction", "-"],
            ["low", "_"], ["underscore", "_"], ["ground", "_"], ["board", "_"], ["floor", "_"],
            ["dollar", "$"], ["american", "$"], ["america", "$"], ["usa", "$"], ["money", "$"],
            ["square", "#"], ["sharp", "#"],
            ["degree", "°"], ["fahrenheit", "°"],  ["alcohol", "°"], ["angle", "°"], ["bubble", "°"],
            ["wave", "~"], ["tilde", "~"], ["sea", "~"], ["ocean", "~"], ["equivalence", "~"], ["similar", "~"],
            ["equal", "="], ["equality", "="], ["parity", "="], ["pair", "="], ["couple", "="], ["duo", "="],
            ["internet", "@"], ["email", "@"], ["e-mail", "@"], ["mail", "@"], ["address", "@"],
            ["question", "?"], ["search", "?"], ["enigma", "?"], ["riddle", "?"], ["investigation", "?"], ["survey", "?"],
            ["exclamation", "!"], ["warning", "!"], ["danger", "!"], ["dangerous", "!"], ["caution", "!"],
            ["wink", ";-)"],
            ["smile", ":-)"], ["happy", ":-)"], ["pleasure", ":-)"], ["joy", ":-)"], ["enjoyment", ":-)"], ["content", ":-)"],
            ["percent", "%"], ["percentage", "%"],
            ["euro", "€"], ["europe", "€"], ["european", "€"],
            ["point", "."], ["ball", "."], ["pebble", "."],
            ["descended", "\\"], ["slope", "\\"], ["descent", "\\"], ["slash", "\\"],
            ["mounted", "/"], ["climb", "/"], ["side", "/"],
            ["hook", "["], ["clip", "["],
            ["lol", ":-D"], ["laugh", ":-D"], ["funny", ":-D"], ["amusing", ":-D"], ["language", ":-P"],
            ["grimace", ":-("], ["grim", ":-("], ["sad", ":-("], ["unfortunate", ":-("],
            ["inferior", "<"], ["less", "<"], ["left", "<"],
            ["superior", ">"], ["right", ">"], ["greater", ">"], 
            ["alone", "1"], ["unique", "1"], ["only", "1"], ["first", "1"],
            ["comma", ","],
            ["surprised", ":-o"], ["amazed", ":-o"], ["amazing", ":-o"], ["stunning", ":-o"], ["surprising", ":-o"],
            ["secret", ":-#"], ["confidential", ":-#"],
            ["mistrustful", ":-/"], ["suspicious", ":-/"], ["perplexed", ":-/"], ["undecided", ":-/"]
        ],
        "ReplaceWordBycharcterInPassWordTransFormer_updateIfFindWord_start": "Transformation of word ",
        "ReplaceWordBycharcterInPassWordTransFormer_updateIfFindWord_middle": " to special character ",
        "ConversioNnumberTransformer_detailTransform_start": "Transformation of number ",
        "ConversioNnumberTransformer_detailTransform_middle": " to ",
        "word_and": "and",
        "end_word": [" ", "ed", "es", "s"]
    };

    /**
     * Language fr is the default value
     *
     * @property language
     * @private
     * @static
     * @final
     * @type {string} default is "fr"
     */
    public static language: string = "fr";

    /**
     * @property language_password
     * @private
     * @static
     * @final
     * @type {any []}
     */
    private static language_password: any = Languages.init();

    /**
     * Init method
     * 
     * @method init
     * @private
     * @static
     * @returns {any[]}
     */

    private static init() : any [] {
        return Languages.initLanguage([
                   Languages.language_password_fr,
                   Languages.language_password_en
        ]);
    }

    /**
     * Init the list
     * 
     * @method initLanguage
     * @private
     * @static
     * @param {any[]} languages
     * @returns {any[]}
     */
    private static initLanguage(languages: any[]): any[] {
        let language_password: any[] = [];
        //init list
        languages.forEach(language => {
            language_password.push(language.language);
        });
        //init content of list
        languages.forEach(language => {
            language_password[language.language] = language;
        });
        return language_password;
    }

    /**
     * Get value
     * 
     * @method valueBykey
     * @private
     * @static
     * @param {string} key
     * @returns {any}
     */
    public static valueBykey(key: string): any {
        return this.language_password[Languages.language][key];
    }
}