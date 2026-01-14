---
tags: [Topologia, Definizioni, Continuità]
aliases: []
icon: lucide-circle-check-big
---

> [!prop] Regole per la costruzione delle funzioni continue
> Siano $(X,\tau),(Y,\tau')$ due [[Topologia|spazi topologici]]:
> 1. Se $f:X\to Y$ è [[Continua|continua]], allora $f$ è continua.
> 2. Se $B\subseteq X$, allora $j:(B,\tau_{B})\to X$ tale che $\forall b\in B:j(b)=b$ è continua
> 3. Sia $(Z,\tau'')$ è spazio topologico, e $f:X\to Y,g:Y\to Z$ sono funzioni continue, allora $g\circ f$ è continua

> [!dim]
> 1. Sia $y_{0}\in Y$ tale che $\forall x\in X: f(x)=y_{0}$ 
>    Sia $A\subseteq Y: f^{-1}(A)=
>    \begin{cases}
>    \varnothing & \text{se } y_{0}\not\in A \\
>    A & \text{se } y_0\in A
>    \end{cases}$
>    In entrambi i casi, la controimmagine di $A$ è un aperto di $X$, quindi $f$ è continua. 
> 2. 