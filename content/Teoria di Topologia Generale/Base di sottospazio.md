---
tags: [Topologia, Proposizione, Basi, Sottospazi]
aliases: []
icon: lucide-circle-check-big
---

> [!prop] Base di un sottospazio
> Se $\beta$ è [[Teoria di Topologia Generale/Base di una Topologia|base]] per $(X,\tau)$, allora $\beta_{Y}=\{ B\cap Y\,\vert\,B\in \beta \}$ è base per il [[Teoria di Topologia Generale/Topologia di Sottospazio|sottospazio]] $(Y,\tau_{Y})$

> [!dim]
> Sia $U\subseteq X$ e $y\in U\cap Y$
> Allora per la definizione di [[Teoria di Topologia Generale/Base di una Topologia|base]] $\exists B\in \beta \,\vert\,y\in B\cap Y\subseteq U\cap Y$. 
> Dunque dato un aperto di $\tau_{Y}$, per ogni suo punto $x$ posso trovare un elemento della base $\beta_{Y}$ che contiene $x$ e che è contenuto in tale aperto.
^dim-base-sottospazi

> [!es] Esempi di sottospazi
> In $(\mathbb{R},\mathcal{E})$ considero $Y=[0,1]$
> Allora la base per $(Y,\mathcal{E}_{Y})$ è formata dagli elementi del tipo:
> $(a,b)\cap Y=
> \begin{cases}
> (a,b) \ \text{se } a,b\in Y \\
> [0,b) \ \text{se } b\in Y \\
> (a,1] \ \text{se } a\in Y \\
> Y, \varnothing \ \text{se } a,b\not\in Y \\
> \end{cases}$
> 
> Osservo che $[0,1]$ è aperto di $Y$ ma NON è aperto di $X$.