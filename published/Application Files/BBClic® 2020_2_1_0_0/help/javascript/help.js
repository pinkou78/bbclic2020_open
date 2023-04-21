const dataJSON = [
    {
        "id": 1100,
        "level1": "Typologie",
        "level2": "Type de maison",
        "level3": "",
        "level4": ""
    },
    {
        "id": 1110,
        "level1": "Typologie",
        "level2": "Type de maison",
        "level3": "Maison de plain-pieds",
        "level4": ""
    },
    {
        "id": 1120,
        "level1": "Typologie",
        "level2": "Type de maison",
        "level3": "Maison avec combles aménagés",
        "level4": ""
    },
    {
        "id": 1130,
        "level1": "Typologie",
        "level2": "Type de maison",
        "level3": "Maison R+1 avec combles perdus",
        "level4": ""
    },
    {
        "id": 1140,
        "level1": "Typologie",
        "level2": "Type de maison",
        "level3": "Maison R+1 avec toit-terrasse",
        "level4": ""
    },
    {
        "id": 1150,
        "level1": "Typologie",
        "level2": "Logement collectif",
        "level3": "",
        "level4": ""
    },
    {
        "id": 1210,
        "level1": "Typologie",
        "level2": "Système de chauffage / ECS",
        "level3": "",
        "level4": ""
    },
    {
        "id": 1410,
        "level1": "Typologie",
        "level2": "Brasseur d'air",
        "level3": "",
        "level4": ""
    },
    {
        "id": 1310,
        "level1": "Implantation",
        "level2": "Zone climatique",
        "level3": "",
        "level4": ""
    },
    {
        "id": 1320,
        "level1": "Implantation",
        "level2": "Altitude",
        "level3": "",
        "level4": ""
    },
    {
        "id": 1330,
        "level1": "Implantation",
        "level2": "Zone de bruit",
        "level3": "",
        "level4": ""
    },
    {
        "id": 1340,
        "level1": "Typologie",
        "level2": "Orientation",
        "level3": "",
        "level4": ""
    },
    {
        "id": 2111,
        "level1": "Parois",
        "level2": "Façades et pignons",
        "level3": "Mode simple",
        "level4": "Structure"
    },
    {
        "id": 2112,
        "level1": "Parois",
        "level2": "Façades et pignons",
        "level3": "Mode simple",
        "level4": "Type d'isolation"
    },
    {
        "id": 2113,
        "level1": "Parois",
        "level2": "Façades et pignons",
        "level3": "Mode simple",
        "level4": "Epaisseur d'isolant"
    },
    {
        "id": 2114,
        "level1": "Parois",
        "level2": "Façades et pignons",
        "level3": "Mode simple",
        "level4": "Couleur façade"
    },
    {
        "id": 2121,
        "level1": "Parois",
        "level2": "Façades et pignons",
        "level3": "Mode avancé",
        "level4": "R maçonnerie"
    },
    {
        "id": 2122,
        "level1": "Parois",
        "level2": "Façades et pignons",
        "level3": "Mode avancé",
        "level4": "R isolation thermique"
    },
    {
        "id": 2123,
        "level1": "Parois",
        "level2": "Façades et pignons",
        "level3": "Mode avancé",
        "level4": "Coefficient d'absorption solaire"
    },
    {
        "id": 2211,
        "level1": "Parois",
        "level2": "Soubassement",
        "level3": "Mode simple",
        "level4": "Structure péripherie"
    },
    {
        "id": 2212,
        "level1": "Parois",
        "level2": "Soubassement",
        "level3": "Mode simple",
        "level4": "Refend de soubassement isolé double face"
    },
    {
        "id": 2221,
        "level1": "Parois",
        "level2": "Soubassement",
        "level3": "Mode avancé",
        "level4": "R maçonnerie"
    },
    {
        "id": 2222,
        "level1": "Parois",
        "level2": "Soubassement",
        "level3": "Mode avancé",
        "level4": "Psi plancher bas / refend"
    },
    {
        "id": 3100,
        "level1": "Menuiseries",
        "level2": "Performances des fenêtres / porte-fenêtres",
        "level3": "",
        "level4": ""
    },
    {
        "id": 3210,
        "level1": "Menuiseries",
        "level2": "Fenêtres / Porte-fenêtres",
        "level3": "Type de protection mobiles",
        "level4": ""
    },
    {
        "id": 3220,
        "level1": "Menuiseries",
        "level2": "Fenêtres / Porte-fenêtres",
        "level3": "Mode de fonctionnement",
        "level4": ""
    },
    {
        "id": 3310,
        "level1": "Menuiseries",
        "level2": "Fenêtres de toit",
        "level3": "Type de protection mobiles",
        "level4": ""
    },
    {
        "id": 3320,
        "level1": "Menuiseries",
        "level2": "Fenêtres de toit",
        "level3": "Mode de fonctionnement",
        "level4": ""
    },
    {
        "id": 3400,
        "level1": "Menuiseries",
        "level2": "Horloge crépusculaire",
        "level3": "",
        "level4": ""
    },
    {
        "id": 3500,
        "level1": "Menuiseries",
        "level2": "U coffret volets-roulants",
        "level3": "",
        "level4": ""
    },
    {
        "id": 4111,
        "level1": "Plancher bas",
        "level2": "Mode simple",
        "level3": "Type de plancher",
        "level4": ""
    },
    {
        "id": 4112,
        "level1": "Plancher bas",
        "level2": "Mode simple",
        "level3": "Complément sur plancher",
        "level4": ""
    },
    {
        "id": 4113,
        "level1": "Plancher bas",
        "level2": "Mode simple",
        "level3": "Revêtement de sol",
        "level4": ""
    },
    {
        "id": 4114,
        "level1": "Plancher bas",
        "level2": "Mode simple",
        "level3": "Jonction plancher bas / façade",
        "level4": ""
    },
    {
        "id": 4121,
        "level1": "Plancher bas",
        "level2": "Mode avancé",
        "level3": "Up Plancher bas",
        "level4": ""
    },
    {
        "id": 4122,
        "level1": "Plancher bas",
        "level2": "Mode avancé",
        "level3": "Psi moyen plancher bas / façade",
        "level4": ""
    },
    {
        "id": 4211,
        "level1": "Plancher intermediaire",
        "level2": "Mode simple",
        "level3": "Type de plancher",
        "level4": ""
    },
    {
        "id": 4212,
        "level1": "Plancher intermediaire",
        "level2": "Mode simple",
        "level3": "Epaisseur du plancher",
        "level4": ""
    },
    {
        "id": 4213,
        "level1": "Plancher intermediaire",
        "level2": "Mode simple",
        "level3": "Revêtement de sol",
        "level4": ""
    },
    {
        "id": 4214,
        "level1": "Plancher intermediaire",
        "level2": "Mode simple",
        "level3": "Jonction plancher intermediaire / façade",
        "level4": ""
    },
    {
        "id": 4215,
        "level1": "Plancher intermediaire",
        "level2": "Mode simple",
        "level3": "Isolation périphérique plafond suspendu",
        "level4": ""
    },
    {
        "id": 4221,
        "level1": "Plancher intermediaire",
        "level2": "Mode avancé",
        "level3": "Psi moyen plancher intermediaire / façade",
        "level4": ""
    },
    {
        "id": 5111,
        "level1": "Plancher Haut",
        "level2": "Combles",
        "level3": "Mode simple",
        "level4": "Type d'isolation"
    },
    {
        "id": 5112,
        "level1": "Plancher Haut",
        "level2": "Combles",
        "level3": "Mode simple",
        "level4": "Resistance thermique"
    },
    {
        "id": 5121,
        "level1": "Plancher Haut",
        "level2": "Combles",
        "level3": "Mode avancé",
        "level4": "R isolation combles"
    },
    {
        "id": 5122,
        "level1": "Plancher Haut",
        "level2": "Combles",
        "level3": "Mode avancé",
        "level4": "Psi moyen Plancher haut / façade"
    },
    {
        "id": 5211,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode simple",
        "level4": "Type de plancher"
    },
    {
        "id": 5212,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode simple",
        "level4": "Epaisseur du plancher"
    },
    {
        "id": 5213,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode simple",
        "level4": "Type d'isolation thermique sur plancher"
    },
    {
        "id": 5214,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode simple",
        "level4": "Epaisseur de l'isolation thermique"
    },
    {
        "id": 5215,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode simple",
        "level4": "Jonction plancher haut / façace"
    },
    {
        "id": 5216,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode simple",
        "level4": "Isolation périphérique plafond suspendu"
    },
    {
        "id": 5217,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode simple",
        "level4": "Couleur de la toiture-terrasse"
    },
    {
        "id": 5218,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode simple",
        "level4": "Système de véfétalisation"
    },
    {
        "id": 5221,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode avancé",
        "level4": "Up toiture-terrasse"
    },
    {
        "id": 5222,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode avancé",
        "level4": "Psi toiture-terrasse"
    },
    {
        "id": 5223,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode avancé",
        "level4": "Coefficient d'absorption équivalent"
    },
    {
        "id": 5224,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode avancé",
        "level4": "Système de végétalisation"
    },
    {
        "id": 5225,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode avancé",
        "level4": "Facteur solaire de la paroi végétalisée Sfc_Vk / Sfe_Vk"
    },
    {
        "id": 5226,
        "level1": "Plancher Haut",
        "level2": "Toitures-terrasses",
        "level3": "Mode avancé",
        "level4": "Début/Fin de période de végétalisation"
    },
    {
        "id": 6100,
        "level1": "Autres paramêtres",
        "level2": "Perméabilité à l'air",
        "level3": "",
        "level4": ""
    },
    {
        "id": 6200,
        "level1": "Autres paramêtres",
        "level2": "Type de cloisons intérieures",
        "level3": "",
        "level4": ""
    },
    {
        "id": 7110,
        "level1": "Calcul RE2020",
        "level2": "Résultats",
        "level3": "Bbio",
        "level4": ""
    },
    {
        "id": 7120,
        "level1": "Calcul RE2020",
        "level2": "Résultats",
        "level3": "Cep",
        "level4": ""
    },
    {
        "id": 7130,
        "level1": "Calcul RE2020",
        "level2": "Résultats",
        "level3": "Cep,nr",
        "level4": ""
    },
    {
        "id": 7140,
        "level1": "Calcul RE2020",
        "level2": "Résultats",
        "level3": "DH",
        "level4": ""
    },
    {
        "id": 7150,
        "level1": "Calcul RE2020",
        "level2": "Résultats",
        "level3": "Ratio moyen pont thermique",
        "level4": ""
    },
    {
        "id": 7160,
        "level1": "Calcul RE2020",
        "level2": "Résultats",
        "level3": "Ratio pont thermique L9",
        "level4": ""
    },
    {
        "id": 7170,
        "level1": "Calcul RE2020",
        "level2": "Résultats",
        "level3": "Ic énergies",
        "level4": ""
    },
    {
        "id": 7180,
        "level1": "Calcul RE2020",
        "level2": "Résultats",
        "level3": "Ic construction",
        "level4": ""
    },
    {
        "id": 8000,
        "level1": "BBCLIC 2020",
        "level2": "Mode Carbone",
        "level3": "Généralités",
        "level4": ""
    },
    {
        "id": 8010,
        "level1": "BBCLIC 2020",
        "level2": "Mode Carbone",
        "level3": "Tutoriel INIES",
        "level4": ""
    },
    {
        "id": 8100,
        "level1": "Parois",
        "level2": "Façades, pignons et Soubassement",
        "level3": "Mode Carbone",
        "level4": "Structure"
    },
    {
        "id": 8110,
        "level1": "Parois",
        "level2": "Façades, pignons et Soubassement",
        "level3": "Mode Carbone",
        "level4": "Isolation thermique"
    },
    {
        "id": 8120,
        "level1": "Plancher Bas",
        "level2": "Mode Carbone",
        "level3": "Structure",
        "level4": ""
    },
    {
        "id": 8130,
        "level1": "Plancher Bas",
        "level2": "Mode Carbone",
        "level3": "Isolation sous chape",
        "level4": ""
    },
    {
        "id": 8140,
        "level1": "Plancher Bas",
        "level2": "Mode Carbone",
        "level3": "Chape",
        "level4": ""
    },
    {
        "id": 8150,
        "level1": "Plancher Bas",
        "level2": "Mode Carbone",
        "level3": "Revêtement de sol",
        "level4": ""
    },
    {
        "id": 8160,
        "level1": "Plancher Haut",
        "level2": "Combles",
        "level3": "Mode Carbone",
        "level4": "Isolation thermique"
    },
    {
        "id": 8170,
        "level1": "Plancher Intermediaire",
        "level2": "Mode Carbone",
        "level3": "Structure",
        "level4": ""
    },
    {
        "id": 8180,
        "level1": "Plancher Intermediaire",
        "level2": "Mode Carbone",
        "level3": "Revêtement de sol",
        "level4": ""
    },
    {
        "id": 8190,
        "level1": "Plancher Haut",
        "level2": "Mode Carbone",
        "level3": "Isolation peripherie fx-plafond",
        "level4": ""
    },
    {
        "id": 8200,
        "level1": "Plancher Haut",
        "level2": "Toiture-terrasse",
        "level3": "Mode Carbone",
        "level4": "Structure"
    },
    {
        "id": 8210,
        "level1": "Plancher Haut",
        "level2": "Toiture-terrasse",
        "level3": "Mode Carbone",
        "level4": "Isolation thermique"
    },
    {
        "id": 8220,
        "level1": "Plancher Haut",
        "level2": "Toiture-terrasse",
        "level3": "Mode Carbone",
        "level4": "Isolation peripherie fx-plafond"
    },
    {
        "id": 8230,
        "level1": "Plancher Haut",
        "level2": "Toiture-terrasse",
        "level3": "Mode Carbone",
        "level4": "Végétalisation"
    }
]