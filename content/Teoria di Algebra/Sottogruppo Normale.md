---
tags: [Algebra, Definizione, Sottogruppi]
aliases: [normale]
icon: lucide-book-open
---

> [!def] Sottogruppo Normale
> Sia $G$ un [[Teoria di Algebra/Gruppo|gruppo]] e $H<G$ un suo [[Teoria di Algebra/Sottogruppo|sottogruppo]].
> Esso si dice normale se $\forall g \in G: gH=Hg\iff gHg^{-1}=G$ e si denota $H \lhd G$
> Se un sottogruppo è normale, allora posso valutare un'espressione del tipo:
> $x\equiv y\text{ mod }H$

> [!esempio]
> Considero $G=(\mathbb{Z}_{6},+)$ e il suo sottogruppo $H=\braket{ [2]_{6} }=\{[0]_{6}, [2]_{6}, [4]_{6} \}=\{ \overline{0},\overline{2},\overline{4} \}$
> $\overline{0}+H=\{ \overline{0},\overline{2},\overline{4}\}=H$
> $\overline{1}+H=\{ \overline{1}, \overline{3}, \overline{5} \}$
> $\overline{2}+H=H$
> $\overline{3}+H=\overline{1}H$
> $\overline{4}+H=H$
> $\overline{5}+H=\overline{1}H=\overline{3}H$
Otteniamo 2 classi laterali, infatti $(G:H)=\displaystyle\frac{\lvert G \rvert}{\lvert H \rvert}=\frac{6}{3}=2$