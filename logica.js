window.onload = function() {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    var categories; // Array of topics
    var chosenCategory; // Selected catagory
    var getHint; // Word getHint
    var word; // Selected word
    var guess; // Geuss
    var geusses = []; // Stored geusses
    var lives; // Lives
    var counter; // Count correct geusses
    var space; // Number of spaces in word '-'

    // Get elements
    var showLives = document.getElementById("mylives");
    // var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");



    // create alphabet ul
    var buttons = function() {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    // Select Catagory
    var selectCat = function() {
        if (chosenCategory === categories[0]) {
            catagoryName.innerHTML = "Tema: ANIMAIS";
        } else if (chosenCategory === categories[1]) {
            catagoryName.innerHTML = "Tema: ALIMENTO";
        } else if (chosenCategory === categories[2]) {
            catagoryName.innerHTML = "Tema: COR";
        }
    }

    // Create geusses ul
    result = function() {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            if (word[i] === "-") {
                guess.innerHTML = "-";
                space = 1;
            } else {
                guess.innerHTML = "__";
            }

            geusses.push(guess);
            wordHolder.appendChild(correct);
            correct.appendChild(guess);
        }
    }

    // Show lives
    var comments = function() {
        showLives.innerHTML = "Você tem +" + lives + " vidas";
        if (lives < 1) {
            showLives.innerHTML = "Você perdeu!";
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showLives.innerHTML = "Parabéns, você ganhou! 😀";
            }
        }
    }

    // Animate man
    var animate = function() {
        var drawMe = lives;
        drawArray[drawMe]();
    }


    // Hangman
    canvas = function() {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.strokeStyle = "#1FF0BD";
        context.lineWidth = 4;
    };

    head = function() {
        myStickman = document.getElementById("stickman");
        context.strokeStyle = '#1FF0BD';
        context.lineWidth = 5;
        context.beginPath();
        context.arc(100, 50, 25, 0, Math.PI * 2, true);
        context.closePath();
        context.stroke();
    }

    body = function() {
        myStickman = document.getElementById("stickman");
        context.strokeStyle = '#1FF0BD';
        context.beginPath();
        context.moveTo(100, 75);
        context.lineTo(100, 140);
        context.stroke();
    }

    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    }

    gallows = function() {
        context.strokeStyle = '#1FF0BD';
        myStickman = document.getElementById("stickman");
        context.lineWidth = 10;
        context.beginPath();
        context.moveTo(175, 225);
        context.lineTo(5, 225);
        context.moveTo(40, 225);
        context.lineTo(25, 5);
        context.lineTo(100, 5);
        context.lineTo(100, 25);
        context.stroke();
    };

    rightHarm = function() {
        // context.strokeStyle = '#fefefe';
        context.beginPath();
        context.moveTo(100, 85);
        context.lineTo(60, 100);
        context.stroke();
    };

    leftHarm = function() {
        context.beginPath();
        context.moveTo(100, 85);
        context.lineTo(140, 100);
        context.stroke();
    };

    rightLeg = function() {
        context.beginPath();
        context.moveTo(100, 140);
        context.lineTo(80, 190);
        context.stroke();
    };

    rightFoot = function() {
        context.beginPath();
        context.moveTo(82, 190);
        context.lineTo(70, 185);
        context.stroke();
    };


    leftFoot = function() {
        context.beginPath();
        context.moveTo(122, 190);
        context.lineTo(135, 185);
        context.stroke();
    };

    rightLeg = function() {
        context.beginPath();
        context.moveTo(100, 140);
        context.lineTo(80, 190);
        context.stroke();
    };

    leftLeg = function() {
        context.beginPath();
        context.moveTo(100, 140);
        context.lineTo(125, 190);
        context.stroke();
    };

    eyes = function() {
        context.beginPath();
        context.moveTo(100, 75);
        context.moveTo(65, 65);
        context.arc(60, 65, 5, 0, Math.PI * 2, true);
        context.stroke();
    };
    drawArray = [leftFoot, leftLeg, rightFoot, rightLeg, leftHarm, rightHarm, body, head, gallows];


    // OnClick Function
    check = function() {
        list.onclick = function() {
            var geuss = (this.innerHTML);
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] === geuss) {
                    geusses[i].innerHTML = geuss;
                    counter += 1;
                }
            }
            var j = (word.indexOf(geuss));
            if (j === -1) {
                lives -= 1;
                comments();
                animate();
            } else {
                comments();
            }
        }
    }


    // Play
    //categorias: fruta, cor, animal, objeto, 
    play = function() {
        categories = [
            ["carneiro", "coala", "elefante", "urso", "tucano", "papaguaio", "tartaruga"], /*Animais*/
            ["sushi", "pizza", "estrogonofe", "sorvete", "pastel"], /*Comida*/
            ["amarelo", "vermelho", "preto", "roxo", "marrom"] /*Cor*/
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();

        geusses = [];
        lives = 9;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
    }

    play();

    // Hint

    hint.onclick = function() {

        hints = [
            ["É um mamifero", "Vive na Austrália", "É um animal de grande porte", "É um mamífero", "É uma ave que tem um bico grande e colorido", "Animal que imita a voz do ser humano", "Tem um casco"],
            ["Surgiu no Japão", "Comida redonda", "Prato que surgiu na Rússia", "Sobremesa gelada", "Comida frita que tem recheio"],
            ["a cor lembra o Sol", "se parece com sangue", "a cor da escuridão", "lembra uma uva", "parece café"]
        ];

        var catagoryIndex = categories.indexOf(chosenCategory);
        var hintIndex = chosenCategory.indexOf(word);
        showClue.innerHTML = "Dica: " + hints[catagoryIndex][hintIndex];
    };

    // Reset

    document.getElementById('reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        showClue.innerHTML = "";
        context.clearRect(0, 0, 400, 400);
        play();
    }
}