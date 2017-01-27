/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: phrase2passe.transformation.test.ts 2017- 01 - 03
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
 *   - TransFormer
 *
 * @author Olivier PASQUET
 */

/**
 * {@code FirstLetterWordTransFormer test}
 */
class FirstLetterWordTransFormerTests extends TestClass {
    /**
     * @property firstLetterWordTransFormer
     * @private
     * @final
     * @type {FirstLetterWordTransFormer}
     */
    private firstLetterWordTransFormer: FirstLetterWordTransFormer = new FirstLetterWordTransFormer(0);

   /**
    * @public
    * @method addTestFirstLetterWordTransFormerTestsTrue1
    */
    public addTestFirstLetterWordTransFormerTestsTrue1() {
        var result = this.firstLetterWordTransFormer.transform("il etait ,une fois");
        this.areIdentical("ie,uf", result);
    }

   /**
    * @public
    * @method addTestFirstLetterWordTransFormerTestsTrue2
    */
    public addTestFirstLetterWordTransFormerTestsTrue2() {
        var result = this.firstLetterWordTransFormer.transform("tt % gg, dcdfdl'n");
        this.areIdentical("t%g,d'n", result);
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
/**
 * {@code SpaceTransformer test}
 */
class SpaceTransformerTests extends TestClass {
    /**
     * @property spaceTransformer
     * @private
     * @final
     * @type {SpaceTransformer}
     */
    private spaceTransformer: SpaceTransformer = new SpaceTransformer(0);

   /**
    * @public
    * @method addTestSpaceTransformerTestsTrue1
    */
    public addTestSpaceTransformerTestsTrue1() {
        var result = this.spaceTransformer.transform("il etait une, fois");
        this.areIdentical("il etait une ,  fois", result);
    }

   /**
    * @public
    * @method addTestSpaceTransformerTestsTrue2
    */
    public addTestSpaceTransformerTestsTrue2() {
        var result = this.spaceTransformer.transform("tt gg dcdfdl - nz");
        this.areIdentical("tt gg dcdfdl  -  nz", result);
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
/**
 * {@code ReplaceWordBycharcterInPassWordTransFormer test}
 */
class ReplaceWordBycharcterInPassWordTransFormerTests extends TestClass {
    /**
     * @property replaceWordBycharcterInPassWordTransFormer
     * @private
     * @final
     * @type {ReplaceWordBycharcterInPassWordTransFormer}
     */
    private replaceWordBycharcterInPassWordTransFormer: ReplaceWordBycharcterInPassWordTransFormer = new ReplaceWordBycharcterInPassWordTransFormer(0);

    /**
     * Create a new {@code ReplaceWordBycharcterInPassWordTransFormerTests} test
     *
     * @constructor
     */
    constructor() {
        super();
        
        // Parameter method addTestReplaceWordBycharcterInPassWordTransFormerTestsTrue3
        this.parameterizeUnitTest(this.addTestReplaceWordBycharcterInPassWordTransFormerTestsTrue3, Languages.valueBykey("words"));
    }

   /**
    * @public
    * @method addTestReplaceWordBycharcterInPassWordTransFormerTestsTrue1
    */
    public addTestReplaceWordBycharcterInPassWordTransFormerTestsTrue1() {
        var result = this.replaceWordBycharcterInPassWordTransFormer.transform("barre");
        this.areIdentical(" |  ", result);
    }

   /**
    * @public
    * @method addTestReplaceWordBycharcterInPassWordTransFormerTestsTrue2
    */
    public addTestReplaceWordBycharcterInPassWordTransFormerTestsTrue2() {
        var result = this.replaceWordBycharcterInPassWordTransFormer.transform("canard étoile égalité");
        this.areIdentical(" &  *  =  ", result);
    }

   /**
    * @public
    * @method addTestReplaceWordBycharcterInPassWordTransFormerTestsTrue3
    */
    public addTestReplaceWordBycharcterInPassWordTransFormerTestsTrue3(word: string, replace: string) {
        var result = this.replaceWordBycharcterInPassWordTransFormer.transform(word);
        this.areIdentical(" " + replace + "  ", result);
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
/**
 * {@code ConversioNnumberTransformer test}
 */
class ConversioNnumberTransformerTests extends TestClass {
    /**
     * @property conversioNnumberTransformer
     * @private
     * @final
     * @type {ConversioNnumberTransformer}
     */
    private conversioNnumberTransformer: ConversioNnumberTransformer = new ConversioNnumberTransformer(0);

    /**
     * @property spaceTransformer
     * @private
     * @final
     * @type {SpaceTransformer}
     */
    private spaceTransformer: SpaceTransformer = new SpaceTransformer(0);

   /**
    * @public
    * @method addTestConversioNnumberTransformerTestsTrue1
    */
    public addTestConversioNnumberTransformerTestsTrue1() {
        var result = this.conversioNnumberTransformer.transform("deux");
        this.areIdentical("2 ", result);
    }

   /**
    * @public
    * @method addTestConversioNnumberTransformerTestsTrue2
    */
    public addTestConversioNnumberTransformerTestsTrue2() {
        var result = this.conversioNnumberTransformer.transform("dix huit");
        this.areIdentical("18 ", result);
    }

   /**
    * @public
    * @method addTestConversioNnumberTransformerTestsTrue3
    */
    public addTestConversioNnumberTransformerTestsTrue3() {
        var result1 = this.spaceTransformer.transform("neuf cent quatre-vingt-sept milliards six cent cinquante-quatre millions trois cent vingt et un mille sept cent quatre-vingt et une");
        var result2 = this.conversioNnumberTransformer.transform(result1);
        this.areIdentical("987654321781 ", result2);
    }

   /**
    * @public
    * @method addTestConversioNnumberTransformerTestsTrue4
    */
    public addTestConversioNnumberTransformerTestsTrue4() {
        var result1 = this.spaceTransformer.transform("sept cent vingt mille et trois cent quatre-vingt cinq");
        var result2 = this.conversioNnumberTransformer.transform(result1);
        this.areIdentical("720385 ", result2);
    }

   /**
    * @public
    * @method addTestConversioNnumberTransformerTestsTrue5
    */
    public addTestConversioNnumberTransformerTestsTrue5() {
        var result1 = this.spaceTransformer.transform("");
        var result2 = this.conversioNnumberTransformer.transform(result1);
        this.areIdentical(" ", result2);
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
/**
* {@code TransFormerServiceTests test}
*/
class TransFormerServiceTests extends TestClass {
    /**
     * @property transFormerServiceAllValidation
     * @private
     * @final
     * @type {TransFormerService}
     */
    private transFormerServiceAllValidation: TransFormerService;
    /**
     * @property transFormerServiceFalseValidation
     * @private
     * @final
     * @type {TransFormerService}
     */
    private transFormerServiceFalseValidation: TransFormerService;

    /**
     * Create a new {@code TransFormerServiceTests} test
     *
     * @constructor
     */
    constructor() {
        super();

        // All validation
        this.transFormerServiceAllValidation = ToolTransformationTest.createTransFormerService();

        // False validation
        this.transFormerServiceFalseValidation = ToolTransformationTest.createTransFormerService();

        // parameter method addTestTransFormerServiceTestsTrue1
        this.parameterizeUnitTest(this.addTestTransFormerServiceTestsTrue1, [
            ["U:-)v1000m!!", "Un sourire vaut mille mots!!"],
            ["L'hqv3000000000", "L'homme qui valait trois milliards"],
            ["Ugdcvmq10ad'e", "Un gramme de chance vaut mieux que dix ans d'expérience"],
            ["@c8rv,P75002", "adresse cnil 8 rue vienne, Paris 75002"],
            ["Oncglmja30a.", "On ne comprend guère le mot jeunesse avant trente ans."],
            ["Jcq4s4,S,&q8s8", "Je crois que deux et deux sont quatre, Sganarelle, et que quatre et quatre sont huit"],
            ["Lmc'erà2lpq'on'apet1", "Le mariage c'est résoudre à deux les problèmes qu'on n'aurait pas eus tout seul"],
            ["Lr*enl5s1638", "Le roi soleil est né le 5 septembre 1638"],
            ["L*eà1501000000dkdlt", "Le soleil est à 150 millions de km de la terre"],
            ["1#p4°d.Tscolml", "un carré possède quatre angles droits. Tous ses côtés ont la même longueur"],
            ["Lmd'1d3pceep", "La maison d'un des trois petits cochons est en pierre"],
            ["C:987654321781v", "Chiffre : neuf cent quatre-vingt-sept milliards six cent cinquante-quatre millions trois cent vingt et un mille sept cent quatre-vingt et une voiture"]
        ]);

        // parameter method addTestTransFormerServiceTestsTrue2
        this.parameterizeUnitTest(this.addTestTransFormerServiceTestsTrue2, [
            ["U:-)v1000m!!", "Un sourire vaut mille mots!!"],
            ["L'hqv3000000000", "L'homme qui valait trois milliards"],
            ["Ugdcvmq10ad'e", "Un gramme de chance vaut mieux que dix ans d'expérience"],
            ["@c8rv,P75002", "adresse cnil 8 rue vienne, Paris 75002"],
            ["Oncglmja30a.", "On ne comprend guère le mot jeunesse avant trente ans."],
            ["Jcq4s4,S,&q8s8", "Je crois que deux et deux sont quatre, Sganarelle, et que quatre et quatre sont huit"],
            ["Lmc'erà2lpq'on'apet1", "Le mariage c'est résoudre à deux les problèmes qu'on n'aurait pas eus tout seul"],
            ["Lr*enl5s1638", "Le roi soleil est né le 5 septembre 1638"],
            ["L*eà1501000000dkdlt", "Le soleil est à 150 millions de km de la terre"],
            ["1#p4°d.Tscolml", "un carré possède quatre angles droits. Tous ses côtés ont la même longueur"],
            ["Lmd'1d3pceep", "La maison d'un des trois petits cochons est en pierre"],
            ["C:987654321781v", "Chiffre : neuf cent quatre-vingt-sept milliards six cent cinquante-quatre millions trois cent vingt et un mille sept cent quatre-vingt et une voiture"]
        ]);
    }

   /**
    * @public
    * @method addTestTransFormerServiceTestsTrue1
    */
    public addTestTransFormerServiceTestsTrue1(mdp: string, phrase: string) {
        this.areIdentical(mdp, this.transFormerServiceAllValidation.execute(phrase,0).getPassWord());
    }

   /**
    * @public
    * @method addTestTransFormerServiceTestsTrue2
    */
    public addTestTransFormerServiceTestsTrue2(mdp: string, phrase: string) {
        this.areIdentical(mdp, this.transFormerServiceFalseValidation.execute(phrase,0).getPassWord());
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
/**
 * {@code ToolTransformationTest tool}
 */
class ToolTransformationTest {
   /**
    * @public
    * @static
    * @method createTransFormerService
    * @returns {TransFormerService}
    */
    public static createTransFormerService(): TransFormerService {
        return new TransFormerService([
            new ReplaceWordBycharcterInPassWordTransFormer(0),
            new ConversioNnumberTransformer(0),
            new FirstLetterWordTransFormer(0),
            new SpaceTransformer(0)
        ]);
    }
}