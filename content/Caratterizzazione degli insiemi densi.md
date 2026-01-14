---
tags: [Topologia, Proposizione, Insieme denso]
icon: lucide-circle-check-big
---

> [!prop] Caratterizzazione degli insiemi densi
> Sia $(X,\tau)$ [[Topologia|spazio topologico]] e $A\subseteq X$. 
> $\bar{A}=X\iff \forall U\in \tau \mid U\not=\varnothing: U\cap A\not=\varnothing$
^caratt-insiemi-densi

> [!dim]
> $\implies$:
> Supponiamo $\bar{A}=X$ e supponiamo per assurdo che $\exists U\in \tau,U\not=\varnothing \mid U\cap A=\varnothing$.
> Allora $F:=\complement_{X}U$ è chiuso in quanto complementare di [[Aperto|aperto]] e $U\not=\varnothing\implies F\subsetneq X$. Quindi ho trovato un [[Chiuso|chiuso]] che contiene $A$ ed è contenuto in $X$. Ma ciò è assurdo perché $\bar{A}=X$. 
> $\impliedby$ :
> Sia $p\in X$. Allora per ipotesi $U\in \tau \mid p\in U: U\cap A\not=\varnothing$. Dunque $p$ è un [[Punti di Aderenza|punto di aderenza]] per $A$ e dunque $p\in \bar{A}$. Concludo che $\bar{A}=X$.
^dim-caratt-insiemi-densi