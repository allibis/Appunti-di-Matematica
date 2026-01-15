---
tags:
  - Topologia
  - Teorema
  - Successione-di-funzioni
  - Convergenza-Uniforme
  - Continuità
aliases: []
icon: lucide-scroll-text
---

> [!teorema] Teorema del Limite Uniforme
> Sia $f_{n}$ una successione di funzioni da $X$ [[Topologia|spazio topologico]] a $Y$ [[Spazio metrico|spazio metrico]]. 
> Se $f_{n}$ [[Convergenza Uniforme|converge uniformemente]] a $f$, allora $f$ è [[Mappa Continua|continua]] 

> [!dim]
> Sia $V\subseteq Y$, aperto, vogliamo dimostrare che $f^{-1}(V)$ è aperto in $X$.
> Sia $x_{0}\in f^{-1}(V)$, cerco un intorno $U\subseteq X$ di $x_{0}$ tale che $f(U)\subseteq V\implies U\subseteq f^{-1}(V)$.
> > [!obs]- L'idea
> > Avendo scelto un $x_{0}$ generico, dimostrerei che per ogni $x\in f^{-1}(V)$ quest'ultimo è intorno di ogni suo punto, e per la [[Caratterizzazione degli aperti]] $f^{-1}(V)$ è aperto
> 
> Sia $y_{0}=f(x_{0})$ e sia $\varepsilon>0$ tale che $B(y_{0},\varepsilon)\subseteq V$
> Per la [[Convergenza Uniforme|uniforme convergenza]] di $f_{n}$ si ha che $\displaystyle \exists N\in \mathbb{N}\, \vert \,\forall n>N: d(f_{N}(x),f(x))<\frac{\varepsilon}{3}\,\,\forall x\in X$.
> Poiché $f_{N}$ è continua (per ipotesi), scelgo $U$ intorno di $x_{0}$ tale che $\displaystyle f_{N}(U)\subseteq B\left( f_{N}(x_{0}),\frac{\varepsilon}{3} \right)$
> Pertanto si ha che se $f(x)\in f(U)$
>  $$\displaystyle d(f(x),f(x_{0}))\leq \underbrace{ d(f(x),f_{N}(x)) }_{ \text{Unif. Convergenza} }+\underbrace{ d(f_{N}(x),f_{N}(x_{0})) }_{ \text{ Continuità di } f_{N}}+\underbrace{ d(f_{N}(x_{0}),f(x_{0}) }_{ \text{Unif. Convergenza}   }) <\frac{\varepsilon}{3}+\frac{\varepsilon}{3}+\frac{\varepsilon}{3}=\varepsilon$$
>  Quindi $d(f(x),f(x_{0}))<\varepsilon\implies f(x)\in B(f(x_{0}),\varepsilon)$, da cui $f(U)\subseteq V\implies U\subseteq f^{-1}(V)$
>  Per l'arbitrarietà di $x_{0}$ segue la tesi.