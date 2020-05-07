new Vue({
    el: '#root',
    data: {
        header: 'Vue JS Sandbox',
        message: 'This is the Vue JS sandbox application.'
    },
    methods: {
        greet: function(time){
            return `Welcome this ${time}! ${this.message}`
        }
    }
})