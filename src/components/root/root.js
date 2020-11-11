import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';
import ip6 from 'ip6';

customElements.define('ip6sh-root',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         this.ip6 = ip6;
      }
   }
);
