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



GenerateTable()

function GenerateTable(){
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