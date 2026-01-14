---
tags: [Topologia, Definizione, Metrica]
aliases: [Topologia indotta, topologia indotta]
icon: lucide-book-open
---

>[!def] Topologia indotta da una metrica
> Sia $X\not=\varnothing$ Sia $d(x,y)$ una [[Metrica|metrica]]. 
> La **[[Topologia|topologia]] indotta** $\tau_{d}$ dalla metrica è quella generata dalla [[Base di una Topologia|base]] $\beta=\{ B_{r}(x)\mid x\in X,r\in R^+\}$
^def-topologia-indotta

> [!ex] Metrica discreta
> Le palle aperte definite sulla [[Metrica#^def-metrica-discreta|metrica discreta]] su $X$ $d(x,y)=\begin{cases}
0 & \text{ se } x=y \\
1 & \text{ se } x\not=y
\end{cases}$ sono del tipo $\begin{cases}
X &  \text{ se } r>1 \\
\{x\} & \text{ se } r\leq1
\end{cases}$
> Osservo che tutti i singoletti sono [[Aperto|aperti]], quindi anche la loro unione è un aperto. Ciò significa che la topologia indotta dalla metrica discreta contiene tutti i sottoinsiemi di $X$, dunque è la topologia discreta $(X,\mathcal{P}(X))$
^es-metrica-discreta

