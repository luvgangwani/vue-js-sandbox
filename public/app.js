// any change made to a data property in a component remains local to a component, however if the data property is defined outside the component any changes made to that property would be reflected to the entire application

// const data = {
//     name: 'Test One'
// }

Vue.component('greeting', {
    template: `
    <p>
    Greetings, I am a re-usable Vue Component. My name is {{ name }}
    <br/>
    <button type="button" v-on:click="changeName()">Change my name</button>
    </p>
    `,
    data: function() {
        return {
            name: 'Test One'
        };
    },
    methods: {
        changeName: function() {
            this.name = 'Test Two';
        }
    }
})

new Vue({
    el: '#vue-app-one',
    data: {

    },
    methods: {
        
    },
    computed: {

    }
});

new Vue({
    el: '#vue-app-two',
    data: {
       
    },
    methods: {
        
    },
    computed: {
        
    }
});