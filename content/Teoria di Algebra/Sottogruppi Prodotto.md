---
tags: [Algebra, Proposizione, Sottogruppi, Prodotto, Normale]
aliases: []
icon: lucide-circle-check-big
---
> [!prop] Proposizione
> Sia $G$ un [[Teoria di Algebra/Gruppo|gruppo]] e $H,N$ suoi [[Teoria di Algebra/Sottogruppo|sottogruppi]]. 
> L'insieme $H\cdot N=\{ h\cdot n\, | \,h\in H,n\in N \}$ in generale è solo un sottoinsieme di $G$.
> Se $N\lhd G$ sottogruppo [[Teoria di Algebra/Sottogruppo Normale|normale]], allora $HN$ è un sottogruppo di $G$.
 
> [!dim]
> 1. $1\in HN$
> 2. Osservo che $(hn)(h'n')=h(nh')n'=hh'n''n'$. 
> 	Questo vale perché $nH=Hn\implies nh'=h'n''$ per qualche $n''\in N$
> 3.  $(hn)^{-1}=n^{-1}h^{-1}=h^{-1}n'\in HN$
> 
> Concludo che $HN<G$.
> Inoltre se anche $H\lhd G$:
> $gHNg^{-1}=\underbrace{ gHg^{-1} }_{ \subseteq H }\cdot\underbrace{ gNg^{-1} }_{ \subseteq N }\subseteq H\cdot N$ dunque $HN\lhd G$.

> [!obs] Osservazione
> In realtà, basta la condizione $\displaystyle HN=\bigcup_{h\in H}hN=\bigcup_{h\in H}Nh=NH$ affinché $HN$ sia un gruppo. In maniera più sintetica si scrive:
> $HN<G\iff HN=NH$
> Non vale la doppia implicazione per quanto riguarda la normalità del sottogruppo prodotto;
> $HN\lhd G\begin{align}&\implies  \\ &\bcancel\impliedby \end{align} HN=NH$

