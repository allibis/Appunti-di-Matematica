---
tags: [Topologia, Teorema, Compatti, Continuità]
aliases: []
icon: lucide-scroll-text
---

> [!teorema]
> Sia $f:X\to Y$ una funzione [[Teoria di Topologia Generale/Mappa Continua|continua]] e $X$ [[Teoria di Topologia Generale/Compatto|compatto]]. 
> Allora anche $f(X)$ è compatto.

> [!dimostrazione]
> Sia $\mathcal{A}$ un ricoprimento aperto di $f(X)$.
> Considero $\mathcal{U}=\{ f^{-1}(V)\, \vert \,V\in \mathcal{A} \}$
> Tale collezione è un ricoprimento aperto di $X$ in quanto $f$ è continua.
> Dal momento che $X$ è compatto, esiste una collezione finita $\{f^{-1}(A_{1}),\dots,f^{-1}(A_{n})\}$ che ricopre $X$. Ma allora $\{ A_{1},\dots,A_{n} \}$ è ricoprimento finito di $f(X)$, per cui è compatto. 