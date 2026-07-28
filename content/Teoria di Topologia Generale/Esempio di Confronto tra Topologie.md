---
tags: [Topologia, Esempi, Confronto, Basi]
icon: lucide-notebook-text
---


> [!es] Esempio
> La base per la [[Teoria di Topologia Generale/Topologia Euclidea|topologia euclidea]] su $\mathbb{R}$ è $\beta=\{(a,b)\mid a,b\in \mathbb{R}, a<b\}$
> La base per la [[Teoria di Topologia Generale/Topologia del Limite Inferiore|topologia del limite inferiore]] $\mathbb{R}_{\ell}$ è $\beta'=\{[a,b) | a,b\in \mathbb{R}, a<b\}$
> La **K-topologia** su $\mathbb{R}$ è generata dalla base $\beta''=\{(a,b)\mid a,b\in \mathbb{R},a<b\}\cup\{(a,b)\setminus K\}$ con $K=\{\frac{1}{n}\mid n\in \mathbb{Z}^+\}$
> 
> | Topologia | Confronto |
> | :---: | :---: |
> |  $\mathbb{R}$ vs $\mathbb{R}_{\ell}$   |  $\mathbb{R}\subseteq \mathbb{R}_{\ell}$    |
> |  $\mathbb{R}$ vs $\mathbb{R}_{K}$   | $\mathbb{R}\subseteq \mathbb{R}_{{K}}$ |
> |$\mathbb{R}_{{\ell}}$ vs $\mathbb{R}_{K}$ | non confrontabili |


> Applico la [[Teoria di Topologia Generale/Topologie confrontabili e basi|proposizione precedente]] per dimostrare che $\mathbb{R}\subseteq \mathbb{R}_{\ell}$: 
> Prendo $B=(a,b)\in \beta$ e $x\in B$ arbitrari. Si ha che $\exists B'=[x,b)\subseteq(a,b)$, da cui la tesi.
> Viceversa, se considero $B'=[x,b)\in \beta'$, $\nexists(a,b)\in \beta\mid x\in(a,b)\subseteq[x,b)$