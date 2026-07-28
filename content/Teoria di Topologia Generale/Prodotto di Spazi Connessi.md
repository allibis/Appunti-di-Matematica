---
tags: [Topologia, Teorema, Connessi]
aliases: []
icon: lucide-scroll-text
---

> [!teorema]
> Il prodotto finito di [[Teoria di Topologia Generale/Topologia|spazi]] [[Teoria di Topologia Generale/Spazio Connesso|connessi]] è connesso

> [!dimostrazione] Dimostrazione per due spazi connessi
> Considero $X,Y$ spazi connessi e il loro prodotto $X \times Y$.
> Sia $(a,b)\in X \times Y$
> Osservo che $X \times \{ b \}\simeq X$ (omeomorfo) e $\{ a \}\times Y\simeq Y$ pertanto sono connessi.
> Definisco $\forall x\in X: T_{x}:=(X \times \{ b \})\cup(\{ a \}\times Y)$
> In virtù del [[Teoria di Topologia Generale/Teorema sull'Unione di Spazi Connessi|teorema sull'unione di spazi connessi]] risulta che $T_{x}$ è connesso.
> Pertanto, $X \times Y=\bigcup\limits_{x\in X}T_{x}$ è connesso.

> [!dim] Dimostrazione per $n$ spazi connessi
> Abbiamo già dimostrato il caso $n=2$
> Supponiamo che la tesi valga per $n$ sottospazi e dimostriamolo per $n+1$.
> $\underbrace{ X_{1}\times\dots \times X_{n} }_{ \text{connesso per ipotesi} }\times X_{n+1}$
> Considero $X_{1}\times\dots \times X_{n}=Y$, allora $Y\times X$ è connesso. 