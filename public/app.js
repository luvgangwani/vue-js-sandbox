new Vue({
    el: '#root',
    data: {
       age: 28,
       xVal: 0,
       yVal: 0
    },
    methods: {
        add: function(increment) {
            this.age += increment;
        },

        subtract: function(decrement) {
            this.age -= decrement;
        },

        changeXY: function(e) {
            this.xVal = e.offsetX;
            this.yVal = e.offsetY;
        },

        gitHubLinkClick: function() {
            alert("GitHub link clicked");
        }
    }
})