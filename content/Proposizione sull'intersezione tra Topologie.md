---
Tags: [Topologia, Proposizione]
icon: lucide-circle-check-big
---

> [!prop] L'intersezione tra Topologie su $X$ è Topologia
> Sia $\{\tau_{i}\}$ una famiglia di [[Topologia|topologie]] su $X$.
> Allora $\bigcap_{i\in I} \tau_{i}$ è topologia su $X$ 

> [!dim]
> 1. $\mathbb{R},\varnothing\in\bigcap \tau_{i}$ (ovvio)
> 2. Sia $\{U_j\}_{j\in J}$ una famiglia di [[Aperto|aperti]] di $\tau_{i}$ $\forall i\in I$.
>    Allora $\displaystyle \bigcup_{j\in J} U_{J}$ è aperto in $\tau_{i}, \forall i\in I$. Quindi $\bigcup_j U_{j}\in\bigcap_i\tau_{i}$
> 3. Siano $A,B\in\bigcap_i\tau_{i}$. Allora $A\cap B\in \tau_{i}$ $\forall i$. 
>    Pertanto $A\cap B\in\bigcap_i\tau_{i}$