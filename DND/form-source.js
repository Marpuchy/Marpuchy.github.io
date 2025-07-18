const pricePoolElement = document.getElementById("pricePool");
let pricePool = 27;
const values = [8, 8, 8, 8, 8, 8];
const mods = [0, 0, 0, 0, 0, 0];
let modifiableBoxes = [];
let modifierPool = 3;
let initialPricePool = pricePool;
let restricted = true;


document.addEventListener("DOMContentLoaded", function () {
    const removeRestrictions = document.getElementById("removeRestrictions")

    removeRestrictions.addEventListener("change", function (e) {
        if (removeRestrictions.checked) {
            removeRestrictionsChecked();
        } else {
            removeRestrictionsUnchecked();
        }
    });
});

const roles = {
    Acolyte: [4, 5, 6], // Inteligencia, Sabiduría, Carisma
    Artisan: [1, 2, 4], // Fuerza, Destreza, Inteligencia
    Charlatan: [2, 3, 6], // Destreza, Constitución, Carisma
    Criminal: [2, 3, 4], // Destreza, Constitución, Inteligencia
    Entertainer: [1, 2, 6], // Fuerza, Destreza, Carisma
    Farmer: [1, 3, 5], // Fuerza, Constitución, Sabiduría
    Guard: [1, 4, 5], // Fuerza, Inteligencia, Sabiduría
    Guide: [2, 3, 5], // Destreza, Constitución, Sabiduría
    Hermit: [3, 5, 6], // Constitución, Sabiduría, Carisma
    Merchant: [3, 4, 6], // Constitución, Inteligencia, Carisma
    Noble: [1, 4, 6], // Fuerza, Inteligencia, Carisma
    Sage: [3, 4, 5], // Constitución, Inteligencia, Sabiduría
    Sailor: [1, 2, 5], // Fuerza, Destreza, Sabiduría
    Scribe: [2, 4, 5], // Destreza, Inteligencia, Sabiduría
    Soldier: [1, 2, 3], // Fuerza, Destreza, Constitución
    Wayfarer: [2, 5, 6] // Destreza, Sabiduría, Carisma
};

const classDefault = {
    Artificiero: [8, 12, 13, 14, 10, 15],
    Bárbaro: [15, 13, 14, 10, 12, 8],
    Bardo: [8, 14, 12, 13, 10, 15],
    Clérigo: [14, 8, 13, 10, 15, 12],
    Druida: [8, 12, 14, 13, 15, 10],
    Guerrero: [15, 14, 13, 8, 10, 12],
    Monje: [12, 15, 13, 10, 14, 8],
    Paladín: [15, 10, 13, 8, 12, 14],
    Guardabosques: [12, 15, 13, 8, 14, 10],
    Pícaro: [12, 15, 13, 14, 10, 8],
    Hechicero: [10, 13, 14, 8, 12, 15],
    Brujo: [8, 14, 13, 12, 10, 15],
    Mago: [8, 12, 13, 15, 14, 10]
};

const allSkills = [
    "Acrobacias", "Trato con Animales", "Arcanos", "Atletismo", "Engaño", "Historia",
    "Perspicacia", "Intimidación", "Investigación", "Medicina", "Naturaleza",
    "Percepción", "Interpretación", "Persuasión", "Religión", "Juego de Manos",
    "Sigilo", "Supervivencia"
];

const classSkills = {
    Artificiero: ["Arcanos", "Historia", "Investigación", "Medicina", "Naturaleza", "Percepción", "Juego de Manos"],
    Bárbaro: ["Trato con Animales", "Atletismo", "Intimidación", "Naturaleza", "Percepción", "Supervivencia"],
    Bardo: ["Acrobacias", "Trato con Animales", "Arcanos", "Atletismo", "Engaño", "Historia", "Perspicacia", "Intimidación", "Investigación", "Medicina", "Naturaleza", "Percepción", "Interpretación", "Persuasión", "Religión", "Juego de Manos", "Sigilo", "Supervivencia"],
    Clérigo: ["Historia", "Perspicacia", "Medicina", "Persuasión", "Religión"],
    Druida: ["Arcanos", "Trato con Animales", "Perspicacia", "Medicina", "Naturaleza", "Percepción", "Religión", "Supervivencia"],
    Guerrero: ["Acrobacias", "Trato con Animales", "Atletismo", "Historia", "Perspicacia", "Intimidación", "Persuasión", "Percepción", "Supervivencia"],
    Monje: ["Acrobacias", "Atletismo", "Historia", "Perspicacia", "Religión", "Sigilo"],
    Paladín: ["Atletismo", "Perspicacia", "Intimidación", "Medicina", "Persuasión", "Religión"],
    Guardabosques: ["Trato con Animales", "Atletismo", "Perspicacia", "Investigación", "Naturaleza", "Percepción", "Sigilo", "Supervivencia"],
    Pícaro: ["Acrobacias", "Atletismo", "Engaño", "Perspicacia", "Intimidación", "Investigación", "Percepción", "Persuasión", "Juego de Manos", "Sigilo"],
    Hechicero: ["Arcanos", "Engaño", "Perspicacia", "Intimidación", "Persuasión", "Religión"],
    Brujo: ["Arcanos", "Engaño", "Historia", "Intimidación", "Investigación", "Naturaleza", "Religión"],
    Mago: ["Arcanos", "Historia", "Perspicacia", "Investigación", "Medicina", "Naturaleza", "Religión"]
};

const backgroundSkills = {
    "Acólito": ["Perspicacia", "Religión"],
    "Artesano": ["Investigación", "Persuasión"],
    "Charlatán": ["Engaño", "Juego de Manos"],
    "Criminal": ["Juego de Manos", "Sigilo"],
    "Artista": ["Acrobacias", "Interpretación"],
    "Granjero": ["Trato con Animales", "Naturaleza"],
    "Guardia": ["Atletismo", "Percepción"],
    "Guía": ["Sigilo", "Supervivencia"],
    "Ermitaño": ["Medicina", "Religión"],
    "Mercader": ["Trato con Animales", "Persuasión"],
    "Noble": ["Historia", "Persuasión"],
    "Soldado": ["Atletismo", "Intimidación"],
    "Marinero": ["Percepción", "Acrobacias"],
    "Sabio": ["Arcanos", "Historia"],
    "Escriba": ["Investigación", "Percepción"],
    "Viajero": ["Perspicacia", "Sigilo"]
};

const costMap = {
    8: 0,
    9: 1,
    10: 2,
    11: 3,
    12: 4,
    13: 5,
    14: 7,
    15: 9
};

const modifierMap = {
    8: -1,
    9: -1,
    10: 0,
    11: 0,
    12: 1,
    13: 1,
    14: 2,
    15: 2,
    16: 3,
    17: 3
};

function updateDisplay(id) {
    document.getElementById("value" + id).innerText = values[id - 1];
    document.getElementById("total" + id).innerText = values[id - 1] + mods[id - 1];
    if (restricted === true) {
        document.getElementById("pricePool").innerText = pricePool + " / 27";
    } else {
        document.getElementById("pricePool").innerText = "∞";
    }
}

function increment(id) {
    const currentValue = values[id - 1];
    const nextValue = currentValue + 1;
    if (restricted === false) {
        if (id == 6 && currentValue == 29) {

        } else {
            values[id - 1] = nextValue;
            updateDisplay(id);
            updateTotals();
        }
    }

    if (nextValue <= 15 && restricted === true) {
        const currentCost = costMap[currentValue];
        const nextCost = costMap[nextValue];
        const costDifference = nextCost - currentCost;

        if (pricePool >= costDifference) {
            values[id - 1] = nextValue;
            pricePool -= costDifference;
            updateDisplay(id);
            updateTotals();
        }
    }
}

function decrement(id) {
    const currentValue = values[id - 1];
    const previousValue = currentValue - 1;
    if (previousValue >= 1 && restricted === false) {
        values[id - 1] = previousValue;
        updateDisplay(id);
        updateTotals();
    }

    if (previousValue >= 8 && restricted === true) {
        const currentCost = costMap[currentValue];
        const previousCost = costMap[previousValue];
        const costDifference = currentCost - previousCost;

        values[id - 1] = previousValue;
        pricePool += costDifference;
        updateDisplay(id);
        updateTotals();
    }
}

function modIncrement(id) {
    if (modifiableBoxes.includes(id) && modifierPool > 0 && mods[id - 1] < 2) {
        mods[id - 1]++;
        modifierPool--;
        document.getElementById("mod" + id).innerText = mods[id - 1];
        document.getElementById("modifierPool").innerText = modifierPool + " / 3";
        updateTotals();
    }
}

function modDecrement(id) {
    if (modifiableBoxes.includes(id) && mods[id - 1] > 0) {
        mods[id - 1]--;
        modifierPool++;
        document.getElementById("mod" + id).innerText = mods[id - 1];
        document.getElementById("modifierPool").innerText = modifierPool;
        updateTotals();
    }
}

function updateRole() {
    const selectedRole = document.getElementById("roleSelect").value;
    modifiableBoxes = roles[selectedRole] || [];

    // Reset modifier pool and box colors
    for (let i = 1; i <= 6; i++) {
        document.getElementById("modBox" + i).classList.remove("modifiable");
        mods[i - 1] = 0;
        document.getElementById("mod" + i).innerText = "0";
    }
    modifierPool = 3;
    document.getElementById("modifierPool").innerText = modifierPool;

    // Highlight modifiable boxes
    modifiableBoxes.forEach(boxId => {
        document.getElementById("modBox" + boxId).classList.add("modifiable");
    });

    updateTotals();
    updateSkillOptions();
}

function updateTotals() {
    for (let i = 1; i <= 6; i++) {
        let score = values[i - 1] + mods[i - 1];
        let scoremod = 0
        scoremod = Math.floor((score - 10) / 2)
        document.getElementById("total" + i).innerText = score;
        if (restricted === true) {
            document.getElementById("abilityMod" + i).innerText = modifierMap[score];
        } else {
            document.getElementById("abilityMod" + i).innerText = scoremod
        }
    }
}

function classStats() {
    const selectedClass = document.getElementById("class").value;
    let scores = [];
    scores = classDefault[selectedClass] || [];
    if (scores.length > 0) {
        pricePool = 0;
        for (let i = 1; i <= 6; i++) {
            values[i - 1] = scores[i - 1];
            updateDisplay(i);
        }
        updateTotals();
    }
}

function clearStats() {
    initialPricePool = 27
    pricePool = initialPricePool;
    removeRestrictions.checked = false;
    restricted = true
    modifierPool = 3;
    for (let i = 1; i <= 6; i++) {
        values[i - 1] = 8
        mods[i - 1] = 0;
        document.getElementById("mod" + i).innerText = "0";
        updateDisplay(i);
    }
    updateTotals();
}

function removeRestrictionsChecked() {
    restricted = false
    document.getElementById("pricePool").innerText = "∞";
}

function removeRestrictionsUnchecked() {
    clearStats()
}

function handleRaceChange() {
    const race = document.getElementById("race").value;
    const subraceContainer = document.getElementById("subrace-container");
    const subraceSelect = document.getElementById("subrace");

    // Clear existing options in subrace select
    subraceSelect.innerHTML = '';

    // Determine which subrace options to show
    if (race === "Elf") {
        subraceContainer.style.display = "block";
        addSubraceOptions(["Alto Elfo", "Elfo de los Bosques", "Elfo Oscuro"]);
    } else if (race === "Goliath") {
        subraceContainer.style.display = "block";
        addSubraceOptions(["Gigante de las Nubes", "Gigante de Fuego", "Gigante de las Nieves", "Gigante de la montaña", "Gigante de Piedra", "Gigante de las Tormentas"]);
    } else if (race === "Tiefling") {
        subraceContainer.style.display = "block";
        addSubraceOptions(["Abisal", "Chthonic", "Infernal"]);
    } else if (race === "Gnome") {
        subraceContainer.style.display = "block";
        addSubraceOptions(["Gnomo de los Bosques", "Gnomo de las Rocas"])
    } else if (race === "Dragonborn") {
        subraceContainer.style.display = "block";
        addSubraceOptions(["Cromático", "Metálico", "Gémico"])
    } else if (race === "Halfling") {
        subraceContainer.style.display = "block";
        addSubraceOptions(["Piesligeros ", "Fornidos"])
    } else if (race === "Dwarf") {
        subraceContainer.style.display = "block";
        addSubraceOptions(["Enano de las Colinas", "Enano de las montañas"])
    } else {
        // Hide subrace dropdown if the race doesn't have subraces
        subraceContainer.style.display = "none";
    }
}

function addSubraceOptions(subraceList) {
    const subraceSelect = document.getElementById("subrace");
    subraceSelect.innerHTML = '<option value="" disabled selected>Selecciona tu subraza</option>'; // Default option
    subraceList.forEach(subrace => {
        const option = document.createElement("option");
        option.value = subrace;
        option.text = subrace;
        subraceSelect.appendChild(option);
    });
}

function updateClassFeatures() {
    const classFeaturesDiv = document.getElementById('class-features');
    const selectedClass = document.getElementById('class').value;

    // Clear previous content
    classFeaturesDiv.innerHTML = '';

    // Class features data
    const classFeaturesData = {
        Artificiero: `
            <h3>Clase: Artificiero</h3>
            <p><strong>Atributo Principal:</strong> Inteligencia</p>
            <p><strong>Dado de Golpe:</strong> D8 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Constitución e Inteligencia</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 2: Arcanos, Historia, Investigación, Medicina, Naturaleza, Percepción, Juego de Manos</p>
            <p><strong>Competencias en Armas:</strong> Armas simples</p>
            <p><strong>Competencias en Herramientas:</strong> Herramientas de ladrón, Herramientas de manitas, un tipo de Herramientas de artesano</p>
            <p><strong>Entrenamiento en Armadura:</strong> Armadura ligera y media, Escudos</p>
            <p><strong>Equipo Inicial:</strong> Armadura de cuero tachonado, Escudo, Ballesta ligera, 20 virotes, 2 Daggers, Herramientas de ladrón, Pack de explorador y 27 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Magical Tinkering:</strong> Puedes imbuir objetos pequeños con propiedades mágicas menores.</li>
                <li><strong>Conjuro:</strong> Conoces dos trucos de la lista de Artífice.</li>
                <li><strong>Conjuro como Ritual:</strong> Puedes lanzar conjuros con la etiqueta ritual.</li>
            </ul>
        `,
        Bárbaro: `
            <h3>Clase: Bárbaro</h3>
            <p><strong>Atributo Principal:</strong> Fuerza</p>
            <p><strong>Dado de Golpe:</strong> D12 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Fuerza y Constitución</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 2: Trato con Animales, Atletismo, Intimidación, Naturaleza, Percepción, Supervivencia</p>
            <p><strong>Competencias en Armas:</strong> Armas simples y marciales</p>
            <p><strong>Entrenamiento en Armadura:</strong> Armadura ligera y media, Escudos</p>
            <p><strong>Equipo Inicial:</strong> Hacha grande, 4 Hachas arrojadizas, Pack de explorador y 15 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Furia:</strong> Puedes entrar en furia como acción adicional.</li>
                <li><strong>Defensa sin Armadura:</strong> CA = 10 + Mod. Destreza + Mod. Constitución.</li>
            </ul>
        `,
        Bardo: `
            <h3>Clase: Bardo</h3>
            <p><strong>Atributo Principal:</strong> Carisma</p>
            <p><strong>Dado de Golpe:</strong> D8 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Destreza y Carisma</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 3: Cualquier habilidad</p>
            <p><strong>Competencias en Armas:</strong> Armas simples</p>
            <p><strong>Competencias en Instrumentos:</strong> Elige 3 instrumentos musicales</p>
            <p><strong>Entrenamiento en Armadura:</strong> Armadura ligera</p>
            <p><strong>Equipo Inicial:</strong> Armadura de cuero, 2 Daggers, Instrumento musical de tu elección, Pack de artista y 19 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Inspiración Bárdica:</strong> Puedes inspirar a otros como acción adicional.</li>
                <li><strong>Conjuro:</strong> Conoces dos trucos de la lista de Bardo.</li>
            </ul>
        `,
        Clérigo: `
            <h3>Clase: Clérigo</h3>
            <p><strong>Atributo Principal:</strong> Sabiduría</p>
            <p><strong>Dado de Golpe:</strong> D8 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Sabiduría y Carisma</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 2: Historia, Perspicacia, Medicina, Persuasión, Religión</p>
            <p><strong>Competencias en Armas:</strong> Armas simples</p>
            <p><strong>Entrenamiento en Armadura:</strong> Armadura ligera y media, Escudos</p>
            <p><strong>Equipo Inicial:</strong> Cota de malla, Escudo, Maza, Símbolo sagrado, Pack de sacerdote y 7 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Orden Divina:</strong> Elige entre Protector o Taumaturgo.</li>
                <li><strong>Conjuro:</strong> Conoces tres trucos de la lista de Clérigo.</li>
            </ul>
        `,
        Druida: `
            <h3>Clase: Druida</h3>
            <p><strong>Atributo Principal:</strong> Sabiduría</p>
            <p><strong>Dado de Golpe:</strong> D8 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Inteligencia y Sabiduría</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 2: Arcanos, Trato con Animales, Perspicacia, Medicina, Naturaleza, Percepción, Religión, Supervivencia</p>
            <p><strong>Competencias en Armas:</strong> Armas simples</p>
            <p><strong>Competencias en Herramientas:</strong> Kit de herboristería</p>
            <p><strong>Entrenamiento en Armadura:</strong> Armadura ligera, Escudos</p>
            <p><strong>Equipo Inicial:</strong> Armadura de cuero, Escudo, Hoz, Foco druídico (Bastón), Pack de explorador, Kit de herboristería y 9 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Druídico:</strong> Conoces el lenguaje secreto de los druidas.</li>
                <li><strong>Orden Primal:</strong> Elige entre Mago o Guardián.</li>
                <li><strong>Conjuro:</strong> Conoces dos trucos de la lista de Druida.</li>
            </ul>
        `,
        Guerrero: `
            <h3>Clase: Guerrero</h3>
            <p><strong>Atributo Principal:</strong> Fuerza o Destreza</p>
            <p><strong>Dado de Golpe:</strong> D10 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Fuerza y Constitución</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 2: Acrobacias, Trato con Animales, Atletismo, Historia, Perspicacia, Intimidación, Persuasión, Percepción, Supervivencia</p>
            <p><strong>Competencias en Armas:</strong> Armas simples y marciales</p>
            <p><strong>Entrenamiento en Armadura:</strong> Todas las armaduras, Escudos</p>
            <p><strong>Equipo Inicial:</strong> Elige A o B: (A) Cota de malla, Espada a dos manos, Mayal, 8 Jabalinas, Pack de explorador y 4 PO; (B) Armadura de cuero tachonado, Cimitarra, Espada corta, Arco largo, 20 Flechas, Carcaj, Pack de explorador y 11 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Estilo de Combate:</strong> Elige un estilo de combate.</li>
                <li><strong>Maestría con Armas:</strong> Domina dos armas.</li>
                <li><strong>Segundo Aliento:</strong> Puedes recuperar puntos de golpe.</li>
            </ul>
        `,
        Monje: `
            <h3>Clase: Monje</h3>
            <p><strong>Atributo Principal:</strong> Destreza y Sabiduría</p>
            <p><strong>Dado de Golpe:</strong> D8 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Fuerza y Destreza</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 2: Acrobacias, Atletismo, Historia, Perspicacia, Religión, Sigilo</p>
            <p><strong>Competencias en Armas:</strong> Armas simples y armas marciales con propiedad Ligera</p>
            <p><strong>Competencias en Herramientas:</strong> Elige un tipo de Herramientas de artesano o Instrumento musical</p>
            <p><strong>Entrenamiento en Armadura:</strong> Ninguno</p>
            <p><strong>Equipo Inicial:</strong> Lanza, 5 Daggers, Herramientas de artesano o Instrumento musical elegido, Pack de explorador y 11 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Artes Marciales:</strong> Puedes hacer un ataque sin armas como acción adicional.</li>
                <li><strong>Defensa sin Armadura:</strong> CA = 10 + Mod. Destreza + Mod. Sabiduría.</li>
            </ul>
        `,
        Paladín: `
            <h3>Clase: Paladín</h3>
            <p><strong>Atributo Principal:</strong> Fuerza y Carisma</p>
            <p><strong>Dado de Golpe:</strong> D10 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Sabiduría y Carisma</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 2: Atletismo, Perspicacia, Intimidación, Medicina, Persuasión, Religión</p>
            <p><strong>Competencias en Armas:</strong> Armas simples y marciales</p>
            <p><strong>Entrenamiento en Armadura:</strong> Todas las armaduras, Escudos</p>
            <p><strong>Equipo Inicial:</strong> Cota de malla, Escudo, Espada larga, 6 Jabalinas, Símbolo sagrado, Pack de sacerdote y 9 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Imposición de Manos:</strong> Tienes un reservorio de curación.</li>
                <li><strong>Maestría con Armas:</strong> Domina dos armas.</li>
                <li><strong>Conjuro:</strong> Puedes preparar y lanzar conjuros de Paladín.</li>
            </ul>
        `,
        Guardabosques: `
            <h3>Clase: Explorador</h3>
            <p><strong>Atributo Principal:</strong> Destreza y Sabiduría</p>
            <p><strong>Dado de Golpe:</strong> D10 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Fuerza y Destreza</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 3: Trato con Animales, Atletismo, Perspicacia, Investigación, Naturaleza, Percepción, Sigilo, Supervivencia</p>
            <p><strong>Competencias en Armas:</strong> Armas simples y marciales</p>
            <p><strong>Entrenamiento en Armadura:</strong> Armadura ligera y media, Escudos</p>
            <p><strong>Equipo Inicial:</strong> Armadura de cuero tachonado, Cimitarra, Espada corta, Arco largo, 20 Flechas, Carcaj, Foco druídico (Rama de muérdago), Pack de explorador y 7 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Enemigo Favorecido:</strong> Elige un tipo de enemigo favorecido.</li>
                <li><strong>Conjuro:</strong> Conoces dos trucos y puedes lanzar conjuros de Explorador.</li>
            </ul>
        `,
        Pícaro: `
            <h3>Clase: Pícaro</h3>
            <p><strong>Atributo Principal:</strong> Destreza</p>
            <p><strong>Dado de Golpe:</strong> D8 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Destreza e Inteligencia</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 4: Acrobacias, Atletismo, Engaño, Perspicacia, Intimidación, Investigación, Percepción, Persuasión, Juego de Manos, Sigilo</p>
            <p><strong>Competencias en Armas:</strong> Armas simples y armas marciales con propiedad Sutil o Ligera</p>
            <p><strong>Entrenamiento en Armadura:</strong> Armadura ligera</p>
            <p><strong>Equipo Inicial:</strong> Armadura de cuero, 2 Daggers, Espada corta, Arco corto, 20 Flechas, Carcaj, Herramientas de ladrón, Pack de ladrón y 8 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Ataque Furtivo:</strong> Puedes infligir daño adicional una vez por turno.</li>
                <li><strong>Acción Astuta:</strong> Puedes usar una acción adicional para Dash, Disengage o Hide.</li>
            </ul>
        `,
        Hechicero: `
            <h3>Clase: Hechicero</h3>
            <p><strong>Atributo Principal:</strong> Carisma</p>
            <p><strong>Dado de Golpe:</strong> D6 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Constitución y Carisma</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 2: Arcanos, Engaño, Perspicacia, Intimidación, Persuasión, Religión</p>
            <p><strong>Competencias en Armas:</strong> Armas simples</p>
            <p><strong>Entrenamiento en Armadura:</strong> Ninguno</p>
            <p><strong>Equipo Inicial:</strong> Lanza, 2 Daggers, Foco arcano (Cristal), Pack de explorador y 28 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Puntos de Hechicería:</strong> Tienes un reservorio de puntos.</li>
                <li><strong>Conjuro:</strong> Conoces cuatro trucos y puedes lanzar conjuros de Hechicero.</li>
            </ul>
        `,
        Brujo: `
            <h3>Clase: Brujo</h3>
            <p><strong>Atributo Principal:</strong> Carisma</p>
            <p><strong>Dado de Golpe:</strong> D8 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Sabiduría y Carisma</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 2: Arcanos, Engaño, Historia, Intimidación, Investigación, Naturaleza, Religión</p>
            <p><strong>Competencias en Armas:</strong> Armas simples</p>
            <p><strong>Entrenamiento en Armadura:</strong> Armadura ligera</p>
            <p><strong>Equipo Inicial:</strong> Armadura de cuero, Hoz, 2 Daggers, Foco arcano (Orbe), Libro (conocimiento oculto), Pack de erudito y 15 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Magia de Pacto:</strong> Conoces dos trucos y puedes lanzar conjuros de Brujo.</li>
                <li><strong>Invocaciones Arcanas:</strong> Obtienes habilidades mágicas especiales.</li>
            </ul>
        `,
        Mago: `
            <h3>Clase: Mago</h3>
            <p><strong>Atributo Principal:</strong> Inteligencia</p>
            <p><strong>Dado de Golpe:</strong> D6 por nivel</p>
            <p><strong>Competencias en Salvaciones:</strong> Inteligencia y Sabiduría</p>
            <p><strong>Competencias en Habilidades:</strong> Elige 2: Arcanos, Historia, Perspicacia, Investigación, Medicina, Naturaleza, Religión</p>
            <p><strong>Competencias en Armas:</strong> Armas simples</p>
            <p><strong>Entrenamiento en Armadura:</strong> Ninguno</p>
            <p><strong>Equipo Inicial:</strong> 2 Daggers, Foco arcano (Bastón), Túnica, Libro de conjuros, Pack de erudito y 5 PO</p>
            <p><strong>Características de Clase:</strong></p>
            <ul>
                <li><strong>Recuperación Arcana:</strong> Puedes recuperar espacios de conjuro durante un descanso corto.</li>
                <li><strong>Conjuro:</strong> Conoces tres trucos y puedes preparar conjuros de tu Libro de conjuros.</li>
            </ul>
        `
    };

    // Check if the selected class exists in the data and display the features
    if (classFeaturesData[selectedClass]) {
        classFeaturesDiv.innerHTML = classFeaturesData[selectedClass];
    } else {
        classFeaturesDiv.innerHTML = '<p>Please select a class to see its features.</p>';
    }
    updateSkillOptions()
}

function updateSkillBoxes(selectedClass) {
    const skillBox3 = document.getElementById('skillBox3');
    const skillBox4 = document.getElementById('skillBox4');
    if (selectedClass === 'Bardo' || selectedClass === 'Guardabosques') {
        skillBox3.style.display = 'block';
        skillBox4.style.display = 'none';
    } else if (selectedClass === 'Pícaro') {
        skillBox3.style.display = 'block';
        skillBox4.style.display = 'block';
    } else {
        skillBox3.style.display = 'none';
        skillBox4.style.display = 'none';
    }
}

function updateSkillOptions() {
    const skill1 = document.getElementById('skill1');
    const skill2 = document.getElementById('skill2');
    const skill3 = document.getElementById('skill3');
    const skill4 = document.getElementById('skill4');
    const background = document.getElementById('roleSelect').value;
    const classSelect = document.getElementById('class').value;

    const selectedSkill1 = skill1.value;
    const selectedSkill2 = skill2.value;
    const selectedSkill3 = skill3.value;
    const selectedSkill4 = skill4.value;


    const availableClassSkills = classSkills[classSelect] || [];
    const grantedBackgroundSkills = backgroundSkills[background] || [];

    const filteredSkills = availableClassSkills.filter(skill =>
        !grantedBackgroundSkills.includes(skill) &&
        skill !== selectedSkill1 &&
        skill !== selectedSkill2 &&
        skill !== selectedSkill3 &&
        skill !== selectedSkill4
    );
    updateSkillBoxes(classSelect)

    // Function to populate dropdowns
    function populateDropdown(dropdown, selectedSkill) {
        dropdown.innerHTML = `<option value="">--Selecciona competencia--</option>`;
        filteredSkills.forEach(skill => {
            const option = document.createElement('option');
            option.value = skill;
            option.textContent = skill;
            if (skill === selectedSkill) {
                option.selected = true;
            }
            dropdown.appendChild(option);
        });
    }


    populateDropdown(skill1, selectedSkill1);
    populateDropdown(skill2, selectedSkill2);
    populateDropdown(skill3, selectedSkill3);
    populateDropdown(skill4, selectedSkill4);
}

// Initialize skill options on page load
document.addEventListener('DOMContentLoaded', updateSkillOptions);

function updateSkillOptions2() {
    const skill1 = document.getElementById('skill1');
    const skill2 = document.getElementById('skill2');
    const skill3 = document.getElementById('skill3');
    const skill4 = document.getElementById('skill4');
    const background = document.getElementById('roleSelect').value;
    const classSelect = document.getElementById('class').value;

    const selectedSkill1 = skill1.value;
    const selectedSkill2 = skill2.value;
    const selectedSkill3 = skill3.value;
    const selectedSkill4 = skill4.value;


    const availableClassSkills = classSkills[classSelect] || [];
    const grantedBackgroundSkills = backgroundSkills[background] || [];

    const filteredSkills = availableClassSkills.filter(skill =>
        !grantedBackgroundSkills.includes(skill) &&
        skill !== selectedSkill1 &&
        skill !== selectedSkill2 &&
        skill !== selectedSkill3 &&
        skill !== selectedSkill4
    );

    // Function to populate dropdowns
    function populateDropdown(dropdown, selectedSkill) {
        dropdown.innerHTML = `<option value="">--Select Skill--</option>`;
        filteredSkills.forEach(skill => {
            const option = document.createElement('option');
            option.value = skill;
            option.textContent = skill;
            if (skill === selectedSkill) {
                option.selected = true;
            }
            dropdown.appendChild(option);
        });
    }


    populateDropdown(skill2, selectedSkill2);
    populateDropdown(skill3, selectedSkill3);
    populateDropdown(skill4, selectedSkill4);
}

function updateSkillOptions3() {
    const skill1 = document.getElementById('skill1');
    const skill2 = document.getElementById('skill2');
    const skill3 = document.getElementById('skill3');
    const skill4 = document.getElementById('skill4');
    const background = document.getElementById('roleSelect').value;
    const classSelect = document.getElementById('class').value;

    const selectedSkill1 = skill1.value;
    const selectedSkill2 = skill2.value;
    const selectedSkill3 = skill3.value;
    const selectedSkill4 = skill4.value;


    const availableClassSkills = classSkills[classSelect] || [];
    const grantedBackgroundSkills = backgroundSkills[background] || [];

    const filteredSkills = availableClassSkills.filter(skill =>
        !grantedBackgroundSkills.includes(skill) &&
        skill !== selectedSkill1 &&
        skill !== selectedSkill2 &&
        skill !== selectedSkill3 &&
        skill !== selectedSkill4
    );

    // Function to populate dropdowns
    function populateDropdown(dropdown, selectedSkill) {
        dropdown.innerHTML = `<option value="">--Select Skill--</option>`;
        filteredSkills.forEach(skill => {
            const option = document.createElement('option');
            option.value = skill;
            option.textContent = skill;
            if (skill === selectedSkill) {
                option.selected = true;
            }
            dropdown.appendChild(option);
        });
    }


    populateDropdown(skill3, selectedSkill3);
    populateDropdown(skill4, selectedSkill4);
}

function updateSkillOptions4() {
    const skill1 = document.getElementById('skill1');
    const skill2 = document.getElementById('skill2');
    const skill3 = document.getElementById('skill3');
    const skill4 = document.getElementById('skill4');
    const background = document.getElementById('roleSelect').value;
    const classSelect = document.getElementById('class').value;

    const selectedSkill1 = skill1.value;
    const selectedSkill2 = skill2.value;
    const selectedSkill3 = skill3.value;
    const selectedSkill4 = skill4.value;


    const availableClassSkills = classSkills[classSelect] || [];
    const grantedBackgroundSkills = backgroundSkills[background] || [];

    const filteredSkills = availableClassSkills.filter(skill =>
        !grantedBackgroundSkills.includes(skill) &&
        skill !== selectedSkill1 &&
        skill !== selectedSkill2 &&
        skill !== selectedSkill3 &&
        skill !== selectedSkill4
    );

    // Function to populate dropdowns
    function populateDropdown(dropdown, selectedSkill) {
        dropdown.innerHTML = `<option value="">--Select Skill--</option>`;
        filteredSkills.forEach(skill => {
            const option = document.createElement('option');
            option.value = skill;
            option.textContent = skill;
            if (skill === selectedSkill) {
                option.selected = true;
            }
            dropdown.appendChild(option);
        });
    }


    populateDropdown(skill4, selectedSkill4);
}