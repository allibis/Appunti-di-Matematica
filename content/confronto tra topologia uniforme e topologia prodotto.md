---
tags: [Topologia, Teorema, Topologia-Prodotto, Topologia-Uniforme]
aliases: []
icon: lucide-scroll-text
---

> [!teorema] La Topologia Uniforme è più Fine della Topologia Prodotto 
> Se $J$ è infinito, la [[Topologia Uniforme|topologia uniforme]] è più [[Confronto Tra Topologie|fine]] della [[Topologia Prodotto|topologia prodotto]].  Se $|J|<+\infty$ allora le due topologie coincidono. 

> [!dim] Dimostrazione
> Sia $x=(x_\alpha)_{\alpha\in J}$Considero un'aperto di $\mathbb{R}^J$ con $J$ infinito centrato in $x$. Tale aperto è del tipo $U=\prod \limits_{\alpha\in J}U_{\alpha}$, dove $U_{\alpha}=\mathbb{R}$ da un certo $\alpha$ in poi (ossia definitivamente).
> Sia $\{ \alpha_1,\dots,\alpha_{n} \}$ l'insieme finito degli indici per il quale $U_{\alpha_{i}}\not=\mathbb{R}$.
> $\forall i=1\dots n$ scelgo $\varepsilon_{i}>0$ tale che $B_{\overline{d}}(x_{\alpha},\varepsilon_{i})\subseteq U_{\alpha_{i}}$ e definisco $\varepsilon=\min\{ \varepsilon_{1},\dots,\varepsilon_{n} \}$.
> Osservo che $\forall \alpha\in J:B_{\overline{d}}(x_{\alpha},\varepsilon)\subseteq U_\alpha$, dunque $B_{\overline{p}}(x_{\alpha},\varepsilon)\subseteq U$. Per il [[Lemma sulle Metriche e Confronto tra Topologie]] si ha la tesi, dato che per ogni aperto generico di $\tau_{\text{prod}}$ ho trovato un aperto della topologia uniforme. 