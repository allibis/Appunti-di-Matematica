---
tags: [Topologia, Teoremi, Chiusi, Aperti]
icon: lucide-scroll-text
---

> [!teorema] I numeri primi sono infiniti

> [!dim] Dim
> Supponiamo per assurdo che i numeri primi siano finiti $\{p_{1}\dots p_{s}\}$
> Definisco $\displaystyle A=\bigcup_{p \text{ primo}}S(0,p)$ e $\tau=\{S(x,a)=\{x+ka\mid k\in \mathbb{Z}\}\}\subseteq \mathcal{P}(\mathbb{Z})$
> ![[S(0,p).excalidraw.svg|200]]
> Allora $\mathbb{Z}\setminus A=A^C=\{-1,1\}$ Questo perché solo $-1,1$ non sono primi (per definizione) e non sono multipli di numeri primi. 
> Osservo inoltre che $\displaystyle S(x,a)^C=X\setminus\underbrace{ S(x,a) }_{ \text{aperto} }=\bigcup^{a-1}_{i=1}S(x+i,a)$
> Tale insieme è chiuso, in quanto complementare di aperto, e aperto poiché unione di aperti. In altre parole, tutti gli aperti sono chiusi.
> Quindi $\displaystyle A=\bigcup_{p \text{ primo}}S(0,p)$ è chiuso per unione finita di chiusi e $A^C=\{-1,1\}$ è aperto. Ma questa è una contraddizione, in quanto gli aperti sono infiniti in $\tau$.