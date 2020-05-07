new Vue({
    el: '#root',
    data: {

        firstName: '',
        lastName: '',
        age: 0
       
    },
    methods: {
        logFirstName: function(e) {
            this.firstName = e.target.value;
        },

        logLastName: function(e) {
            this.lastName = e.target.value;
        },

        logAge: function(e) {
            this.age = e.target.value;
        }
    }
})