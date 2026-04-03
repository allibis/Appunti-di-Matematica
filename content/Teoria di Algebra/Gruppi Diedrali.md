---
tags: [Algebra, Definizione, Gruppi, Diedrali, Sottogruppi]
aliases: []
icon: lucide-book-open
---

> [!def] Gruppi Diedrali
> Il gruppo diedrale può essere considerato come il [[Teoria di Algebra/Gruppo|gruppo]] di riflessioni e rotazioni simmetriche di un poligono regolare di $n$ lati. 
> È definito come $\mathcal{D}_{n}=\{ \sigma \tau \, | \,\sigma^n=1, \tau^2=1,\tau \sigma \tau ^{-1}=\sigma^-1\}=\{ 1,\sigma,\sigma^2,\dots,\sigma^{n-1}, \tau,\tau \sigma,\tau \sigma^2,\dots,\tau \sigma^{n-1}\}$
> Risulta dunque che $\lvert \mathcal{D}_{n} \rvert=2n$
> Possiamo rappresentare $\sigma$ e $\tau$ in forma matriciale:
> $$\sigma=\begin{bmatrix}
\cos \left( \frac{2\pi}n{} \right) & -\sin\left( \frac{2\pi}n{} \right) \\
\sin\left( \frac{2\pi}n{} \right) & \cos \left( \frac{2\pi}n{} \right)
\end{bmatrix}\qquad\tau=\begin{bmatrix}
1 & 0 \\
0 & -1
\end{bmatrix}$$

> [!obs] Gruppi normali di $\mathcal{D}_{n}$
> Consideriamo l'insieme $\braket{ \sigma }=\{ 1, \sigma, \dots, \sigma^{n-1}\}$
> Osserviamo che $(\mathcal{D}_{n}:\braket{ \sigma })=2$, dunque per [[Teoria di Algebra/Ogni sottogruppo di indice 2 è normale|l'osservazione precedente]] tale sottogruppo è normale.
> Tale sottogruppo non è l'unico normale, infatti tutti i sottogruppi $\braket{ \sigma^k }$ sono normali:
> $\sigma^i\tau \sigma^k\tau \sigma^{-i}=\sigma^i\sigma^{-k}\sigma^{-i}=\sigma^{-k}$
> Invece, per $n>3$ osserviamo che il gruppo $\braket{ \tau }=\{ 1,\tau \}$ non è normale, in quanto:
> $\sigma \tau \sigma^{-1}=\sigma \tau (\tau \sigma \tau ^{-1})=\sigma^2\tau ^{-1}=\sigma^2\tau \not\in \braket{ \tau }$