---
tags: [Topologia, Teorema, Sottospazi, Chiusi, Compatti]
aliases: []
icon: lucide-scroll-text
---

> [!teorema]
> Ogni [[Topologia di Sottospazio|sottospazio]] [[Chiuso|chiuso]] di uno [[Topologia|spazio topologico]] [[Compatto|compatto]] è compatto

> [!dimostrazione]
> Sia $C\subseteq X$ uno sottospazio chiuso e $X$ compatto. 
> Sia $\mathcal{U}$ un ricoprimento di $C$, risulta che $\mathcal{U}=\{ U_{i} \}=\{ V_{i}\cap U \}$ dove $V_{i}$ è un aperto di $X$
> Dal momento che $X$ è compatto, risulta che esiste una collezione di $V_{i}$ finita di aperti di $X$ tali che:
> $X=V_{1}\cup\dots \cup V_{k}\cup(X\setminus C)$ dove $(X\setminus C)$ è aperto in quanto $C$ è chiuso. 
> Ma allora $C\subseteq(V_{1}\cup\dots \cup V_{k})\cap C=(V_{1}\cap C)\cup\dots \cup(V_{k}\cap C)$
> Ho trovato una collezione finita di aperti di $C$ che lo ricoprono, quindi $C$ è compatto