---
tags: [Topologia, Teorema, Successione-di-funzioni, Convergenza-Uniforme]
aliases: []
icon: lucide-scroll-text
---

> [!teorema] Teorema di Weierstrass M-Test
> Sia $X$ un insieme e sia $(f_{i})_{i\in \mathbb{N}}$ una successione di funzioni $f_{i}:X\to \mathbb{R}$ (o $\mathbb{C}$).
> Supponiamo che esista una successione di numeri reali non negativi $(M_{i})$ tale che:
> 1. $\forall x\in X,\forall i\in \mathbb{N}:|f_{i}(x)|<M_{i}$
> 2. La serie $\sum_\limits{i=1}^{\infty}M_{i}$ converge
> 
> Allora $\sum_\limits{i=1}^{\infty}f_{i}$ [[Teoria di Topologia Generale/Convergenza Uniforme|converge uniformemente]] su $X$ a una funzione $s$.

> [!dim] Dimostrazione 
> Sia $s_{n}(x)=\sum_\limits{i=1}^{n}M_{i}$ la successione delle somme parziali.
> Voglio provare che $s_{n}(x)\rightrightarrows s$
> Poiché $(M_{i})$ è convergente, allora $\forall\varepsilon>0\,\,\exists N\in \mathbb{N}\, \vert \,\forall i>N:\sum \limits_{i=n+1}^{\infty}M_{i}<\varepsilon$
> Quindi, per un $m\in \mathbb{N}$ tale che $m\geq n\leq N$ e $\forall x\in X$ si avrà:
> $$|s_{m}(x)-s_{n}(x)|\leq \left| \sum \limits_{i=n+1}^{m}f_{i} \right|\leq$$
> $$\leq\sum \limits_{i=n+1}^{m}\left| f_{i} \right| \overset{\text{Hp}}{<}\sum \limits_{i=n+1}^{m}M_{i} \overset{M_{i}>0}{<} \sum \limits_{i=n+1}^{\infty}M_{i}<\varepsilon$$
> Pertanto $s_{n}$ converge uniformemente a $s$

> [!es] Esempi di applicazione del Teorema
> $f_{n}:[0,1]\to \mathbb{R}$
> $\displaystyle f(x)=\sum_{k=1}^\infty \frac{1}{x^2+k^2}$
> Osservo che $\displaystyle \forall k\in \mathbb{\mathbb{Z}}_{+}:\frac{1}{x^2+k^2}\leq \frac{1}{k^2}:=M_{k}$
> Poiché $M_{k}>0$ e la serie $\displaystyle \forall k\in \mathbb{\mathbb{Z}}_{+}:\frac{1}{k^2}$ converge, per il T. di Weierstrass M-test si ha che $f$ converge uniformemente in $\mathbb{R}$ 