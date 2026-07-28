---
tags: [Topologia, Proposizione, Connessi, Archi]
aliases: []
icon: lucide-circle-check-big
---

> [!prop] Proposizione
> La relazione di equivalenza $\sim$ tale che $x\sim y$ se $\exists$ un cammino tra di essi è una relazione di equivalenza.

> [!dim] Riflessiva
> Sia $x\in X$. La funzione $\gamma:[0,1]\to X\, \vert \,t\longmapsto x$ è continua e $f(0)=f(1)=x$. 

> [!dim] Simmetrica
> Se $x\sim y$ allora $\exists\gamma$ cammino da $x$ a $y$. La funzione $\gamma':[0,1]\to X$ tale che $t\longmapsto\gamma'(t)=\gamma(1-t)$ è una cammino che connette $x$ a $y$

> [!dim] Transitiva
> Supponiamo $x\sim y$ e $y\sim z$, ossia esistono due cammini $\gamma$ e $\gamma'$ 
> Definisco la mappa $\gamma'':[0,2]\to X$ tale che:
> $$\gamma''(t)=\begin{cases} \gamma(t) &t\in[0,1] \\ \gamma'(t-1) &t\in[1,2] \end{cases}$$
> Tale mappa è ben definita perché $\gamma(1)=\gamma'(0)$ ed è continua per il [[Teoria di Topologia Generale/Lemma dell'Incollamento|lemma dell'incollamento]] e $\gamma''(0)=x,\gamma''(2)=z$ pertanto $x\sim z$. 