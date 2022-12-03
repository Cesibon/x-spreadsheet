import Dropdown from './dropdown';
import Icon from './icon';
import { h } from './element';
import formulas from '../core/formula';
import { cssPrefix } from '../config';

export default class DropdownFormula extends Dropdown {
  constructor() {
    const nformulas = formulas.map(it => h('div', `${cssPrefix}-item`)
      .on('click', () => {
        this.hide();
        this.change(it);
      })
      .child(it.key));
    super(new Icon('formula'), '180px', true, 'bottom-left', ...nformulas);
  }
}