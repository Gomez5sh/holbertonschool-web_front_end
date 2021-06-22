function changeMode(size, weight, transform, background, color) {
    return function() {
        const body = document.querySelector("body");
        body.fontSize = size;
        body.style.fontWeight = weight;
        body.style.textTransform = transform;
        body.style.backgroundColor = background;
        body.style.color = color;
    };
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    // Add a paragraph to the body
    let paragraph = document.createElement("p");
    let textNode = document.createTextNode("Welcome Holberton!");
    paragraph.appendChild(textNode);
    document.body.appendChild(paragraph);

    //Text whit  letters
    /*let span = document.createElement("p");
    let texteNote = document.createTextNode(
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution ousing 'Content here, content here', epsum as their defaul"
    );
    span.appendChild(texteNote);
    document.body.appendChild(span);*/

    // Add a button to the body with the text Spooky
    let btn = document.createElement("button");
    btn.innerHTML = "Spooky";
    btn.onclick = function() {
        spooky();
    };
    document.body.appendChild(btn);

    // Add a button to the body with the text Dark mode
    btn = document.createElement("button");
    btn.innerHTML = "Dark mode";
    btn.onclick = function() {
        darkMode();
    };
    document.body.appendChild(btn);

    // Add a button to the body with the text Scream mode
    btn = document.createElement("button");
    btn.innerHTML = "Scream mode";
    btn.onclick = function() {
        screamMode();
    };
    document.body.appendChild(btn);
}

main();