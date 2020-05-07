new Vue({
    el: '#root',
    data: {
        header: 'Vue JS Sandbox',
        message: 'This is the Vue JS sandbox application.',
        gitUrl: 'https://github.com/luvgangwani',
        ageValue: 28,
        linkedInUrlHtml: '<a href="https://www.linkedin.com/in/luv-gangwani/" target="_blank">LinkedIn Profile</a>'
    },
    methods: {
        greet: function(time){
            return `Welcome this ${time}! ${this.message}`
        }
    }
})