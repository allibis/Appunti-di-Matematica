---
tags: [Topologia, Definizione, Metriche]
icon: lucide-book-open
---

> [!def] Distanza di un punto da un insieme
> Siano $(X,d)$ uno [[Spazio metrico|spazio metrico]] e $A\subseteq X$
> Si definisce distanza di $x$ da $A$: $\displaystyle\delta(x,A)=\min_{y\in A}\{ d(x,y) \}$
^def-dist-punto-insieme

> [!oss] Osservazione
> Non è detto che $\delta(x,A)=0\iff x\in A$
> Ad esempio, se considero $A=\left( 0,1 \right)\subseteq\mathbb{R}$ e $x=0$, $\delta(x,A)=0$, ma $x\not\in A$