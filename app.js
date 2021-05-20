const number = Vue.createApp({
    data() {
        return {
            counter : 0
        }
    },
    mounted() {
        setInterval(() => {
            this.counter++
        }, 1000)
    },
});
number.mount('#counter');

const AttributeBinding = Vue.createApp({
    data() {
        return {
            message : 'Vous avez chargez cette page le ' + new Date().toLocaleString()
        }
    },
})
AttributeBinding.mount('#bind-attribute');

const messageInverser = Vue.createApp({
    data() {
        return {
            messageInv : 'Hello World !',
        }
    },
    methods: {
        inverser(){
          this.messageInv = this.messageInv
          .split('')
          .reverse()
          .join('')
        }
    },
})
messageInverser.mount('#event-handling');

const TwoWayBinding = Vue.createApp({
    data() {
        return {
            form : 'Hello world'
        }
    },
})
TwoWayBinding.mount('#two-way-binding');

const seen = {
    data() {
        return {
            seen : true,
        }
    },
    methods: {
        faireDisparaitre(){
            this.seen = false;
        },
        faireApparaitre(){
            this.seen = true;
        }
    },
}
Vue.createApp(seen).mount('#conditional-rendering');

const demo = Vue.createApp({
    data() {
        return {
            show: true
        }
    },
})
demo.mount("#demo");

const momo = Vue.createApp({
    data() {
        return {
            show : true
        }
    },
})

momo.mount("#momo");

const entering = Vue.createApp({
    data() {
        return {
            show : true
        }
    },
    // methods: {
    //     example(){
    //         document.querySelector("#entering").classList.add("bounce-enter-active")
    //     }
    // },
})
entering.mount("#entering")






