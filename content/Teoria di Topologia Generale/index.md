---
tags: [nograph, notags, nobacklinks, noexp, mainpage, nolist]
title: "Teoria di Topologia Generale"
description: "Appunti di Topologia"
---

# 1. Topologia

## 1.1 _Definizione di Topologia_
![[Teoria di Topologia Generale/Topologia]]

---
## 1.2 _Esempi di Topologie_
![[Teoria di Topologia Generale/Topologia Discreta]] 

![[Teoria di Topologia Generale/Topologia Banale]]  

![[Teoria di Topologia Generale/Topologia Cofinita]]

![[Teoria di Topologia Generale/Topologia Euclidea]]

![[Teoria di Topologia Generale/Topologia del Limite Inferiore]]

> [!ex] Esempio di NON topologia
> Sia $\tau=\{X\}\cup\{\varnothing\}\cup\{[-a,a]|a\in \mathbb{R}^+\}$
> Considero la famiglia di elementi $\left\{ \left[ -1+\frac{1}{n},1+\frac{1}{n} \right] \right\}_{n\in \mathbb{N}}$.
> Si ha che $\bigcup_{n\in \mathbb{N}}\left[ -1+\frac{1}{n},1+\frac{1}{n} \right]=\left]-1,1\right[\not\in\tau$ 
> 
> ![[Diagrams/esempio non topologia.excalidraw.svg]]

![[Teoria di Topologia Generale/Topologia con Seno]]

![[Teoria di Topologia Generale/Confronto Tra Topologie]]

---
## 1.3 _Aperti e Chiusi_
![[Teoria di Topologia Generale/Aperto]]

![[Teoria di Topologia Generale/Chiuso]]

---
## 1.4 _Basi di una Topologia_

![[Teoria di Topologia Generale/Base di una Topologia]]

![[Teoria di Topologia Generale/Caratterizzazione delle Basi di una Topologia]]

> [!ex] Base della Topologia Euclidea
> In $\mathbb{R}^n$ gli insiemi $B_{r}(x)=\{y\in \mathbb{R}\mid d(x,y)<r\}$ con $r\in \mathbb{R}^+$ e $x\in \mathbb{R}^n$ costituiscono una base per la [[Teoria di Topologia Generale/Topologia Euclidea|topologia euclidea]]

> [!prop] Caratterizzazione delle basi di una Topologia 2
> $\beta$ è una [[Teoria di Topologia Generale/Base di una Topologia|base]] per $\tau$ se e solo se verifica le seguenti proprietà:
> 1. $\displaystyle X=\bigcup_{B\in \beta}B$
> 2. $\forall B_{1},B_{2}\in \beta$ tali che $B_{1}\cap B_{2} \not=\varnothing, \forall x\in B_{1}\cap B_{2}:\exists B\in \beta\mid x\in B\subseteq B_{1}\cap B_{2}$

> [!esempio]
> Definisco $\forall a,x \in \mathbb{Z}:S(x,a)=\{x+ka\mid k\in \mathbb{Z}\}$.
> 
> ![[S(x,a).excalidraw.svg|200]]
> 1. $\displaystyle\mathbb{Z}=\bigcup_{x,a\in \mathbb{Z}}S(x,a)$
> 2. Se $c\in S(x,a)\cap S(y,b)$ allora $c\in S(c,d)\subseteq S(x,a)\cap S(y,b)$ dove $d=mcm(a,b)$
 

![[Teoria di Topologia Generale/I Numeri Primi sono Infiniti]]

![[Teoria di Topologia Generale/Topologie confrontabili e basi]]

![[Teoria di Topologia Generale/Esempio di Confronto tra Topologie]]

---
## 1.5 _Intorni e Sistemi Fondamentali di Intorni_

![[Teoria di Topologia Generale/Intorni]]

![[Teoria di Topologia Generale/Caratterizzazione degli aperti]]

![[Teoria di Topologia Generale/Sistema fondamentale di intorni]]

---
## 1.6 _Assiomi di Numerabilità_

![[Teoria di Topologia Generale/Spazio topologico Primo-numerabile]]

![[Teoria di Topologia Generale/La topologia cofinita non è 1 numerabile]]

![[Teoria di Topologia Generale/Spazio topologico Secondo-numerabile]]

![[Teoria di Topologia Generale/la topologia del limite inferiore non è II-numerabile]]

---


# 2. Sottoinsiemi di uno Spazio Topologico
## 2.1 _Interno di un Insieme e Punti Interni_
![[Teoria di Topologia Generale/Punto interno]]

![[Teoria di Topologia Generale/Interno]]

---
## 2.2 _Chiusura di un Insieme_
![[Teoria di Topologia Generale/Chiusura di un insieme]]

![[Teoria di Topologia Generale/Punti di Aderenza]]

![[Teoria di Topologia Generale/Teorema sui Punti di Aderenza]]

---
## 2.3 _Punti di Accumulazione e Isolati_

![[Teoria di Topologia Generale/Punto di Accumulazione]]

![[Teoria di Topologia Generale/Punto Isolato]]

> [!es] In $(\mathbb{R},\mathcal{E})$
> $\mathbb{N}$ contiene solo punti isolati.
> $\left\{  \frac{1}{n} ,n\in \mathbb{Z}  \right\}$ contiene solo punti isolati.

> [!prop] Proposizione
> Sia $(X,\tau)$ [[Teoria di Topologia Generale/Topologia|spazio topologico]] e $A\subseteq X$. Allora $\overline{A}=A\cap D(A)$

> [!dim]
> $x\in A\implies x\in \overline{A}$.
> Se $x\in D(A)$ allora $\forall U\in \tau,x\in U \mid (U\cap A)\setminus\{x\}\not=\varnothing\implies U\cap A\not=\varnothing$.  Per cui $x$ è di aderenza, e quindi per il [[Teoria di Topologia Generale/Teorema sui Punti di Aderenza|teorema sui punti di aderenza]] $x\in \overline{A}$

![[Teoria di Topologia Generale/Esempi di Chiusi in Topologie Diverse]]

---
## 2.4 _Insiemi densi_

![[Teoria di Topologia Generale/Insieme Denso]]

![[Teoria di Topologia Generale/Caratterizzazione degli insiemi densi]]

![[Teoria di Topologia Generale/Topologie confrontabili e insiemi densi]]

---
## 2.5 _Punti esterni e di frontiera_

![[Teoria di Topologia Generale/Esterno]]

![[Teoria di Topologia Generale/Frontiera]]

---
## 2.6 _Identità dell'Interno, Esterno e Frontiera_

![[Teoria di Topologia Generale/Proprietà Interno, Esterno e Frontiera]]

---
# 3. Costruzioni di Insiemi

## 3.1 _Topologia Prodotto_

![[Teoria di Topologia Generale/Topologia Prodotto]]

![[Teoria di Topologia Generale/Proprietà fondamentale delle mappe]]

---
## 3.2 _Box Topologia_

![[Teoria di Topologia Generale/Prodotto Cartesiano della Famiglia Parametrizzata]]

![[Teoria di Topologia Generale/Proiezioni Canoniche]]

![[Teoria di Topologia Generale/Box Topologia]]

![[Teoria di Topologia Generale/Confronto tra box topologia e topologia prodotto]]



---
# 4. Sottospazi

## 4.1 Definizione e Basi
![[Teoria di Topologia Generale/Topologia di Sottospazio|sottospazio]]

![[Teoria di Topologia Generale/Base di sottospazio]]

![[Teoria di Topologia Generale/Chiusi e interni di spazi topologici (proprietà)]]

---

# 5. Mappe Continue e Omeomorfismi

## 5.1 Definizione e Proprietà
![[Teoria di Topologia Generale/Mappa Continua]]

![[Teoria di Topologia Generale/Continuità della funzione identità]]

![[Teoria di Topologia Generale/Caratterizzazione delle Mappe Continue]]

![[Teoria di Topologia Generale/Mappe Continue e Basi]]

![[Teoria di Topologia Generale/Regole per la costruzione delle funzioni continue]]

![[Teoria di Topologia Generale/Lemma dell'Incollamento]]

![[Teoria di Topologia Generale/Teorema sulle funzioni continue e topologia prodotto]]

![[Teoria di Topologia Generale/Box Topologia e Continuità]] 

---
## 5.2 Omeomorfismi
![[Teoria di Topologia Generale/Mappa Aperta]]

![[Teoria di Topologia Generale/Mappa Chiusa]]

![[Teoria di Topologia Generale/Omeomorfismo]]

![[Teoria di Topologia Generale/Caratterizzazione degli omeomorfismi]]

> [!obs] Notazione
> Per indicare una ingezione si può usare il simbolo $\hookrightarrow$ e per indicare una suriezione si usa $\twoheadrightarrow$

![[Teoria di Topologia Generale/Gruppo degli Automorfismi]]

---

# 6. Distanze e Spazi Metrici

## 6.1 _Metriche_
![[Teoria di Topologia Generale/Metrica]]

![[Teoria di Topologia Generale/Spazio metrico]]

![[Teoria di Topologia Generale/Palla aperta]]

![[Teoria di Topologia Generale/Metriche Equivalenti]]

![[Teoria di Topologia Generale/Distanza di un punto da un insieme]]

![[Teoria di Topologia Generale/Spazio Metrizzabile]]

![[Teoria di Topologia Generale/British Rail Express Metric (SNCF Metrica)]]

---
## 6.2 _Topologie indotte da Metriche_
![[Teoria di Topologia Generale/Topologia indotta da una metrica|Topologia indotta]]

![[Teoria di Topologia Generale/Le topologie indotte sono I-numerabili]]

![[Teoria di Topologia Generale/Lemma sulle Metriche e Confronto tra Topologie]]

![[Teoria di Topologia Generale/Teorema sulla Metrica euclidea, Distanza Chebyshev e Topologia Prodotto]]

---

## 6.3 _Metrica e Topologia Uniforme_

> [!oss] Metriche e $\mathbb{R}^\omega$
> Consideriamo $\mathbb{R}^\omega$, se cerchiamo di generalizzare $d(x,y)$ e $p(x,y)$ rischiamo che non siano ben definite. Infatti, posti $x=(x_{1},x_{2},\dots)$ e $y=(y_{1},y_{2},\dots)\in \mathbb{R}^\omega$: 
> $d(x,y)=\sqrt{  \sum\limits_{i=1}^\infty |x_{i}-y_{i}|^2 }$ potrebbe divergere, proprio come $p(x,y)=\sup\limits_{i\in \mathbb{N}}\{|x_{i}-y_{i}|\}$.
> ![[Diagrams/Divergenza successioni.excalidraw.svg]]

![[Teoria di Topologia Generale/Metrica Uniforme]]

![[Teoria di Topologia Generale/Metrica Uniforme su R^J]]

![[Teoria di Topologia Generale/Topologia Uniforme]]

![[Teoria di Topologia Generale/Confronto tra Topologia Uniforme e Topologia Prodotto]]

![[Teoria di Topologia Generale/Teorema sulla Topologia Prodotto Indotta dalla D Metrica]]

---

## 6.4 Continuità

![[Teoria di Topologia Generale/Teorema sulla Continuità di Mappe tra Spazi Metrici]]

![[Teoria di Topologia Generale/Lemma della Successione]]

---

## 6.5 Convergenza

![[Teoria di Topologia Generale/Teorema Sulle Successioni Convergenti e Funzioni Continue]]

![[Teoria di Topologia Generale/Convergenza Uniforme]]

![[Teoria di Topologia Generale/Teorema del Limite Uniforme]]

---

## 7. Spazi di Haussdorf e Assiomi di Separazione

### 7.1 Definizione

![[Teoria di Topologia Generale/Hausdorff]]

![[Teoria di Topologia Generale/Assiomi di Separazione]]

### 7.2 Proprietà 

![[Teoria di Topologia Generale/Teorema di Unicità del Limite in Spazi di Hausdorff]]

![[Teoria di Topologia Generale/I singoletti sono Chiusi Negli Spazi Hausdorff]]

![[Teoria di Topologia Generale/Proprietà degli Spazi di Hausdorff]]

![[Teoria di Topologia Generale/Caratterizzazione degli Spazi di Hausdorff]]

# 8. Quozienti

## 8.1  Mappa quoziente e Relazioni di Equivalenza

![[Teoria di Topologia Generale/Mappa Quoziente]]

![[Teoria di Topologia Generale/Insieme Saturo rispetto a una Relazione]]

## 8.2 Topologia Quoziente
![[Teoria di Topologia Generale/Topologia Relativa a una Mappa Quoziente]]

![[Teoria di Topologia Generale/Topologia Quoziente]]

![[Teoria di Topologia Generale/Costruzione delle Funzioni Composte]]

![[Teoria di Topologia Generale/Unicità della Topologia Quoziente]]

![[Teoria di Topologia Generale/Esempio sull'unicità della Topologia Quoziente]]

![[Teoria di Topologia Generale/Toro]]

---

## 8.3 Pushout

![[Teoria di Topologia Generale/Incollamento di spazi (pushout)]]

![[Teoria di Topologia Generale/Orecchino Hawaiiano]]

---

## 8.4 Mappe quozienti e Sottospazi

![[Teoria di Topologia Generale/Teorema sulle Mappe Quozienti per Topologie Indotte]]

---

# 9. Spazi Connessi

## 9.1 Definizione e Proprietà

![[Teoria di Topologia Generale/Spazio Connesso]]

![[Teoria di Topologia Generale/Insiemi Clopen e Spazi Connessi]]

![[Teoria di Topologia Generale/Teorema sull'immagine di spazi connessi mediante funzioni continue]]

## 9.2 Sottospazi e Prodotti

![[Teoria di Topologia Generale/Lemma sugli Spazi Connessi e Sottospazi]]

![[Teoria di Topologia Generale/Teorema sull'Unione di Spazi Connessi]]

![[Teoria di Topologia Generale/Prodotto di Spazi Connessi]]

![[Teoria di Topologia Generale/La Box Topology non è Connessa]]

![[Teoria di Topologia Generale/La Topologia Prodotto è Connessa]]

## 9.3 Spazi Connessi per Archi

![[Teoria di Topologia Generale/Connessione per Archi]]

![[Teoria di Topologia Generale/Immagine degli Spazi Connessi per Archi mediante Funzione Continua]]

![[Teoria di Topologia Generale/Ogni Spazio Connesso per Archi è Connesso]]

![[Teoria di Topologia Generale/La Connessione per Archi è una Relazione di Equivalenza]]

## 9.4 Componenti connesse

![[Teoria di Topologia Generale/Componenti Connesse]]

![[Teoria di Topologia Generale/Teorema sulle Componenti Connesse]]

![[Teoria di Topologia Generale/Componenti Connesse per Archi]]

---

# 10. Spazi Compatti

## 10.1 Ricoprimenti e Definizione di Compatto

![[Teoria di Topologia Generale/Ricoprimento]]

![[Teoria di Topologia Generale/Compatto]]

![[Teoria di Topologia Generale/Esempi di Compatti e non Compatti]]

---

## 10.2 Sottospazi di Spazi Compatti

![[Teoria di Topologia Generale/Lemma sui Sottospazi Compatti]]

![[Teoria di Topologia Generale/Teorema Sui Sottospazi Chiusi Dei Compatti]]

![[Teoria di Topologia Generale/I Sottospazi Compatti di Spazi T2 sono Chiusi]]

---

## 10.3 Mappe e Spazi Compatti

![[Teoria di Topologia Generale/Teorema sull'immagine di compatti mediante funzioni continue]]

![[Teoria di Topologia Generale/La Biiezione continua da compatto a Hausdorff è un omeomorfismo]]

---

## 10.4 Prodotto di Compatti

![[Teoria di Topologia Generale/Lemma del Tubo]]

![[Teoria di Topologia Generale/La Proiezione Parallela a un Compatto è Chiusa]]

![[Teoria di Topologia Generale/Il prodotto finito di Compatti é Compatto]]

![[Teoria di Topologia Generale/Teorema del Grafico Chiuso per spazi compatti]]

![[Teoria di Topologia Generale/Teorema di Heine-Boriel]]

---

## 10.5 Proprietà Di Intersezione Finita

![[Teoria di Topologia Generale/Proprietà di Intersezione Finita]]

![[Teoria di Topologia Generale/Caratterizzazione della Compattezza tramite Proprietà di Intersezione Finita]]

![[Teoria di Topologia Generale/Uno Spazio di Hausdorff Compatto Privo di Punti Isolati non é Numerabile]]

---

## 10.6 Compattezza per Punti di Accumulazione

![[Teoria di Topologia Generale/Punti Isolati]]

![[Teoria di Topologia Generale/Compatto per Punti di Accumulazione]]

![[Teoria di Topologia Generale/I Compatti lo sono anche Per Punti di Accumulazione]]

