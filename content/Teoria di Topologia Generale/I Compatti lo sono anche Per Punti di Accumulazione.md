---
tags: [Topologia, Teorema, Compatti, Punti-di-Accumulazione]
aliases: []
icon: lucide-scroll-text
---

> [!Teorema]
> Se $X$ è [[Teoria di Topologia Generale/Compatto|compatto]], allora lo è anche [[Teoria di Topologia Generale/Compatto per Punti di Accumulazione|per punti di accumulazione]]
> Non vale il viceversa


> [!dim] Dimostrazione
> Poichè $A$ non ha p.ti di acc. ogni p.to di $A$ è isolato risp. a $A$.
> In particolare $\forall a \in A \quad \exists$ un intorno aperto $U_a \subseteq X$ t.c. $U_a \cap A = \{a\}$
> $\implies A$ è chiuso in $X$
> $\hookrightarrow$ poichè non contiene p.ti di acc. esterni
> 
> Considero la famiglia $\mathcal{U} := \{X \setminus A\} \cup \{U_a \mid a \in A\}$
> $\mathcal{U}$ è un ricoprimento aperto di $X$.
> 
> $X \setminus A$ è il complementare di $A$. (è aperto)
> Ogni $U_a$ copre esattamente $a \in A$
> Per ipotesi $X$ è compatto $\implies \exists$ un sottoricoprimento finito di $\mathcal{U}$
> $\exists a_1, \dots, a_n \in A$ t.c. $X = (X \setminus A) \cup U_{a_1} \cup \dots \cup U_{a_n} \implies A \subseteq U_{a_1} \cup \dots \cup U_{a_n}$
> Ma $A \cap U_{a_i} = \{a_i\} \implies A = \{a_1, \dots, a_n\} \implies A$ è finito da cui l'assurdo