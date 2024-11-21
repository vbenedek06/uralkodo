// Adatok tömb, amely tartalmazza a történelmi események adatait
const data = [
    {
        uralkodo_nev: 'I. István',
        esemeny1: 'Koronázás',
        evszam1: '1000',
        esemeny2: 'Pannonhalmi apátság megalapítása',
        evszam2: '1001'
    },
    {
        uralkodo_nev: 'IV. Béla',
        esemeny1: 'Tatárjárás',
        evszam1: '1241-1242'
    },
    {
        uralkodo_nev: 'Mátyás király',
        esemeny1: 'Bécs elfoglalása',
        evszam1: '1485',
        esemeny2: 'Kenyérmezei csata',
        evszam2: '1479'
    },
    {
        uralkodo_nev: 'II. Rákóczi Ferenc',
        esemeny1: 'A szabadságharc kezdete',
        evszam1: '1703',
        esemeny2: 'A szabadságharc vége',
        evszam2: '1711'
    }
];

// Táblázat létrehozása a DOM-ban
const table = document.createElement('table')
document.body.appendChild(table)  // A táblázat hozzáadása a weboldalhoz

const tablehead = document.createElement('thead')
table.appendChild(tablehead)  // Fejléc hozzáadása a táblázathoz

const tableheadrow = document.createElement('tr')
tablehead.appendChild(tableheadrow)  // Fejléc sor hozzáadása a fejléchez

// Fejléc cellák létrehozása és hozzáadása
const th1 = document.createElement('th')
th1.innerHTML = "uralkodo_nev"
tableheadrow.appendChild(th1)

const th2 = document.createElement('th')
th2.innerHTML = "esemeny1"
tableheadrow.appendChild(th2)

const th3 = document.createElement('th')
th3.innerHTML = "evszam1"
tableheadrow.appendChild(th3)

const th4 = document.createElement('th')
th4.innerHTML = "esemeny2"
tableheadrow.appendChild(th4)

const th5 = document.createElement('th')
th5.innerHTML = "evszam2"
tableheadrow.appendChild(th5)

const tablebody = document.createElement('tbody')
table.appendChild(tablebody)  // Táblázat törzsének hozzáadása

// Validációs függvény a formon való adatbevitelnél
function validateFields(esemeny2, evszam2) {
    // Korábbi hibaüzenetek törlése
    let errors = document.querySelectorAll('.error');
    for (const error of errors) {
        error.innerHTML = '';  // A hibaüzenet törlése
    }

    innerHTML = ""
    let result = true 
    if (uralkodo_nev.value === "") {
        const par = uralkodo.parentElement
        const error = par.querySelector(".error")
        error.innerHTML = "kötelező név"  // Ha nincs kitöltve a név, hibaüzenet
        result = false
    }
}

// Form submit eseménykezelője
const form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();  // Megakadályozza, hogy az oldal újratöltődjön

    // Form elemek értékeinek lekérése
    const uralkodo_nev = document.getElementById('uralkodo_nev')
    const esemeny1 = document.getElementById('esemeny1')
    const evszam1 = document.getElementById('evszam1')
    const esemeny2 = document.getElementById('esemeny2')
    const evszam2 = document.getElementById('evszam2')

    const uralkodo_nevvalue = uralkodo_nev.value
    const esemeny1value = esemeny1.value
    const evszam1value = evszam1.value
    const esemeny2value = esemeny2.value
    const evszam2value = evszam2.value

    // Ha minden kötelező mező kitöltve van, új sor kerül a táblázatba
    if (uralkodo_nevvalue && esemeny1value && evszam1value) {
        const tr1 = document.createElement('tr');  // Új sor létrehozása
        tablebody.appendChild(tr1);

        // Egyes cellák létrehozása és feltöltése
        const uralkodoCell = document.createElement('td');
        uralkodoCell.innerHTML = uralkodo_nevvalue;
        tr1.appendChild(uralkodoCell);

        const esemeny1Cell = document.createElement('td');
        esemeny1Cell.innerHTML = esemeny1value;
        tr1.appendChild(esemeny1Cell);

        const evszam1Cell = document.createElement('td');
        evszam1Cell.innerHTML = evszam1value;
        tr1.appendChild(evszam1Cell);

        const esemeny2Cell = document.createElement('td');
        esemeny2Cell.innerHTML = esemeny2value || '';  // Ha nincs második esemény, üres cellát adunk hozzá
        tr1.appendChild(esemeny2Cell);

        const evszam2Cell = document.createElement('td');
        evszam2Cell.innerHTML = evszam2value || '';  // Ha nincs második évszám, üres cellát adunk hozzá
        tr1.appendChild(evszam2Cell);

        // Adatok hozzáadása a `data` tömbhöz, ha minden kötelező mező ki van töltve
        const ujtortenelem = { 
            uralkodo_nev: uralkodo_nevvalue, 
            esemeny1: esemeny1value, 
            evszam1: evszam1value, 
            esemeny2: esemeny2value, 
            evszam2: evszam2value 
        };
        data.push(ujtortenelem);
    } else {
        alert("Töltse ki a kötelező mezőket: uralkodo_nev, esemeny1, és evszam1");
    }
})

// A táblázat megjelenítése a `data` tömb adatai alapján
GenerateTable()

// Funkció, amely létrehozza és feltölti a táblázatot a `data` tömb adatai alapján
function GenerateTable() {
    for (const tortenelem of data) {  // Minden egyes történelem adatot végigmegy
        const tr = document.createElement('tr')  // Új sor létrehozása
        tablebody.appendChild(tr)

        // A cellák létrehozása és feltöltése
        const uralkodo_nev = document.createElement('td')
        uralkodo_nev.innerHTML = tortenelem.uralkodo_nev
        tr.appendChild(uralkodo_nev)

        const esemeny1 = document.createElement('td')
        esemeny1.innerHTML = tortenelem.esemeny1 || ''  // Ha nincs esemény, üres cellát adunk hozzá
        tr.appendChild(esemeny1)

        const evszam1 = document.createElement('td')
        evszam1.innerHTML = tortenelem.evszam1 || ''
        tr.appendChild(evszam1)

        const esemeny2 = document.createElement('td')
        esemeny2.innerHTML = tortenelem.esemeny2 || ''
        tr.appendChild(esemeny2)

        const evszam2 = document.createElement('td')
        evszam2.innerHTML = tortenelem.evszam2 || ''
        tr.appendChild(evszam2)
    }
}
