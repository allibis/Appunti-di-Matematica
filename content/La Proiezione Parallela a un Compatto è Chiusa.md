---
tags: [Topologia, Proposizione, Compatti, Mappe]
aliases: []
icon: lucide-circle-check-big
---

> [!prop] Proposizione
> Siano $X,Y$ [[Topologia|spazi topologici]] con $Y$ [[Compatto|compatto]].
> Allora la proiezione $p_{X}:X \times Y\to X$ è un'applicazione [[Mappa Chiusa|chiusa]]

> [!dim]
> Sia $C\subset X \times Y$ un sottoinsieme chiuso, vogliamo dimostrare che $p_{X}(C)$ è chiuso.
> Verifichiamo allora che $X\setminus p_{X}(C)$ è aperto.
> Sia $x\in X\setminus p_{X}(C)\implies x\not\in p_{C}(C), \forall (x',y')\in C:x'\not=x$ 
> Allora $\forall y\in Y,(x,y)\not\in C$, ossia $\{ x \}\times Y\subseteq (X \times Y)\setminus C$
> Poiché $C$ è chuso, allora $(X \times Y)\setminus C$ è aperto, e per il [[Lemma del Tubo]], dato che $Y$ è compatto e $\{ x \}\times Y\subseteq (X \times Y)\setminus C$ allora $\exists U$ intorno aperto di $x$ tale che  $\{ x \}\times Y\subseteq U \times Y\subseteq(X \times Y)\setminus C$.
> Ho trovato un intorno di $x\in X\setminus p_{X}(C)$, pertanto tale insieme è intorno di tutti i suoi punti, quindi è un aperto $\implies p_{X}(C)$ è chiuso.