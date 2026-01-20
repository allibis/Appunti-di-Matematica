---
tags:
  - Topologia
  - Definizione
  - Intorni
aliases:
  - intorno
icon: lucide-book-open
---


> [!def] Intorno di un punto
> Sia $(X,\tau)$ uno [[Topologia|spazio topologico]] e $x\in X$. Si dice che $V\subseteq X$ è **intorno** di $x$ se $\exists A\in \tau\mid x\in A\subseteq V$.
^def-intorno

> [!ex] Esempi di intorni in $(\mathbb{R},\mathcal{E})$
> 1. Dato $x\in \mathbb{R}$, un suo intorno è $B_{r}(x)=\{y\in \mathbb{R}\mid d(x,y)<r\}$
> 2. Sono intorni di 0: $[-1,1], (-1,+\infty),\mathbb{R}$
> 3. NON sono intorni di $0$: $[-2,-1], \{0\},\varnothing$
^esempi-intorno-R

> [!ex] Esempi di intorni in $\mathbb{R}_{\ell}$
> 1. Sono intorni di 0: $[0,1)$ (perché è un aperto di $\mathbb{R}_{\ell}$), $[-1,1]$
> 2. Non sono intorni di 0: $(-1,0], [-2,-1], (0,+\infty),\{0\}$

> [!ex] Nella topologia discreta $(X,\mathcal{P}(X))$
> Tutti i sottoinsiemi $x\in A\subseteq X$ sono intorni di $x$.