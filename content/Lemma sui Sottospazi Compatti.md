---
tags: [Topologia, Proposizione, Sottospazi, Compatti]
aliases: []
icon: lucide-circle-check-big
---

> [!prop] Proposizione
> Sia $Y\subseteq X$  [[Topologia di Sottospazio|sottospazio]], allora:
> $Y$ è [[Compatto|compatto]] $\iff$ $\forall$ ricoprimento di $Y$ mediante insiemi aperti di $X$ esiste un sottoricoprimento finito che ricopre $Y$.

> [!dim] $\implies$
> Supponiamo $Y$ compatto$\implies \mathcal{A}=\{ A_{i} \}$ ricoprimento di $Y\implies$
> $\implies \mathcal{A}=\{ A'_{i}\cap Y \, \vert \,A'_{i} \text{ aperto di } X\}$.
> Poiché $Y$ è compatto, esiste un sottoricoprimento $\{ A_{1},\dots,A_{k} \}=\{ A_{1}'\cap Y,\dots ,A_{k}'\cap Y \}$ finito di $Y$ e $A_{1}',\dots ,A_{k}'\subseteq X$.

> [!dim] $\impliedby$
> É ovvio per definizione