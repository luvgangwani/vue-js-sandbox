new Vue({
    el: '#root',
    data: {

        available: false,
        nearby: false
       
    },
    methods: {
        // if addToA and addToB are methods, both the methods are called if either of the property value changes
    },
    computed: {
        // if addToA and addToB are computed properties, only the mehtod(s) associated to the property whose value is changed is called

        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});