---
tags:
  - Topologia
  - Proposizione
  - Insiemi-Densi
icon: lucide-circle-check-big
---

> [!prop] Caratterizzazione degli insiemi densi
> Sia $(X,\tau)$ [[Teoria di Topologia Generale/Topologia|spazio topologico]] e $A\subseteq X$. 
> $\overline{A}=X\iff \forall U\in \tau \mid U\not=\varnothing: U\cap A\not=\varnothing$
^caratt-insiemi-densi

> [!dim]
> $\implies$:
> Supponiamo $\overline{A}=X$ e supponiamo per assurdo che $\exists U\in \tau,U\not=\varnothing \mid U\cap A=\varnothing$.
> Allora $F:=\complement_{X}U$ è chiuso in quanto complementare di [[Teoria di Topologia Generale/Aperto|aperto]] e $U\not=\varnothing\implies F\subsetneq X$. Quindi ho trovato un [[Teoria di Topologia Generale/Chiuso|chiuso]] che contiene $A$ ed è contenuto in $X$. Ma ciò è assurdo perché $\overline{A}=X$. 
> $\impliedby$ :
> Sia $p\in X$. Allora per ipotesi $U\in \tau \mid p\in U: U\cap A\not=\varnothing$. Dunque $p$ è un [[Teoria di Topologia Generale/Punti di Aderenza|punto di aderenza]] per $A$ e dunque $p\in \overline{A}$. Concludo che $\overline{A}=X$.
^dim-caratt-insiemi-densi