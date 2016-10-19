jQuery(function($, undefined) {
    $('#tty').terminal(function(command, term) {
        var cmd = command.split(' ');
        switch (cmd[0]) {
            case "n":
                break;
            case "s":
                break;
            case "e":
                break;
            case "w":
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
