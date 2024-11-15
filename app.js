document.body.innerHTML = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Click Counter | Rzayev Ruhlan</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="center-container">
        <label id="countLabel">0</label> <br>
        <div id="container">
            <button class="button" id="decreaseBtn">Decrease</button>
            <button class="button" id="resetBtn">Reset</button>
            <button class="button" id="increaseBtn">Increase</button>
        </div>
    </div>
    <script src="app.js"></script>
</body>

</html>
`;

let count = 0;

document.getElementById("decreaseBtn").onclick = function () {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseBtn").onclick = function () {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetBtn").onclick = function () {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}