---
tags: [Analisi, Osservazione]
aliases: []
icon: lucide-lightbulb
---

> [!obs]
> Grazie all'equivalenza tra ODE in forma normale e sistemi di ODE, possiamo semplificare lo studio della teoria concentrandoci solo su sistemi di ODE di primo ordine in forma normale: 
> $$y' = F(x,y)$$
> dove $F: \Omega \to \mathbb{R}^n$, con $\Omega \subseteq \mathbb{R} \times \mathbb{R}^n$ aperto, mentre $y: J \to \mathbb{R}^n$ è la funzione incognita.
> 
> In altre parole, la funzione incognita non sarà a valori reali, ma sarà una funzione vettoriale. Nel caso specifico in cui il sistema derivi dalla riduzione di una singola ODE di ordine $n$, ogni elemento del vettore corrisponde alla funzione originale e alle sue derivate fino all'ordine $n-1$.
> 
> La funzione $y: J \to \mathbb{R}^n$ è soluzione di $y' = F(x,y)$ se:
> 1. $\forall x \in J: (x, y(x)) \in \Omega$ e $y$ è derivabile in $J$;
> 2. $\forall x \in J: y'(x) = F(x, y(x))$.
> 
> Poiché $y = \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix}$ e $F = (f_1, \dots, f_n)$ con $f_i: \Omega \to \mathbb{R}$, vale l'equivalenza esplicita per le componenti:
> $$y' = F(x,y) \iff \begin{cases} y_1' = f_1(x, y_1, \dots, y_n) \\ \vdots \\ y_n' = f_n(x, y_1, \dots, y_n) \end{cases}$$
> con $y' = \begin{pmatrix} y_1' \\ \vdots \\ y_n' \end{pmatrix}$.