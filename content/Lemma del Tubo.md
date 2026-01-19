---
tags: [Topologia, Proposizione, Compatti, Topologia-Prodotto]
aliases: []
icon: lucide-circle-check-big
---

> [!teorema] Lemma del Tubo
> Siano $X,Y$ [[Topologia|spazi topologici]] e $Y$ [[Compatto|compatto]].
> Sia $x\in X$ e $\vartheta \subseteq X \times Y$ un aperto che contiene $\{ x \}\times Y$. 
> Allora $\exists U$ intorno di $x_{0}$ tale che $\{ x \}\times Y\subseteq U \times Y\subseteq \vartheta$

> [!dim] Dim
> Consideriamo $x_{0}\in X$ e $\vartheta \supseteq \{ x_{0} \}\times Y$
> Poiché siamo nella [[Topologia Prodotto|topologia prodotto]], allora $\forall y\in Y$ esiste un intorno aperto $M=U_{y}\times V_{y}\subseteq \vartheta$ ($\vartheta$ è aperto in $\tau_{\text{prod}}$) centrato in $(x_{0},y)$
> Osservo che $\{ V_{y} \}$ è un ricoprimento di aperti di $Y$, che è compatto, quindi posso trovare una collezione finita $\{ V_{y_{1}},\dots,V_{y_{n}} \}$ di aperti che ricopre $Y$.
> Definisco $U=\bigcap \limits_{i=1}^nU_{y_{i}}$ intorno aperto di $x_{0}$ perché intersezione finita di aperti.
> Si ha che l'insieme $U \times Y$ è un intorno aperto e $U \times Y\subseteq \vartheta$