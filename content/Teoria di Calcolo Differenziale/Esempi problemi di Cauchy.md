---
tags: [Analisi, Esempi, Cauchy, ODE]
aliases: []
icon: lucide-notebook-text
---

> [!ex] Esempio $y'=y$
> Cerchiamo $y$ tale che $y'=y$.
> Osserviamo che $y(x)=e^x$ è derivabile su $\mathbb{R}$ e $y'(x)=e^x$.
> Più in generale $y(x)=Ke^x \to y'(x)=Ke^x$ 
> Fissato $(x_{0},y_{0})\in \mathbb{R}^2$, impongo $y(x_0)=Ke^{x_{0}}=y_{0}$, da cui $K=\dfrac{y_{0}}{e^{x_{0}}}$
> Ottenuto $K$, segue l'unicità: $y(x)=K=\dfrac{y_{0}}{e^{x_{0}}}e^x=y_{0}e^{x-x_{0}}$

> [!ex] Esempio $y''=\lambda y'$
> Poniamo $z=y'$, il problema diventa: $z'=\lambda z$, ottenendo la soluzione $z(x)=Ke^{\lambda x}$ in quanto $z'(x)=\lambda Ke^{\lambda x}=\lambda z(x)$.
> Per cui $y'(x)=Ke^{\lambda x}\implies y''(x)=\lambda Ke^{\lambda x}$
> 1. Se $\lambda=0$ allora $y=Kx+c$ con $C\in \mathbb{R}$
> 2. Se $\lambda\neq 0$, ottengo $y=\displaystyle\int Ke^{\lambda x}dx=\frac{K}{\lambda}e^{\lambda x}+C$
> 
> I risultati dipendono da troppi parametri, per cui impongo delle condizioni per trovare la soluzione:
> 1. $\lambda=0$:
>	fisso $(x_{0},y_{0})\in \mathbb{R}^2$ per cui $y_{0}=Kx_{0}+C\implies C=y_{0}-Kx_{0}$
>	da cui $y=Kx+y_{0}-Kx_{0}=y_{0}+K(x-x_{0})$ 
>	non avendo ancora ottenuto l'unicità, impongo $y'(x_{0})=y_{1}\implies K=y_{1}$ da cui $y=y_{1}(x-x_{0})+y_{0}$.
>	Questa è la soluzione al problema di Cauchy: $$\begin{cases} y''=0 \\ y(x_{0})=y_{0} \\y'(x_{0})=y_{1} \end{cases}$$
> 2. $\lambda\neq 0$:
>    Fisso $(x_{0},y_{0},y_{1})\in \mathbb{R}^3$ e impongo
>    $$\begin{cases} y''=\lambda y \\\\  y(x_{0})=y_{0} \\\\y'(x_{0})=y_{1} \end{cases} \implies \begin{cases} y=\frac{K}{\lambda}e^{\lambda x}+C \\\\ \frac{K}{\lambda}e^{\lambda x_{0}}+C=y_{0} \\\\ Ke^{\lambda x}=y_{1} \end{cases}$$
>    Risolvendo il sistema per $C,K$ e $\lambda$, otteniamo $\displaystyle y=\frac{y_{1}}{\lambda}e^{\lambda(x-x_{0})}+y_{0}-\frac{y_{1}}{\lambda}=\frac{y_{1}}{\lambda}(e^{\lambda(x-x_{0})}-1)+y_{0}$