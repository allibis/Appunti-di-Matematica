---
tags: [Topologia, Definizione, Metriche]
aliases: []
icon: lucide-book-open
---

> [!def] British Rail Express Metric
> Sia $X=\mathbb{R}^{2}$ e $\delta:\mathbb{R}^2\to R$ definita come:
> $$\delta(x,y)=\begin{cases} \underline{0} & \text{se }x=y \\ d(x,\underline{0})+y(y,\underline{0}) & \text{se } x\not=y \end{cases}$$
> Si dimostra che soddisfa le proprietà di [[Metrica|metrica]]. 
> Le [[Palla aperta|palle aperte]] di $\delta$ sono del tipo:
> $B_{d}(x,r)=\begin{cases}
> B_{d}(\underline{0},r) & \text{se } x=\underline{0} \\
> \{ x \} & \text{se }x\not=\underline{0} \,\wedge r<d(x,\underline{0}) \\
> \{ x \} \cup B_{d}(\underline{0},r-d(x,\underline{0})) & \text{se }x\not=\underline{0} \,\wedge r\geq d(x,\underline{0})
> \end{cases}$