import LWElement from './../../lib/lw-element.js';
import ast from './ast.js';

customElements.define('ip6sh-block',
   class extends LWElement {  // LWElement extends HTMLElement
      constructor() {
         super(ast);
      }

      inputReady() {
         this.run();
      }

      formats = [
         { label: 'Full', value: 0 },
         { label: 'Short', value: 1 }
      ];

      onFocus() {
         this.shadowRoot.querySelector('input.input').select();
      }

      run() {
         if (!this.input) {
            this.inputClass = '';
            return;
         }

         try {
            const data = this.fn(this.input, this.from, this.to, this.limit, this.format * 1);
            this.result = JSON.stringify(data, null, 2);
            this.inputClass = 'is-success';
         } catch (e) {
            this.result = '';
            this.inputClass = 'is-danger';
         }
      }

   }
);
