let bodovi = prompt("Unesi broj bodova"); //add input validation
let ocjena;
let poruka;

if (bodovi < 50)
{
    ocjena = 1;
    poruka = "Više sreće drugi put";
    }
if (bodovi >= 50 && bodovi < 63)
{
    ocjena = 2;
    poruka = "dovoljno za prolaz";
}
if (bodovi >= 63 && bodovi < 76)
{
    ocjena = 3;
    poruka = "Dobar si ti";
}
if (bodovi >= 76 && bodovi < 89)
{
    ocjena = 4;
    poruka = "Vrlo dobro. Služi narodu";
}
if (bodovi >= 89 && bodovi <= 100)
{
    ocjena = 5;
    poruka = "Izvrstan. Skoro izvanredan";
}
if (bodovi >100)
{
    ocjena = 42;
    poruka = "Budi realan 😎";
}

console.log(`Tvoja ocjena je ${ocjena}. ${poruka}`);