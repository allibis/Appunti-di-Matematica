---
tags: [Algebra, Teorema, Sottogruppi, Gruppi]
aliases: []
icon: lucide-scroll-text
---

> [!teorema] Teorema di Lagrange
> Sia $(G,\cdot)$ un [[Teoria di Algebra/Gruppo|gruppo]] finito e $H<G$ un [[Teoria di Algebra/Sottogruppo|sottogruppo]]. 
> Allora $|H|$ divide $|G|$.

> [!dim] Dimostrazione
> Sia $G=g_{1}H\cup\dots \cup g_{k}H$ la partizione di $G$ ottenuta mediante le classi laterali sinistre distinte, cioè:
> $g_{i}H\cap g_{k}H=\varnothing\quad\forall i\not=j$ 
> Allora $|G|=|g_{1}H|+\dots+|g_{k}H|$.
> Dimostriamo che $|g_{1}H|=\dots=|g_{k}H|=|H|$:
> Costruiamo la funzione 
> $$\begin{align} \varphi:H\to g_{i}H \\ h\longmapsto g_{i}h \end{align} $$
> Osservo che $\varphi(h)=\varphi(h')\implies g_{i}h=g_{i}h'\implies h=h'$, dunque la mappa è iniettiva.
> La funzione inoltre è suriettiva per definizione di classe laterale, dunque $\varphi$ è biettiva.
> Dunque $|H|=|g_{i}H|\implies |G|=k\cdot |H|$

> [!obs] Osservazione
> Abbiamo dimostrato che tutti i sottogruppi di un gruppo $G$ finito hanno ordine che sia divisore di $|G|$.
> Ma non è detto che ad ogni divisore di $|G|$ corrisponde un sottogruppo avente come ordine tale divisore. 
> Ad esempio $A_{4}$, il gruppo alterno di $S_{4}$ ha ordine
> $\displaystyle|A_{4}|=\frac{|S_{4}|}{2}=\frac{4!}{2}=12$
