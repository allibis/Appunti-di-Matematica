---
tags: [Algebra, Definizione, Quoziente, Gruppi, Congruenza]
aliases: []
icon: lucide-book-open
---

> [!def] Surgezione Canonica sul Gruppo Quoziente
> Sia $G$ [[Teoria di Algebra/Gruppo|gruppo]], $N\lhd G$ [[Teoria di Algebra/Sottogruppo|sottogruppo]] [[Teoria di Algebra/Sottogruppo Normale|normale]]. 
> Considero inoltre il [[Teoria di Algebra/Insieme Quoziente dei Laterali|gruppo quoziente]] $^G /_{N}$.
> Posso definire la mappa: 
> $\begin{align} \pi:G&\longrightarrow \,^G/_{N}  \\ x&\longmapsto xN\end{align}$
> Tale mappa è compatibile con le operazioni di $G$ e $^G /_{N}$: 
> $\pi(x\cdot y)=xyN=xNyN=\pi(x)\cdot \pi(y)$
> Si osserva inoltre che, posto $Ker(\pi)=\{ x\in G\, | \,\pi(x)=1_{G/N} \}=\pi ^{-1}(1_{G/N})$, si ha che tale insieme corrisponde a $N$
> Risulta inoltre che $Ker(\varphi)$ è sottogruppo normale di $G$, infatti:
> $x\in Ker(G), g\in G:\pi(gxg^{-1})=\pi(g)\underbrace{ \pi(x) }_{ =1 }\pi(g^{-1})=\pi(g)\pi(g)^{-1}=1\implies Ker(G)\lhd G$
> Dal momento che $Ker(G)\lhd G$, allora è possibile valutare $^G/_{Ker(\varphi)}$.