---
tags: [Topologia, Definizione, Interni]
aliases: [interno]
icon: lucide-book-open
---

> [!def] Interno di un insieme
> Sia $(X,\tau)$ uno [[Teoria di Topologia Generale/Topologia|spazio topologico]] e $A\subseteq X$. Si definisce **interno** di $A$ l'insieme:
> $\text{Int}(A)=\bigcup \{ W\mid W\in \tau, W\subseteq A\}$
> Ossia è l'unione di tutti gli [[Teoria di Topologia Generale/Aperto|aperti]] contenuti in $A$
^def-interno

> [!proprietà]  Proprietà dell'interno
> 1. $\text{Int}(A)\in \tau$;
> 2. $\text{Int}(A)\subseteq A$;
> 3. $A=\text{Int}(A)\iff A\in \tau$;
> 4. $\forall U\in \tau \mid U\subseteq A:U\subseteq \text{Int}(A)$, cioè $\text{Int}(A)$ è il più grande aperto contenuto in $A$;
> 5. $A\subseteq B\implies \text{Int}(A)\subseteq \text{Int}(B)$
^prop-interno

> [!dim]
> 1. Ovvio poiché unione di interni
> 2. Ovvio perché unione di sottoinsiemi di $A$
> 3. Se $A$ è aperto, allora $A\subseteq \text{Int}(A)\implies A=\text{Int}(A)$. 
>    Se $A=\text{Int}(A)$ allora è unione di aperti $\implies A\in \tau$
> 4. Vero perché $\text{Int}(A)$ è l'unione di tutti gli aperti contenuti in $A$
^dim-prop-interno

> [!es] Esempi di interni in $(\mathbb{R},\mathcal{E})$
> 1. Se $A=\{1,2\}$ allora $\text{Int}(A)=\varnothing$
> 2. Se $A=\left[1,2\right]$ allora $\text{Int}(A)=\left( 1,2 \right)$

> [!prop] Proposizione
> Sia $A\subseteq X$. Allora $\text{Int}(A)=\{x\in X\mid x\text{ è interno ad } A\}$

>[!dim] 
> $x\in \text{Int}(A)\iff \exists U\in \tau \mid x\in U\subseteq A \iff x$ è interno ad $A$.