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
        evszam2: '1479' },
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

const th = document.createElement('th')
tableheadrow.appendChild(th)

const th2 = document.createElement('th')
tableheadrow.appendChild(th2)

const th3 = document.createElement('th')
tableheadrow.appendChild(th3)

const th4 = document.createElement('th')
tableheadrow.appendChild(th4)

th.innerHTML = "uralkodo_nev"
th2.innerHTML = "esemeny1"
th2.colSpan = 2
th3.innerHTML = "evszam1"
th4.innerHTML = "esemeny2"
th.innerHTML = "evszam2"

const tablebody = document.createElement('tbody')
table.appendChild(tablebody)







GenerateTable()
function GenerateTable(){
    for (const tortenelem of data) {
        const tr = document.createElement('tr')
        tablebody.appendChild(tr)
        const uralkodo_nev = document.createElement('td')

        tr.appendChild(uralkodo_nev)
        uralkodo_nev.innerHTML = tortenelem.uralkodo_nev

        const esemeny1 = document.createElement('td')
        tr.appendChild(esemeny1) 
        esemeny1.innerHTML = tortenelem.esemeny1

        const evszam1 = document.createElemnt('td')
        tr.appendChild(evszam1)
        esemeny1.innerHTML = tortenelem.esemeny1

        const esemeny2 = document.createElement('td')
        tr.appendChild(esemeny2)
        esemeny2.innerHTML = tortenelem.esemeny2

        const evszam2 = document.createElement('td')
        tr.appendChild(evszam2)
        evszam2.innerHTML = tortenelem.evszam2
    }
}