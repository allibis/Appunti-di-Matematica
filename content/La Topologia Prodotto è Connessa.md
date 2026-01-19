---
tags: [Topologia, Esempi, Topologia-Prodotto, Spazi-Connessi]
icon: lucide-notebook-text
---

> [!es] $\mathbb{R}^\omega$ con Topologia Prodotto
> Dimostriamo che $(R^\omega,\tau_\text{prod})$ è [[Spazio Connesso|connesso]].
> Consideriamo $\forall n\in \mathbb{N}: \widetilde{\mathbb{R}}^n=\{ (x_{1},\dots,x_{n},0,0,\dots) \}$ 
> e la funzione $\varphi:\widetilde{\mathbb{R}}^n\to \mathbb{R}^n$ che associa
> $\forall(x_{1},\dots,x_{n},0,0,\dots)\longmapsto(x_{1},\dots,x_{n})$
> Tale funzione è continua (in quanto lo sono le sue componenti in virtù del [[Teorema sulle funzioni continue e topologia prodotto]])
> Inoltre ogni $\widetilde{\mathbb{R}}^n\simeq \mathbb{R}^n$ è connesso, in quanto $\mathbb{R}^n$ è [[Prodotto di Spazi Connessi]] finito.
> Inoltre tutti gli $\widetilde{\mathbb{R}}^n$ contengono il punto $(0,0,\dots)\in \mathbb{R}^\omega$, pertanto la loro unione $\bigcup \limits_{n\in \mathbb{N}}\widetilde{\mathbb{R}}^n=\mathbb{R}^\infty$ è connessa per il [[Teorema sull'Unione di Spazi Connessi]] è connessa.
> (Ricordo che $\mathbb{R}^\infty$ contiene solo successioni che ad un certo punto finiscono)
> Sia $a=(a_{1},a_{2},\dots)\in \mathbb{R}^\omega$ e sia $U=\prod\limits_{i}U_{i}$ intorno di $a$ per la topologia prodotto.
> Risulta che $U_{i}=\mathbb{R}$ definitivamente da un certo $N$ in poi.
> Considerato il punto $x=(a_{1},\dots,a_{N},0,0\dots)\in \mathbb{R}^\infty$. Tale punto appartiene a $U$ in quanto $x_{i}\in U_{i},\forall i$ 
> Abbiamo dimostrato dunque che per ogni punto di $\mathbb{R}^\omega$ esiste un intorno $U$ che interseca $\mathbb{R}^\infty$, ossia tutti i punti di $\mathbb{R}^\omega$ sono punti di aderenza per $R^\infty$ e quindi $\overline{\mathbb{R}}^\infty=R^\omega$ dunque $\mathbb{R}^\omega$ è connesso rispetto alla topologia prodotto.