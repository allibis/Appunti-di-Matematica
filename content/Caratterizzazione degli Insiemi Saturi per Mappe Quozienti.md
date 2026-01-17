---
tags: [Topologia, Proposizione, Mappe, Quoziente]
aliases: []
icon: lucide-circle-check-big
---

> [!prop] Mappe quozienti
> Se $\pi:X\to {}^{X}\!/_{\sim}$ tale che $x\longmapsto\pi(x)=[x]_{\sim}$
> Se $V\subseteq X$ vale la seguente equivalenza:
> 1. $V$ è $\mathcal{R}-$[[Insieme Saturo rispetto a una Relazione|saturo]] 
> 2. $V=\pi ^{-1}(\pi(V))$

> [!dim] $1. \implies 2.$
> Supponiamo che $V$ è $\mathcal{R}-$saturo.
> Osserviamo che l'inclusione $V\subseteq\pi ^{-1}(\pi(V))$ è sempre verificata.
> Infatti se $v\in V\implies \pi(v)\in \pi(V)\implies v\in \pi ^{-1}(\pi(V))$.
> Sia $x\in\pi ^{-1}(\pi(V))\implies \pi(x)\in \pi(V)\implies[x]\in \pi(V)$
> Poiché $V$ è $\mathcal{R}-$saturo, allora $x\in V\implies \pi ^{-1}(\pi(V))\subseteq V$

> [!dim] $2. \implies 1.$
> Supponiamo viceversa $V=\pi ^{-1}(\pi(V))$. 
> Sia $x\in V$ e $y\in X$ tali che $x\sim y$, dimostro che $y\in V$.
> $V=\pi ^{-1}(\pi(V))=\bigcup \limits_{b\in \pi(V)}[b]$
> In altre parole, se $x\sim y\implies \pi(x)=\pi(y)$
> Se $x\in V\implies \pi (x)\in \pi(V)\,\wedge\,\pi(x)=\pi(y)\implies \pi(y)\in \pi(V)\implies y\in V$