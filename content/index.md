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
> 

> [!teorema] I numeri primi sono infiniti

> [!dim] Dim
> Supponiamo per assurdo che i numeri primi siano finiti $\{p_{1}\dots p_{s}\}$
> Definisco $\displaystyle A=\bigcup_{p \text{ primo}}S(0,p)$ e $\tau=\{S(x,a)=\{x+ka\mid k\in \mathbb{Z}\}\}\subseteq \mathcal{P}(\mathbb{Z})$
> ![[S(0,p).excalidraw.svg|200]]
> Allora $\mathbb{Z}\setminus A=A^C=\{-1,1\}$ Questo perché solo $-1,1$ non sono primi (per definizione) e non sono multipli di numeri primi. 
> Osservo inoltre che $\displaystyle S(x,a)^C=X\setminus\underbrace{ S(x,a) }_{ \text{aperto} }=\bigcup^{a-1}_{i=1}S(x+i,a)$
> Tale insieme è chiuso, in quanto complementare di aperto, e aperto poiché unione di aperti. In altre parole, tutti gli aperti sono chiusi.
> Quindi $\displaystyle A=\bigcup_{p \text{ primo}}S(0,p)$ è chiuso per unione finita di chiusi e $A^C=\{-1,1\}$ è aperto. Ma questa è una contraddizione, in quanto gli aperti sono infiniti in $\tau$.
> 

![[Topologie confrontabili e basi]]

> [!es] Esempio
> La base per la [[Topologia Euclidea]] su $\mathbb{R}$ è $\beta=\{(a,b)\mid a,b\in \mathbb{R}, a<b\}$
> La base per la [[Topologia del Limite Inferiore]] $\mathbb{R}_{\mathscr{l}}$ è $\beta'=\{[a,b) | a,b\in \mathbb{R}, a<b\}$
> La **K-topologia** su $\mathbb{R}$ è generata dalla base $\beta''=\{(a,b)\mid a,b\in \mathbb{R},a<b\}\cup\{(a,b)\setminus K\}$ con $K=\{\frac{1}{n}\mid n\in \mathbb{Z}^+\}$
> 
> | Topologia | Confronto |
> | :---: | :---: |
> |  $\mathbb{R}$ vs $\mathbb{R}_{\mathscr{l}}$   | $\mathbb{R}\subseteq \mathbb{R}_{\mathscr{l}}$    |
> |  $\mathbb{R}$ vs $\mathbb{R}_{K}$   | $\mathbb{R}\subseteq \mathbb{R}_{{K}}$ |
> |$\mathbb{R}_{{\mathscr{l}}}$ vs $\mathbb{R}_{K}$ | non confrontabili |
> Applico la [[Topologie confrontabili e basi|proposizione precedente]] per dimostrare che $\mathbb{R}\subseteq \mathbb{R}_{\mathscr{l}}$: 
> Prendo $B=(a,b)\in \beta$ e $x\in B$ arbitrari. Si ha che $\exists B'=[x,b)\subseteq(a,b)$, da cui la tesi.
> Viceversa, se considero $B'=[x,b)\in \beta'$, $\nexists(a,b)\in \beta\mid x\in(a,b)\subseteq[x,b)$

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
> Sia $(X,\tau)$ [[Topologia|spazio topologico]] e $A\subseteq X$. Allora $\bar{A}=A\cap D(A)$

> [!dim]
> $x\in A\implies x\in \bar{A}$.
> Se $x\in D(A)$ allora $\forall U\in \tau,x\in U \mid (U\cap A)\setminus\{x\}\not=\varnothing\implies U\cap A\not=\varnothing$.  Per cui $x$ è di aderenza, e quindi per il [[Teorema sui Punti di Aderenza]] $x\in \bar{A}$

> [!es] In $\mathbb{R}$
> Consideriamo $A_{1}=(0,+\infty), A_{2}=\{ 1,2 \}, A_{3}=\mathbb{N}, A_{4}=\mathbb{Q}$.
> Calcolarne $Int(A_{i}), \bar{A_{i}}$ in $(\mathbb{R},\mathcal{E}), (\mathbb{R},\mathcal{P}(X)),(\mathbb{R},\tau_{cof}),(\mathbb{R},\tau_{\mathscr{l}})$
> 
> 1. In $(\mathbb{R},\mathcal{E})$
>    $Int(A_{1})=A_{1}$, $\bar{A_{1}}=[0,+\infty)$
>    $Int(A_{2})=\varnothing$, $\bar{A_{2}}=A_{2}$
>    $Int(A_{3})=\varnothing$, $\bar{A_{3}}=A_{3}$
>    $Int(A_{4})=\varnothing$: infatti $\forall q\in Q:\exists\varepsilon>0\mid(q-\varepsilon,q+\varepsilon)\not \subseteq \mathbb{Q}$. 
> 2. In $(\mathbb{R},\mathcal{P}(\mathbb{R}))$
>    $\forall i\in\{1,2,3,4\}:  Int(A_{i})=A_{i},\bar{A_{i}}=A_{i}$
> 3. $(\mathbb{R},\tau_{cof})$
>    Ricordiamo che $\tau_{cof}=\{ \varnothing \}\cup \{ A\subseteq\mathbb{R}\mid \complement_{X}A \text{ è finito} \}$.
>   Se $r$ fosse interno a $A_{1}=(0,+\infty)$ allora esisterebbe $W\in \tau_{cof}\mid x\in W\subseteq A_{1}$. Tale $W$ è del tipo $\mathbb{R}\setminus\{p_{1}\dots p_{k}\}\not\subseteq A_{1}\implies A_{1}$ non ha punti interni. Pertanto $Int (A_{1})=\varnothing$
>   I chiusi di $\tau_{cof}$ sono chiusi oppure sono  uguali a $\mathbb{R}$. L'unico chiuso che contiene $A_{1}$ è $\mathbb{R}$, quindi $\bar{A_{1}}=\mathbb{R}$
>   Considero $A_{2}$. Nella topologia cofinita, non esistono aperti contenuti in $A_{2}$, quindi $Int(A_{2})=\varnothing$. Osservo inoltre che $\complement_{\mathbb{R}}A_{2}=\mathbb{R}\setminus\{ 1,2 \}$ è aperto in $\tau_{cof}$, quindi $A_{2}$ è chiuso, di conseguenza $A_{2}=\bar{A_{2}}$.
>   $A_{3}=\mathbb{N}$. $\forall n\in \mathbb{N},n\not\in Int(\mathbb{N})$. Questo perché $\forall U\in \tau _{cof}\mid n\in U: U\not\subseteq \mathbb{N}\implies Int(\mathbb{N})=\varnothing$.
>   Analogamente ad $A_{2}$, risulta che $\bar{A_{3}}=\mathbb{R}$.
>   Osservo che $Int(\mathbb{Q})=\varnothing$ in virtù dello stesso ragionamento seguito per $A_{3}$.
>   L'unico chiuso che contiene $\mathbb{Q}$ è $\mathbb{R}\implies \bar{\mathbb{Q}}=\mathbb{R}$

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

![[Proiezione]]

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

![[Teorema di Unicità del Limite]]

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

![[Teorema su Sottospazi Connessi aventi un punto in comune]]

![[Prodotto di Spazi Connessi]]


