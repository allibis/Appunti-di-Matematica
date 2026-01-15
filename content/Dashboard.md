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
## 🧭 Syllabus Tracker (Ordine Geometria 4 + Esercitazioni)

> [!abstract]+ **1. Dai Metrici agli Spazi Topologici**
> 
> **Preliminari Metrici**
> - [p] Spazi metrici: definizione, palle aperte e topologia indotta
> - [p] Metriche equivalenti e limitatezza
> - [p] Metrica euclidea vs Metrica discreta vs Metrica uniforme
> - [p] Esercizio: Dimostrare che una metrica induce una topologia
> 
> **Struttura Topologica**
> - [p] Spazi topologici: definizione di aperti e assiomi
> - [p] Topologie fondamentali: Discreta, Banale, Cofinita
> - [p] Topologia di Sorgenfrey (Retta del limite inferiore $\mathbb{R}_l$)
> - [p] Esercizio: Confronto tra topologie (Esercizi su $\subseteq$ e $\subsetneq$)
> - [p] Insiemi chiusi: definizione, proprietà e Leggi di De Morgan
> - [p] Esercizio: Chiusi nella topologia cofinita (finiti o tutto X)
> 
> - [p] **Basi e Intorni**
> - [p] Base di una topologia: definizione e Teoremi di caratterizzazione
> - [p] Sottobase e generazione di topologie
> - [p] Intorni e Sistema Fondamentale di Intorni (S.F.I.)
> - [p] Assiomi di numerabilità: I-numerabile (N1) e II-numerabile (N2)
> - [p] Proposizione: Spazi metrici $\implies$ I-numerabili (ma non per forza II)

> [!example]- **2. Analisi Locale e Costruzioni**
> 
> - [p] **Operatori Topologici**
> - [p] Interno (Int), Esterno e Frontiera ($\partial A$): definizioni e relazioni
> - [p] Chiusura (Cl): definizione come più piccolo chiuso e tramite aderenza
> - [p] Insiemi densi e Spazi separabili
> - [p] Successioni: convergenza (unica in Hausdorff, multipla in cofinita)
> - [p] Esercizio: Calcolo di Int, Cl e Frontiera in $\mathbb{R}_l$ vs Euclidea
> 
> - [p] **Sottospazi e Prodotti**
> - [p] Topologia di Sottospazio: definizione e proprietà ereditarie
> - [p] Topologia Prodotto (finita) e base canonica
> - [p] Topologia Prodotto (infinita) vs Box Topology
> - [p] Proiezioni canoniche: continuità e apertura
> 
> **Funzioni Continue**
> - [p] Continuità: definizione topologica (preimmagine di aperti)
> - [p] Continuità in un punto vs Continuità globale
> - [p] Funzioni aperte, chiuse e Omeomorfismi
> - [p] Lemma dell'incollamento (Pasting Lemma) per funzioni continue
> - [p] Esercizio: Dimostrare che $f$ è continua o trovare controesempi

> [!ex]- **3. Metrica e Convergenza**
> 
> **Struttura Metrica**
> - [p] Definizione di Metrica e Spazio Metrico
> - [p] Definizione di Palla Aperta $B_d(x, \epsilon)$ e Topologia Metrica indotta
> - [p] Le palle aperte formano una base per la topologia metrica
> - [p] Metrica limitata standard $\bar{d}$ (minimo tra $d$ e 1) e limitatezza topologica
> - [p] Metriche Equivalenti: definizione e conservazione della topologia
> - [p] Esempi fondamentali: Metrica Euclidea, Quadrata (del massimo), Discreta
> - [p] Teorema: Le topologie indotte da metrica euclidea e quadrata su $\mathbb{R}^n$ coincidono
> 
> - [p] **Metrica Uniforme e Prodotti**
> - [p] Metrica Uniforme $\bar{p}$ su $\mathbb{R}^J$ (sup-norma limitata)
> - [p] Confronto topologie su prodotti infiniti: $\tau_{prod} \subseteq \tau_{unif} \subseteq \tau_{box}$
> - [p] Teorema: La topologia uniforme è più fine della prodotto e meno fine della box
> - [p] Esempio: Insieme delle successioni limitate $l^\infty$ o $l^2$ (Cubo di Hilbert)
> 
> **Convergenza di Successioni**
> - [p] Convergenza di una successione in spazi topologici vs metrici
> - [p] Lemma della Successione (caratterizzazione metrica della chiusura)
> - [p] Unicità del limite (garantita negli spazi Metrici poiché Hausdorff)
> - [p] Continuità per successioni: $f$ continua $\iff (x_n \to x \implies f(x_n) \to f(x))$ (valido in spazi metrici/I-numerabili)
> 
> **Convergenza Uniforme di Funzioni**
> - [p] Definizione di Convergenza Puntuale vs Convergenza Uniforme
> - [p] La metrica uniforme induce la topologia della convergenza uniforme
> - [p] **Teorema del Limite Uniforme**: il limite uniforme di funzioni continue è continuo
> - [p] **M-Test di Weierstrass** per la convergenza uniforme di serie di funzioni
> - [ ] Spazi Metrizzabili: definizione e Teorema di metrizzabilità di Urysohn (cenni)
> - [ ] Teorema: Ogni spazio metrico è Normale ($T_4$) e I-numerabile

> [!check]- **4. Assiomi di Separazione e Teoremi Avanzati**
> 
> **Gerarchia di Separazione**
> - [ ] Assiomi $T_0$ (Kolmogorov) e $T_1$ (Fréchet)
> - [ ] Assioma $T_2$ (Hausdorff): unicità del limite
> - [ ] Assiomi $T_3$ (Regolari) e $T_4$ (Normali)
> - [ ] Esercizio: La topologia cofinita è $T_1$ ma non $T_2$
> - [ ] Esercizio: La retta di Sorgenfrey è Normale ($T_4$) ma il suo quadrato $\mathbb{R}_l^2$ no
> 
> **Teoremi Fondamentali (dal file Geometria 4)**
> - [ ] Teorema: Ogni spazio metrico è Normale ($T_4$)
> - [ ] Lemma di Urysohn (Separazione funzionale)
> - [ ] Teorema di Estensione di Tietze
> - [ ] Teorema di metrizzabilità di Urysohn (Spazi $T_3$ II-numerabili)

> [!tip]- **5. Compattezza e Compattificazione**
> 
> **Compattezza**
> - [ ] Compattezza: definizione per ricoprimenti aperti
> - [ ] Compattezza in $\mathbb{R}^n$: Teorema di Heine-Borel
> - [ ] Proprietà: Chiusi in compatti (sono compatti) e Compatti in Hausdorff (sono chiusi)
> - [ ] Compattezza per successioni (Sequenziale) vs Compattezza topologica
> - [ ] Esercizio: Insiemi compatti nella topologia discreta (solo i finiti)
> 
> **Estensioni**
> - [ ] Lemma del Tubo (prodotto con un compatto)
> - [ ] Teorema di Tychonoff (prodotto arbitrario di compatti)
> - [ ] Compattificazione di Alexandroff (Compattificazione a un punto)
> - [ ] Spazi localmente compatti

> [!bug]- **6. Connessione e Quozienti**
> 
> **Connessione**
> - [ ] Spazi Connessi: definizione (separazione) e intervalli di $\mathbb{R}$
> - [ ] Teorema del Valor Medio (versione topologica)
> - [ ] Connessione per archi e relazione con la connessione
> - [ ] Componenti Connesse e Componenti Connesse per Archi
> - [ ] Esercizio: Curva del Seno del Topologo (Connessa ma non per archi)
> 
> **Topologia Quoziente**
> - [ ] Mappa quoziente e topologia quoziente (proprietà universale)
> - [ ] Spazi di identificazione (incollamenti)
> - [ ] Esempi: Toro $\mathbb{T}^2$, Nastro di Möbius, Bottiglia di Klein
> - [ ] Spazi Proiettivi $\mathbb{P}^n(\mathbb{R})$
> - [ ] Esercizio: Riconoscere spazi quoziente (es. Quadrato con lati incollati)

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
tags: [Topologia, Definizione]
aliases: []
icon: lucide-book-open
---
```
  -> #Definizione 
```
---
tags: [Topologia, Proposizione]
aliases: []
icon: lucide-circle-check-big
---
``` 
-> #Proposizione 
```
---
tags: [Topologia, Teorema]
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