jQuery(function($, undefined) {
    var x = 0;
    var y = 0;
    $('#tty').terminal(function(command, term) {
        var cmd = command.split(' ');
        switch (cmd[0]) {
            case "n":
                y++;
                break;
            case "s":
                y--
                break;
            case "e":
                x++;
                break;
            case "w":
                x--;
                break;
            case "getxy":
                term.echo("X: " + x);
                term.echo("Y: " + y);
                break;
        }
    }, {
        greetings: 'Trees in the wind\nCopyright 2016 Carver Harrison',
        name: 'tty',
        height: 720,
        prompt: '# '
    });
});
