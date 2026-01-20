---
tags: [Topologia, Proprietà, Interni, Esterni, Frontiera]
icon: lucide-pencil
---

> [!proprietà]
> Sia $(X,\tau)$ [[Topologia|spazio topologico]] e $A,B\subseteq X$. Allora valgono le seguenti proprietà dell'[[Interno|interno]], [[Esterno|esterno]] e [[Frontiera|frontiera]] di $A,B$:
> 1. $Int(A)\cup Int(B) \subseteq Int(A\cup B)$
> 2. $Int(A)\cap Int(B)=Int(A\cap B)$
> 3. $\overline{A\cup B}= \overline{A}\cup \overline{B}$;
> 4. $\overline{A\cap B}\subseteq \overline{A}\cap \overline{B}$
> 5. $Est(A)\cup Est(B)\subseteq Est(A\cap B)$
> 6. $Est(A)\cap Est(B)=Est(A\cap B)$
> 7. $Fr(A\cup B)\subseteq Fr(A)\cup Fr(B)$
> 8. $Fr(A\cap B)\subseteq Fr(A)\cap Fr(B)$

> [!dim]
> 1. Sia $x\in Int(A)\cup Int(B)$. Allora $\exists U,\in \tau \mid x\in U\subseteq A$. Ma $A\subseteq A\cup B$ pertanto $x\in U\subseteq A\subseteq A\cup B\implies x\in Int(A\cup B)$
> 2. Supponiamo $x\in Int(A)\cap Int(B)$. Allora $\exists U\in \tau \mid x\in U\subseteq A$ e $\exists U'\in \tau \mid x\in U'\subseteq B$. 
>    Osservo che $U\cap U'\in \tau$ e $x\in U\cap U'\subseteq A\cap B\implies x\in Int(A\cap B)$. 
>    Viceversa se $x\in Int(A\cap B)$ Allora $\exists U\in \tau \mid x\in U\subseteq A\cap B$. Quindi $U\subseteq A,U\subseteq B\implies x\in Int(A)\cup Int(B)$
> 3. $\overline{A}\cup \overline{B}$ è chiuso in quanto unione di chiusi, inoltre $A\cup B\subseteq\overline{A}\cup \overline{B}$ quindi $\overline{A\cup B}\subseteq\overline{A}\cup \overline{B}$. (ricordo che la chiusura di un insieme $A$ è il più piccolo chiuso che contiene $A$).
>    Viceversa, $A,B\subseteq A\cup B$ e $\overline{A},\overline{B}\subseteq\overline{A\cup B}\implies\overline{A}\cup \overline{B}\subseteq\overline{A\cup B}$