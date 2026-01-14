---
tags:
  - Topologia
  - Teorema
  - Aperti
  - Intorni
icon: lucide-scroll-text
---

> [!teorema] Teorema
> Sia $(X,\tau)$ uno [[Topologia|spazio topologico]]. Sia $A\subseteq X$, allora:
> $A$ è aperto di $\tau\iff A$ è [[Intorni|intorno]] di ogni suo punto.

> [!dim]
> 1. $\implies$
>    Supponiamo $A\in \tau$ e $x\in A$. Allora $\exists A\in \tau \mid x\in A\subseteq A$
> 2. $\impliedby$
>    Se $A$ è intorno di ogni suo punto, allora $\forall x\in A,\exists U_{x}\in \tau\mid x\in U_{x}\subseteq A$
>    Osservo che $\displaystyle A=\bigcup_{x\in A} U_{x}$ è aperto in quanto unione di aperti.