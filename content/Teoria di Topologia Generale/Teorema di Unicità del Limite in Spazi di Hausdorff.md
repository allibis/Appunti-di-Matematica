---
tags: [Topologia, Teorema, Hausdorff, Successioni]
aliases: []
icon: lucide-scroll-text
---

> [!teo] Teorema di Unicità del Limite
> Se $(X,\tau)$ [[Teoria di Topologia Generale/Topologia|spazio topologico]] è di [[Teoria di Topologia Generale/Hausdorff|Hausdorff]], allora ogni successione $(x_{n})_{n\in \mathbb{N}}$ converge al più a un punto. 

> [!dim] Dimostrazione
> Supponiamo che $x_{n}$ sia una successione convergente a $x\in X$ e a $y\in X$ con $x\not=y$. 
> Allora poiché $X$ è di Hausdorff, allora $\exists U_{x},U_{y}$ intorni aperti rispettivamente di $x$ e $y$ tali che $U_{x}\cap U_{y}=\varnothing$.
> Per definizione di limite di successione, $\exists N\in \mathbb{N}\, \vert \,\forall n>N:x_{n}\in U_{x}$. Ma allora $x_{n}$ non può convergere a $y\in U_{y}$, da cui l'assurdo. 