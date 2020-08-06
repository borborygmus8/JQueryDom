// Objective 1
const button1 = document.createElement('button'),
    li1 = document.getElementById('1');
button1.textContent = 'Click Me!';
button1.className = 'btn btn-primary';
li1.appendChild(button1);

button1.addEventListener('click', () => {
    alert('This message brought to you by the DOM!');
});

// Objective 2
const input2 = document.getElementById('input2'),
    button2 = document.getElementById('button2');

button2.addEventListener('click', () => {
    alert(`You typed: "${input2.value}"`);
});

// Objective 3
const div3 = document.getElementById('div3');

div3.addEventListener('mouseover', () => {
    div3.classList.add('bg-danger');
});
div3.addEventListener('mouseout', () => {
    div3.classList.remove('bg-danger');
});

// Objective 4
const p4 = document.getElementById('p4');

p4.addEventListener('click', () => {
    p4.style.color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
});

// Objective 5
const button5 = document.getElementById('button5'),
    div5 = document.getElementById('div5');

button5.addEventListener('click', () => {
    const span = document.createElement('span');
    span.textContent = 'Chadwick Geyser ';
    div5.appendChild(span);
});

// Objective 6
const button6 = document.getElementById('button6'),
    ul6 = document.getElementById('ul6'),
    friends = ['Buddy', 'Kitty', 'Teia', 'Zoe', 'Chloe', 'Shiloh', 'Samara', 'Scarlett', 'Fred', 'Nooky', 'Coco', 'Bella', 'Thor'];

button6.addEventListener('click', () => {
    friends.forEach(friend => {
        const li = document.createElement('li');
        li.textContent = friend;
        ul6.appendChild(li);
    });
});