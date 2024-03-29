import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';
import ip6 from 'https://cdn.jsdelivr.net/gh/elgs/ip6/ip6.js';

customElements.define('ip6sh-root',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         this.ip6 = ip6;
      }

      subnetRange(from = 0, to = 128) {
         return [...Array(to + 1).keys()].slice(from);
      }

      ptrRange() {
         return this.subnetRange().filter(i => i % 4 === 0);
      }

   }
);
