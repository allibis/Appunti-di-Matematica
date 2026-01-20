---
tags: [Topologia, Proprietà, Interni, Esterni, Frontiera]
icon: lucide-pencil
---

> [!proprietà] Proprietà
> Sia $(X,\tau)$ [[Topologia|spazio topologico]] e $A,B\subseteq X$. Allora valgono le seguenti proprietà dell'[[Interno|interno]], [[Esterno|esterno]] e [[Frontiera|frontiera]] di $A,B$:
> 1. $\text{Int}(A)\cup \text{Int}(B) \subseteq \text{Int}(A\cup B)$
> 2. $\text{Int}(A)\cap \text{Int}(B)=\text{Int}(A\cap B)$
> 3. $\overline{A\cup B}= \overline{A}\cup \overline{B}$;
> 4. $\overline{A\cap B}\subseteq \overline{A}\cap \overline{B}$
> 5. $\text{Est}(A)\cup \text{Est}(B)\subseteq \text{Est}(A\cap B)$
> 6. $\text{Est}(A)\cap \text{Est}(B)=\text{Est}(A\cap B)$
> 7. $Fr(A\cup B)\subseteq Fr(A)\cup Fr(B)$
> 8. $Fr(A\cap B)\subseteq Fr(A)\cap Fr(B)$

> [!dim]
> 1. Sia $x\in \text{Int}(A)\cup \text{Int}(B)$. Allora $\exists U,\in \tau \mid x\in U\subseteq A$. Ma $A\subseteq A\cup B$ pertanto $x\in U\subseteq A\subseteq A\cup B\implies x\in \text{Int}(A\cup B)$
> 2. Supponiamo $x\in \text{Int}(A)\cap \text{Int}(B)$. Allora $\exists U\in \tau \mid x\in U\subseteq A$ e $\exists U'\in \tau \mid x\in U'\subseteq B$. 
>    Osservo che $U\cap U'\in \tau$ e $x\in U\cap U'\subseteq A\cap B\implies x\in \text{Int}(A\cap B)$. 
>    Viceversa se $x\in \text{Int}(A\cap B)$ Allora $\exists U\in \tau \mid x\in U\subseteq A\cap B$. Quindi $U\subseteq A,U\subseteq B\implies x\in \text{Int}(A)\cup \text{Int}(B)$
> 3. $\overline{A}\cup \overline{B}$ è chiuso in quanto unione di chiusi, inoltre $A\cup B\subseteq\overline{A}\cup \overline{B}$ quindi $\overline{A\cup B}\subseteq\overline{A}\cup \overline{B}$. (ricordo che la chiusura di un insieme $A$ è il più piccolo chiuso che contiene $A$).
>    Viceversa, $A,B\subseteq A\cup B$ e $\overline{A},\overline{B}\subseteq\overline{A\cup B}\implies\overline{A}\cup \overline{B}\subseteq\overline{A\cup B}$