---
tags: [Algebra, Definizione, Gruppi, Sottogruppi]
aliases: [sottogruppo, sottogruppi]
icon: lucide-book-open
---

> [!def] Sottogruppo
> Sia $G$ un [[Teoria di Algebra/Gruppo|gruppo]], e $H\subseteq G$. Esso si dice **sottogruppo** se:
> 1. $\forall x,y\in H:x\cdot y\in H$, cioè $H\cdot H\subseteq H$
> 2. $1\in H$
> 3. $\forall x\in H:x ^{-1}\in H$, cioè $H^{-1}\subseteq H$
>
> Notazione: se $H$ è sottogruppo di $G$ si scrive $H<G$

 > [!osservazione] Osservazione
 > 
 > Se $H\not=\varnothing$ allora le proprietà 1. e 3. implicano la 2. 
 > Infatti $H\not=\varnothing \implies \exists x\in H \overset{3.}\implies \exists x ^{-1}\in H\overset{1.}\implies 1=x\cdot x ^{-1}\in H$