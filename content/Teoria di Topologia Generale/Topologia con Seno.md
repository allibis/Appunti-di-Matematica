---
tags: [Topologia, Definizione]

icon: lucide-book-open
---


>[!def] Definizione
>$\tau=\{U\subseteq \tau | \forall x\in U: \sin x>0 \}\cup\{\mathbb{R}\}$ 
>Dove $\tau_{0}$ è la topologia indotta dalla distanza euclidea $d(x,y)=|x-y|$.
> Tale insieme è [[Teoria di Topologia Generale/Topologia|topologia]] su $\mathbb{R}$
^def-topologia-seno

> [!dim]
> 1. $\mathbb{R}\in \tau_{0}, \varnothing \in \tau_{0}$
> 2. Sia $\{U_{i}\}_{i\in I}$. Risulta che:
> 	a. Se tutti gli $U_{i}$ sono vuoti allora $\forall x\in \bigcup_{i\in I}U_{i}: \sin x>0\implies\bigcup_{i\in I}U_{i}\in \tau_{0}$
> 	b. Se  $\exists i\in I |U_{i}=\mathbb{R}$ allora vale la 2
> 	c. Se $\forall i\in I:U_{i}\not=\mathbb{R}$ e $\forall x \in U_{i} \sin x>0$ allora vale la 2 poiché $U=\bigcup U_{i}\in \tau_{0}$ e $\forall x \in U \sin x>0\implies U\in \tau$
> 3. Siano $A,B\in \tau_{0}$.
> 	a. Se $A=\mathbb{R}\implies A\cap B=B\implies A\cap B\in \tau$. Analogamente vale se $B=\mathbb{R}$.
> 	b. Se $A,B\not=\mathbb{R}$, allora $\forall x \in A\cap B: \sin x>0 \wedge A\cap B\in \tau_{0}\implies A\cap B\in \tau$
^dim-topologia-seno