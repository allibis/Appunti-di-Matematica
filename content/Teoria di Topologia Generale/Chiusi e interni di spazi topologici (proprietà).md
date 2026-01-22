---
tags: [Topologia, Proprietà, Sottospazi, Chiusi, Interni]
aliases: []
icon: lucide-pencil
---

> [!proprietà] Proprietà
> Sia $(X,\tau)$ uno [[Teoria di Topologia Generale/Topologia|spazio topologico]] e $Y\subseteq X$
> 1. Se $A\subseteq Y\implies\overline{A}^Y=\overline{A}^X\cap Y$
> 2. $Int_{Y}(A)=Int_{X}(A\cup(X\setminus Y))\cap Y$

> [!dim]
> 3. Verifico la doppia inclusione (utilizzo il [[Teoria di Topologia Generale/Teorema sui Punti di Aderenza]] 1.)
> 	- $\overline{A}^Y\subseteq \overline{A}^X\cap Y$
>      Sia $p\in \overline{A}^Y\implies p\in Y$
> 	   $\forall U\in \tau_{Y}$ (ossia $\forall \widetilde{U}\in \tau \vert U=\widetilde{U}\cap Y$) [[Teoria di Topologia Generale/Intorni#^def-intorno|intorno]] di $p$ risulta $U\cap \overline{A}^Y\not=\varnothing$ (perché $p$ è punto [[Teoria di Topologia Generale/Interno|interno]] ad $A$).
> 	   Sia $W\in \tau$ tale che $p\in W$. 
> 	   Allora $W\cap A=W\cap A\cap Y=A\cap\underbrace{ (W\cap Y) }_{ \in \tau_{Y} }\not=\varnothing \implies W\cap A\not=\varnothing$
> 	   Ho dimostrato che $p\in \overline{A}^X\cap Y\implies \overline{A}^Y\subseteq \overline{A}^X\cap Y$
> 	   
> 	- $\overline{A}^X\cap Y\subseteq \overline{A}^Y$  
>      Sia $p \in \overline{A}^X\cap Y$ e sia $U\in \tau_{Y} \,\vert\, p\in U$. Allora $\exists \widetilde{U}\in \tau\,\vert\,U=\widetilde{U}\cap Y$. 
>      Poiché $p$ interno ad $A$ (rispetto $X$), si ha che $U\cap A=\widetilde{U}\cap Y\cap A\not=\varnothing$
>      Quindi $p\in \overline{A}^Y$ perché verifica la proprietà di punto interno.
> 4. $\displaystyle Int_{Y}(A)=\bigcup_{\substack{U\in \tau_{Y} \\ U\subseteq A}}U$$\displaystyle=\!\!\!\!\!\bigcup_{\substack{V\in \tau \\ V\cap Y\subseteq A}}\!\!\!\!(V\cap Y)$. 
>    Osservo che $V\cap Y\subseteq A\iff V\subseteq A\cup (X\setminus Y)$ (figura sotto)
>    $\displaystyle Y\cap \!\!\!\!\bigcup_{\substack{V\in \tau \\ V\cap Y\subseteq A}}V=$$\displaystyle Y\cap\!\!\!\!\!\!\!\! \bigcup_{\substack{V\in \tau \\ V\subseteq A\cup (X\setminus Y)}}\!\!\!\!\!\!\!\!\!V=Int_{X}(A\cup(X\setminus Y))$
> ![[Diagrams/Disegno Identità Insiemi.excalidraw.svg]]