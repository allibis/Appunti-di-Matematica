---
tags: [Topologia, Proprietà, Sottospazi, Chiusi, Interni]
aliases: []
icon: lucide-pencil
---

> [!proprietà] 
> Sia $(X,\tau)$ uno [[Topologia|spazio topologico]] e $Y\subseteq X$
> 1. Se $A\subseteq Y\implies\bar{A}^Y=\bar{A}^X\cap Y$
> 2. $Int_{Y}(A)=Int_{X}(A\cup(X\setminus Y))\cap Y$

> [!dim]
> 1. Verifico la doppia inclusione (utilizzo il [[Teorema sui Punti di Aderenza]] 1.)
> 	- $\bar{A}^Y\subseteq \bar{A}^X\cap Y$
>      Sia $p\in \bar{A}^Y\implies p\in Y$
> 	   $\forall U\in \tau_{Y}$ (ossia $\forall \tilde{U}\in \tau \vert U=\tilde{U}\cap Y$) [[Intorni#^def-intorno|intorno]] di $p$ risulta $U\cap \bar{A}^Y\not=\varnothing$ (perché $p$ è punto [[Interno|interno]] ad $A$).
> 	   Sia $W\in \tau$ tale che $p\in W$. 
> 	   Allora $W\cap A=W\cap A\cap Y=A\cap\underbrace{ (W\cap Y) }_{ \in \tau_{Y} }\not=\varnothing \implies W\cap A\not=\varnothing$
> 	   Ho dimostrato che $p\in \bar{A}^X\cap Y\implies \bar{A}^Y\subseteq \bar{A}^X\cap Y$
> 	   
> 	- $\bar{A}^X\cap Y\subseteq \bar{A}^Y$  
>      Sia $p \in \bar{A}^X\cap Y$ e sia $U\in \tau_{Y} \,\vert\, p\in U$. Allora $\exists \tilde{U}\in \tau\,\vert\,U=\tilde{U}\cap Y$. 
>      Poiché $p$ interno ad $A$ (rispetto $X$), si ha che $U\cap A=\tilde{U}\cap Y\cap A\not=\varnothing$
>      Quindi $p\in \bar{A}^Y$ perché verifica la proprietà di punto interno.
> 1. $\displaystyle Int_{Y}(A)=\bigcup_{\begin{gather}U\in \tau_{Y} \\ U\subseteq A\end{gather}}U$$\displaystyle=\bigcup_{\begin{gather}V\in \tau \\ V\cap Y\subseteq A\end{gather}}(V\cap Y)$. 
>    Osservo che $V\cap Y\subseteq A\iff V\subseteq A\cup (X\setminus Y)$ (figura sotto)
>    $\displaystyle Y\cap \bigcup_{\begin{gather}V\in \tau \\ V\cap Y\subseteq A\end{gather}}V=$$\displaystyle Y\cap \bigcup_{\begin{gather}V\in \tau \\ V\subseteq A\cup (X\setminus Y)\end{gather}}V=Int_{X}(A\cup(X\setminus Y))$
> ![[Disegno Identità Insiemi.excalidraw]]