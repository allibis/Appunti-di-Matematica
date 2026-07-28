---
tags: [Topologia, Definizione, Mappe, Quoziente, Sottospazi]
aliases: [mappa quoziente]
icon: lucide-book-open
---

> [!def] Mappa Quoziente
> $p:(X,\tau)\to(Y,\tau')$ è una mappa quoziente se $p$ è suriettiva e se 
> $\forall U\in Y: U\in \tau'\iff  p^{-1}(U)\in \tau$

> [!osservazione]
> Se $p:(X,\tau)\to (Y,\tau')$ è suriettiva, continua e aperta, allora $p$ è una mappa quoziente

> [!es] Esempio di Mappa Quoziente
> $S^1:=\{ (x,y)\in \mathbb{R}^2\, \vert \,x^{2}+y^{2}=1 \}$
> Sia $X=[0,1]$ dotato di $\mathcal{E}_{[0,1]}$ e sia 
> $p:[0,1]\to S^1 \subseteq \mathbb{R}^2$ tale che $t\longmapsto(\cos(2\pi t),\sin(2\pi t))=e^{ 2\pi it }$
> Risulta che:
> 1. $p$ è continua, perché lo sono $\sin$ e $\cos$ e vale  il [[Teoria di Topologia Generale/Teorema sulle funzioni continue e topologia prodotto|teorema sulle funzioni continue e topologia prodotto]]
> 2. $p$ è suriettiva per le proprietà di $\sin$ e $\cos$
> 3. $p$ è una mappa quoziente
> 4. $p$ non è aperta, infatti se $A=\left[ 0, \frac{1}{3} \right)$ che è aperto nel sottospazio $\mathcal{E}_{[0,1]}$, $p(A)=\left\{ e^{ 2\pi it } \, \vert \, t\in\left[ 0, \frac{1}{3} \right)\right\}\not\in \mathcal{E}_{S^1}$