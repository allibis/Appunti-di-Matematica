---
tags:
  - Analisi
  - Proposizione
  - ODE
  - Cauchy
aliases: []
icon: lucide-circle-check-big
---

> [!prop] Proposizione
> Ogni [[Teoria di Calcolo Differenziale/Equazione Differenziale|ODE]] in [[Teoria di Calcolo Differenziale/Forma Normale|forma normale]] è equivalente a un [[Teoria di Calcolo Differenziale/Sistema di ODE|sistema di ODE]] del primo ordine. 
> Consideriamo $y^{(n)}\xlongequal{(*)}G(x,y,y',\dots,y^{{n-1}})$ ODE di ordine $n$ e $G:\Omega\to \mathbb{R}$,$\Omega\in \mathbb{R}^{n+1}$ aperto.
> Allora $\bar y=\bar{y}(x)$ è soluzione di $(*)\iff$ posto $y_{1}=\overline{y},y_{2}=\overline{y}',\dots,y_{n}=\overline{y}^{(n-1)}$,  $(y_{1},\dots,y_{n}):J\to \mathbb{R}$ è soluzione del sistema di ODE:
> $$\begin{cases}
y_{1}'=y_{2}\\y_{2}'=y_{3}\\ \vdots \\ y'_{n-1}=y_{n} \\ y_{n}'=G(x,y_{1},y_{2},\dots,y_{n})
\end{cases}(**)$$
 
> [!dim]
> Proviamo $\implies$:
> Supponiamo $\overline{y}$ è soluzione di $(*)$, definisco
> $y_{1}=\overline{y}$,
>$y_{2}=\overline{y}'=y_{1}'$,
>$\dots$
>$y_{n}=\overline{y}^{(n-1)}=y_{n-1}'$,
>$y_{n}'=\overline{y}^{(n)}$
> Allora $(y_{1},\dots,y_{n})$ risolvono $(**)$
> 
> Viceversa $\impliedby$:
> Se $(y_{1},\dots,y_{n})$ è soluzione del sistema, prendo $y_{1}=\overline{y}$, da cui $y_{2}=y_{1}'=\overline{y}'$ e così via, per cui $y_{n}'=G(x,y_{1},y_{2},\dots,y_{n})\implies \overline{y}^{(n)}=G(x,\overline{y},\overline{y}',\dots,\overline{y}^{(n-1)})$.