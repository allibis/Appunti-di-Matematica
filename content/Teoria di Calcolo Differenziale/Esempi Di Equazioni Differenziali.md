---
tags: [Analisi, Esempi, ODE]
aliases: []
icon: lucide-notebook-text
---

> [!ex] Esempio $(3x-1)y''+y'=0$
> La funzione $y(x)=1$ è una [[Teoria di Calcolo Differenziale/Equazione Differenziale#^def-sol-eq-diff|soluzione]] particolare dell'equazione, infatti:
> 1. $y\in C^{\infty}(\mathbb{R})$
> 2. $\forall x\in \mathbb{R}: (x,5,0,0)\in \Omega=\mathbb{R}^{4}$
> 3. $(3x-1)\cdot 0+0=0\qquad\forall x\in \mathbb{R}$
> 
> Le tre proprietà sono verificate, tuttavia se porto l'equazione in [[Teoria di Calcolo Differenziale/Forma Normale|forma normale]] $y'' = \dfrac{y'}{3x-1}$ si ha che $x\neq \dfrac{1}{3}$, pertanto la soluzione $y(x)=5$ non verifica la proprietà 2 in tutto $\mathbb{R}^{4}$, ma in $\Omega=\mathbb{R}\setminus \left\{ \dfrac{1}{3} \right\}\times \mathbb{R}^{3}$ 