---
tags: nograph
title: "Teoria di Topologia Generale"
description: "Appunti di Topologia"
---


# 1. Topologia

## 1.1 _Definizione di Topologia_
![[Topologia]]

---
## 1.2 _Esempi di Topologie_
![[Topologia Discreta]] 

![[Topologia Banale]]  

![[Topologia Cofinita]]

![[Topologia Euclidea]]

![[Topologia del Limite Inferiore]]

> [!ex] Esempio di NON topologia
> Sia $\tau=\{X\}\cup\{\varnothing\}\cup\{[-a,a]|a\in \mathbb{R}^+\}$
> Considero la famiglia di elementi $\left\{ \left[ -1+\frac{1}{n},1+\frac{1}{n} \right] \right\}_{n\in \mathbb{N}}$.
> Si ha che $\bigcup_{n\in \mathbb{N}}\left[ -1+\frac{1}{n},1+\frac{1}{n} \right]=\left]-1,1\right[\not\in\tau$ 
> 
> ![[Diagrams/esempio non topologia.excalidraw.svg]]

![[Topologia con Seno]]

![[Confronto Tra Topologie]]

---
## 1.3 _Aperti e Chiusi_
![[Aperto]]

![[Chiuso]]

---
## 1.4 _Basi di una Topologia_

![[Base di una Topologia]]

![[Caratterizzazione delle Basi di una Topologia]]

> [!ex] Base della Topologia Euclidea
> In $\mathbb{R}^n$ gli insiemi $B_{r}(x)=\{y\in \mathbb{R}\mid d(x,y)<r\}$ con $r\in \mathbb{R}^+$ e $x\in \mathbb{R}^n$ costituiscono una base per la [[Topologia Euclidea|topologia euclidea]]

> [!prop] Caratterizzazione delle basi di una Topologia 2
> $\beta$ è una [[Base di una Topologia|base]] per $\tau$ se e solo se verifica le seguenti proprietà:
> 1. $\displaystyle X=\bigcup_{B\in \beta}B$
> 2. $\forall B_{1},B_{2}\in \beta$ tali che $B_{1}\cap B_{2} \not=\varnothing, \forall x\in B_{1}\cap B_{2}:\exists B\in \beta\mid x\in B\subseteq B_{1}\cap B_{2}$

> [!esempio]
> Definisco $\forall a,x \in \mathbb{Z}:S(x,a)=\{x+ka\mid k\in \mathbb{Z}\}$.
> 
> ![[S(x,a).excalidraw.svg|200]]
> 1. $\displaystyle\mathbb{Z}=\bigcup_{x,a\in \mathbb{Z}}S(x,a)$
> 2. Se $c\in S(x,a)\cap S(y,b)$ allora $c\in S(c,d)\subseteq S(x,a)\cap S(y,b)$ dove $d=mcm(a,b)$
 

![[I Numeri Primi sono Infiniti]]

![[Topologie confrontabili e basi]]

![[Esempio di Confronto tra Topologie]]

---
## 1.5 _Intorni e Sistemi Fondamentali di Intorni_

![[Intorni]]

![[Caratterizzazione degli aperti]]

![[Sistema fondamentale di intorni]]

---
## 1.6 _Assiomi di Numerabilità_

![[Spazio topologico Primo-numerabile]]

![[La topologia cofinita non è 1 numerabile]]

![[Spazio topologico Secondo-numerabile]]

![[la topologia del limite inferiore non è II-numerabile]]

---


# 2. Sottoinsiemi di uno Spazio Topologico
## 2.1 _Interno di un Insieme e Punti Interni_
![[Punto interno]]

![[Interno]]

---
## 2.2 _Chiusura di un Insieme_
![[Chiusura di un insieme]]

![[Punti di Aderenza]]

![[Teorema sui Punti di Aderenza]]

---
## 2.3 _Punti di Accumulazione e Isolati_

![[Punto di Accumulazione]]

![[Punto Isolato]]

> [!es] In $(\mathbb{R},\mathcal{E})$
> $\mathbb{N}$ contiene solo punti isolati.
> $\left\{  \frac{1}{n} ,n\in \mathbb{Z}  \right\}$ contiene solo punti isolati.

> [!prop] Proposizione
> Sia $(X,\tau)$ [[Topologia|spazio topologico]] e $A\subseteq X$. Allora $\overline{A}=A\cap D(A)$

> [!dim]
> $x\in A\implies x\in \overline{A}$.
> Se $x\in D(A)$ allora $\forall U\in \tau,x\in U \mid (U\cap A)\setminus\{x\}\not=\varnothing\implies U\cap A\not=\varnothing$.  Per cui $x$ è di aderenza, e quindi per il [[Teorema sui Punti di Aderenza]] $x\in \overline{A}$

![[Esempi di Chiusi in Topologie Diverse]]

---
## 2.4 _Insiemi densi_

![[Insieme Denso]]

![[Caratterizzazione degli insiemi densi]]

![[Topologie confrontabili e insiemi densi]]

---
## 2.5 _Punti esterni e di frontiera_

![[Esterno]]

![[Frontiera]]

---
## 2.6 _Identità dell'Interno, Esterno e Frontiera_

![[Proprietà Interno, Esterno e Frontiera]]

---
# 3. Costruzioni di Insiemi

## 3.1 _Topologia Prodotto_

![[Topologia Prodotto]]

![[Proprietà fondamentale delle mappe]]

---
## 3.2 _Box Topologia_

![[Prodotto Cartesiano della Famiglia Parametrizzata]]

![[Proiezioni Canoniche]]

![[Box Topologia]]

![[Confronto tra box topologia e topologia prodotto]]



---
# 4. Sottospazi

## 4.1 Definizione e Basi
![[Topologia di Sottospazio|sottospazio]]

![[Base di sottospazio]]

![[Chiusi e interni di spazi topologici (proprietà)]]

---

# 5. Mappe Continue e Omeomorfismi

## 5.1 Definizione e Proprietà
![[Mappa Continua]]

![[Continuità della funzione identità]]

![[Caratterizzazione delle Mappe Continue]]

![[Mappe Continue e Basi]]

![[Regole per la costruzione delle funzioni continue]]

![[Lemma dell'incollamento]]

![[Teorema sulle funzioni continue e topologia prodotto]]

![[Box Topologia e Continuità]] 

---
## 5.2 Omeomorfismi
![[Mappa Aperta]]

![[Mappa Chiusa]]

![[Omeomorfismo]]

![[Caratterizzazione degli omeomorfismi]]

> [!obs] Notazione
> Per indicare una ingezione si può usare il simbolo $\hookrightarrow$ e per indicare una suriezione si usa $\twoheadrightarrow$

![[Gruppo degli Automorfismi]]

---

# 6. Distanze e Spazi Metrici

## 6.1 _Metriche_
![[Metrica]]

![[Spazio metrico]]

![[Palla aperta]]

![[Metriche Equivalenti]]

![[Distanza di un punto da un insieme]]

![[Spazio Metrizzabile]]

![[British Rail Express Metric (SNCF Metrica)]]

---
## 6.2 _Topologie indotte da Metriche_
![[Topologia indotta da una metrica|Topologia indotta]]

![[Le topologie indotte sono I-numerabili]]

![[Lemma sulle Metriche e Confronto tra Topologie]]

![[Teorema sulla Metrica euclidea, Distanza Chebyshev e Topologia Prodotto]]

---

## 6.3 _Metrica e Topologia Uniforme_

> [!oss] Metriche e $\mathbb{R}^\omega$
> Consideriamo $\mathbb{R}^\omega$, se cerchiamo di generalizzare $d(x,y)$ e $p(x,y)$ rischiamo che non siano ben definite. Infatti, posti $x=(x_{1},x_{2},\dots)$ e $y=(y_{1},y_{2},\dots)\in \mathbb{R}^\omega$: 
> $d(x,y)=\sqrt{  \sum\limits_{i=1}^\infty |x_{i}-y_{i}|^2 }$ potrebbe divergere, proprio come $p(x,y)=\sup\limits_{i\in \mathbb{N}}\{|x_{i}-y_{i}|\}$.
> ![[Diagrams/Divergenza successioni.excalidraw.svg]]

![[Metrica Uniforme]]

![[Metrica Uniforme su R^J]]

![[Topologia Uniforme]]

![[Confronto tra Topologia Uniforme e Topologia Prodotto]]

![[Teorema sulla Topologia Prodotto Indotta dalla D Metrica]]

---

## 6.4 Continuità

![[Teorema sulla Continuità di Mappe tra Spazi Metrici]]

![[Lemma della Successione]]

---

## 6.5 Convergenza

![[Teorema Sulle Successioni Convergenti e Funzioni Continue]]

![[Convergenza Uniforme]]

![[Teorema del Limite Uniforme]]

---

## 7. Spazi di Haussdorf e Assiomi di Separazione

### 7.1 Definizione

![[Hausdorff]]

![[Assiomi di Separazione]]

### 7.2 Proprietà 

![[Teorema di Unicità del Limite in Spazi di Hausdorff]]

![[I singoletti sono Chiusi Negli Spazi Hausdorff]]

![[Proprietà degli Spazi di Hausdorff]]

![[Caratterizzazione degli Spazi di Hausdorff]]

# 8. Quozienti

## 8.1  Mappa quoziente e Relazioni di Equivalenza

![[Mappa Quoziente]]

![[Insieme Saturo rispetto a una Relazione]]

## 8.2 Topologia Quoziente
![[Topologia Relativa a una Mappa Quoziente]]

![[Topologia Quoziente]]

![[Costruzione delle Funzioni Composte]]

![[Unicità della Topologia Quoziente]]

![[Esempio sull'unicità della Topologia Quoziente]]

![[Toro]]

---

## 8.3 Pushout

![[Incollamento di spazi (pushout)]]

![[Orecchino Hawaiiano]]

---

## 8.4 Mappe quozienti e Sottospazi

![[Teorema sulle Mappe Quozienti per Topologie Indotte]]

---

# 9. Spazi Connessi

## 9.1 Definizione e Proprietà

![[Spazio Connesso]]

![[Insiemi Clopen e Spazi Connessi]]

![[Teorema sull'immagine di spazi connessi mediante funzioni continue]]

## 9.2 Sottospazi e Prodotti

![[Lemma sugli Spazi Connessi e Sottospazi]]

![[Teorema sull'Unione di Spazi Connessi]]

![[Prodotto di Spazi Connessi]]

![[La Box Topology non è Connessa]]

![[La Topologia Prodotto è Connessa]]

## 9.3 Spazi Connessi per Archi

![[Connessione per Archi]]

![[Immagine degli Spazi Connessi per Archi mediante Funzione Continua]]

![[Ogni Spazio Connesso per Archi è Connesso]]

![[La Connessione per Archi è una Relazione di Equivalenza]]

## 9.4 Componenti connesse

![[Componenti Connesse]]

![[Teorema sulle Componenti Connesse]]

![[Componenti Connesse per Archi]]

---

# 10. Spazi Compatti

## 10.1 Ricoprimenti e Definizione di Compatto

![[Ricoprimento]]

![[Compatto]]

![[Esempi di Compatti e non Compatti]]

---

## 10.2 Sottospazi di Spazi Compatti

![[Lemma sui Sottospazi Compatti]]

![[Teorema Sui Sottospazi Chiusi Dei Compatti]]

![[I Sottospazi Compatti di Spazi T2 sono Chiusi]]

---

## 10.3 Mappe e Spazi Compatti

![[Teorema sull'immagine di compatti mediante funzioni continue]]

![[La Biiezione continua da compatto a Hausdorff è un omeomorfismo]]

---

## 10.4 Prodotto di Compatti

![[Lemma del Tubo]]

![[La Proiezione Parallela a un Compatto è Chiusa]]

![[Il prodotto finito di Compatti é Compatto]]

![[Teorema del Grafico Chiuso per spazi compatti]]

![[Teorema di Heine-Boriel]]

---

## 10.5 Proprietà Di Intersezione Finita

![[Proprietà di Intersezione Finita]]

![[Caratterizzazione della Compattezza tramite Proprietà di Intersezione Finita]]

![[Uno Spazio di Hausdorff Compatto Privo di Punti Isolati non é Numerabile]]

---

## 10.6 Compattezza per Punti di Accumulazione

![[Punti Isolati]]

![[Compatto per Punti di Accumulazione]]

![[I Compatti lo sono anche Per Punti di Accumulazione]]