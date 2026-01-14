---
tags:
  - Topologia
  - Teorema
  - Punti-di-Aderenza
  - Chiusura
icon: lucide-scroll-text
---

> [!teorema] 
> Sia $(X,\tau)$ uno [[Topologia|spazio topologico]] e sia $A\subseteq X$. Allora  valgono:
> 1. $x$ è [[Punti di Aderenza|punto di aderenza]] per $A\iff x\in \bar{A}$
> 2. Se $\beta$ è base per $\tau$ allora $x$ è p. di aderenza per $A\iff \forall B\in \beta \mid x\in B:B\cap A\not=\varnothing$.

^a16052

> [!dim]
> 1. Supponiamo che $x$ non è di aderenza per $A$. Allora $\exists W\in \tau \mid x\in W \wedge W\cap A=\varnothing$. 
>    Allora $W^C$ è chiuso e contiene $A$, pertanto $W^C\supseteq \bar{A}$ per la [[Chiusura di un insieme#^prop-chiusura|3. proprietà dei chiusi]]. Dal momento che $x\not\in W^C\implies x\not\in \bar{A}$.
>    Viceversa se $x\not\in \bar{A}$, allora $\exists C$ chiuso che contiene $A\mid x\not\in C$ (posso prendere anche $C=\bar{A}$). Allora $U:= X\setminus C$ è aperto e contiene $x$, ma $U\cap A=\varnothing$. Dunque $x$ non è di aderenza per $A$.
>    
> 2. Se $x$ è p. di aderenza per $A$ allora  $\forall U$ intorno di $x\mid U:A\cap U\not=\varnothing$. Ciò vale anche per gli elementi della base che contengono $x$.
>    Viceversa supponiamo $\forall B\in \beta \mid x\in B:B\cap A\not=\varnothing$. Se $U$ è intorno di $x$, allora $\exists W\in \tau \mid x\in W\subseteq U$. Per la definizione di base $\exists \{  B_{i}\}\subseteq \beta \mid W=\bigcup_{i\in I}B_{i}$. Quindi $\exists i\in I\mid x\in B_{i}\subseteq W\subseteq A$ e $B_{i}\cap A\not=\varnothing\implies U\cap A\not=\varnothing$.