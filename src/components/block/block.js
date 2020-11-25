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

      forms = [
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
            if (this.limit < 1) {
               this.limit = 1;
            }
            const data = this.fn(this.input, this.from, this.to, this.limit, this.form * 1);
            if (this.format === 'JSON') {
               this.result = JSON.stringify(data, null, 2);
            } else {
               if (Array.isArray(data)) {
                  this.result = data.reduce((a, c) => a + c + '\n', '');
               } else {
                  this.result = data;
               }
            }
            this.inputClass = 'is-success';
         } catch (e) {
            console.error(e);
            this.result = '';
            this.inputClass = 'is-danger';
         }
      }

      copyResult() {
         getSelection().selectAllChildren(this.shadowRoot.querySelector('.result-box>pre>code'));
         document.execCommand("copy");
      }
   }
);
