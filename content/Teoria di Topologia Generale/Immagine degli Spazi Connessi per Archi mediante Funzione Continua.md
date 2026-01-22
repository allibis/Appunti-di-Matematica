---
tags: [Topologia, Proposizione, Connessi, Archi]
aliases: []
icon: lucide-circle-check-big
---

> [!proposizione]
> Sia $f:X\to Y$ una [[Teoria di Topologia Generale/Mappa Continua|mappa continua]] e $X$ [[Teoria di Topologia Generale/Connessione per Archi|connesso per archi]].
> Allora $f(X)\subseteq Y$ è connesso per archi
> ![[Diagrams/Spazi connessi per archi funzioni continue.excalidraw.svg]]

> [!dim] Dimostrazione
> Siano $x_{0},x_{1}\in X$. Poiché $X$ è connesso per archi, allora $\exists\gamma:[0,1]\to X$ tale che $\gamma(0)=x_{0}$ e $\gamma(1)=x_{1}$ continua. 
> Considero $f\circ\gamma:[0,1]\to Y$. Tale funzione è continua perché composta da funzioni continue. 
> Dunque $f\circ\gamma$ è un cammino in $Y$ che connette $f(x_{0})=f(\gamma(0))$ a $f(x_{1})=f(\gamma(1))$. 
> Pertanto $Y$ è connesso per cammini. 

