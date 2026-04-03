---
tags: [Algebra, Definizione]
aliases: []
icon: lucide-book-open
---

> [!def] Funzione di Eulero
> La funzione $\varphi:\mathbb{N}\to \mathbb{N}$ che associa ad ogni numero $n\in \mathbb{N}$ la quantità di numeri primi minori di $n$
> $\varphi(n)=\#\{ k\in \mathbb{N}\, \vert \, k<n\vee k\text{ è coprimo a }n\}=\lvert \mathcal{U(\mathbb{Z}_{n})} \rvert$
> Si dimostra che se $p$ è primo, $\varphi(p)=p-1$
> Se $k=mn$  con $m,n$ coprimi, allora $\varphi(k)=\varphi(mn)=\varphi(n)\cdot\varphi(m)$
> $\varphi(p^k)=p^k-p^{k-1}$
> Questa proprietà è conseguenza del Teorema Cinese del Resto
> Ad esempio $\varphi(2)=\#\{ 1 \}=1,\varphi(3)=\#\{ 1,2 \}=2,\varphi(4)=\#\{ 1,3 \}=2$
> 