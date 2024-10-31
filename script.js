document.getElementById('okButton').addEventListener('click', function() {
    const shape = document.getElementById('shape').value;
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = ''; // Limpa o container

    let formHtml = `
        <h2>${shape.charAt(0).toUpperCase() + shape.slice(1)}</h2>
        <img src="${shape}.png" alt="${shape}">
        <div class="selector">
            <label for="calculation">Escolha o que deseja calcular:</label>
            <select id="calculation">
                <option value="volume">Volume</option>
                <option value="area">Área</option>
                <option value="altura">Altura</option>
                <option value="areaLateral">Área Lateral</option>
                <option value="areaBase">Área da Base</option>
            </select>
            <button id="calcButton">Ok</button>
        </div>
        <div id="inputContainer"></div>
        <p id="formula"></p>
        <p id="resultado"></p>
    `;
    formContainer.innerHTML = formHtml;

    document.getElementById('calcButton').addEventListener('click', function() {
        const calculation = document.getElementById('calculation').value;
        const formulaContainer = document.getElementById('formula');
        const inputContainer = document.getElementById('inputContainer');
        inputContainer.innerHTML = ''; // Limpa o container
        let formulaText = '';
        let inputHtml = '';

        switch (shape) {
            case 'cilindro':
                if (calculation === 'volume') {
                    formulaText = 'Volume: V = πr²h';
                    inputHtml = `
                        <label for="raio">Raio:</label>
                        <input type="number" id="raio" placeholder="Raio">
                        <label for="altura">Altura:</label>
                        <input type="number" id="altura" placeholder="Altura">
                        <button onclick="calcularCilindro()">Calcular</button>
                    `;
                } else if (calculation === 'area') {
                    formulaText = 'Área: A = 2πr(r + h)';
                    inputHtml = `
                        <label for="raio">Raio:</label>
                        <input type="number" id="raio" placeholder="Raio">
                        <label for="altura">Altura:</label>
                        <input type="number" id="altura" placeholder="Altura">
                        <button onclick="calcularCilindro()">Calcular</button>
                    `;
                } else if (calculation === 'altura') {
                    formulaText = 'Altura: h = V / (πr²)';
                    inputHtml = `
                        <label for="raio">Raio:</label>
                        <input type="number" id="raio" placeholder="Raio">
                        <label for="volume">Volume:</label>
                        <input type="number" id="volume" placeholder="Volume">
                        <button onclick="calcularCilindro()">Calcular</button>
                    `;
                } else if (calculation === 'areaLateral') {
                    formulaText = 'Área Lateral: A_l = 2πrh';
                    inputHtml = `
                        <label for="raio">Raio:</label>
                        <input type="number" id="raio" placeholder="Raio">
                        <label for="altura">Altura:</label>
                        <input type="number" id="altura" placeholder="Altura">
                        <button onclick="calcularCilindro()">Calcular</button>
                    `;
                } else if (calculation === 'areaBase') {
                    formulaText = 'Área da Base: A_b = πr²';
                    inputHtml = `
                        <label for="raio">Raio:</label>
                        <input type="number" id="raio" placeholder="Raio">
                        <button onclick="calcularCilindro()">Calcular</button>
                    `;
                }
                break;
            case 'cone':
                if (calculation === 'volume') {
                    formulaText = 'Volume: V = (1/3)πr²h';
                    inputHtml = `
                        <label for="raio">Raio:</label>
                        <input type="number" id="raio" placeholder="Raio">
                        <label for="altura">Altura:</label>
                        <input type="number" id="altura" placeholder="Altura">
                        <button onclick="calcularCone()">Calcular</button>
                    `;
                } else if (calculation === 'area') {
                    formulaText = 'Área: A = πr(r + √(h² + r²))';
                    inputHtml = `
                        <label for="raio">Raio:</label>
                        <input type="number" id="raio" placeholder="Raio">
                        <label for="altura">Altura:</label>
                        <input type="number" id="altura" placeholder="Altura">
                        <button onclick="calcularCone()">Calcular</button>
                    `;
                } else if (calculation === 'altura') {
                    formulaText = 'Altura: h = (3V) / (πr²)';
                    inputHtml = `
                        <label for="raio">Raio:</label>
                        <input type="number" id="raio" placeholder="Raio">
                        <label for="volume">Volume:</label>
                        <input type="number" id="volume" placeholder="Volume">
                        <button onclick="calcularCone()">Calcular</button>
                    `;
                } else if (calculation === 'areaLateral') {
                    formulaText = 'Área Lateral: A_l = πr√(h² + r²)';
                    inputHtml = `
                        <label for="raio">Raio:</label>
                        <input type="number" id="raio" placeholder="Raio">
                        <label for="altura">Altura:</label>
                        <input type="number" id="altura" placeholder="Altura">
                        <button onclick="calcularCone()">Calcular</button>
                    `;
                } else if (calculation === 'areaBase') {
                    formulaText = 'Área da Base: A_b = πr²';
                    inputHtml = `
                        <label for="raio">Raio:</label>
                        <input type="number" id="raio" placeholder="Raio">
                        <button onclick="calcularCone()">Calcular</button>
                    `;
                }
                break;
            case 'troncoCone':
                if (calculation === 'volume') {
                    formulaText = 'Volume: V = (1/3)πh(r1² + r2² + r1r2)';
                    inputHtml = `
                        <label for="raioMaior">Raio Maior:</label>
                        <input type="number" id="raioMaior" placeholder="Raio Maior">
                        <label for="raioMenor">Raio Menor:</label>
                        <input type="number" id="raioMenor" placeholder="Raio Menor">
                        <label for="altura">Altura:</label>
                        <input type="number" id="altura" placeholder="Altura">
                        <button onclick="calcularTroncoCone()">Calcular</button>
                    `;
                } else if (calculation === 'area') {
                    formulaText = 'Área: A = π(r1² + r2² + (r1 + r2)√(h² + (r1 - r2)²))';
                    inputHtml = `
                        <label for="raioMaior">Raio Maior:</label>
                        <input type="number" id="raioMaior" placeholder="Raio Maior">
                        <label for="raioMenor">Raio Menor:</label>
                        <input type="number" id="raioMenor" placeholder="Raio Menor">
                        <label for="altura">Altura:</label>
                        <input type="number" id="altura" placeholder="Altura">
                        <button onclick="calcularTroncoCone()">Calcular</button>
                    `;
                } else if (calculation === 'altura') {
                    formulaText = 'Altura: h = (3V) / (π(r1² + r2² + r1r2))';
                    inputHtml = `
                        <label for="raioMaior">Raio Maior:</label>
                        <input type="number" id="raioMaior" placeholder="Raio Maior">
                        <label for="raioMenor">Raio Menor:</label>
                        <input type="number" id="raioMenor" placeholder="Raio Menor">
                        <label for="volume">Volume:</label>
                        <input type="number" id="volume" placeholder="Volume">
                        <button onclick="calcularTroncoCone()">Calcular</button>
                    `;
                } else if (calculation === 'areaLateral') {
                    formulaText = 'Área Lateral: A_l = π(r1 + r2)√(h² + (r1 - r2)²)';
                    inputHtml = `
                        <label for="raioMaior">Raio Maior:</label>
                        <input type="number" id="raioMaior" placeholder="Raio Maior">
                        <label for="raioMenor">Raio Menor:</label>
                        <input type="number" id="raioMenor" placeholder="Raio Menor">
                        <label for="altura">Altura:</label>
                        <input type="number" id="altura" placeholder="Altura">
                        <button onclick="calcularTroncoCone()">Calcular</button>
                    `;
                } else if (calculation === 'areaBase') {
                    formulaText = 'Área da Base Maior: A_b1 = πr1², Área da Base Menor: A_b2 = πr2²';
                    inputHtml = `
                        <label for="raioMaior">Raio Maior:</label>
                        <input type="number" id="raioMaior" placeholder="Raio Maior">
                        <label for="raioMenor">Raio Menor:</label>
                        <input type="number" id="raioMenor" placeholder="Raio Menor">
                        <button onclick="calcularTroncoCone()">Calcular</button>
                    `;
                }
                break;
            case 'esfera':
                if (calculation === 'volume') {
                    formulaText = 'Volume: V = (4/3)πr³';
                    inputHtml = `
                        <label for="raio">Raio:</label>
                        <input type="number" id="raio" placeholder="Raio">
                        <button onclick="calcularEsfera()">Calcular</button>
                    `;
                } else if (calculation === 'area') {
                    formulaText = 'Área: A = 4πr²';
                    inputHtml = `
                        <label for="raio">Raio:</label>
                        <input type="number" id="raio" placeholder="Raio">
                        <button onclick="calcularEsfera()">Calcular</button>
                    `;
                }
                break;
        }
        formulaContainer.innerText = formulaText;
        inputContainer.innerHTML = inputHtml;
    });
});

function calcularCilindro() {
    const raio = parseFloat(document.getElementById('raio').value);
    const altura = parseFloat(document.getElementById('altura')?.value);
    const volume = parseFloat(document.getElementById('volume')?.value);
    let resultado = '';

    if (!isNaN(raio) && !isNaN(altura)) {
        resultado = Math.PI * Math.pow(raio, 2) * altura;
    } else if (!isNaN(raio) && !isNaN(volume)) {
        resultado = volume / (Math.PI * Math.pow(raio, 2));
    }
    document.getElementById('resultado').innerText = `Resultado: ${resultado.toFixed(2)}`;
}

function calcularCone() {
    const raio = parseFloat(document.getElementById('raio').value);
    const altura = parseFloat(document.getElementById('altura')?.value);
    const volume = parseFloat(document.getElementById('volume')?.value);
    let resultado = '';

    if (!isNaN(raio) && !isNaN(altura)) {
        resultado = (1/3) * Math.PI * Math.pow(raio, 2) * altura;
    } else if (!isNaN(raio) && !isNaN(volume)) {
        resultado = (3 * volume) / (Math.PI * Math.pow(raio, 2));
    }
    document.getElementById('resultado').innerText = `Resultado: ${resultado.toFixed(2)}`;
}

function calcularTroncoCone() {
    const raioMaior = parseFloat(document.getElementById('raioMaior').value);
    const raioMenor = parseFloat(document.getElementById('raioMenor').value);
    const altura = parseFloat(document.getElementById('altura')?.value);
    const volume = parseFloat(document.getElementById('volume')?.value);
    let resultado = '';

    if (!isNaN(raioMaior) && !isNaN(raioMenor) && !isNaN(altura)) {
        resultado = (1/3) * Math.PI * altura * (Math.pow(raioMaior, 2) + Math.pow(raioMenor, 2) + raioMaior * raioMenor);
    } else if (!isNaN(raioMaior) && !isNaN(raioMenor) && !isNaN(volume)) {
        resultado = (3 * volume) / (Math.PI * (Math.pow(raioMaior, 2) + Math.pow(raioMenor, 2) + raioMaior * raioMenor));
    }
    document.getElementById('resultado').innerText = `Resultado: ${resultado.toFixed(2)}`;
}

function calcularEsfera() {
    const raio = parseFloat(document.getElementById('raio').value);
    let resultado = '';

    if (!isNaN(raio)) {
        resultado = (4/3) * Math.PI * Math.pow(raio, 3);
    }
    document.getElementById('resultado').innerText = `Resultado: ${resultado.toFixed(2)}`;
}