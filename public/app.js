new Vue({
    el: '#root',
    data: {

        employees: ['Test One', 'Test Two', 'Test Three'],
        demographics: [
            {
                name: 'Test One',
                age: 25
            },
            {
                name: 'Test Two',
                age: 35
            },
            {
                name: 'Test Three',
                age: 45
            }
        ]
       
    },
    methods: {
        // if addToA and addToB are methods, both the methods are called if either of the property value changes
    },
    computed: {
        // if addToA and addToB are computed properties, only the mehtod(s) associated to the property whose value is changed is called
    }
});