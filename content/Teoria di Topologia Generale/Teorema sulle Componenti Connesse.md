---
tags: [Topologia, Teorema, Componenti-Connesse, Connessi]
aliases: []
icon: lucide-scroll-text
---

> [!Teorema]
> Le [[Teoria di Topologia Generale/Componenti Connesse|componenti connesse]] di $X$ sono sottoinsiemi [[Teoria di Topologia Generale/Spazio Connesso|connessi]]  di $X$, disgiunti tra loro, la cui unione è $X$ e tali che ogni sottoinsieme connesso di $X$ ne interseca esattamente una di esse.

> [!dim]
> Il fatto che le componenti connesse siano disgiunte e che la loro unione è $X$ è dato dal fatto che formano una partizione di quest'ultimo.
> Supponiamo per assurdo che l'ultima affermazione sia falsa, ossia che $\exists C\subseteq X$ connesso non vuoto tale che interseca due componenti connesse $C_{1},C_{2}$ in punti $c_{1}\in C_{1}$ e $c_{2}\in C_{2}$. 
> Poiché $C$ è connesso e contiene $x_{1},x_{2}$ allora $x_{1}\sim x_{2}$, pertanto $x_{1},x_{2}$ fanno parte della stessa componente connessa, il che è assurdo.
> Dimostriamo che ogni componente connessa è connessa. 
> Sia $x_{0}\in C$. Allora $\forall x\in C: \exists A_{x}\subseteq X$ connesso che contiene $x_{0},x\implies x\in A_{x}$ e $A_{x}\subseteq C$ (appena dimostrato). 
> Dunque $C=\bigcup \limits_{x\in C}A_{x}$ [[Teoria di Topologia Generale/Teorema sull'Unione di Spazi Connessi|unione di connessi aventi un punto in comune]]. 
> Pertanto $C$ è connesso. 