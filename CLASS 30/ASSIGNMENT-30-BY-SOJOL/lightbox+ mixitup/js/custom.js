$(window).ready(function(){


var mixer = mixitup('.container', {
    animation: {
        effects: 'fade translateZ(-100px)',
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        queueLimit: 5
    }
});
}) 