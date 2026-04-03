---
tags: [nograph, notags, nobacklinks, noexp, mainpage, nolist]
title: "Appunti di Metodi Numerici per Data Science"
description: "Appunti di Metodi Numerici per Data Science"
---

Supervisionamento 
$X\in \mathbb{R}^{n \times m}$
$y\in\begin{cases} \mathbb{R}^n \text{ regressione}\\ \mathbb{Z}^n \text{ classificazione} \end{cases}$

$D=\{ (x_{i},y_{i})\, \vert \,x_{i}\in \mathbb{R}^m, y_{i}\in \mathbb{R} \}\to$ regressione
$D=\{ (x_{i},y_{i})\, \vert \,x_{i}\in \mathbb{R}^m, y_{i}\in \mathbb{Z} \}\to$ classificazione

Ad esempio, se ho 10 elementi nel set di training in un caso di classificazione, avrò $x_{i}\in \mathbb{R}^{2}$ e  $y_{i}\in \mathbb{Z}$
Quindi il dataset di training è $D_{t}=\{ (x_{i},y_{i}) \, \vert \,i=1,\dots,10 \,\wedge\,x_{i}\in \mathbb{R}^2,y_{i}\in \mathbb{Z} \}$
![[Excalidraw/Drawing 2026-03-26 10.52.32.excalidraw|Drawing 2026-03-26 10.52.32.excalidraw]]

Ad esempio, se 0=nulla, 1=occhiali, 2=lenti a contatto, il nostro modello non prevede al meglio un elemento di test (quadratino)

Nel caso della regressione, i pallini verdi sono nel set di training, quelli rossi sono del test
![[Excalidraw/Drawing 2026-03-26 10.59.46.excalidraw|Drawing 2026-03-26 10.59.46.excalidraw]]

Possiamo osservare che in questo caso, il modello ha un errore basso, cioè prevede abbastanza bene i punti sulla retta.

Ovviamente nella partizione del dataset intero, la maggior parte di questo viene collocato nell'insieme di training, di solito con proporzioni 70/30
$[\underset{{ \sim 70\% }}{\text{ training }} | \underset{\sim 30\%}{\text{ test }}]$

A volte il dataset si tripartiziona, con un set di "validation", per eseguire un finetuning degli iperparametri.

L'iperparametro è ciò che definisce il modello. 

Ad esempio, in un esempio di regressione lineare cerchiamo $y=\beta_{0}+\beta_{1}x$. $\beta_{0}$ e $\beta_{1}$ sono i parametri. 

Bias e varianza
![[Excalidraw/bias-varianza|1000]]



Valore Stimato: $\mathbb{E}[T]$ è la media dei valori assunti da $T$
Uno stimatore $T:\mathbb{R}^n\to n$ (ossia una funzione statistica) è corretto se si avvicina al suo valore teorico $\theta_{0}$
La deviazione standard campionaria è $S=\sqrt{ \frac{1}{N-1}\sum \limits_{i=1}^n(x_{i}-\overline{x})^2 }$


Coefficiente di Correlazione di Pearson:
$\displaystyle\rho_{XY}=\frac{cov(X,Y)}{\sigma_{X}\sigma_{Y}}=\frac{\sum \limits^N_{i=1}(x_{i}-\overline{x})(y_{i}-\overline{y})}{\sqrt{  \sum \limits^N_{i=1}(x_{i}-\overline{x})^2}\sqrt{  \sum \limits^N_{i=1}(y_{i}-\overline{y})^2}}$

Osservo che $cov(X,Y)=\mathbb{E}[(X-\mu_{X})(Y-\mu_{Y})]=\mathbb{E}[XY-\mu_{Y}X-\mu_{X}Y+\mu X\mu Y]=\mathbb{E}[XY]-\mu_{Y}\mathbb{E}[X]-\mu_{X}\mathbb{E}[Y]-\mu X\mu Y$


> [!teo] Teorema
> Risulta che valgono tre proprietà di $\rho XY:$
> 1. $\lvert \rho_{XY} \rvert\leq 1$
> 2. $\lvert \rho _{XY} \rvert=1\iff \exists a\not=0,b\in \mathbb{R}|y=aX+b$
> 3. se $\rho_{XY}=0$ allora $X,Y$ non sono linearmente correlate

> [!dim]
> Definisco $U=\frac{X-\mathbb{E}[X]}{\sigma_{X}}$, $V=\frac{Y-\mathbb{E}[Y]}{\sigma_{Y}}$
> Allora $\rho=\mathbb{E}[UV]$ e in virtù della disuguaglianza di Cauchy-Schwartz:
> $\lvert \rho_{XY} \rvert=\lvert \mathbb{E}[UV] \rvert\leq \sqrt{ \mathbb{E}[U^2]\mathbb{E}[V^2] }=1$ da cui la proprietà 1.
> Se $\lvert \rho_{XY} \rvert=1$ allora $V=\lambda U\implies\frac{Y-\mathbb{E}[Y]}{\sigma_{Y}}=\lambda\frac{X-\mathbb{E}[X]}{\sigma_{X}}$ da cui la 2.
> .Per dimostrare la 3. ci basta supporre per assurdo che ci sia una una correlazione lineare. Allora $Y=\lambda U$, ma per la proprietà 2 $\lvert \rho \rvert=1$, da cui l'assurdo. 

