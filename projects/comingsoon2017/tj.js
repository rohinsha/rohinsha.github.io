var end = new Date('02/31/2017 10:11 AM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var h = Math.floor((distance % _day) / _hour);
        var m = Math.floor((distance % _hour) / _minute);
        var s = Math.floor((distance % _minute) / _second);
                
                days=(days<10) ? "0" + days : days;
                h = (h < 10) ? "0" + h : h;
                m = (m < 10) ? "0" + m : m;
                s = (s < 10) ? "0" + s : s;
        document.getElementById('countdown').innerHTML = days + ' : ';
        document.getElementById('countdown').innerHTML += h + ' : ';
        document.getElementById('countdown').innerHTML += m + ' : ';
        document.getElementById('countdown').innerHTML += s;
    }

    timer = setInterval(showRemaining, 1000);