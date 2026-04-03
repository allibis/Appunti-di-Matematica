---
tags: [Algebra, Proposizione, Gruppi, Normali, Sottogruppi]
aliases: []
icon: lucide-circle-check-big
---

> [!prop] Condizione necessaria e sufficiente per la [[Teoria di Algebra/Sottogruppo Normale|normalità]] di un gruppo
> Sia $G$ [[Teoria di Algebra/Gruppo|gruppo]] e $N<G$ [[Teoria di Algebra/Sottogruppo|sottogruppo]]. 
> Allora $N\lhd G\iff gNg^{-1}\subseteq N\quad\forall g\in G$
 
> [!dim]
> Supponiamo che $N\lhd G$, allora $gHg^{-1}=H\quad\forall g\in G$. 
> Viceversa, posto $g\in G$ $gNg^{-1}\subseteq N\implies N\subseteq g^{-1}Ng$. 
> Scambiando il ruolo di $g$ e $g^{-1}$, ottengo $N\subseteq gNg^{-1}\subseteq N\implies N=gNg^{-1}$ da cui $N\lhd G$.

> [!obs] Osservazione
> Da questo teorema risulta dunque che basta dimostrare:
> $ghg^{-1}\in H\quad\forall g\in G,\forall h\in H$ oppure che $\forall g\in G,\forall h\in H: \exists h'\in H\, | \,gh=h'g^{-1}$.
