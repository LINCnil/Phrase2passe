/**
 * Password Cnil plugin 1.0
 * Copyright ©Commission Nationale de l' Informatique et des Libertés (CNIL) - Olivier PASQUET $
 * Revision: $Id: phrase2passe.model.ts 2017- 01 - 03
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
 * This file "phrase2passe.model.ts" is used to represent the password
 *
 * Package of plugin :
 *   - Model   
 *
 * @author Olivier PASQUET
 */


/**
 * Package Model
 * 
 * @class {@oce PassWord}
 */
class PassWord {

    /**
     * @property phrase
     * @private
     * @final
     * @type {string}
     */
    private phrase: string;

    /**
     * @property password
     * @private
     * @type {string}
     */
    private password: string;

    /**
     * Create a new {@code Phrase} object
     *
     * @constructor
     * @param {string} phare
     * @param {string} password
     */
    constructor(phare: string, password: string) {
        this.phrase = phare;
        this.password = password;
    }

    /**
     * Returns the password generated
     * 
     * @public
     * @method getPassWord
     * @retrun {string}
     */
    public getPassWord(): string {
        return this.password;
    }

    /**
     * Returns the phrase {input.value}
     * 
     * @public
     * @method getPhrase
     * @retrun {string}
     */
    public getPhrase(): string {
        return this.phrase;
    }
}