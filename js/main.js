jQuery(function($, undefined) {
    $('#tty').terminal(function(command, term) {
        var cmd = command.split(' ');
        switch (cmd[0]) {
            case "echo":
                term.echo(cmd[1]);
                break;
        }
    }, {
        greetings: 'Terminal.js',
        name: 'tty',
        height: 720,
        prompt: '# '
    });
});
