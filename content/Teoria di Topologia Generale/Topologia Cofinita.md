---
tags:
  - Topologia
  - Definizione
aliases:
  - topologia cofinita
icon: lucide-book-open
---
> [!def] Topologia Cofinita
> Dato $X$, la sua **[[Teoria di Topologia Generale/Topologia|topologia]] cofinita** è $\tau = \{X\} \cup \{\varnothing\} \cup \{U_j | U^C$ è sottoinsieme finito di  $X\}$ 
^def-topologia-cofinita

> [!dim]
> Dimostro che $\tau = \{X\} \cup \{\varnothing\} \cup \{U_j | U^C$ è un sottoinsieme finito di $X\}$ è una topologia su $X$.
> 1. $\varnothing,X\in \tau$
> 2. Sia ${U_{j}}_{j\in J}$ una famiglia di elementi non banali di $\tau$. Allora $\forall j\in J: |U_{j}^C|<+\infty$. 
> Grazie alla prima [[Teoria di Topologia Generale/Formula di De Morgan|formula di De Morgan]] si ha che 
> $\displaystyle \left(\bigcup_{j\in J}U_{j}\right)=\bigcap_{j\in J}\left(U_{j}^C\right) \subseteq U_{j}^C$ 
> $\displaystyle \implies \left|\left(\bigcup_{j\in J}U_{j}\right)\right|\leq \left|U_{j}^C\right| <+\infty$
> Dunque l'unione dei $U_{j}$ è un aperto di $\tau$
> 2. Siano $A,B \in \tau \implies |A^C|<+\infty$ e $|B^C| <+\infty$. 
> Dunque $|(A \cap B)^C|=|A^C\cup B^C|=|A^C|+|B^C|<+\infty$
^dim-topologia-cofinita

> [!es] Esempio
> In $(\mathbb{R},\tau_{\text{cof}})$, gli aperti sono del tipo $\mathbb{R}\setminus \{p_{1}\dots p_{k}\}$
^top-cof-aperti


