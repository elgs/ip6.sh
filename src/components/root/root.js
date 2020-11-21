import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';
import * as ip6 from 'ip6/ip6-es.js';

customElements.define('ip6sh-root',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
         this.ip6 = ip6;
      }

      subnetRange(from = 1, to = 128) {
         return [...Array(to).keys()].map(i => i + 1).slice(from - 1);
      }

      ptrRange() {
         return this.subnetRange().filter(i => i % 4 === 0);
      }

   }
);
