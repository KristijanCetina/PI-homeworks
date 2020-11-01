let student = [{
        ime: "Madison",
        prezime: "Smith",
        upisan: true
    },
    {
        ime: "Sky",
        prezime: "Johnson",
        upisan: false
    },
    {
        ime: "Mila",
        prezime: "Williams",
        upisan: true
    },
    {
        ime: "Liam",
        prezime: "Brown",
        upisan: true
    },
    {
        ime: "Olivia",
        prezime: "Jones",
        upisan: false
    },
    {
        ime: "Noah",
        prezime: "Garcia",
        upisan: true
    },
    {
        ime: "Emma",
        prezime: "Miller",
        upisan: false
    },
    {
        ime: "Ava",
        prezime: "Davis",
        upisan: false
    },
    {
        ime: "Sophia",
        prezime: "Abbott",
        upisan: true
    },
    {
        ime: "William",
        prezime: "Simpson",
        upisan: true
    }
];


/**
 * 
 * @param {list} lista lista koja se pretrazuje
 * @param {string} pojam pojam koji se trazi
 * @param {boolean} status status upisa studenta
 */
function provjeri(lista, pojam, status) {
    found = false;
    for (const atribut in student) {
        // za ovo sigurno postoji neki elegantniji nacin
        if ((lista[atribut].prezime.toLowerCase().includes(pojam.toLowerCase()) ||
                lista[atribut].ime.toLowerCase().includes(pojam.toLowerCase())) &&
            lista[atribut].upisan === status) {
            found = true; // kada se naze prvi koji zadovoljava
            return found; // odmah vrati da niti ne gubi vrijeme kroz ostale elemente
        }
    }
    return found;
}

console.log(provjeri(student, "oPh", true))