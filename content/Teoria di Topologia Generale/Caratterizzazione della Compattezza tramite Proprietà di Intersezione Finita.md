---
tags: [Topologia, Teorema, Compatti]
aliases: []
icon: lucide-scroll-text
---

> [!teorema]
> Sia $X$ uno [[Teoria di Topologia Generale/Topologia|spazio topologico]], allora vale la seguente equivalenza:
> 1. $X$ è [[Teoria di Topologia Generale/Compatto|compatto]] 
> 2. Ogni collezione $\mathcal{C}$ di chiusi di $X$ che ha la [[Teoria di Topologia Generale/Proprietà di Intersezione Finita]] verifica la proprietà: $\bigcap \limits_{C\in \mathcal{C}}C\not=\varnothing$

> [!dim] 
> Provo l'equivalenza delle negazioni:
> Sia $\mathcal{A}$ una collezioni di aperti di $X$ e definiamo $\mathcal{C}=\{ X\setminus A\, \vert \,A\in \mathcal{A} \}$
> Risulta che $\mathcal{C}$ è una collezione di chiusi in $X\iff \mathcal{A}$ è una collezione di aperti, inoltre:
> - $\mathcal{A}$ è un [[Teoria di Topologia Generale/Ricoprimento|ricoprimento]] di $X\iff \bigcap \limits_{c\in \mathcal{C}}C=\varnothing$
> -  Un sottoinsieme finito  $\{ A_{1},\dots,A_{n} \}\mathcal{A}$ ricopre $X\iff\bigcap \limits_{i=1}^n(X\setminus A_{i})=\varnothing$
>
> Tali equivalenze sono conseguenza delle [[Teoria di Topologia Generale/Formula di De Morgan|formule di De Morgan]]