// Objective 1
$('#1').append('<button class="btn btn-primary">Click Me!</button>').on('click', () => {
    alert('This message brought to you by JQuery!');
});

// Objective 2
$('#button2').on('click', () => {
    alert('You typed: "' + $('#input2').val() + '"');
});

// Objective 3
$('#div3').on('mouseover', () => {
    $('#div3').addClass('bg-danger');
});
$('#div3').on('mouseout', () => {
    $('#div3').removeClass('bg-danger');
});

// Objective 4
$('#p4').on('click', () => {
    $('#p4').css('color', `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`);
});

// Objective 5
$('#button5').on('click', () => {
    $('#div5').append('<span>Chadwick Geyser </span');
});

// Objective 6
const friends = ['Buddy', 'Kitty', 'Teia', 'Zoe', 'Chloe', 'Shiloh', 'Samara', 'Scarlett', 'Fred', 'Nooky', 'Coco', 'Bella', 'Thor'];
$('#button6').on('click', () => {
    friends.forEach(friend => {
        $('#ul6').append('<li>' + friend + '</li>');
    });
});