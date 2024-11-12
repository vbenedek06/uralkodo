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

const table = document.createElement('table')
document.body.appendChild(table)

const tablehead = document.createElement('thead')
table.appendChild(tablehead)

const tableheadrow = document.createElement('tr')
tablehead.appendChild(tableheadrow)

//fejlécek
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
table.appendChild(tablebody)


const form = document.getElementById('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();


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

    //plusz sor létrehozása
    if (uralkodo_nevvalue && esemeny1value && evszam1value) {
        //első esemény
        const tr1 = document.createElement('tr');
        tablebody.appendChild(tr1);

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
        esemeny2Cell.innerHTML = esemeny2value || '';
        tr1.appendChild(esemeny2Cell);

        const evszam2Cell = document.createElement('td');
        evszam2Cell.innerHTML = evszam2value || '';
        tr1.appendChild(evszam2Cell);

        //3. Adj hozzá validációt a kötelező elemekhez (név, esemény1, évszám1)! Ha valamelyik mező nincs kitöltve, akkor ne fűzzük hozzá a táblázathoz.
        if (uralkodo_nev && esemeny1 && evszam1) {
            const tr = document.createElement('tr');
            tablebody.appendChild(tr);
    
            const uralkodoCell = document.createElement('td');
            uralkodoCell.innerHTML = uralkodo_nev;
            tr.appendChild(uralkodoCell);
    
            const esemeny1Cell = document.createElement('td');
            esemeny1Cell.innerHTML = esemeny1;
            tr.appendChild(esemeny1Cell);
    
            const evszam1Cell = document.createElement('td');
            evszam1Cell.innerHTML = evszam1;
            tr.appendChild(evszam1Cell);
    
            const esemeny2Cell = document.createElement('td');
            esemeny2Cell.innerHTML = esemeny2;
            tr.appendChild(esemeny2Cell);
    
            const evszam2Cell = document.createElement('td');
            evszam2Cell.innerHTML = evszam2;
            tr.appendChild(evszam2Cell);
    
            const ujtortenelem = 
            { 
                uralkodo_nev, 
                esemeny1, 
                evszam1, 
                esemeny2, 
                evszam2 
            };
            
            data.push(ujtortenelem);
        } else {
            alert("Töltse ki a kötelező mezőket: uralkodo_nev, esemeny1, és evszam1");
        }
    }    
})



GenerateTable()

function GenerateTable() {
    for (const tortenelem of data) {
        const tr = document.createElement('tr')
        tablebody.appendChild(tr)

        const uralkodo_nev = document.createElement('td')
        uralkodo_nev.innerHTML = tortenelem.uralkodo_nev
        tr.appendChild(uralkodo_nev)

        const esemeny1 = document.createElement('td')
        esemeny1.innerHTML = tortenelem.esemeny1 || ''
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
