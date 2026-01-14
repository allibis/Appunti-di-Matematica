---
tags: [Topologia, Definizione, Omeomorfismi]
aliases: [lemma dell'incollamento]
icon: lucide-circle-check-big
---

> [!proposizione]
> Sia $X=A\cup B$, dove $A,B$ sono [[Chiuso|chiusi]] in $X$
> Siano $f:A\to Y$ e $g:B\to Y$ funzioni continue tali che $\forall x\in A\cap B:f(x)=g(x)$.
> Allora $\exists h:X\to Y$ continua definita ponendo:
> $h(x)=\begin{cases}
> f(x) & \text{se } x\in A \\
> g(x) & \text{se } x\in B
> \end{cases}$ 


> [!dim]
> $f$ continua $\implies f^{-1}$ aperta $\implies f^{-1}$ chiusa
> Osservo che se $C\subseteq Y$ è chiuso, $h^{-1}(C)=f^{-1}(C)\cup g^{-1}(C)$
> - $f^{-1}(C)\subseteq A\subseteq X$ è chiuso
> - $g^{-1}(C)\subseteq B\subseteq X$ è chiuso
> Quindi $h^{-1}(C)$ è chiuso, e per l'arbitrarietà di $C$ risulta che $h$ è continua. 
> Inoltre $h$ è ben definita perché se $x\in A\cap B$ allora $f(x)=g(x)$

