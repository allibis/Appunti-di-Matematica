---
tags: [Topologia, Teorema, Mappe, Quoziente]
aliases: []
icon: lucide-scroll-text
---

> [!teo] Teorema
> Sia $(X,\tau)$ [[Topologia|spazio topologico]] e $Y$ insieme, sia $p:X\to Y$ suriettiva.
> Allora $\exists!\tau'$ topologia tale che $p$ è mappa quoziente.

> [!dim] Dimostrazione
> Definisco $\tau'=\{ A\subseteq Y\, \vert \,p^{-1}(A)\in \tau\}$
> Devo dimostrare che $\tau'$ è topologia. 
> 1. $p$ è suriettiva $\implies p(X)=Y\implies X\subseteq p ^{-1}(Y)\implies p ^{-1}(Y)\in \tau$
>    $p ^{-1}(\varnothing)=\varnothing\in \tau$
> 2. Sia $\{ A_{i} \}_{i\in I}$ una famiglia di insiemi di $\tau'$, dunque $\forall i\in I: p^{-1}(A_{i})\in \tau$. 
>    Pertanto $\bigcup \limits_{i\in I}p^{-1}(A_{i})=p ^{-1}\left(\bigcup \limits_{i\in I}A_{i}\right)\in \tau$. Pertanto $\bigcup \limits_{i\in I}A_{i}\in \tau'$
> 3. Siano $A_{1},A_{2}\in \tau'$, da cui $p ^{-1}(A_{1}),p^{-1}(A_{2})\in \tau\implies p^{-1}(A_{1})\cap p^{-1}(A_{2})\in \tau\implies p ^{-1}(A_{1}\cap A_{2})\in \tau$.
>    Quindi $A_{1}\cap A_{2}\in \tau'$