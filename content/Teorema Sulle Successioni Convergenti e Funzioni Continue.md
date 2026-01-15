---
tags: [Topologia, Teorema, Continuità, Successioni]
aliases: []
icon: lucide-scroll-text
---

> [!teorema]
> Sia $f:X\to Y$ e $X$ è [[Topologia|spazio topologico]] una mappa [[Mappa Continua|continua]], allora $\forall x_{n}\to n$ successione convergente, allora $f(x_{n})\to f(x)$. 
> Il viceversa vale se $X$ è metrizzabile.

> [!dim]
> Suppongo che $f$ sia continua e sia $x_{n}\to x$.
> Sia $V$ tale che $f(x)\in V$. Allora $f^{-1}(V)$ è intorno di $x$
> Pertanto $\exists N\in \mathbb{N}$ tale che $x_{n}\in f^{-1}(V)$, e quindi $\forall n\geq N$ risulta che $x_{n}\in f^{-1}(V)\implies f(x_{n})\in V$
> (bisogna ricordarsi che $x_{N}\to x \iff \forall V$ intorno di $x: \exists N\in \mathbb{N}\, \vert \,n\geq N:x_{n}\in V$).
> Viceversa supponiamo $\forall x_{n}\to n$ successione convergente, allora $f(x_{n})\to f(x)$ e $X$ è [[Spazio Metrizzabile|metrizzabile]].
> Dobbiamo provare che se $A\subseteq X$ allora $f(\overline{A})\subseteq \overline{f(A)}$ 
> per il [[Lemma della Successione]] si ha che se $x\in \overline{A}$ allora $\exists x_{n}\to x$. Ma per ipotesi $f(x_{n})\to f(x)\in \overline{A}$. Pertanto $f(x)\in \overline{f(A)})$
> Quindi per la [[Caratterizzazione delle Mappe Continue]] si ha che $f$ è continua. 