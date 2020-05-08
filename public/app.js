new Vue({
    el: '#root',
    data: {

        a: 0,
        b: 0,
        age: 20
       
    },
    methods: {
        // if addToA and addToB are methods, both the methods are called if either of the property value changes
    },
    computed: {
        // if addToA and addToB are computed properties, only the mehtod(s) associated to the property whose value is changed is called

        addToA: function () {
            return this.age + this.a;
        },

        addToB: function () {
            return this.age + this.b;
        }
    }
});