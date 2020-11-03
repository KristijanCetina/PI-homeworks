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

function provjeri(lista, pojam) {
    let found = false;
    for (const atribut in student) {
        if ((lista[atribut].prezime === pojam || lista[atribut].ime === pojam) && lista[atribut].upisan === true)
            found = true;
    }
    return found;
}

console.log(provjeri(student, "Noah")); // true
console.log(provjeri(student, "Ava")); // false