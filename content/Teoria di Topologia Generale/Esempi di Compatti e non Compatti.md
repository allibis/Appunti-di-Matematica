---
tags: [Topologia, Esempi, Compatti]
icon: lucide-notebook-text
---

> [!ex] $\mathbb{R}$ non è compatto
> Consideriamo la famiglia di insiemi $\mathcal{A}=\{ (n,n+2),n\in \mathbb{Z} \}$.
> Tale famiglia è un [[Teoria di Topologia Generale/Ricoprimento|ricoprimento]] di $\mathbb{R}$, ma non esiste una sottocollezione finita di $\mathcal{A}$ che ricopre $\mathbb{R}$, dunque non è [[Teoria di Topologia Generale/Compatto|compatto]]

> [!ex] Esempio
> L'insieme $X=\{ 0 \}\cup \left\{\frac{1}{n} \, \middle\vert \, n\in \mathbb{Z}^+ \right\}$ è compatto. 
> Infatti, presa una collezione $\mathcal{A}$ ricoprimento di $X$, risulta che $\exists U\in \mathcal{A}\, \vert \,0\in U$ dove $U$ è aperto, quindi intorno di $0$. 
> Essendo intorno di $0$, conterrà infiniti elementi di $X$, e un numero finito di elementi di $X$ rimarranno fuori, cioè non sono inclusi in $U$. Dunque posso considerare la collezione finita di insiemi $U_{m}\left\{  \frac{1}{m}\, \vert \,m<n  \right\}$ che ricopre i restanti punti di $X$.
> Ho trovato dunque una collezione $\{U,U_{1},\dots,U_{m}\}$ finita che ricopre $X$, pertanto quest'ultimo è compatto. 