---
tags: [Topologia, Proposizione, Insiemi densi]
icon: lucide-circle-check-big
---

> [!prop] Proposizione
> Siano $X\not=\varnothing$, $\tau,\tau'$ due [[Topologia|topologie]] su $X$ tali che $\tau \subseteq \tau'$, Allora se $A\subseteq X$ è [[Insieme Denso|denso]] in $\tau'$, allora lo è anche in $\tau$
^prop-densi-top-confrontabili

> [!dim]
> Supponiamo che $A$ è denso in $(X,\tau')$. Allora $\forall U\in \tau' \mid U\not=\varnothing:U\cap A\not=\varnothing$.
> Poiché $\tau \subseteq \tau'$, si ha che $\forall U'\in \tau \subseteq \tau' \mid U'\not=\varnothing:U'\cap A\not=\varnothing$
^dim-prop-densi-top-confrontabili

> [!ex] Controesempio
> Considero $X=\mathbb{R}$ e le topologie $\mathcal{E}, \mathcal{P}(\mathbb{R})$. La topologia discreta è più fine della topologia euclidea. 
> Sappiamo che $\mathbb{Q}$ è denso in $(\mathbb{R},\mathcal{E})$. Tuttavia $\bar{\mathbb{Q}}=\mathbb{Q}$ in $\mathcal{P}(\mathbb{R})$
^ex-prop-densi-top-confrontabili