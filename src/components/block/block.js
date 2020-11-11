import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('ip6sh-block',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      run() {
         try {
            this.result = this.fn(this.input);
         } catch (e) { }
      }
   }
);
