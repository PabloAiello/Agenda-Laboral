body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f4f6f9;
    margin: 0;
    padding: 0;
}

header {
    background: #005baa;
    color: white;
    text-align: center;
    padding: 20px;
}

main {
    max-width: 900px;
    margin: 30px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

section {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0,.15);
}

input,
textarea,
button {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

textarea {
    resize: vertical;
    min-height: 80px;
}

button {
    background: #005baa;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border: none;
}

button:hover {
    background: #004080;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background: #eef4ff;
    margin-top: 10px;
    padding: 10px;
    border-left: 5px solid #005baa;
    border-radius: 5px;
}

footer {
    text-align: center;
    padding: 20px;
    color: #666;
}
