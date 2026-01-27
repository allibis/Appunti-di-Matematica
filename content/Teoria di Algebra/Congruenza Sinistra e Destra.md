---
tags: [Algebra, Definizione, Classi-Laterali, Gruppi, Sottogruppi]
aliases: []
icon: lucide-book-open
---

> [!def] Congruenza Sinistra e Destra
> Sia $G$ un [[Teoria di Algebra/Gruppo|gruppo]] e $H<G$ un [[Teoria di Algebra/Sottogruppo|sottogruppo]]. 
> Definisco le relazioni binarie $\rho_{d},\rho_{s}$ tali che $\forall x,y\in G$:
> $x\,\rho_{s}\,y\overset{\,\,\,def}{\iff}y^{-1}\cdot x\in H\qquad$ ossia $x\cdot H=y\cdot H\qquad y^{-1}\cdot x\cdot H=H$
> $x\,\rho_{d}\,y\overset{\,\,\,def}{\iff}x\cdot y^{-1}\in H\qquad$ ossia  $H\cdot x=H\cdot y\qquad x\cdot y^{-1}\cdot H=H$
> Tali relazioni prendono il nome di **congruenza destra e sinistra** definite da $H$ in $G$

> [!proposizione] 
> Risulta che la congruenza è una relazione di equivalenza

> [!dim]
> - Riflessiva:
>   $\forall x\in G:x \; \rho_{s}\; x \iff x ^{-1}x=1\in H;$
> - Simmetrica:
>   $x \; \rho_{s}\; y\implies y ^{-1}x\in H \;\overset{H^{-1}\subseteq H}{\Longrightarrow}\;(y ^{-1}x)^{-1}=x ^{-1}y\in H\implies y \; \rho_{s}\; x$
> - Transitiva:
>   Supponiamo $x \; \rho_{s}\; y \,\wedge\,y \; \rho_{s}\; z$.
>   $x \; \rho_{s}\; y\implies y^{-1}x=h\in H$
>   $y \; \rho_{s}\; z\implies z^{-1}y=g\in H$
>   $z^{-1}x=z^{-1}(yy^{-1})x=(z^{-1}y)(y^{-1}x)=gh\in H$
>   
>  Risulta inoltre che 
>  $y\in[x]_{s}\iff y\;\rho_{s}\;x\iff x^{-1}y=h\in H\iff y=xh\iff y\in xH$