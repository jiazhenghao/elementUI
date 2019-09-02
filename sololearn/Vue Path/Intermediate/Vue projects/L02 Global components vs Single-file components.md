Global Component:
const World = Vue.component(
    'World', { template: '<span>World</span>' }
);
Single-file Component:
new Vue({
    template: '<div>Hello <World/></div>',
    el: '#app'
});

Global Components Limitations:
1. Naming confliction
2. String templates which causes bad code linting
3. CSS is not encapsulatd
4. No build-time compilation support

Single-file Component:
template    section
script      section
style       section    optional

