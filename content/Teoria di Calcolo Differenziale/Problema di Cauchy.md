---
tags: [Analisi, Definizione, Cauchy, ODE]
aliases: [problema di Cauchy, Cauchy]
icon: lucide-book-open
---

> [!def] Problema di Cauchy
> Consideriamo
> $f:I\to \mathbb{R}$ con $I$ intervallo di $\mathbb{R}$. Vogliamo trovare, se esiste, $F:J\to\mathbb{R}$ con $J \subseteq I$ intervallo tale che:
> - $F$ derivabile in $J$
> - $F'(x)=f(x)\quad \forall x\in J$
> 
> Sappiamo, per il teorema fondamentale del calcolo integrale, che se $f$ continua in $I$ e $x_{0}\in I$ allora $\displaystyle F(x)=\int_{x_{0}}^xf(x)dx$ è una primitiva di $f$.
> Se $I$ è un intervallo, $\forall c\in \mathbb{R}$ abbiamo che $\displaystyle \int_{x_{0}}^{x}f(x)=F(x)+C$, dunque esistono infinite primitive tutte uguali a meno di una costante, inoltre si ha che se $H(x)=\displaystyle\int_{x_{0}}^xf(x)dx+C$ allora $H(x_{0})=C$.
> Viceversa se fisso $y_{0}\in \mathbb{R}$ è unica la funzione $H_{y_{0}}(x)=\displaystyle\int_{x_{0}}^xf(x)dx+y_{0}$
> Per riassumere, data una $f:I\subseteq \mathbb{R}\to \mathbb{R}$ continua e $(x_{0},y_{0})\in I \times \mathbb{R}$, esiste ed è unica la funzione $H_{y_{0}}:I\to \mathbb{R}$ derivabile (qundi $C^1$) che soddisfa le seguenti condizioni:
> $$\begin{cases} y'(x)=f(x) \\ \\ y(x_{0})=y_{0} \end{cases}$$
> La ricerca di tale $y$ è chiamata **problema di Cauchy**.