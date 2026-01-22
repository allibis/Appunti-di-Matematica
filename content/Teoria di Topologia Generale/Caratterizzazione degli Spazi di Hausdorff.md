---
tags: [Topologia, Teorema, Hausdorff]
aliases: []
icon: lucide-scroll-text
---

> [!teo] Caratterizzazione degli Spazi di Hausdorff
> Sia $X$ [[Teoria di Topologia Generale/Topologia|spazio topologico]]. Allora vale la seguente equivalenza:
> 1. $X$ è [$T_2$](Teoria%20di%20Topologia%20Generale/Hausdorff.md)
> 2. $\Delta=\{ (x,x)\in X \times X \}$ è [[Teoria di Topologia Generale/Chiuso|chiuso]] in $X \times X$

> [!dim] $1. \implies 2.$
> Suppongo che $X$ sia di Hausdorff, dimostro che $\Delta$ è chiuso, cioè che $\Delta^C=\complement_{X \times X}\Delta$ è aperto. 
> Sia $(p,q)\in\Delta^C\implies p\not=q$. Poiché $X$ è $T_{2}$, allora $\exists U_{p},U_{q}\subseteq X$ intorni aperti di $p,q$ tali che $U_{p}\cap U_{q}=\varnothing$.
> Osservo che $U_{p}\times U_{q}\in \tau_{\text{prod}}$ in quanto prodotto cartesiano di due aperti.
> Risulta che $\forall(x,y)\in U_{p}\times U_{q}:x\not=y$, dunque $(U_{p}\times U_{q})\cap\Delta=\varnothing\implies U_{p}\times U_{q}\subseteq \Delta^C$ 
> Per l'arbitrarietà di $p$ e $q$, risulta che $\Delta^C$ è aperto, dunque $\Delta$ è chiuso. 

> [!dim] $2. \implies 1.$
> Supponiamo viceversa che $\Delta$ sia chiuso, ossia che $\Delta^C$ è aperto. 
> Siano $p,q\in X\, \vert \,p\not=q\implies(p,q)\in\Delta^C$. 
> Allora $\exists A\subseteq\Delta^C$ aperto tale che $(p,q)\in A$, ossia che $\exists M,N$ aperti per $X$ che contengono rispettivamente $p,q.$
> Quindi $M$ è intorno di $p$ e $N$ è intorno di $q$ e risulta che $M\cap N=\varnothing$, poiché $M \times N\subseteq \Delta^C$. 
> Ho trovato due intorni aperti disgiunti di $p$ e $q$, dunque $X$ è di Hausdorff