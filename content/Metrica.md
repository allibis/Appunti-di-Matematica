---
tags: [Topologia, Definizione, Metriche]
aliases: [metrica, metriche, distanza]
icon: lucide-book-open
---

> [!def] Metrica
> Sia $X\not=\varnothing$ un insieme. $d:X\times X\to \mathbb{R}$ si dice **metrica** o **distanza** se verifica le seguenti proprietà:
> 1. $\forall x,y\in X: d(x,y)\geq0$;
> 2. $\forall x,y\in X: d(x,y)=0\iff x=y$;
> 3. $\forall x,y\in X: d(x,y)=d(y,x)$;
> 4. $\forall x,y,z\in X: d(x,y)+d(y,z)\geq d(x,z)$ (Disuguaglianza Triangolare).
^def-metrica

> [!def] Distanza Euclidea
> - In $\mathbb{R}^2$, la **distanza euclidea**  è $d(x,y)=\sqrt{ (x_{1}-x_{2})^2+(y_{1}-y_{2})^2 }$ 
> - Più in generale in $\mathbb{R}^n$ la distanza euclidea è definita così:
>   $\displaystyle d(x,y)=\sqrt{ \sum^n_{i=1}(x_{i}-y_{i})^2}$
^def-metrica-euclidea

> [!def] $p$-metrica
>  In $\mathbb{R}^n$, la **$p$-metrica** si definisce ponendo $$\displaystyle d_{p}(x,y)=\left(   \sum^n_{i=1}(x_{i}-y_{i})^p\right)^{ \frac{1}{p} }$$
^def-p-metrica

> [!def] $\infty$-metrica
> Se $p\to \infty$ si ottiene la $\infty$-metrica:
>  $$\displaystyle p(x,y)=d_{\infty}(x,y)=\sup_{1\leq i\leq n}|x_{i}-y_{i}|$$ 
^def-inf-metrica

> [!def] Metrica discreta
> Sia $X$ un insieme non vuoto. La **Metrica Discreta** è definita ponendo:
> $$d(x,y)=\begin{cases} 0 & \text{ se } x=y \\ 1 & \text{ se } x\not=y 2\end{cases}$$
^def-metrica-discreta