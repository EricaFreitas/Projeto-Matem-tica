function calcularCilindro() {
    const r = parseFloat(document.getElementById('raioCilindro').value);
    const h = parseFloat(document.getElementById('alturaCilindro').value);
    const area = 2 * Math.PI * r * (r + h);
    const volume = Math.PI * r * r * h;
    document.getElementById('resultadoCilindro').innerText = `Área: ${area.toFixed(2)} | Volume: ${volume.toFixed(2)}`;
}

function calcularCone() {
    const r = parseFloat(document.getElementById('raioCone').value);
    const h = parseFloat(document.getElementById('alturaCone').value);
    const g = Math.sqrt(r * r + h * h);
    const area = Math.PI * r * (r + g);
    const volume = (1/3) * Math.PI * r * r * h;
    document.getElementById('resultadoCone').innerText = `Área: ${area.toFixed(2)} | Volume: ${volume.toFixed(2)}`;
}

function calcularTroncoCone() {
    const r1 = parseFloat(document.getElementById('raioMaiorTronco').value);
    const r2 = parseFloat(document.getElementById('raioMenorTronco').value);
    const h = parseFloat(document.getElementById('alturaTronco').value);
    const area = Math.PI * (r1 + r2) * Math.sqrt((r1 - r2) * (r1 - r2) + h * h) + Math.PI * r1 * r1 + Math.PI * r2 * r2;
    const volume = (1/3) * Math.PI * h * (r1 * r1 + r2 * r2 + r1 * r2);
    document.getElementById('resultadoTroncoCone').innerText = `Área: ${area.toFixed(2)} | Volume: ${volume.toFixed(2)}`;
}

function calcularEsfera() {
    const r = parseFloat(document.getElementById('raioEsfera').value);
    const area = 4 * Math.PI * r * r;
    const volume = (4/3) * Math.PI * r * r * r;
    document.getElementById('resultadoEsfera').innerText = `Área: ${area.toFixed(2)} | Volume: ${volume.toFixed(2)}`;
}