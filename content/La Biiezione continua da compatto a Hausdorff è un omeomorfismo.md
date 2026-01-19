---
tags: [Topologia, Proposizione, Continuità, Compatti, Hausdorff, Omeomorfismi]
aliases: []
icon: lucide-circle-check-big
---

> [!teorema]
> Sia $f:X\to Y$ una [[mappa continua]] biiettiva. Se $X$ è [[compatto]] e $Y$ è di [[Hausdorff]], allora $f^{-1}$ è continua, cioè $X$ è [[Omeomorfismo|omemorfo]] a $Y$

> [!dim] Dimostrazione
> Per dimostrare che $f^{-1}:Y\to X$ è continua, basta dimostrare che la controimmagine di ogni chiuso mediante $f^{-1}$ è chiusa. Cioè che se $C\subseteq X$ è chiuso, allora $f(C)$ è chiuso. 
> Sia $C\subseteq X$ un chiuso di $X$. Poiché $X$ è compatto, allora anche $C$ è compatto [[Teorema Sui Sottospazi Chiusi Dei Compatti|per questo teorema]].
> Sappiamo che $f$ è continua, dunque $f(C)$ è a sua volta compatto in quanto [[Teorema sull'immagine di compatti mediante funzioni continue|immagine di un compatto mediante funzione continua]].
> Dal momento che $Y$ è $T_{2}$, per [[I Sottospazi Compatti di Spazi T2 sono Chiusi|questo teorema]] risulta che $f(C)$ è chiuso in quanto compatto. 
> Quindi $f^{-1}$ è continua  