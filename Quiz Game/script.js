const questions = [
    {
        question: "What is Full Form Of HTML ?" ,
        answer : [
            { text: "High To Medium Language", correct: false},
            { text: "Hyper To Modern Language", correct: false},
            { text: "Hyper Text Markup Language", correct: true},
            { text: "None Of These", correct: false},
        ]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answer: [
            { text: "<style>", correct: true },
            { text: "<script>", correct: false },
            { text: "<css>", correct: false },
            { text: "<link>", correct: false },
        ]
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        answer: [
            { text: "<a>", correct: true },
            { text: "<link>", correct: false },
            { text: "<href>", correct: false },
            { text: "<hyperlink>", correct: false },
        ]
    },
    {
        question: "How can you make a numbered list in HTML?",
        answer: [
            { text: "<ul>", correct: false },
            { text: "<ol>", correct: true },
            { text: "<li>", correct: false },
            { text: "<list>", correct: false },
        ]
    },
    {
        question: "Which HTML element is used for the largest heading?",
        answer: [
            { text: "<heading>", correct: false },
            { text: "<h6>", correct: false },
            { text: "<h1>", correct: true },
            { text: "<head>", correct: false },
        ]
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        answer: [
            { text: "<br>", correct: true },
            { text: "<break>", correct: false },
            { text: "<lb>", correct: false },
            { text: "<line>", correct: false },
        ]
    },
    {
        question: "Which tag is used to define a table in HTML?",
        answer: [
            { text: "<table>", correct: true },
            { text: "<tab>", correct: false },
            { text: "<tr>", correct: false },
            { text: "<td>", correct: false },
        ]
    },
    {
        question: "How do you specify an image's alternative text in HTML?",
        answer: [
            { text: "alt", correct: true },
            { text: "title", correct: false },
            { text: "src", correct: false },
            { text: "href", correct: false },
        ]
    },
    {
        question: "Which HTML element is used to define important text?",
        answer: [
            { text: "<strong>", correct: true },
            { text: "<b>", correct: false },
            { text: "<important>", correct: false },
            { text: "<em>", correct: false },
        ]
    },
    {
        question: "Which tag is used to create a checkbox in HTML?",
        answer: [
            { text: "<input type='checkbox'>", correct: true },
            { text: "<checkbox>", correct: false },
            { text: "<check>", correct: false },
            { text: "<input type='check'>", correct: false },
        ]
    },
    {
        question: "What is the correct HTML for creating a text input field?",
        answer: [
            { text: "<input type='text'>", correct: true },
            { text: "<input type='textfield'>", correct: false },
            { text: "<textfield>", correct: false },
            { text: "<textinput>", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        answer: [
            { text: "<ul>", correct: true },
            { text: "<ol>", correct: false },
            { text: "<li>", correct: false },
            { text: "<list>", correct: false },
        ]
    },
    {
        question: "What is the correct HTML for adding a background color?",
        answer: [
            { text: "<body style='background-color:yellow;'>", correct: true },
            { text: "<background>yellow</background>", correct: false },
            { text: "<body bg='yellow'>", correct: false },
            { text: "<bgcolor>yellow</bgcolor>", correct: false },
        ]
    },
    {
        question: "Which HTML element is used to specify a footer for a document or section?",
        answer: [
            { text: "<footer>", correct: true },
            { text: "<bottom>", correct: false },
            { text: "<section>", correct: false },
            { text: "<foot>", correct: false },
        ]
    },
    {
        question: "How can you make text italic in HTML?",
        answer: [
            { text: "<italic>", correct: false },
            { text: "<i>", correct: true },
            { text: "<em>", correct: false },
            { text: "<it>", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define a division or a section?",
        answer: [
            { text: "<section>", correct: false },
            { text: "<div>", correct: true },
            { text: "<span>", correct: false },
            { text: "<header>", correct: false },
        ]
    },
    {
        question: "What is the correct HTML for creating a hyperlink that opens in a new tab?",
        answer: [
            { text: "<a href='url' target='_blank'>", correct: true },
            { text: "<a href='url' newtab>", correct: false },
            { text: "<a href='url' target='new'>", correct: false },
            { text: "<a href='url' target='_newtab'>", correct: false },
        ]
    },
    {
        question: "Which HTML element is used to define a list item?",
        answer: [
            { text: "<list>", correct: false },
            { text: "<item>", correct: false },
            { text: "<li>", correct: true },
            { text: "<ul>", correct: false },
        ]
    },
    {
        question: "What does the <title> element do in HTML?",
        answer: [
            { text: "It sets the title of the web page.", correct: true },
            { text: "It sets the title of the document.", correct: false },
            { text: "It creates a header.", correct: false },
            { text: "It adds a caption to an image.", correct: false },
        ]
    },
    {
        question: "Which attribute specifies the URL of an image in an <img> tag?",
        answer: [
            { text: "href", correct: false },
            { text: "src", correct: true },
            { text: "link", correct: false },
            { text: "url", correct: false },
        ]
    },
    {
        question: "What does CSS stand for?",
        answer: [
            { text: "Colorful Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
        ]
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        answer: [
            { text: "<css>", correct: false },
            { text: "<style>", correct: true },
            { text: "<script>", correct: false },
            { text: "<link>", correct: false },
        ]
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answer: [
            { text: "class", correct: false },
            { text: "styles", correct: false },
            { text: "font", correct: false },
            { text: "style", correct: true },
        ]
    },
    {
        question: "Which property is used to change the background color?",
        answer: [
            { text: "color", correct: false },
            { text: "bgcolor", correct: false },
            { text: "background-color", correct: true },
            { text: "background", correct: false },
        ]
    },
    {
        question: "How do you add a background color for all <h1> elements?",
        answer: [
            { text: "h1 {background-color:#FFFFFF;}", correct: true },
            { text: "all.h1 {background-color:#FFFFFF;}", correct: false },
            { text: "h1.all {background-color:#FFFFFF;}", correct: false },
            { text: "h1.all.h1 {background-color:#FFFFFF;}", correct: false },
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answer: [
            { text: "color", correct: true },
            { text: "fgcolor", correct: false },
            { text: "text-color", correct: false },
            { text: "font-color", correct: false },
        ]
    },
    {
        question: "Which CSS property controls the text size?",
        answer: [
            { text: "font-size", correct: true },
            { text: "text-style", correct: false },
            { text: "font-style", correct: false },
            { text: "text-size", correct: false },
        ]
    },
    {
        question: "How do you make each word in a text start with a capital letter?",
        answer: [
            { text: "text-transform: capitalize;", correct: true },
            { text: "text-style: capitalize;", correct: false },
            { text: "transform: capitalize;", correct: false },
            { text: "font-transform: capitalize;", correct: false },
        ]
    },
    {
        question: "Which property is used to change the font of an element?",
        answer: [
            { text: "font-style", correct: false },
            { text: "font-family", correct: true },
            { text: "font-weight", correct: false },
            { text: "font-size", correct: false },
        ]
    },
    {
        question: "How do you make the text bold?",
        answer: [
            { text: "font: bold;", correct: false },
            { text: "style: bold;", correct: false },
            { text: "font-weight: bold;", correct: true },
            { text: "text-weight: bold;", correct: false },
        ]
    },
    {
        question: "How do you display a border like this: The top border = 10px, the bottom border = 5px, the left border = 20px, and the right border = 1px?",
        answer: [
            { text: "border-width: 10px 1px 5px 20px;", correct: true },
            { text: "border-width: 10px 20px 5px 1px;", correct: false },
            { text: "border-width: 10px 5px 20px 1px;", correct: false },
            { text: "border-width: 10px 1px 20px 5px;", correct: false },
        ]
    },
    {
        question: "How do you change the left margin of an element?",
        answer: [
            { text: "margin-left:", correct: true },
            { text: "indent:", correct: false },
            { text: "padding-left:", correct: false },
            { text: "margin:", correct: false },
        ]
    },
    {
        question: "When using the padding property, are you allowed to use negative values?",
        answer: [
            { text: "Yes", correct: false },
            { text: "No", correct: true },
        ]
    },
    {
        question: "How do you make a list that lists its items with squares?",
        answer: [
            { text: "list-style-type: square;", correct: true },
            { text: "list-type: square;", correct: false },
            { text: "list: square;", correct: false },
            { text: "list-style: square;", correct: false },
        ]
    },
    {
        question: "How do you select an element with id 'demo'?",
        answer: [
            { text: "#demo", correct: true },
            { text: ".demo", correct: false },
            { text: "demo", correct: false },
            { text: "*demo", correct: false },
        ]
    },
    {
        question: "How do you select elements with class name 'test'?",
        answer: [
            { text: "*test", correct: false },
            { text: ".test", correct: true },
            { text: "#test", correct: false },
            { text: "test", correct: false },
        ]
    },
    {
        question: "Which property is used to change the left margin of an element?",
        answer: [
            { text: "margin-left", correct: true },
            { text: "padding-left", correct: false },
            { text: "left-margin", correct: false },
            { text: "indent", correct: false },
        ]
    },
    {
        question: "Which property is used to change the font size of an element?",
        answer: [
            { text: "font-style", correct: false },
            { text: "text-size", correct: false },
            { text: "text-style", correct: false },
            { text: "font-size", correct: true },
        ]
    },
    {
        question: "How do you make the text underline?",
        answer: [
            { text: "font-decoration: underline;", correct: false },
            { text: "text-decoration: underline;", correct: true },
            { text: "underline: text;", correct: false },
            { text: "decoration: underline;", correct: false },
        ]
    },
    {
        question: "Which property is used to change the background image of an element?",
        answer: [
            { text: "background-image", correct: true },
            { text: "background-color", correct: false },
            { text: "background-url", correct: false },
            { text: "image", correct: false },
        ]
    },
    {
        question: "What is the correct syntax to print a message in the console in JavaScript?",
        answer: [
            { text: "print('Hello World')", correct: false },
            { text: "console.log('Hello World')", correct: true },
            { text: "log('Hello World')", correct: false },
            { text: "echo('Hello World')", correct: false },
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answer: [
            { text: "function myFunction()", correct: true },
            { text: "function:myFunction()", correct: false },
            { text: "function = myFunction()", correct: false },
            { text: "function => myFunction()", correct: false },
        ]
    },
    {
        question: "How do you call a function named 'myFunction'?",
        answer: [
            { text: "call myFunction()", correct: false },
            { text: "myFunction()", correct: true },
            { text: "call function myFunction()", correct: false },
            { text: "Call.myFunction()", correct: false },
        ]
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answer: [
            { text: "*", correct: false },
            { text: "=", correct: true },
            { text: "-", correct: false },
            { text: "+", correct: false },
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?",
        answer: [
            { text: "false", correct: false },
            { text: "true", correct: true },
            { text: "NaN", correct: false },
            { text: "undefined", correct: false },
        ]
    },
    {
        question: "How do you declare a JavaScript variable?",
        answer: [
            { text: "variable carName;", correct: false },
            { text: "v carName;", correct: false },
            { text: "var carName;", correct: true },
            { text: "var = carName;", correct: false },
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answer: [
            { text: "onmouseclick", correct: false },
            { text: "onchange", correct: false },
            { text: "onclick", correct: true },
            { text: "onmouseover", correct: false },
        ]
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        answer: [
            { text: "ceil(x, y)", correct: false },
            { text: "Math.max(x, y)", correct: true },
            { text: "Math.ceil(x, y)", correct: false },
            { text: "top(x, y)", correct: false },
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answer: [
            { text: "var colors = 'red', 'green', 'blue'", correct: false },
            { text: "var colors = (1:'red', 2:'green', 3:'blue')", correct: false },
            { text: "var colors = ['red', 'green', 'blue']", correct: true },
            { text: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", correct: false },
        ]
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        answer: [
            { text: "Math.round(7.25)", correct: true },
            { text: "Math.rnd(7.25)", correct: false },
            { text: "round(7.25)", correct: false },
            { text: "rnd(7.25)", correct: false },
        ]
    },
    {
        question: "How do you declare a JavaScript constant?",
        answer: [
            { text: "constant PI = 3.14;", correct: false },
            { text: "const PI = 3.14;", correct: true },
            { text: "var PI = 3.14;", correct: false },
            { text: "let PI = 3.14;", correct: false },
        ]
    },
    {
        question: "Which operator is used to compare two values?",
        answer: [
            { text: "=", correct: false },
            { text: "==", correct: false },
            { text: "===", correct: true },
            { text: "!=", correct: false },
        ]
    },
    {
        question: "How do you add a comment in JavaScript?",
        answer: [
            { text: "<!-- This is a comment -->", correct: false },
            { text: "// This is a comment", correct: true },
            { text: "/* This is a comment */", correct: false },
            { text: "** This is a comment **", correct: false },
        ]
    },
    {
        question: "What is the correct way to write a JavaScript object?",
        answer: [
            { text: "var person = (firstName: 'John', lastName: 'Doe')", correct: false },
            { text: "var person = {firstName: 'John', lastName: 'Doe'}", correct: true },
            { text: "var person = [firstName: 'John', lastName: 'Doe']", correct: false },
            { text: "var person = firstName: 'John', lastName: 'Doe'", correct: false },
        ]
    },
    {
        question: "Which method can be used to find the length of a string?",
        answer: [
            { text: "length()", correct: false },
            { text: "getLength()", correct: false },
            { text: "len()", correct: false },
            { text: "length", correct: true },
        ]
    },
    {
        question: "How do you create a new array in JavaScript?",
        answer: [
            { text: "var arr = new Array();", correct: true },
            { text: "var arr = new Array[];", correct: false },
            { text: "var arr = Array();", correct: false },
            { text: "var arr = [];", correct: false },
        ]
    },
    {
        question: "Which method can be used to join two arrays?",
        answer: [
            { text: "concat()", correct: true },
            { text: "join()", correct: false },
            { text: "merge()", correct: false },
            { text: "append()", correct: false },
        ]
    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        answer: [
            { text: "interface", correct: false },
            { text: "throws", correct: false },
            { text: "program", correct: true },
            { text: "short", correct: false },
        ]
    },
    {
        question: "Which JavaScript method is used to access an HTML element by id?",
        answer: [
            { text: "getElementById()", correct: true },
            { text: "getElement(id)", correct: false },
            { text: "getElementById(id)", correct: false },
            { text: "getElement()", correct: false },
        ]
    },
    {
        question: "Which JavaScript keyword is used to define a variable?",
        answer: [
            { text: "var", correct: true },
            { text: "let", correct: true },
            { text: "const", correct: true },
            { text: "all of the above", correct: true },
        ]
    } 
];

const questionelement = document.getElementById("ques");
        const answerbuttons = document.getElementById("answer");
        const nextbutton = document.getElementById("next-btn");

        let currquestionindex = 0;
        let score = 0;

        function startquiz() {
            currquestionindex = 0;
            score = 0;
            nextbutton.innerText = "Next";
            showquestion();
        }

        function showquestion() {
            resetstate();
            let currentquestion = questions[currquestionindex];
            let questionno = currquestionindex + 1;
            questionelement.innerHTML = questionno + ". " + currentquestion.question;

            currentquestion.answer.forEach(answer => {
                const button = document.createElement("button");
                button.innerText = answer.text;
                button.classList.add("btn");
                answerbuttons.appendChild(button);
                if (answer.correct) {
                    button.dataset.correct = answer.correct;
                }
                button.addEventListener("click", selectanswer);
            });
        }

        function resetstate() {
            while (answerbuttons.firstChild) {
                answerbuttons.removeChild(answerbuttons.firstChild);
            }
        }

        function selectanswer(e) {
            const selectedbtn = e.target;
            const iscorrect = selectedbtn.dataset.correct === "true";

            if (iscorrect) {
                selectedbtn.classList.add("correct");
                score++;
            } else {
                selectedbtn.classList.add("wrong");
            }

            Array.from(answerbuttons.children).forEach(button => {
                if (button.dataset.correct === "true") {
                    button.classList.add("correct");
                }
                button.disabled = true;
            });

            nextbutton.style.display = "block";
        }

        function showscore() {
            resetstate();
            questionelement.innerHTML = `You Scored ${score} Out Of ${questions.length}!`;
            nextbutton.innerText = "Play Again";
            nextbutton.style.display = "block";
        }

        function handlenextbutton() {
            currquestionindex++;
            if (currquestionindex < questions.length) {
                showquestion();
            } else {
                showscore();
            }
        }

        nextbutton.addEventListener("click", () => {
            if (currquestionindex < questions.length) {
                handlenextbutton();
            } else {
                startquiz();
            }
        });

        startquiz();