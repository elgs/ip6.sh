import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('ip6sh-header',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

   }
);
