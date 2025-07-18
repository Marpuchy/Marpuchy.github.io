const {PDFDocument} = PDFLib

async function fillForm() {
    // Fetch the PDF with form fields
    const formUrl = 'https://raw.githubusercontent.com/birddie721/5e2024Builder/main/Character-Sheet.pdf'
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

    // Load a PDF with form fields
    const pdfDoc = await PDFDocument.load(formPdfBytes)

    // Get the form containing all the fields
    const form = pdfDoc.getForm()

    let proficiencyBonus = 2;

    // Get all fields in the PDF by their names
    const nameField = form.getTextField('Name')
    const backgroundField = form.getTextField('Background')
    const classField = form.getTextField('Class')
    const speciesField = form.getTextField('Species')
    const subclassField = form.getTextField('Subclass')
    const speciesTraits = form.getTextField('SPECIES TRAITS')
    const classFeatures1 = form.getTextField('CLASS FEATURES 1')
    const classFeatures2 = form.getTextField('CLASS FEATURES 2')

    const levelField = form.getTextField('Level')
    const xpField = form.getTextField('XP Points')

    const acField = form.getTextField('Armor Class')
    const hpField = form.getTextField('Max HP')

    const proficiencyField = form.getTextField('PROF BONUS')
    const passivePerceptionField = form.getTextField('PASSIVE PERCEPTION')

    const strScoreField = form.getTextField('STR SCORE')
    const strModField = form.getTextField('STR MOD')

    const dexScoreField = form.getTextField('DEX SCORE')
    const dexModField = form.getTextField('DEX MOD')

    const conScoreField = form.getTextField('CON SCORE')
    const conModField = form.getTextField('CON MOD')

    const intScoreField = form.getTextField('INT SCORE')
    const intModField = form.getTextField('INT MOD')

    const wisScoreField = form.getTextField('WIS SCORE')
    const wisModField = form.getTextField('WIS MOD')

    const chaScoreField = form.getTextField('CHA SCORE')
    const chaModField = form.getTextField('CHA MOD')

    const initiativeField = form.getTextField('init')
    const speedField = form.getTextField('SPEED')
    const sizeField = form.getTextField('SIZE')

    const strChk = form.getCheckBox("Check Box18")
    const dexChk = form.getCheckBox("Check Box11")
    const conChk = form.getCheckBox("Check Box7")
    const intChk = form.getCheckBox("Check Box25")
    const wisChk = form.getCheckBox("Check Box17")
    const chaChk = form.getCheckBox("Check Box6")

    const strSaveField = form.getTextField("STR SAVE")
    const dexSaveField = form.getTextField("DEX SAVE")
    const conSaveField = form.getTextField("CON SAVE")
    const intSaveField = form.getTextField("INT SAVE")
    const wisSaveField = form.getTextField("Text Field71")
    const chaSaveField = form.getTextField("CHA SAVE")

    const athleticsChk = form.getCheckBox("Check Box19")
    const acrobaticsChk = form.getCheckBox("Check Box8")
    const slightOfHandChk = form.getCheckBox("Check Box9")
    const stealthChk = form.getCheckBox("Check Box10")
    const arcanaChk = form.getCheckBox("Check Box24")
    const historyChk = form.getCheckBox("Check Box20")
    const investigationChk = form.getCheckBox("Check Box21")
    const natureChk = form.getCheckBox("Check Box22")
    const religionChk = form.getCheckBox("Check Box23")
    const animalHandlingChk = form.getCheckBox("Check Box15")
    const insightChk = form.getCheckBox("Check Box13")
    const medicineChk = form.getCheckBox("Check Box12")
    const perceptionChk = form.getCheckBox("Check Box14")
    const survivalChk = form.getCheckBox("Check Box16")
    const deceptionChk = form.getCheckBox("Check Box5")
    const intimidationChk = form.getCheckBox("Check Box4")
    const performanceChk = form.getCheckBox("Check Box3")
    const persuasionChk = form.getCheckBox("Check Box2")

    const athleticsField = form.getTextField("ATHLETICS")
    const acrobaticsField = form.getTextField("ACROBATICS")
    const slightOfHandField = form.getTextField("SLEIGHT OF HAND")
    const stealthField = form.getTextField("STEALTH")
    const arcanaField = form.getTextField("ARCANA")
    const historyField = form.getTextField("HISTORY")
    const investigationField = form.getTextField("INVESTIGATION")
    const natureField = form.getTextField("NATURE")
    const religionField = form.getTextField("RELIGION")
    const animalHandlingField = form.getTextField("ANIMAL HANDLING")
    const insightField = form.getTextField("INSIGHT")
    const medicineField = form.getTextField("MEDICINE")
    const perceptionField = form.getTextField("PERCEPTION")
    const survivalField = form.getTextField("SURVIVAL")
    const deceptionField = form.getTextField("DECEPTION")
    const intimidationField = form.getTextField("INTIMIDATE")
    const performanceField = form.getTextField("PERFORMANCE")
    const persuasionField = form.getTextField("PERSUASION")


    const lightArmor = form.getCheckBox("Check Box33")
    const mediumArmor = form.getCheckBox("Check Box34")
    const heavyArmor = form.getCheckBox("Check Box35")
    const shieldProf = form.getCheckBox("Check Box36")

    const weapon1Name = form.getTextField("NAME - WEAPON 1")
    const weapon1Bonus = form.getTextField("BONUS/DC - WEAPON 1")
    const weapon1Damage = form.getTextField("DAMAGE/TYPE - WEAPON 1")
    const weapon1Notes = form.getTextField("NOTES - WEAPON 1")

    const weapon2Name = form.getTextField("NAME - WEAPON 2")
    const weapon2Bonus = form.getTextField("BONUS/DC - WEAPON 2")
    const weapon2Damage = form.getTextField("DAMAGE/TYPE - WEAPON 2")
    const weapon2Notes = form.getTextField("NOTES - WEAPON 2")

    const weapon3Name = form.getTextField("NAME - WEAPON 3")
    const weapon3Bonus = form.getTextField("BONUS/DC - WEAPON 3")
    const weapon3Damage = form.getTextField("DAMAGE/TYPE - WEAPON 3")
    const weapon3Notes = form.getTextField("NOTES - WEAPON 3")

    const weapon4Name = form.getTextField("NAME - WEAPON 4")
    const weapon4Bonus = form.getTextField("BONUS/DC - WEAPON 4")
    const weapon4Damage = form.getTextField("DAMAGE/TYPE - WEAPON 4")
    const weapon4Notes = form.getTextField("NOTES - WEAPON 4")

    const weapon5Name = form.getTextField("NAME - WEAPON 5")
    const weapon5Bonus = form.getTextField("BONUS/DC - WEAPON 5")
    const weapon5Damage = form.getTextField("DAMAGE/TYPE - WEAPON 5")
    const weapon5Notes = form.getTextField("NOTES - WEAPON 5")

    const weapon6Name = form.getTextField("NAME - WEAPON 6")
    const weapon6Bonus = form.getTextField("BONUS/DC - WEAPON 6")
    const weapon6Damage = form.getTextField("DAMAGE/TYPE - WEAPON 6")
    const weapon6Notes = form.getTextField("NOTES - WEAPON 6")

    const hasShieldChk = form.getCheckBox("shield chk")
    const shieldAC = 2;

    const spellcastingAbilityField = form.getTextField("SPELLCASTING ABILITY")
    const spellcastingModifierField = form.getTextField("SPELLCASTING MOD")
    const spellSaveDCField = form.getTextField("SPELL SAVE DC")
    const spellAttackBonusField = form.getTextField("SPELL ATTACK BONUS")

    const CPField = form.getTextField("CP")
    const SPField = form.getTextField("SP")
    const EPField = form.getTextField("EP")
    const GPField = form.getTextField("GP")
    const PPField = form.getTextField("PP")

    const weaponProficienciesField = form.getTextField("WEAPON PROF")
    const toolProficienciesField = form.getTextField("TOOL PROF")

    const featsField = form.getTextField("FEATS")
    const equipmentField = form.getTextField("EQUIPMENT")

    let goldPieces = 0;

    // Fill in the basic info fields
    nameField.setText(document.getElementById("playerName").value)
    let background = document.getElementById("roleSelect").value;
    backgroundField.setText(background);
    let selectedClass = document.getElementById("class").value
    classField.setText(selectedClass)

    let species = document.getElementById("race").value
    let speciesList = []
    let subrace = document.getElementById("subrace").value
    if (speciesList.includes(species)) {
        speciesField.setText(subrace + " " + species)
    } else {
        speciesField.setText(species)
    }

    const fastList = ["Goliath"]
    if (fastList.includes(species)) {
        speedField.setText("35")
    } else {
        if (subrace == "Wood") {
            speedField.setText("35")
        } else {
            speedField.setText("30")
        }
    }

    sizeField.setText("")

    levelField.setText('1')
    proficiencyField.setText('+' + proficiencyBonus)

    const classHP = {
        "Artificiero": 10,
        "Bárbaro": 12,
        "Bardo": 8,
        "Clérigo": 8,
        "Druida": 8,
        "Guerrero": 10,
        "Monje": 8,
        "Paladín": 10,
        "Guardabosques": 10,
        "Pícaro": 8,
        "Hechicero": 6,
        "Brujo": 8,
        "Mago": 6
    }

    strScoreField.setText(document.getElementById("total1").innerText)
    let strMod = document.getElementById("abilityMod1").innerText;
    if (strMod >= 0) {
        strModField.setText("+" + strMod)
    } else {
        strModField.setText(strMod)
    }

    dexScoreField.setText(document.getElementById("total2").innerText)
    let dexMod = document.getElementById("abilityMod2").innerText;
    if (dexMod >= 0) {
        dexModField.setText("+" + dexMod)
    } else {
        dexModField.setText(dexMod)
    }

    conScoreField.setText(document.getElementById("total3").innerText)
    let conMod = document.getElementById("abilityMod3").innerText;
    if (conMod >= 0) {
        conModField.setText("+" + conMod)
    } else {
        conModField.setText(conMod)
    }

    intScoreField.setText(document.getElementById("total4").innerText)
    let intMod = document.getElementById("abilityMod4").innerText;
    if (intMod >= 0) {
        intModField.setText("+" + intMod)
    } else {
        intModField.setText(intMod)
    }

    wisScoreField.setText(document.getElementById("total5").innerText)
    let wisMod = document.getElementById("abilityMod5").innerText;
    if (wisMod >= 0) {
        wisModField.setText("+" + wisMod)
    } else {
        wisModField.setText(wisMod)
    }

    chaScoreField.setText(document.getElementById("total6").innerText)
    let chaMod = document.getElementById("abilityMod6").innerText;
    if (chaMod >= 0) {
        chaModField.setText("+" + chaMod)
    } else {
        chaModField.setText(chaMod)
    }

    if (dexMod === "-1") {
        initiativeField.setText(dexMod)
    } else {
        initiativeField.setText("+" + dexMod)
    }
    let modifiedHP = 0
    let hp = classHP[selectedClass]
    if (species === "Dwarf") {
        modifiedHP = parseInt(hp) + parseInt(conMod) + 1
    } else {
        modifiedHP = parseInt(hp) + parseInt(conMod)
    }
    hpField.setText(modifiedHP.toString())

    const strSave = ["Bárbaro", "Guerrero", "Monje", "Guardabosques"]
    const dexSave = ["Bardo", "Monje", "Guardabosques", "Pícaro"]
    const conSave = ["Bárbaro", "Guerrero", "Hechicero"]
    const intSave = ["Druida", "Pícaro", "Mago"]
    const wisSave = ["Clérigo", "Druida", "Paladín", "Brujo", "Mago"]
    const chaSave = ["Bardo", "Clérigo", "Paladín", "Hechicero", "Brujo"]

    if (strSave.includes(selectedClass)) {
        strChk.check();
    }
    if (dexSave.includes(selectedClass)) {
        dexChk.check();
    }
    if (conSave.includes(selectedClass)) {
        conChk.check();
    }
    if (intSave.includes(selectedClass)) {
        intChk.check();
    }
    if (wisSave.includes(selectedClass)) {
        wisChk.check();
    }
    if (chaSave.includes(selectedClass)) {
        chaChk.check();
    }

    const lightArmorProficiency = ["Bárbaro", "Bardo", "Clérigo", "Druida", "Guerrero", "Paladín", "Guardabosques", "Pícaro", "Brujo"]
    const mediumArmorProficiency = ["Bárbaro", "Clérigo", "Guerrero", "Paladín", "Guardabosques"]
    const heavyArmorProficiency = ["Guerrero", "Paladín"]
    const hasShieldProficiency = ["Bárbaro", "Clérigo", "Druida", "Guerrero", "Paladín", "Guardabosques"]

    if (lightArmorProficiency.includes(selectedClass)) {
        lightArmor.check();
    }
    if (mediumArmorProficiency.includes(selectedClass)) {
        mediumArmor.check();
    }
    if (heavyArmorProficiency.includes(selectedClass)) {
        heavyArmor.check();
    }
    if (hasShieldProficiency.includes(selectedClass)) {
        shieldProf.check();
    }

    if (perceptionChk.isChecked()) {
        let passivePerception = parseInt(wisMod) + parseInt(proficiencyBonus) + 10
        passivePerceptionField.setText(passivePerception.toString())
    } else {
        let passivePerception = parseInt(wisMod) + 10
        passivePerceptionField.setText(passivePerception.toString())
    }

    let aasimarTraits = [
        " * Resistencia Celestial - Resistencia al daño necrótico y radiante.",
        " * Visión en la Oscuridad - Alcance 60 pies",
        " * Manos Sanadoras - Acción mágica, alcance toque, la criatura cura un número de d4 igual a tu modificador de competencia. Una vez/Descanso largo",
        " * Portador de Luz - Conoces el truco Luz"
    ];

    let dragonbornTraits = [
        " * Ascendencia Dracónica - Basado en el color de tu dragón, ganas afinidad con un elemento que afecta tu Arma de Aliento y Resistencia al Daño.",
        " * Arma de Aliento - Durante la acción de ataque, puedes reemplazar un ataque con un Cono de 15 pies o Línea de 30 pies de ancho 5 pies. Cada criatura hace una tirada de salvación de Destreza (CD 8 + mod Con + bonif. competencia). El tipo de daño lo determina tu Ascendencia Dracónica. 1d10 -> 2d10 (nvl5) -> 3d10 (nvl11) -> 4d10 (nvl17). Usos igual a tu bonif. competencia/descanso largo.",
        " * Resistencia al Daño - Tienes resistencia al tipo de daño determinado por tu rasgo de Ascendencia Dracónica.",
        " * Visión en la Oscuridad - Alcance 60 pies",
        " * Vuelo Dracónico - Como acción bonus, ganas velocidad de vuelo igual a tu velocidad durante 10 minutos. Una vez/descanso largo."
    ]

    let dwarfTraits = [
        " * Visión en la Oscuridad - Alcance 120 pies",
        " * Resistencia Enana - Resistencia al daño por veneno. Ventaja en tiradas para evitar o terminar la condición Envenenado.",
        " * Dureza Enana - +1 PV máximo por nivel.",
        " * Astucia Pétrea - Acción bonus, ganas Sentido Vibratorio con alcance 60 pies por 10 minutos. Solo en superficies de piedra. Usos igual a bonif. competencia/descanso largo."
    ]

    let elfTraits = [
        " * Ascendencia Feérica - Ventaja en tiradas de salvación para evitar o terminar la condición Hechizado.",
        " * Sentidos Agudos - Competencia en Percepción, Perspicacia o Supervivencia.",
        " * Trance - No necesitas dormir, y la magia no puede hacerte dormir. Puedes completar un descanso largo en 4 horas en meditación, manteniendo la conciencia."
    ]
    let drowTraits = [
        " * Visión en la Oscuridad - Alcance 120 pies",
        " * Linaje Drow - Conoces el truco Luces Danzantes. A nivel 3 conoces Fuego Feérico, a nivel 5 Oscuridad."
    ]
    let highElfTraits = [
        " * Visión en la Oscuridad - Alcance 60 pies",
        " * Linaje Alto Elfo - Conoces un truco de Mago y puedes cambiarlo al terminar un descanso largo. A nivel 3 conoces Detectar Magia, a nivel 5 Paso Brumoso."
    ]
    let woodElfTraits = [
        " * Visión en la Oscuridad - Alcance 60 pies",
        " * Linaje Elfo del Bosque - Tu velocidad aumenta a 35 pies. Conoces el truco Druídico. A nivel 3 conoces Paso Veloz, a nivel 5 Pasar sin Rastro."
    ]

    let gnomeTraits = [
        " * Visión en la Oscuridad - Alcance 60 pies",
        " * Astucia Gnómica - Ventaja en tiradas de salvación de Inteligencia, Sabiduría y Carisma."
    ]
    let forestGnomeTraits = [
        " * Linaje Gnomo del Bosque - Conoces el truco Ilusión Menor. Siempre tienes preparado Hablar con Animales y puedes lanzarlo sin gastar espacio de conjuro un número de veces igual a tu bonif. competencia. Recuperas usos al terminar un descanso largo."
    ]
    let rockGnomeTraits = [
        " * Linaje Gnomo de las Rocas - Conoces los trucos Prestidigitación y Reparar. También puedes gastar 10 minutos usando Prestidigitación para crear objetos pequeños."
    ]

    let goliathTraits = [
        " * Forma Grande - Desde nivel 5, puedes cambiar tu tamaño a Grande como acción bonus por 10 minutos o hasta que termines. Durante ese tiempo, tienes ventaja en pruebas de Fuerza y tu velocidad aumenta 10 pies. Una vez/descanso largo.",
        " * Complexión Poderosa - Ventaja en tiradas para terminar la condición Agarrado. Cuentas como un tamaño más grande para determinar tu capacidad de carga.",
        " * Ascendencia Gigante - Ganas un don sobrenatural de tu ascendencia. Puedes usarlo un número de veces igual a tu bonif. competencia, recuperando usos al terminar un descanso largo."
    ]
    let cloudTraits = [
        " * Salto de las Nubes - Como acción bonus, te teletransportas hasta 30 pies a un espacio desocupado que veas."
    ]
    let fireTraits = [
        " * Quemadura de Fuego - Cuando impactas con un ataque, puedes hacer 1d10 adicional de daño de fuego."
    ]
    let frostTraits = [
        " * Escarcha Gélida - Cuando impactas con un ataque, puedes hacer 1d6 adicional de daño de frío y reducir la velocidad del objetivo 10 pies hasta tu próximo turno."
    ]
    let hillTraits = [
        " * Derribo Colina - Cuando impactas a una criatura Grande o más pequeña, puedes hacer que caiga Prone."
    ]
    let stoneTraits = [
        " * Resistencia Pétrea - Cuando recibes daño, como reacción puedes tirar 1d12. Suma tu mod de Constitución y reduce el daño por ese total."
    ]
    let stormTraits = [
        " * Trueno de Tormenta - Cuando recibes daño de una criatura a 60 pies, como reacción puedes hacerle 1d8 de daño por trueno."
    ]

    let halflingTraits = [
        " * Valiente - Ventaja en tiradas para evitar o terminar la condición Asustado.",
        " * Agilidad Mediana - Puedes moverte por el espacio de criaturas más grandes, pero no detenerte allí.",
        " * Suerte - Cuando sacas 1 en un d20, puedes repetir la tirada.",
        " * Sigilo Natural - Puedes esconderte aunque solo estés cubierto por una criatura más grande."
    ]

    let humanTraits = [
        " * Ingenioso - Ganas Inspiración Heroica al terminar un descanso largo.",
        " * Hábil - Ganas competencia en una habilidad a elección.",
        " * Versátil - Ganas un dote de origen a elección."
    ]

    let orcTraits = [
        " * Corredor - Puedes usar la acción de Dash como acción bonus, ganando PV temporales igual a tu bonif. competencia. Usos igual a bonif. competencia/descanso corto o largo.",
        " * Visión en la Oscuridad - Alcance 120 pies",
        " * Aguante Inquebrantable - Cuando te reduzcan a 0 PV pero no mueras, puedes quedarte con 1 PV. Una vez/descanso largo."
    ]

    let tieflingTraits = [
        " * Visión en la Oscuridad - Alcance 60 pies",
        " * Presencia Infernal - Conoces el truco Taumaturgia. Cuando lo lances con este rasgo, usa la misma característica que tu Linaje Infernal.",
        " * Linaje Infernal - A niveles 3 y 5 conoces un conjuro dependiendo de tu Linaje Infernal. Siempre lo tienes preparado. Puedes lanzarlo una vez sin gastar espacio de conjuro/descanso largo. También puedes lanzarlo con espacios de conjuro. Inteligencia, Sabiduría o Carisma es tu característica para estos conjuros."
    ]
    let abyssalTraits = [
        " * Abisal - Conoces el truco Rociada Venenosa. Resistencia al daño por veneno. A nivel 3 conoces Rayo Enfermizo. A nivel 5 conoces Dominar Persona."
    ]
    let chthonicTraits = [
        " * Ctónico - Conoces el truco Toque Vampírico. Resistencia al daño necrótico. A nivel 3 conoces Falso Vitalidad. A nivel 5 conoces Rayo Debilitador."
    ]
    let infernalTraits = [
        " * Infernal - Conoces el truco Dardo de Fuego. Resistencia al daño de fuego. A nivel 3 conoces Represalia Infernal. A nivel 5 conoces Oscuridad."
    ]

    switch (species) {
        case "Aasimar":
            speciesTraits.setText(aasimarTraits.join('\n'));
            break;

        case "Dragonborn":
            speciesTraits.setText(dragonbornTraits.join('\n'));
            break;
        case "Dwarf":
            speciesTraits.setText(dwarfTraits.join('\n'));
            break;
        case "Elf":
            switch (subrace) {
                case "High":
                    speciesTraits.setText(elfTraits.join('\n') + '\n' + highElfTraits.join('\n'));
                    break;
                case "Wood":
                    speciesTraits.setText(elfTraits.join('\n') + '\n' + woodElfTraits.join('\n'));
                    break;
                case "Dark":
                    speciesTraits.setText(elfTraits.join('\n') + '\n' + drowTraits.join('\n'));
                    break;
            }
            break;
        case "Gnome":
            switch (subrace) {
                case "Forest":
                    speciesTraits.setText(gnomeTraits.join('\n') + '\n' + forestGnomeTraits.join('\n'));
                    break;
                case "Rock":
                    speciesTraits.setText(gnomeTraits.join('\n') + '\n' + rockGnomeTraits.join('\n'));
                    break;
            }
            break;
        case "Goliath":
            switch (subrace) {
                case "Cloud Giant":
                    speciesTraits.setText(goliathTraits.join('\n') + '\n' + cloudTraits.join('\n'));
                    break;
                case "Fire Giant":
                    speciesTraits.setText(goliathTraits.join('\n') + '\n' + fireTraits.join('\n'));
                    break;
                case "Frost Giant":
                    speciesTraits.setText(goliathTraits.join('\n') + '\n' + frostTraits.join('\n'));
                    break;
                case "Hill Giant":
                    speciesTraits.setText(goliathTraits.join('\n') + '\n' + hillTraits.join('\n'));
                    break;
                case "Stone Giant":
                    speciesTraits.setText(goliathTraits.join('\n') + '\n' + stoneTraits.join('\n'));
                    break;
                case "Storm Giant":
                    speciesTraits.setText(goliathTraits.join('\n') + '\n' + stormTraits.join('\n'));
                    break;
            }
            break;
        case "Halfling":
            speciesTraits.setText(halflingTraits.join('\n'));
            break;
        case "Human":
            speciesTraits.setText(humanTraits.join('\n'));
            break;
        case "Orc":
            speciesTraits.setText(orcTraits.join('\n'));
            break;
        case "Tiefling":
            switch (subrace) {
                case "Abyssal":
                    speciesTraits.setText(tieflingTraits.join('\n') + '\n' + abyssalTraits.join('\n'));
                    break;
                case "Chthonic":
                    speciesTraits.setText(tieflingTraits.join('\n') + '\n' + chthonicTraits.join('\n'));
                    break;
                case "Infernal":
                    speciesTraits.setText(tieflingTraits.join('\n') + '\n' + infernalTraits.join('\n'));
                    break;
            }
            break;
    }


    let barbarianTraits1 = [
        " * Ira - Puedes entrar en Ira como acción bonus si no llevas armadura pesada. Usos igual a tu nivel de Bárbaro. Recuperas un uso al terminar un descanso corto y todos al terminar un descanso largo. Durante tu Ira, tienes resistencia al daño contundente, perforante y cortante, y ventaja en pruebas y tiradas de salvación de Fuerza. Cuando impactas con un ataque usando Fuerza, haces daño adicional según tu nivel. No puedes mantener concentración ni lanzar conjuros durante la Ira. Dura 1 turno, pero puedes extenderla 1 turno más si atacas a un enemigo, lo obligas a hacer una tirada de salvación, o usas una acción bonus para extenderla. Máximo 10 minutos."
    ]
    let barbarianTraits2 = [
        " * Defensa sin Armadura - Sin armadura, tu CA base es 10 + mod Destreza + mod Constitución. Puedes usar escudo.",
        " * Maestría con Armas - Ganas las propiedades de maestría de dos armas cuerpo a cuerpo simples o marciales a elección. Puedes cambiar una al terminar un descanso largo."
    ]

    let bardTraits1 = [
        " * Inspiración Bárdica - Como acción bonus, inspiras a una criatura a 60 pies que pueda oírte. Esa criatura gana un dado de Inspiración Bárdica (solo uno a la vez). En la próxima hora, puede tirar ese dado y sumarlo a una prueba de d20. El dado se gasta al usarlo. Usos igual a tu mod Carisma, recuperados en descanso largo."
    ]
    let bardTraits2 = [
        " * Conjuros - Conoces dos trucos de la lista de Bardo y puedes reemplazar uno al subir de nivel. La tabla de Bardo muestra tus espacios de conjuro. Recuperas todos al terminar un descanso largo. Preparas la lista de conjuros de nivel 1+ disponibles. Comienzas con cuatro conjuros de nivel 1 de la lista de Bardo. Al subir de nivel, puedes reemplazar un conjuro por otro de Bardo para el que tengas espacios."
    ]

    let clericTraits1 = [
        " * Orden Divina - Te has dedicado a uno de estos roles sagrados:",
        "   - Protector: Competencia con armas marciales y entrenamiento con armadura pesada.",
        "   - Taumaturgo: Conoces un truco adicional de Clérigo. Además, tu conexión mística otorga un bonus igual a tu mod Sabiduría en pruebas de Arcano y Religión."
    ]
    let clericTraits2 = [
        " * Conjuros - Conoces tres trucos de la lista de Clérigo y puedes reemplazar uno al subir de nivel. La tabla de Clérigo muestra tus espacios de conjuro. Recuperas todos al terminar un descanso largo. Preparas la lista de conjuros de nivel 1+ disponibles. Comienzas con cuatro conjuros de nivel 1 de la lista de Clérigo. Al terminar un descanso largo, puedes cambiar tus conjuros preparados por otros de Clérigo para los que tengas espacios."
    ]

    let druidTraits1 = [
        " * Druídico - Conoces el idioma secreto de los druidas. Además, siempre tienes preparado Hablar con Animales.",
        " * Orden Primigenia - Te has dedicado a uno de estos roles sagrados:",
        "   - Mago: Conoces un truco adicional. Bonus igual a tu mod Sabiduría en pruebas de Arcano y Naturaleza.",
        "   - Guardián: Competencia con armas marciales y entrenamiento con armadura media."
    ]
    let druidTraits2 = [
        " * Conjuros - Conoces dos trucos de la lista de Druida y puedes reemplazar uno al subir de nivel. La tabla de Druida muestra tus espacios de conjuro. Recuperas todos al terminar un descanso largo. Preparas la lista de conjuros de nivel 1+ disponibles. Comienzas con cuatro conjuros de nivel 1 de la lista de Druida. Al terminar un descanso largo, puedes cambiar tus conjuros preparados por otros de Druida para los que tengas espacios."
    ]

    let fighterTraits1 = [
        " * Estilo de Combate - Ganas un dote de Estilo de Combate. Al subir de nivel de Guerrero, puedes reemplazarlo por otro.",
        " * Maestría con Armas - Ganas las propiedades de maestría de dos armas cuerpo a cuerpo simples o marciales a elección. Puedes cambiar una al terminar un descanso largo."
    ]
    let fighterTraits2 = [
        " * Segundo Aliento - Como acción bonus, recuperas PV igual a 1d10 + tu nivel de Guerrero. Dos usos. Recuperas un uso al terminar un descanso corto y todos al terminar un descanso largo."
    ]

    let monkTraits1 = [
        " * Artes Marciales - Sin armadura ni escudo, y usando solo armas de monje o ataques desarmados:",
        " - Puedes hacer un ataque desarmado como acción bonus",
        " - Tu daño desarmado es 1d6.",
        " - Puedes usar Destreza en lugar de Fuerza para ataques y daño con armas de monje o ataques desarmados. También usas Destreza para la CD de agarre o empujón."
    ]
    let monkTraits2 = [
        " * Defensa sin Armadura - Sin armadura, tu CA base es 10 + mod Destreza + mod Sabiduría."
    ]

    let paladinTraits1 = [
        " * Imposición de Manos - Tienes un grupo de poder curativo que se recupera en descanso largo. Puedes restaurar PV igual a cinco veces tu nivel de Paladín. Como acción bonus, tocas a una criatura (incluyéndote) y restauras PV. También puedes gastar 5 PV del grupo para eliminar la condición Envenenado.",
        " * Maestría con Armas - Ganas las propiedades de maestría de dos armas con las que tengas competencia. Puedes cambiarlas al terminar un descanso largo."
    ]
    let paladinTraits2 = [
        " * Conjuros - La tabla de Paladín muestra tus espacios de conjuro. Recuperas todos al terminar un descanso largo. Preparas la lista de conjuros de nivel 1+ disponibles. Comienzas con dos conjuros de nivel 1 de la lista de Paladín. Al terminar un descanso largo, puedes reemplazar un conjuro preparado por otro de Paladín para el que tengas espacios."
    ]

    let rangerTraits1 = [
        " * Enemigo Favorito - Siempre tienes preparado Marcar Presa. Puedes lanzarlo dos veces sin gastar espacios, recuperando usos en descanso largo.",
        " * Maestría con Armas - Ganas las propiedades de maestría de dos armas con las que tengas competencia. Puedes cambiarlas al terminar un descanso largo."
    ]
    let rangerTraits2 = [
        " * Conjuros - La tabla de Explorador muestra tus espacios de conjuro. Recuperas todos al terminar un descanso largo. Preparas la lista de conjuros de nivel 1+ disponibles. Comienzas con dos conjuros de nivel 1 de la lista de Explorador. Al terminar un descanso largo, puedes reemplazar un conjuro preparado por otro de Explorador para el que tengas espacios."
    ]

    let rogueTraits1 = [
        " * Experto - Ganas competencia experta en dos habilidades o herramientas a elección.",
        " * Maestría con Armas - Ganas las propiedades de maestría de dos armas con las que tengas competencia. Puedes cambiarlas al terminar un descanso largo."
    ]
    let rogueTraits2 = [
        " * Ataque Sorpresa - Una vez por turno, cuando impactas con un ataque con ventaja usando un arma de combate cuerpo a cuerpo con la propiedad de combate furtivo o un arma a distancia, puedes hacer 1d6 de daño adicional. No necesitas ventaja si un aliado está a 5 pies del objetivo, no está incapacitado, y no tienes desventaja.",
        " * Argot - Conoces el Argot y otro idioma a elección."
    ]

    let sorcererTraits1 = [
        " * Conjuros - Conoces cuatro trucos de la lista de Hechicero y puedes reemplazar uno al subir de nivel. La tabla de Hechicero muestra tus espacios de conjuro. Recuperas todos al terminar un descanso largo. Preparas la lista de conjuros de nivel 1+ disponibles. Comienzas con dos conjuros de nivel 1 de la lista de Hechicero. Al subir de nivel, puedes reemplazar un conjuro por otro de Hechicero para el que tengas espacios."
    ]
    let sorcererTraits2 = [
        " * Hechicería Innata - Como acción bonus, durante 1 minuto tienes ventaja en ataques con conjuros y la CD de tus conjuros aumenta en 1. Dos usos, recuperados en descanso largo."
    ]

    let warlockTraits1 = [
        " * Invocaciones Arcanas - Ganas una invocación arcana a elección. Al subir de nivel de Brujo, puedes reemplazar una invocación por otra para la que califiques. En ciertos niveles ganas más invocaciones."
    ]
    let warlockTraits2 = [
        " * Magia de Pacto - Conoces dos trucos de la lista de Brujo y puedes reemplazar uno al subir de nivel. La tabla de Brujo muestra tus espacios de conjuro de niveles 1-5 (todos del mismo nivel). Recuperas todos al terminar un descanso corto o largo. Preparas la lista de conjuros de nivel 1+ disponibles. Comienzas con dos conjuros de nivel 1 de la lista de Brujo. Al subir de nivel, puedes reemplazar un conjuro por otro de Brujo de nivel adecuado."
    ]

    let wizardTraits1 = [
        " * Conjuros - Conoces tres trucos de la lista de Mago y puedes reemplazar uno al terminar un descanso largo. Tienes un libro de conjuros que contiene tus conjuros de nivel 1+. Comienza con seis conjuros de nivel 1 de Mago a elección. Al subir de nivel, añades dos conjuros de Mago a tu libro. La tabla de Mago muestra tus espacios de conjuro. Recuperas todos al terminar un descanso largo. Preparas la lista de conjuros de nivel 1+ disponibles. Comienzas con cuatro conjuros de nivel 1 de tu libro. Al terminar un descanso largo, puedes cambiar tus conjuros preparados por otros de tu libro."
    ]
    let wizardTraits2 = [
        " * Ritualista - Puedes lanzar cualquier conjuro con el tag ritual de tu libro, aunque no lo tengas preparado, pero debes leer el libro.",
        " * Recuperación Arcana - Al terminar un descanso corto, puedes recuperar espacios de conjuro gastados. El nivel total no puede exceder la mitad de tu nivel de Mago (redondeando arriba), y ninguno puede ser de nivel 6+. Una vez/día."
    ]


    switch (selectedClass) {
        case "Bárbaro":
            classFeatures1.setText(barbarianTraits1.join('\n'));
            classFeatures2.setText(barbarianTraits2.join('\n'));
            break;
        case "Bardo":
            classFeatures1.setText(bardTraits1.join('\n'));
            classFeatures2.setText(bardTraits2.join('\n'));
            break;
        case "Clérigo":
            classFeatures1.setText(clericTraits1.join('\n'));
            classFeatures2.setText(clericTraits2.join('\n'));
            break;
        case "Druida":
            classFeatures1.setText(druidTraits1.join('\n'));
            classFeatures2.setText(druidTraits2.join('\n'));
            break;
        case "Guerrero":
            classFeatures1.setText(fighterTraits1.join('\n'));
            classFeatures2.setText(fighterTraits2.join('\n'));
            break;
        case "Monje":
            classFeatures1.setText(monkTraits1.join('\n'));
            classFeatures2.setText(monkTraits2.join('\n'));
            break;
        case "Paladín":
            classFeatures1.setText(paladinTraits1.join('\n'));
            classFeatures2.setText(paladinTraits2.join('\n'));
            break;
        case "Guardabosques":
            classFeatures1.setText(rangerTraits1.join('\n'));
            classFeatures2.setText(rangerTraits2.join('\n'));
            break;
        case "Pícaro":
            classFeatures1.setText(rogueTraits1.join('\n'));
            classFeatures2.setText(rogueTraits2.join('\n'));
            break;
        case "Hechicero":
            classFeatures1.setText(sorcererTraits1.join('\n'));
            classFeatures2.setText(sorcererTraits2.join('\n'));
            break;
        case "Brujo":
            classFeatures1.setText(warlockTraits1.join('\n'));
            classFeatures2.setText(warlockTraits2.join('\n'));
            break;
        case "Mago":
            classFeatures1.setText(wizardTraits1.join('\n'));
            classFeatures2.setText(wizardTraits2.join('\n'));
            break;
    }


    let intSpellcasting = ["Mago"]
    let wisSpellcasting = ["Clérigo", "Druida", "Guardabosques"]
    let chaSpellcasting = ["Bardo", "Paladín", "Hechicero", "Brujo"]
    let baseSpellSaveDC = 8

    if (intSpellcasting.includes(selectedClass)) {
        spellcastingAbilityField.setText("Inteligencia");
        let spellcastingAbilityModifier = intMod
        spellcastingModifierField.setText("+" + spellcastingAbilityModifier.toString())
        let spellSaveDC = parseInt(baseSpellSaveDC) + parseInt(proficiencyBonus) + parseInt(spellcastingAbilityModifier);
        spellSaveDCField.setText(spellSaveDC.toString())
        let spellAttackMod = parseInt(proficiencyBonus) + parseInt(spellcastingAbilityModifier);
        spellAttackBonusField.setText("+" + spellAttackMod.toString())
    }
    if (wisSpellcasting.includes(selectedClass)) {
        spellcastingAbilityField.setText("Sabiduría");
        let spellcastingAbilityModifier = wisMod
        spellcastingModifierField.setText("+" + spellcastingAbilityModifier.toString())
        let spellSaveDC = parseInt(baseSpellSaveDC) + parseInt(proficiencyBonus) + parseInt(spellcastingAbilityModifier);
        spellSaveDCField.setText(spellSaveDC.toString())
        let spellAttackMod = parseInt(proficiencyBonus) + parseInt(spellcastingAbilityModifier);
        spellAttackBonusField.setText("+" + spellAttackMod.toString())
    }
    if (chaSpellcasting.includes(selectedClass)) {
        spellcastingAbilityField.setText("Carisma");
        let spellcastingAbilityModifier = chaMod
        spellcastingModifierField.setText("+" + spellcastingAbilityModifier.toString())
        let spellSaveDC = parseInt(baseSpellSaveDC) + parseInt(proficiencyBonus) + parseInt(spellcastingAbilityModifier);
        spellSaveDCField.setText(spellSaveDC.toString())
        let spellAttackMod = parseInt(proficiencyBonus) + parseInt(spellcastingAbilityModifier);
        spellAttackBonusField.setText("+" + spellAttackMod.toString())
    }


    let strengthToHit = (parseInt(strMod) + parseInt(proficiencyBonus)).toString()
    let dexterityToHit = (parseInt(dexMod) + parseInt(proficiencyBonus)).toString()
    let finesse = false
    let hasShield = false

    if (parseInt(dexMod) >= parseInt(strMod)) {
        finesse = true
    }

    let ac = 10;

    let classEquipment = ""
    let classToolProficiencies = ""
    let hasClassToolProficiencies = false
    switch (selectedClass) {
        case "Bárbaro":
            weaponProficienciesField.setText("Armas simples y marciales\n")
            break;
        case "Bardo":
            weaponProficienciesField.setText("Armas simples\n\n")
            hasClassToolProficiencies = true
            classToolProficiencies = "3 instrumentos musicales"
            break;
        case "Clérigo":
            weaponProficienciesField.setText("Armas simples\n\n")
            break;
        case "Druida":
            weaponProficienciesField.setText("Armas simples\n\n")
            hasClassToolProficiencies = true
            classToolProficiencies = "Kit de herboristería"
            break;
        case "Guerrero":
            weaponProficienciesField.setText("Armas simples y marciales\n")
            break;
        case "Monje":
            weaponProficienciesField.setText("Armas simples y marciales con propiedad ligera")
            break;
        case "Paladín":
            weaponProficienciesField.setText("Armas simples y marciales\n")
            break;
        case "Guardabosques":
            weaponProficienciesField.setText("Armas simples y marciales\n")
            break;
        case "Pícaro":
            weaponProficienciesField.setText("Armas simples y marciales con propiedad ligera o combate furtivo")
            hasClassToolProficiencies = true
            classToolProficiencies = "Herramientas de ladrón"
            break;
        case "Hechicero":
            weaponProficienciesField.setText("Armas simples\n\n")
            break;
        case "Brujo":
            weaponProficienciesField.setText("Armas simples\n\n")
            break;
        case "Mago":
            weaponProficienciesField.setText("Armas simples\n\n")
            break;
    }

    if (hasShield) {
        hasShieldChk.check()
    }

    let backgroundEquipment = ""
    switch (background) {
        case "Acolyte":
            insightChk.check();
            religionChk.check();
            toolProficienciesField.setText("Suministros de caligrafía\n")
            featsField.setText("Iniciado Mágico (Clérigo):\n - Aprendes dos trucos de la lista de Clérigo.\n - Elige un conjuro de nivel 1 de Clérigo. Siempre lo tienes preparado. Puedes lanzarlo una vez sin gastar espacio, recuperando la capacidad al terminar un descanso largo.\n - Al subir de nivel, puedes reemplazar uno de los conjuros elegidos.\n - Puedes tomar este dote múltiples veces, eligiendo una lista diferente cada vez.")
            break;
        case "Artisan":
            investigationChk.check();
            persuasionChk.check();
            toolProficienciesField.setText("Herramientas de artesano\n")
            featsField.setText("Artificiero:\n - Competencia con tres tipos de herramientas de artesano.\n - 20% de descuento al comprar objetos no mágicos.\n - Puedes fabricar un objeto simple durante un descanso largo, que dura hasta tu próximo descanso largo.")
            break;
        case "Charlatan":
            deceptionChk.check();
            slightOfHandChk.check();
            toolProficienciesField.setText("Kit de falsificación\n")
            featsField.setText("Hábil:\n - Ganas competencia en tres habilidades o herramientas a elección.\n - Puedes tomarlo múltiples veces.")
            break;
        case "Criminal":
            slightOfHandChk.check();
            stealthChk.check();
            toolProficienciesField.setText("Herramientas de ladrón\n")
            featsField.setText("Alerta:\n - Puedes sumar tu bonif. competencia a la iniciativa.\n - Después de tirar iniciativa, puedes intercambiarla con un aliado dispuesto.")
            break;
        case "Entertainer":
            acrobaticsChk.check();
            performanceChk.check();
            toolProficienciesField.setText("Instrumento musical\n")
            featsField.setText("Músico:\n - Competencia con tres instrumentos musicales.\n - Al terminar un descanso, puedes tocar para dar Inspiración Heroica a aliados que te escuchen (número igual a tu bonif. competencia).")
            break;
        case "Farmer":
            animalHandlingChk.check();
            natureChk.check();
            toolProficienciesField.setText("Herramientas de carpintero\n")
            featsField.setText("Duro:\n - Tus PV máximos aumentan en el doble de tu nivel. Al subir de nivel, aumentan en 2 PV adicionales.")
            break;
        case "Guard":
            athleticsChk.check();
            perceptionChk.check();
            toolProficienciesField.setText("Juego de mesa\n")
            featsField.setText("Alerta:\n - Puedes sumar tu bonif. competencia a la iniciativa.\n - Después de tirar iniciativa, puedes intercambiarla con un aliado dispuesto.")
            break;
        case "Guide":
            stealthChk.check();
            survivalChk.check();
            toolProficienciesField.setText("Herramientas de cartógrafo\n")
            featsField.setText("Iniciado Mágico (Druida):\n - Aprendes dos trucos de la lista de Druida.\n - Elige un conjuro de nivel 1 de Druida. Siempre lo tienes preparado. Puedes lanzarlo una vez sin gastar espacio, recuperando la capacidad al terminar un descanso largo.\n - Al subir de nivel, puedes reemplazar uno de los conjuros elegidos.\n - Puedes tomarlo múltiples veces, eligiendo una lista diferente cada vez.")
            break;
        case "Hermit":
            medicineChk.check();
            religionChk.check();
            toolProficienciesField.setText("Kit de herboristería\n")
            featsField.setText("Sanador:\n - Con un kit de sanador, puedes gastar un uso para que una criatura gaste un dado de golpe y recupere el resultado + tu bonif. competencia.\n - Cuando cures, puedes repetir los 1 en los dados de curación.")
            break;
        case "Merchant":
            animalHandlingChk.check();
            persuasionChk.check();
            toolProficienciesField.setText("Herramientas de navegación\n")
            featsField.setText("Afortunado:\n - Tienes puntos de suerte igual a tu bonif. competencia, recuperados en descanso largo.\n - Puedes gastar 1 punto para tener ventaja en una prueba de d20.\n - Puedes gastar 1 punto para imponer desventaja en un ataque contra ti.")
            break;
        case "Noble":
            historyChk.check();
            persuasionChk.check();
            toolProficienciesField.setText("Juego de mesa\n")
            featsField.setText("Hábil:\n - Ganas competencia en tres habilidades o herramientas a elección.\n - Puedes tomarlo múltiples veces.")
            break;
        case "Sage":
            arcanaChk.check();
            historyChk.check();
            toolProficienciesField.setText("Suministros de caligrafía\n")
            featsField.setText("Iniciado Mágico (Mago):\n - Aprendes dos trucos de la lista de Mago.\n - Elige un conjuro de nivel 1 de Mago. Siempre lo tienes preparado. Puedes lanzarlo una vez sin gastar espacio, recuperando la capacidad al terminar un descanso largo.\n - Al subir de nivel, puedes reemplazar uno de los conjuros elegidos.\n - Puedes tomarlo múltiples veces, eligiendo una lista diferente cada vez.")
            break;
        case "Sailor":
            acrobaticsChk.check();
            perceptionChk.check();
            toolProficienciesField.setText("Herramientas de navegación\n")
            featsField.setText("Pelea de Taberna:\n - Tus ataques desarmados hacen 1d4 + mod Fuerza de daño contundente.\n - Puedes repetir 1 en el daño desarmado.\n - Competencia con armas improvisadas.\n - Al impactar con un ataque desarmado, puedes empujar 5 pies al objetivo (una vez por turno).")
            break;
        case "Scribe":
            investigationChk.check();
            perceptionChk.check();
            toolProficienciesField.setText("Suministros de caligrafía\n")
            featsField.setText("Hábil:\n - Ganas competencia en tres habilidades o herramientas a elección.\n - Puedes tomarlo múltiples veces.")
            break;
        case "Soldier":
            athleticsChk.check();
            intimidationChk.check();
            toolProficienciesField.setText("Juego de mesa\n")
            featsField.setText("Atacante Salvaje:\n - Una vez por turno al impactar con un arma, puedes tirar los dados de daño dos veces y elegir el mejor resultado.")
            break;
        case "Wayfarer":
            insightChk.check();
            stealthChk.check();
            toolProficienciesField.setText("Herramientas de ladrón\n")
            featsField.setText("Afortunado:\n - Tienes puntos de suerte igual a tu bonif. competencia, recuperados en descanso largo.\n - Puedes gastar 1 punto para tener ventaja en una prueba de d20.\n - Puedes gastar 1 punto para imponer desventaja en un ataque contra ti.")
            break;
    }

    if (!((background === "Wayfarer" || background === "Criminal") && (selectedClass === "Pícaro"))) {
        if (!((background === "Hermit") && (selectedClass === "Druida"))) {
            if (hasClassToolProficiencies) {
                toolProficienciesField.setText(toolProficienciesField.getText() + classToolProficiencies)
            }
        }
    }

    equipmentField.setText("")


    CPField.setText("0")
    SPField.setText("0")
    EPField.setText("0")
    GPField.setText(goldPieces.toString())
    PPField.setText("0")

    let skill1 = document.getElementById("skill1").value;
    let skill2 = document.getElementById("skill2").value;
    let skill3 = document.getElementById("skill3").value;
    let skill4 = document.getElementById("skill4").value;
    const skills = [skill1, skill2, skill3, skill4];

    if (skills.includes("Acrobatics")) {
        acrobaticsChk.check()
    }
    if (skills.includes("Animal Handling")) {
        animalHandlingChk.check()
    }
    if (skills.includes("Arcana")) {
        arcanaChk.check()
    }
    if (skills.includes("Athletics")) {
        athleticsChk.check()
    }
    if (skills.includes("Deception")) {
        deceptionChk.check()
    }
    if (skills.includes("History")) {
        historyChk.check()
    }
    if (skills.includes("Insight")) {
        insightChk.check()
    }
    if (skills.includes("Intimidation")) {
        intimidationChk.check()
    }
    if (skills.includes("Investigation")) {
        investigationChk.check()
    }
    if (skills.includes("Medicine")) {
        medicineChk.check()
    }
    if (skills.includes("Nature")) {
        natureChk.check()
    }
    if (skills.includes("Perception")) {
        perceptionChk.check()
    }
    if (skills.includes("Performance")) {
        performanceChk.check()
    }
    if (skills.includes("Persuasion")) {
        persuasionChk.check()
    }
    if (skills.includes("Religion")) {
        religionChk.check()
    }
    if (skills.includes("Sleight of Hand")) {
        slightOfHandChk.check()
    }
    if (skills.includes("Stealth")) {
        stealthChk.check()
    }
    if (skills.includes("Survival")) {
        survivalChk.check()
    }

    let str = parseInt(strMod)
    if (strChk.isChecked()) {
        str = str + proficiencyBonus
        strSaveField.setText("+" + str.toString())
    } else {
        if (str < 0) {
            strSaveField.setText(str.toString())
        } else {
            strSaveField.setText("+" + str.toString())
        }
    }

    let dex = parseInt(dexMod)
    if (dexChk.isChecked()) {
        dex = dex + proficiencyBonus
        dexSaveField.setText("+" + dex.toString())
    } else {
        if (dex < 0) {
            dexSaveField.setText(dex.toString())
        } else {
            dexSaveField.setText("+" + dex.toString())
        }
    }

    let con = parseInt(conMod)
    if (conChk.isChecked()) {
        con = con + proficiencyBonus
        conSaveField.setText("+" + con.toString())
    } else {
        if (con < 0) {
            conSaveField.setText(con.toString())
        } else {
            conSaveField.setText("+" + con.toString())
        }
    }

    let intel = parseInt(intMod)
    if (intChk.isChecked()) {
        intel = intel + proficiencyBonus
        intSaveField.setText("+" + intel.toString())
    } else {
        if (intel < 0) {
            intSaveField.setText(intel.toString())
        } else {
            intSaveField.setText("+" + intel.toString())
        }
    }

    let wis = parseInt(wisMod)
    if (wisChk.isChecked()) {
        wis = wis + proficiencyBonus
        wisSaveField.setText("+" + wis.toString())
    } else {
        if (wis < 0) {
            wisSaveField.setText(wis.toString())
        } else {
            wisSaveField.setText("+" + wis.toString())
        }
    }

    let cha = parseInt(chaMod)
    if (chaChk.isChecked()) {
        cha = cha + proficiencyBonus
        chaSaveField.setText("+" + cha.toString())
    } else {
        if (cha < 0) {
            chaSaveField.setText(cha.toString())
        } else {
            chaSaveField.setText("+" + cha.toString())
        }
    }

    str = parseInt(strMod)
    dex = parseInt(dexMod)
    intel = parseInt(intMod)
    wis = parseInt(wisMod)
    cha = parseInt(chaMod)

    if (athleticsChk.isChecked()) {
        athleticsField.setText("+" + (str + proficiencyBonus).toString())
    } else {
        if (str < 0) {
            athleticsField.setText(str.toString())
        } else {
            athleticsField.setText("+" + str.toString())
        }
    }

    if (acrobaticsChk.isChecked()) {
        acrobaticsField.setText("+" + (dex + proficiencyBonus).toString())
    } else {
        if (dex < 0) {
            acrobaticsField.setText(dex.toString())
        } else {
            acrobaticsField.setText("+" + dex.toString())
        }
    }

    if (slightOfHandChk.isChecked()) {
        slightOfHandField.setText("+" + (dex + proficiencyBonus).toString())
    } else {
        if (dex < 0) {
            slightOfHandField.setText(dex.toString())
        } else {
            slightOfHandField.setText("+" + dex.toString())
        }
    }

    if (stealthChk.isChecked()) {
        stealthField.setText("+" + (dex + proficiencyBonus).toString())
    } else {
        if (dex < 0) {
            stealthField.setText(dex.toString())
        } else {
            stealthField.setText("+" + dex.toString())
        }
    }

    if (arcanaChk.isChecked()) {
        arcanaField.setText("+" + (intel + proficiencyBonus).toString())
    } else {
        if (intel < 0) {
            arcanaField.setText(intel.toString())
        } else {
            arcanaField.setText("+" + intel.toString())
        }
    }

    if (historyChk.isChecked()) {
        historyField.setText("+" + (intel + proficiencyBonus).toString())
    } else {
        if (intel < 0) {
            historyField.setText(intel.toString())
        } else {
            historyField.setText("+" + intel.toString())
        }
    }

    if (investigationChk.isChecked()) {
        investigationField.setText("+" + (intel + proficiencyBonus).toString())
    } else {
        if (intel < 0) {
            investigationField.setText(intel.toString())
        } else {
            investigationField.setText("+" + intel.toString())
        }
    }

    if (natureChk.isChecked()) {
        natureField.setText("+" + (intel + proficiencyBonus).toString())
    } else {
        if (intel < 0) {
            natureField.setText(intel.toString())
        } else {
            natureField.setText("+" + intel.toString())
        }
    }

    if (religionChk.isChecked()) {
        religionField.setText("+" + (intel + proficiencyBonus).toString())
    } else {
        if (intel < 0) {
            religionField.setText(intel.toString())
        } else {
            religionField.setText("+" + intel.toString())
        }
    }

    if (animalHandlingChk.isChecked()) {
        animalHandlingField.setText("+" + (wis + proficiencyBonus).toString())
    } else {
        if (wis < 0) {
            animalHandlingField.setText(wis.toString())
        } else {
            animalHandlingField.setText("+" + wis.toString())
        }
    }

    if (insightChk.isChecked()) {
        insightField.setText("+" + (wis + proficiencyBonus).toString())
    } else {
        if (wis < 0) {
            insightField.setText(wis.toString())
        } else {
            insightField.setText("+" + wis.toString())
        }
    }

    if (medicineChk.isChecked()) {
        medicineField.setText("+" + (wis + proficiencyBonus).toString())
    } else {
        if (wis < 0) {
            medicineField.setText(wis.toString())
        } else {
            medicineField.setText("+" + wis.toString())
        }
    }

    if (perceptionChk.isChecked()) {
        perceptionField.setText("+" + (wis + proficiencyBonus).toString())
    } else {
        if (wis < 0) {
            perceptionField.setText(wis.toString())
        } else {
            perceptionField.setText("+" + wis.toString())
        }
    }

    if (survivalChk.isChecked()) {
        survivalField.setText("+" + (wis + proficiencyBonus).toString())
    } else {
        if (wis < 0) {
            survivalField.setText(wis.toString())
        } else {
            survivalField.setText("+" + wis.toString())
        }
    }

    if (deceptionChk.isChecked()) {
        deceptionField.setText("+" + (cha + proficiencyBonus).toString())
    } else {
        if (cha < 0) {
            deceptionField.setText(cha.toString())
        } else {
            deceptionField.setText("+" + cha.toString())
        }
    }

    if (intimidationChk.isChecked()) {
        intimidationField.setText("+" + (cha + proficiencyBonus).toString())
    } else {
        if (cha < 0) {
            intimidationField.setText(cha.toString())
        } else {
            intimidationField.setText("+" + cha.toString())
        }
    }

    if (performanceChk.isChecked()) {
        performanceField.setText("+" + (cha + proficiencyBonus).toString())
    } else {
        if (cha < 0) {
            performanceField.setText(cha.toString())
        } else {
            performanceField.setText("+" + cha.toString())
        }
    }

    if (persuasionChk.isChecked()) {
        persuasionField.setText("+" + (cha + proficiencyBonus).toString())
    } else {
        if (cha < 0) {
            persuasionField.setText(cha.toString())
        } else {
            persuasionField.setText("+" + cha.toString())
        }
    }

    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], {type: "application/pdf"});
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
}