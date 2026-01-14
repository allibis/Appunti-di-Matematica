---
tags:
  - Topologia
  - Definizione
aliases:
  - chiuso
  - chiusi
icon: lucide-book-open
---
> [!def] Definizione
> Un insieme si dice **chiuso** se il suo complementare è [[Aperto|aperto]]. 
^def-chiuso

> [!ex] Esempio
> Nella [[Topologia Banale]], $X$ è chiuso in quanto il suo complementare è $\varnothing$, che è aperto

> [!proprietà] Proprietà dei Chiusi
> 1. $\varnothing, X$ sono chiusi
> 2. Sia $\{ U_{j}\}_{j\in J}$ una famiglia di chiusi. Allora $\bigcap_{j\in J}U_{j}$ è chiuso. 
> 3. Siano $A,B$ chiusi. Allora $A\cup B$ è chiuso. 
^prop-chiusi

> [!dim]
> 1. $X^C=\varnothing, (\varnothing)^C=X\in\tau$
> 2. $(\bigcap_{j\in J}U_j)^C=\bigcup_{j\in J}(U_{j}^C)\in\tau$ da cui $\bigcap_{j\in J}U_{j}$ è chiuso. 
> 3. $(A\cup B)^C=A^C\cap B^C\in\tau$ pertanto $A\cup B$ è chiuso.
^dim-prop-chiusi
