const vueAppOne = new Vue({
    el: '#vue-app-one',
    data: {
       title: 'Vue App One'
    },
    methods: {
        
    },
    computed: {

        greet: function() {
            return `Greetings from ${this.title}`
        }
        
    }
});

const vueAppTwo = new Vue({
    el: '#vue-app-two',
    data: {
       title: 'Vue App Two'
    },
    methods: {
        changeTitle: function() {
            vueAppOne.title = 'Changed title one by title two';
        }
    },
    computed: {

        greet: function() {
            return `Greetings from ${this.title}`
        }
        
    }
});

vueAppTwo.title = "Changing title two from outside"