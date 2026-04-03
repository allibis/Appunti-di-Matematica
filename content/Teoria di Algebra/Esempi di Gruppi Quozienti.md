---
tags: [Algebra, Esempi]
aliases: []
icon: lucide-notebook-text
---

> [!ex] Esempio in $\mathbb{Z}$
> Considero $G=\mathbb{Z}$ dotato di somma e $N=3\mathbb{Z}$ [[Teoria di Algebra/Sottogruppo Normale|sottogruppo normale]].
> Considerati due elementi $x,y\in\mathbb{Z}$, essi sono congruenti se $x-y\in 3\mathbb{Z}$.
> Dunque posso scrivere $x\equiv y\;(\text{mod }3\mathbb{Z})$ che equivale a dire $x\equiv y\,(\text{mod }3)$
> Quindi $^{\mathbb{Z}}/_{3\mathbb{Z}}$ è l'insieme delle classi di equivalenza rispetto alla congruenza modulo $3\mathbb{Z}$ 

> [!ex] Esempio in $A_{4}$
> Siano $G=A_{4}$ e $N=\{ id, (1,2)(3,4), (1,3)(2,4), (1,4)(2,3) \}$ sottogruppo normale. 
> Osservo che $A_{4}=N\cup\{ (1, 2, 3), (1, 3, 2), (1, 2, 4), (1, 4, 2), (1, 3, 4), (1, 4, 3), (2, 3, 4), (2, 4, 3) \}$
> Prendo $(1,2,3)\not\in N$
> Calcolando $(1,2,3)N=\{ (1, 2, 3), (1, 3, 4), (2, 4, 3), (1, 4, 2) \}$
> Analogamente:
> $(1, 3, 2)N = \{ (1, 3, 2), (2, 3, 4), (1, 2, 4), (1, 4, 3) \}$.
> Ho trovato le sue classi laterali, dunque $^{A_{4}}/_{N}=\{N,(1,2,3)N, (1,3,2)N \}$
> Potrei identificare gli elementi di tale quoziente con gli elementi di $\mathbb{Z}_{3}:$
> $\overline{0}\to N$
> $\overline{1}\to(1,2,3)N$
> $\overline{2}\to(1,3,2)N$
> Ho appena definito un isomorfismo, il che sottolinea la natura ciclica di $^{A_{4}}/_{N}$. 
> Tale proprietà è data dal fatto che $^{A_{4}}/_{N}$ è un gruppo abeliano finito. 

> [!ex] $\mathcal{U}(\mathbb{Z}_{15})$.
> $G=\mathcal{U}(\mathbb{Z}_{15})=\{ 1, 2, 4, 7, 8, 11, 13, 14\}$
> $N=\braket{ 4 }=\{ 1,4 \}\lhd G$
> $2N=\{2,8\}$
> $7N=\{ 7,13 \}$
> $11N=\{ 11,14 \}$
> Dunque $^{G} / _N=\{N,2N,7N,11N\}$
> Tale gruppo è di ordine 4, quindi può essere isomorfo solo a $Z_{4}$ oppure a $\mathbb{Z}_{2}\times \mathbb{Z}_{2}$.
> Osservo però che ogni elemento ha periodo $2$, quindi $^G / _N \cong\mathbb{Z}_{2}\times \mathbb{Z}_{2}$