window.onload = function() {

    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    var categories; // Array of topics
    var chosenCategory; // Selected catagory
    var getHint; // Word getHint
    var word; // Selected word
    var categoria;
    var guess; // Geuss
    var geusses = []; // Stored geusses
    var lives; // Lives
    var counter; // Count correct geusses
    var space; // Number of spaces in word '-'

    // Get elements
    var showLives = document.getElementById("mylives");
    var showResult = document.getElementById("numLetras");
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
            list.id = 'letter' + i;
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            letters.appendChild(list);
        }
    }


    // Select Catagory
    var selectCat = function() {
        if (chosenCategory === categories[0]) {
            categoria = " ANIMAIS";
        } else if (chosenCategory === categories[1]) {
            categoria = " ALIMENTOS";
        } else if (chosenCategory === categories[2]) {
            categoria = " CORES";
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
        letras = word.length;
        document.getElementById("numLetras").innerHTML = "A palavra tem " + letras + " letras</b></span> e é sobre " + categoria + "</b></span>";
    }

    // Show lives
    var comments = function() {
        if (lives == 1){
            showLives.innerHTML = "Você pode errar mais " + lives + " vez";
        }
        else if (lives == 9) {
            showLives.innerHTML = "Você pode errar " + lives + " vezes";
        }
        else {
            showLives.innerHTML = "Você pode errar mais " + lives + " vezes";
        }
        
        if (lives < 1) {
            showResult.innerHTML = "Você perdeu 😔";
            showResult.setAttribute("class","num-letras");
            //myButtons.setAttribute("hidden", "true");
            dica = document.getElementById('hint');
            dica.classList.remove("active");
            for (var i = 0; i < alphabet.length; i++){
                list = document.getElementById('letter' + i);
                list.setAttribute("class", "active");
                list.onclick = null;
                dica = document.getElementById('hint');
                dica.setAttribute("class", "active");
                dica.onclick = null;
            }
        }
        for (var i = 0; i < geusses.length; i++) {
            if (counter + space === geusses.length) {
                showResult.innerHTML = "Parabéns, você ganhou! 😀";
                showResult.setAttribute("class","num-letras");
                dica = document.getElementById('hint');
                dica.classList.remove("active");
                //myButtons.setAttribute("hidden", "true");
                for (var i = 0; i < alphabet.length; i++){
                    list = document.getElementById('letter' + i);
                    list.setAttribute("class", "active");
                    list.onclick = null;
                }
                dica = document.getElementById('hint');
                dica.setAttribute("class", "active");
                dica.onclick = null;
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
        context.strokeStyle = "#fff";
        context.lineWidth = 4;
    };

    head = function() {
        myStickman = document.getElementById("stickman");
        context.strokeStyle = 'black';
        context.lineWidth = 5;
        context.beginPath();
        context.arc(200, 100, 35, 0, Math.PI * 2, true);
        context.closePath();
        context.stroke();
    }

    body = function() {
        myStickman = document.getElementById("stickman");
        context.strokeStyle = 'black';
        context.beginPath();
        context.moveTo(200, 135);
        context.lineTo(200, 230);
        context.stroke();
    }

    draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

        context.moveTo($pathFromx, $pathFromy);
        context.lineTo($pathTox, $pathToy);
        context.stroke();
    }

    gallows = function() {
        context.strokeStyle = 'black';
        myStickman = document.getElementById("stickman");
        context.lineWidth = 10;
        context.beginPath();
        context.moveTo(380, 380);
        context.lineTo(20, 380);
        context.moveTo(100, 380);
        context.lineTo(40, 20);
        context.lineTo(200, 20);
        context.lineTo(200, 65);
        context.stroke();
    };

    rightHarm = function() {
        context.strokeStyle = 'black';
        context.beginPath();
        context.moveTo(200, 150);
        context.lineTo(160, 170);
        context.stroke();
    };

    leftHarm = function() {
        context.beginPath();
        context.moveTo(200, 150);
        context.lineTo(240, 170);
        context.stroke();
    };

    rightFoot = function() {
        context.beginPath();
        context.moveTo(177, 300);
        context.lineTo(165, 290);
        context.stroke();
    };


    leftFoot = function() {
        context.beginPath();
        context.moveTo(223, 300);
        context.lineTo(235, 290);
        context.stroke();
    };

    rightLeg = function() {
        context.beginPath();
        context.moveTo(200, 225);
        context.lineTo(175, 300);
        context.stroke();
    };

    leftLeg = function() {
        context.beginPath();
        context.moveTo(200, 225);
        context.lineTo(225, 300);
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
            var geuss = (this.innerHTML.toLowerCase());
            this.setAttribute("class", "active");
            this.onclick = null;
            for (var i = 0; i < word.length; i++) {
                if (word[i] == geuss) {
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
    play = function() {
        categories = [
            ["carneiro", "coala", "elefante", "urso", "tucano", "papagaio", "tartaruga"], /*Animais*/
            ["sushi", "pizza", "sorvete", "pastel"], /*Comida*/
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
        selectCat();
        result();
        comments();
        canvas();
    }

    play();

    // Hint
    pegadica = hint.onclick = function() {

        hints = [
            ["é um mamífero", "vive na Austrália", "é um animal de grande porte", "é um mamífero", "é uma ave que tem um bico grande e colorido", "animal que imita a voz do ser humano", "tem um casco"],
            ["surgiu no Japão", "comida italiana", "sobremesa gelada", "comida frita recheada"],
            ["a cor lembra o Sol", "se parece com sangue", "a cor da escuridão", "lembra uma uva", "parece café"]
        ];

        var catagoryIndex = categories.indexOf(chosenCategory);
        var hintIndex = chosenCategory.indexOf(word);
        showClue.innerHTML = "Dica: " + hints[catagoryIndex][hintIndex];
        this.setAttribute("class", "active");
        this.onclick = null;
    };

    // Reset
    document.getElementById('reset').onclick = function() {
        myButtons.removeAttribute("hidden");
        showResult.classList.remove("num-letras");
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        dica = document.getElementById('hint');
        dica.classList.remove("active");
        dica.onclick = pegadica;
        showClue.innerHTML = "";
        context.clearRect(0, 0, 400, 400);
        play();
    }
}