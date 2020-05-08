

new Vue({
    el: '#vue-app-one',
    data: {
        favouriteFood: ''
    },
    methods: {
        
        submitFavouriteFood: function() {

            this.favouriteFood = this.$refs.txtFavFood.value;

            alert(`The div html says ${this.$refs.helloWorld.innerHTML} `);
        }

    },
    computed: {

    }
});