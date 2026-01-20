---
tags: [Topologia, Esempi, Chiusi]
icon: lucide-notebook-text
---


> [!es] In $\mathbb{R}$
> Consideriamo $A_{1}=(0,+\infty), A_{2}=\{ 1,2 \}, A_{3}=\mathbb{N}, A_{4}=\mathbb{Q}$.
> Calcolarne $Int(A_{i}), \overline{A_{i}}$ in $(\mathbb{R},\mathcal{E}), (\mathbb{R},\mathcal{P}(X)),(\mathbb{R},\tau_{cof}),(\mathbb{R},\tau_{\ell})$
> 
> 1. In $(\mathbb{R},\mathcal{E})$
>    $Int(A_{1})=A_{1}$, $\overline{A_{1}}=[0,+\infty)$
>    $Int(A_{2})=\varnothing$, $\overline{A_{2}}=A_{2}$
>    $Int(A_{3})=\varnothing$, $\overline{A_{3}}=A_{3}$
>    $Int(A_{4})=\varnothing$: infatti $\forall q\in Q:\exists\varepsilon>0\mid(q-\varepsilon,q+\varepsilon)\not \subseteq \mathbb{Q}$. 
> 2. In $(\mathbb{R},\mathcal{P}(\mathbb{R}))$
>    $\forall i\in\{1,2,3,4\}:  Int(A_{i})=A_{i},\overline{A_{i}}=A_{i}$
> 3. $(\mathbb{R},\tau_{cof})$
>    Ricordiamo che $\tau_{cof}=\{ \varnothing \}\cup \{ A\subseteq\mathbb{R}\mid \complement_{X}A \text{ è finito} \}$.
>   Se $r$ fosse interno a $A_{1}=(0,+\infty)$ allora esisterebbe $W\in \tau_{cof}\mid x\in W\subseteq A_{1}$. Tale $W$ è del tipo $\mathbb{R}\setminus\{p_{1}\dots p_{k}\}\not\subseteq A_{1}\implies A_{1}$ non ha punti interni. Pertanto $Int (A_{1})=\varnothing$
>   I chiusi di $\tau_{cof}$ sono chiusi oppure sono  uguali a $\mathbb{R}$. L'unico chiuso che contiene $A_{1}$ è $\mathbb{R}$, quindi $\overline{A_{1}}=\mathbb{R}$
>   Considero $A_{2}$. Nella topologia cofinita, non esistono aperti contenuti in $A_{2}$, quindi $Int(A_{2})=\varnothing$. Osservo inoltre che $\complement_{\mathbb{R}}A_{2}=\mathbb{R}\setminus\{ 1,2 \}$ è aperto in $\tau_{cof}$, quindi $A_{2}$ è chiuso, di conseguenza $A_{2}=\overline{A_{2}}$.
>   $A_{3}=\mathbb{N}$. $\forall n\in \mathbb{N},n\not\in Int(\mathbb{N})$. Questo perché $\forall U\in \tau _{cof}\mid n\in U: U\not\subseteq \mathbb{N}\implies Int(\mathbb{N})=\varnothing$.
>   Analogamente ad $A_{2}$, risulta che $\overline{A_{3}}=\mathbb{R}$.
>   Osservo che $Int(\mathbb{Q})=\varnothing$ in virtù dello stesso ragionamento seguito per $A_{3}$.
>   L'unico chiuso che contiene $\mathbb{Q}$ è $\mathbb{R}\implies \overline{\mathbb{Q}}=\mathbb{R}$