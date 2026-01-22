---
tags: [Topologia, Definizione, mappe]
aliases: [funzione continua, continua]
icon: lucide-book-open
---

> [!def] Mappa continua
> Siano $(X,\tau),(Y,\tau')$ [[Teoria di Topologia Generale/Topologia|spazi topologici]] e sia $f:A\to B$ una mappa. 
> Essa si dice **continua** se $\forall V\in \tau':f^{-1}(V)\in \tau$ 
^def-mappa-continua

> [!es] Esempio
> Considero $f:(\mathbb{R},\mathcal{P}(X))\to(\mathbb{R},\mathcal{E})$ tale che $f(x)=x$
> Prendo un aperto $V\in\mathcal{E}:f^{-1}(V)=V\subseteq \mathcal{P}(X)$, quindi $f$ è continua.
> Se scambio insieme di partenza e arrivo, invece la funzione non è più continua: infatti se considero $\{ 0 \}\in \mathcal{P}(X)$ aperto nella topologia discreta, $f^{-1}(\{ 0 \})=\{ 0 \}\not\in \mathcal{E}$.

> [!def] Mappa continua in un Punto
> Siano $(X,\tau),(Y,\tau')$ [[Teoria di Topologia Generale/Topologia|spazi topologici]] e sia $f:A\to B$ una mappa. 
> Essa si dice **continua** in $x_{0}\in X$ se $\forall V$ [[Teoria di Topologia Generale/Intorni|intorno]] aperto di $f(x_{0})$ esiste $U$ intorno aperto di $x_{0}$ tale che $f(U)\subseteq V$
^def-mappa-continua-in-un-punto