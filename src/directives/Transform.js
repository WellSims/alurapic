import Vue from 'vue';

Vue.directive('meu-transform', {

    bind(el, binding, vnode) {
      let current = 0;

      el.addEventListener('dblclick', function() {

        let inc = binding.value || 90;
        let efeito;

        if(!binding.arg || binding.arg == 'rotate'){
        if(binding.modifiers.reverse){
          current-=inc;
        } else {
          current+=inc;
        }
        efeito = `rotate(${current}deg)`;
      } else if(binding.arg =="scale") {
        efeito = `scale(${inc})`;
      }

        this.style.transform = efeito;

        if(binding.modifiers.animate){
          el.style.transition = 'transform 0.5s'
        };
      });
    }
});
