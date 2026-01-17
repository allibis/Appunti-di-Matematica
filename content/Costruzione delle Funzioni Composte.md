---
tags: [Topologia, Osservazione, Mappe, Quoziente]
aliases: []
icon: lucide-lighbulb
---

> [!prop] Osservazione 
> Considero $f:X\to Y$ [[Mappa Quoziente|mappa quoziente]] e sia $\alpha:X\to Z$. 
> Quando $\exists \,\overline{\alpha}:Y\to Z$ tale che $\overline{\alpha}\circ f=\alpha$?
> Potrei costruire tale funzione tale che $\forall y\in Y:\overline{\alpha}(y)=\alpha (x)$ con $x\in X\, \vert \,f(x)=y$. 
> Tuttavia questo non è ben definito, perché se c'è un $x'\, \vert \,f(x')=y$ non è detto che $\overline{\alpha}(y)=\alpha(x')$
> É necessario dunque che $\forall x,x'\in X:f(x)=f(x')=y\overset{(1)}{\implies} \alpha(x)=\alpha(x')$
> Dunque definisco $\overline{\alpha}$ in modo tale che:
> $\forall y\in Y$, sia $x\in X\, \vert \,f(x)=y$ allora $\overline{\alpha}(y):=\alpha(x)$
> Se $f(x')=f(x)=y$, per la $(1)$ vale $\alpha(x)=\alpha(x')$
> In tal caso $\exists!\,\overline{\alpha}:Y\to Z$ tale che $\overline{\alpha}\circ f=\alpha$
> ![[Diagrams/Costruzione delle Funzioni Composte.excalidraw.svg]]
> Inoltre se $\alpha$ è continua, allora anche $\overline{\alpha}$ è continua.