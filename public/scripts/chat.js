/* globals $ io */

$(function() {
    const socket = io.connect('http://52.15.162.255');
    const $messageForm = $('#messageForm');
    const $message = $('#message');
    const $chat = $('#chat');
    const $userName = $('#user-name').text();
    const $users = $('#Users');

    $messageForm.submit(function(e) {
        e.preventDefault();
        socket.emit('send message', $message.val());
        $message.val('');
    });

    // io.socket.on('connection', function(userLogged) {
    //     $users.append('<li>' + $userName + '</li>');
    // });

    socket.on('new message', function(someData) {
        $chat.append('<div class="well">' +
            '<b>' + 'User: ' + '</b>' + someData.msg + '</div>');
    });
});
