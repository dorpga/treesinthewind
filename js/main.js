jQuery(function($, undefined) {
    var map = {
        "0,0": {
            name: "Porch",
            desc: "You are standing on a porch",
            directions: {
                north: true,
            }
        }
    }
    
    var x = 0;
    var y = 0;
    var curmap;
    
    $('#tty').terminal(function(command, term) {
        curmap = map[x + "," + y];
        term.echo(curmap.name);
        term.echo(curmap.desc);
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
