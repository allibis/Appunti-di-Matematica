## 🔥 Heatmap Tracker 
```dataviewjs
// --- 1. LOGICA DATI (Uguale a prima) ---
let dailyCounts = {};
for (let page of dv.pages()) {
    if (page.file.folder.includes("Excalidraw")) continue;
    if (page.file.name.includes("Dashboard")) continue;
    let dateStr = moment(page.file.mtime.toString()).format("YYYY-MM-DD");
    dailyCounts[dateStr] = (dailyCounts[dateStr] || 0) + 1;
    dateStr = moment(page.file.ctime.toString()).format("YYYY-MM-DD");
    dailyCounts[dateStr] = (dailyCounts[dateStr] || 0) + 1;
}

// Calcolo Max
let maxEdits = 0;
for (let d in dailyCounts) if (dailyCounts[d] > maxEdits) maxEdits = dailyCounts[d];
if (maxEdits < 5) maxEdits = 5;

// --- 2. CONFIGURAZIONE HEATMAP TRACKER ---
const trackerData = {
    year: 2026,
    
    separateMonths: true,
    colorScheme: {    
        customColors: [
        "#cce5ff", // Livello 1 (Chiarissimo)
        "#99caff", // Livello 2 
        "#66b0ff", // Livello 3 
        "#3396ff", // Livello 4 
        "#007bff" // Livello 5 (Blu scuro/Elettrico)
        ], 
    },
    entries: [],
	showCurrentDayBorder: true,
    disableFileCreation: true,
    hideTabs: true,
	hideTitle: true,
	hideSubtitle: true
}

// --- 3. INSERIMENTO DATI ---
for (let [date, count] of Object.entries(dailyCounts)) {
    trackerData.entries.push({
        date: date,
        intensity: count
    })
}

// Renderizza con il NUOVO plugin
renderHeatmapTracker(this.container, trackerData)
```


## 📆 File Recenti
```dataview
table dateformat(file.mtime, "DD - HH:mm") as "Ultima Modifica"
FROM #Topologia 
SORT file.mtime DESC 
LIMIT 5
```

## 🏆TOP 10 Note più frequenti

```dataviewjs
// 1. Raccogli i dati dalle pagine
let pages = dv.pages("#Topologia")
let dataList = [];

for (let page of pages){
    // Creiamo un array di oggetti temporaneo
    dataList.push({
        name: page.file.name,
        count: page.file.inlinks.length
    });
}

// 2. Ordina l'array (decrescente) e prendi i primi 5
// È più sicuro ordinare l'array che l'oggetto
dataList.sort((a, b) => b.count - a.count);
let top5 = dataList.slice(0,10);

// 3. Estrai le due liste separate richieste da Chart.js
let labels = top5.map(item => item.name);
let values = top5.map(item => item.count);

// 4. Configura l'oggetto chartData
const chartData = {
    type: 'bar', // Puoi cambiare in 'pie', 'doughnut', 'line'
    data: {
        labels: labels, // I nomi dei file
        datasets: [{
            label: 'Numero di Link in Entrata',
            data: values, // I conteggi
            
            // Colori per le barre (opzionali ma carini)
            backgroundColor: [
				'rgba(25, 25, 112, 0.5)',   // Midnight Blue
			    'rgba(0, 0, 128, 0.5)',     // Navy Blue
			    'rgba(65, 105, 225, 0.5)',  // Royal Blue
			    'rgba(30, 144, 255, 0.5)',  // Dodger Blue
			    'rgba(70, 130, 180, 0.5)',  // Steel Blue
			    'rgba(0, 191, 255, 0.5)',   // Deep Sky Blue
			    'rgba(100, 149, 237,0.5)', // Cornflower Blue
			    'rgba(135, 206, 235, 0.5)', // Sky Blue
			    'rgba(137, 207, 240, 0.5)', // Baby Blue
			    'rgba(240, 248, 255, 0.5)'  // Alice Blue
            ],
            borderColor: [
               'rgba(25, 25, 112, 1)',   // Midnight Blue
			    'rgba(0, 0, 128, 1)',     // Navy Blue
			    'rgba(65, 105, 225, 1)',  // Royal Blue
			    'rgba(30, 144, 255, 1)',  // Dodger Blue
			    'rgba(70, 130, 180, 1)',  // Steel Blue
			    'rgba(0, 191, 255, 1)',   // Deep Sky Blue
			    'rgba(100, 149, 237, 1)', // Cornflower Blue
			    'rgba(135, 206, 235, 1)', // Sky Blue
			    'rgba(137, 207, 240, 1)', // Baby Blue
			    'rgba(240, 248, 255, 1)'  // Alice Blue
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y', // Barre orizzontali
        responsive: true,
        plugins: {
            legend: {
                display: false, // Se vuoi mostrarla, metti true
                labels: {
                    color: '#ffffff' // <--- Colore TESTO LEGENDA (Bianco)
                }
            },
            title: {
                display: false,
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#e0e0e0' // <--- Colore NUMERI asse X
                },
                grid: {
                    color: '#333333' // <--- Colore GRIGLIA verticale (Grigio scuro per non disturbare)
                }
            },
            y: {
                ticks: {
                    color: '#ffffff', // <--- Colore NOMI FILE asse Y (Bianco puro per leggibilità)
                    font: {
                        size: 12 // Opzionale: grandezza testo
                    }
                },
                grid: {
                    display: false // Nasconde la griglia orizzontale per pulizia
                }
            }
        }
    }
};

// 5. Renderizza
window.renderChart(chartData, this.container);
```

## 🗺️ Argomenti Trattati di Topologia 

> [!INFO] 1 - Fondamenti e Basi Topologiche
> - [p] Definizioni: Spazio topologico, aperti e topologia banale/discreta
> - [p] Topologia Cofinita (complementari finiti)
> - [p] Definizione di Chiuso e proprietà (intersezioni/unioni)
> - [p] Basi e topologie generate da basi
> - [p] Confronto tra topologie: "Più fine" vs "Meno fine"
> - [p] Esempio: Confronto tra Topologia Euclidea, Sorgenfrey ($\mathbb{R}_\ell$) e K-Topologia
> - [p] Assiomi di Numerabilità: Primo e Secondo Numerabile (da Esercitazioni)
> - [p] Sistemi fondamentali di intorni (da Esercitazioni)

> [!ABSTRACT] 2.- Prodotti e Sottospazi
> - [p] Operatori su sottinsiemi: Interno, Esterno, Frontiera
> - [p] Insiemi densi e punti di accumulazione 
> - [p] Topologia Prodotto (caso finito) e basi
> - [p] Prodotto infinito: Topologia Prodotto (Tychonoff) vs Box Topology
> - [p] Proprietà universale del prodotto e proiezioni
> - [p] Topologia di Sottospazio: definizione e basi indotte
> - [p] Proprietà dei sottospazi

> [!TIP] 3.- Continuità e Omeomorfismi
> - [p] Funzioni continue: definizione globale (controimmagine) e locale
> - [p] Continuità rispetto alle basi e al prodotto
> - [p] Omeomorfismi: definizione e invarianza topologica
> - [p] Lemma dell'incollamento (Gluing Lemma)
> - [p] Gruppo degli Automorfismi $Aut(X)$: Traslazioni e Gruppo Affine
> - [p] Grafico di una funzione e continuità

> [!EXAMPLE] 4 - Spazi Metrici e Convergenza
> - [ ] Metriche equivalenti: Euclidea, Quadrata e Uniforme su $\mathbb{R}^n$
> - [ ] Topologia indotta dalla metrica
> - [ ] Metrica Uniforme su spazi di funzioni e successioni ($\mathbb{R}^J$)
> - [ ] Confronto tra topologia uniforme e topologia prodotto
> - [ ] Metrizzabilità e Lemma della successione
> - [ ] Spazio $\ell^2$ e Cubo di Hilbert (da Esercitazioni)
> - [ ] Metriche speciali: Discreta e "British Rail/SNCF" (da Esercitazioni)
> - [ ] Convergenza Uniforme vs Convergenza Puntuale (Teorema del limite uniforme)

> [!CITE] 5 - Quozienti e Superfici
> - [ ] Mappe quozienti: definizione e continuità forte
> - [ ] Insiemi saturi e relazione con le mappe aperte/chiuse
> - [ ] Spazi quozienti da partizioni e da azioni di gruppo
> - [ ] Costruzione per incollamento (Pushout)
> - [ ] Spazi Proiettivi Reali ($\mathbb{P}^n(\mathbb{R})$) e Complessi
> - [ ] Superfici: Toro ($T^2$), Nastro di Möbius, Bottiglia di Klein
> - [ ] Somma connessa e Wedge Sum (Somma a punto base)
> - [ ] Orecchino Hawaiano (costruzione dettagliata da Esercitazioni)

> [!Done] 6 - Connessione
> - [ ] Definizione di spazio connesso (assenza di separazioni)
> - [ ] Unione di connessi con punto in comune
> - [ ] Immagine continua di connessi e Teorema dei valori intermedi
> - [ ] Connessione del prodotto (finito e infinito)
> - [ ] Componenti connesse (da Esercitazioni)
> - [ ] Connessione per archi (cammini): definizione e relazione con la connessione
> - [ ] Il Seno del Topologo (connesso ma non per archi)

> [!WARNING] 7 - Compattezza
> - [ ] Definizione tramite ricoprimenti aperti
> - [ ] Compattezza nei sottospazi e relazione con i chiusi
> - [ ] Teorema di Heine-Borel (chiusi e limitati in $\mathbb{R}^n$)
> - [ ] Compattezza e assiomi di separazione: Spazi di Hausdorff ($T_2$)
> - [ ] Compattezza dell'immagine continua
> - [ ] Lemma del Tubo (compattezza nel prodotto)
> - [ ] Proprietà dell'intersezione finita (famiglie di chiusi)
> - [ ] Compattificazione di Alexandroff (a un punto) (da Esercitazioni)
> - [ ] Compattezza per punti di accumulazione vs Compattezza per successioni

---

## 📊 Stato Avanzamento

```dataviewjs
// Configurazione Grafico
const page = dv.current();
const total = page.file.tasks.length;
const completed = page.file.tasks.where(t => t.checked).length;
const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
const barStyle = "width: 100%; height: 20px; accent-color: #4caf50;";

// Output
dv.paragraph("### **Completamento Corso:** " + percent + "% (" + completed + "/" + total + ")");
dv.paragraph("<progress value='" + percent + "' max='100' style='" + barStyle + "'></progress>");
```

```
---
tags: [Topologia, Definizioni]
aliases: []
icon: lucide-book-open
---
```
  -> #Definizione 
```
---
tags: [Topologia, Definizioni]
aliases: []
icon: lucide-circle-check-big
---
``` 
-> #Proposizione 
```
---
tags: [Topologia, Teoremi]
aliases: []
icon: lucide-scroll-text
---
``` 
-> #Teorema
```
---
tags: [Topologia, Proprietà]
aliases: []
icon: lucide-pencil
---
```
-> #Proprietà 