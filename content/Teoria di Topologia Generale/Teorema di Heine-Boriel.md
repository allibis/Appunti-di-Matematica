---
tags: [Topologia, Teorema, Compatti]
aliases: []
icon: lucide-scroll-text
---

> [!teorema] Teorema di Heine-Boriel
> Sia $K\subseteq \mathbb{R}^n$, allora:
> $K$ è [[Teoria di Topologia Generale/Compatto|compatto]] $\iff$ $K$ è [[Teoria di Topologia Generale/Chiuso|chiuso]] e limitato

> [!dimostrazione] $\implies$
> Sappiamo che $\mathbb{R}^n$ è uno spazio di [[Teoria di Topologia Generale/Hausdorff]].
> Poiché $K$ è compatto, sappiamo anche che è chiuso [(!)](<Teoria di Topologia Generale/I Sottospazi Compatti di Spazi T2 sono Chiusi.md>)
> Resta da dimostrare che è limitato.
> Siano $B_{m}:=\{ x\in \mathbb{R}^n\, \vert \, \Vert x \Vert<m \}$
> Allora $\{ B_{m} \}$ è un ricoprimento di $\mathbb{R}^n$ e dunque di $K$. 
> Ma poiché $K$ compatto, vuol dire che per un numero limitato di $m_{1},\dots,m_{k}:K\subseteq \bigcup B_{m_{i}}$
> Prendo $M=\max\{ m_{1},\dots,m_{k} \}$, risulta che $\forall x\in K:\Vert x \Vert<M$
> Dunque $K$ è limitato.

> [!dim] $\impliedby$
> Supponiamo che $K$ sia chiuso e limitato.
> $K$ limitato $\implies \exists L>0\, \vert \,K\subseteq \{ (x_{1},\dots,x_{n})\in \mathbb{R}^n \, \vert \,|x_{i}|<L\}=[-L,L]^n$
> Osservo che l'insieme $[-L,L]^n$ è compatto perché [[Teoria di Topologia Generale/Il prodotto finito di Compatti é Compatto|prodotto finito di compatti]].
> E poiché $K$ è un [[Teoria di Topologia Generale/Teorema Sui Sottospazi Chiusi Dei Compatti|sottospazio chiuso di un compatto]], allora è compatto. 