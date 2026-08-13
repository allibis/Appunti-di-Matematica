---
tags: [Analisi, Definizione]
aliases: []
icon: lucide-book-open
---

> [!def] Sistema di ODE
> Siano $F_{1}\dots F_{k}:\Omega\to \mathbb{R}$ e $\Omega \subseteq \mathbb{R}^{m}$ aperto. Il sistema:
> $$\begin{cases}
y_{1}^{(n_{1})}&=F_{1}(x,y_{1},\dots,y_{k},y_{1}',\dots,y'_{k},\dots,y^{(n_{1}-1)}_{1},\dots,y^{(n_{k}-1)}_{k}) \\
y_{2}^{(n_{2})}&=F_{2}(x,y_{1},\dots,y_{k},y_{1}',\dots,y'_{k},\dots,y^{(n_{1}-1)}_{1},\dots,y^{(n_{k}-1)}_{k}) \\
&\vdots \\
y_{k}^{(n_{k})}&=F_{k}(x,y_{1},\dots,y_{k},y_{1}',\dots,y'_{k},\dots,y^{(n_{1}-1)}_{1},\dots,y^{(n_{k}-1)}_{k})
\end{cases}$$
> è detto sistema di $k$ [[Teoria di Calcolo Differenziale/Equazione Differenziale|ODE]] di ordine diverso, dove $n_{1},\dots,n_{k}$ sono gli ordini delle ODE. Inoltre $m=1+\sum \limits^{k}_{i=1}n_{i}$


> [!ex] Esempio di Sistema di 3 ODE
> Consideriamo 
> $\begin{cases}
y_{1}'=y_{1}+y_{2}'+x \\
y_{2}''=y_{2}'-y_{3} \\
y_{3}'=y_{1}-y_{2}+y_{2}'
\end{cases}$
> Risulta che $n_{1}=1,n_{2}=2,n_{3}=1$ per cui $n=1+1+2+1=5$, in altre parole $m$ è il numero di quante variabili ("input") possono comparire a sinistra delle equazioni.