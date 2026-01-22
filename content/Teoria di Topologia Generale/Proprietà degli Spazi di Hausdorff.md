---
tags: [Topologia, Proprietà]
aliases: []
icon: lucide-pencil
---

> [!proprietà] Proprietà
> 1. Il prodotto tra due spazi di [[Teoria di Topologia Generale/Hausdorff]] è $T_2$
> 2. Ogni sottospazio di uno spazio $T_2$ è $T_2$

> [!dim] Dimostrazione della proprietà 1.
> Siano $X,Y$ spazi topologici $T_{2}$. Siano $(x_{1},y_{1}),(x_{2},y_{2})\in X \times Y$ tali che $(x_{1},y_{1})\not=(x_{2},y_{2})$.
> Senza perdere di generalità, si può assumere che $x_{1}\not=x_{2}$.
> Poiché $X$ è di Hausdorff, allora $\exists U_{1},U_{2}\subseteq X$ intorni aperti rispettivamente di $x_{1}$ e $x_{2}$ tali che $U_{1}\cap U_{2}=\varnothing$.
> Scelgo $U_{1}\times Y,U_{2}\times Y\in \tau_{\text{prod}}$ intorni di $(x_{1},y_{1}),(x_{2},y_{2})$.
> Risulta che $(U_{1}\times Y)\cap(U_{2}\times Y)=\varnothing$, pertanto $X\times Y$ è di Haussdorf. 