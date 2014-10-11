---
layout: post
title:  "Связанные волны в замедляющих системах"
date:   2014-10-06 13:30:00
categories: колебания волны
---

В электродинамике СВЧ при рассмотрении линий передачи обычно от волноводных
линий стараются перейти к эквивалентным двухпроводным линиям передачи. Поэтому
мы сразу приступим к рассмотрению волн в двухпроводной линии передачи.

## Уравнение однородной линии передачи в виде нормальных волн

Рассмотрим четырехполюсник с погонными параметрами: R, L, C, G. Согласно
правилам Кирхгофа:

$$\begin{cases}
 -U+IR\Delta z +L\Delta z\frac{\partial I}{\partial t}+U+\Delta U=0; \\
 I-C\Delta z\frac{\partial U}{\partial t}-UG\Delta z-I-\Delta I=0.
\end{cases}$$

Разделим оба уравнения на $$\Delta z \to 0$$ и предположим, что
в замедляющей структуре нет потерь (R=G=0). Получим:

$$\pm \begin{cases}
\frac{\partial U}{\partial z}=-L\frac{\partial I}{\partial t}\\
\frac{\partial I}{\partial z}=-C\frac{\partial U}{\partial t} \; |*Z_0=\sqrt{L/C}
\end{cases}$$

Имеем

$$\frac{\partial }{\partial z}(U\pm Z_0I)=\mp \frac{\partial }
{\partial z}(U\pm Z_0I)\sqrt{LC}.$$

Введём обозначение $$b_{\pm}(z,t)=K(U\pm Z_0I)$$ --- нормальные волны, где
постоянная К выбирается так, что

$$ \bar{P}=\bar{U}\bar{I}=(\bar{b_+})^2-(\bar{b_-})^2.$$

$$\Rightarrow \; K=1/2\sqrt{Z_0}$$, тогда можно записать нормальные
волны как

$$b_{\pm}(z,t)=\frac{1}{2\sqrt{Z_0}}(U\pm Z_0I).$$

В введённых обозначениях система примет вид:

$$\frac{\partial }{\partial z}b_{\pm}(z,t)=\mp \sqrt{LC}\frac{\partial }
{\partial t} b_{\pm}(z,t).$$

Сделаем разделение пространственной и временной координаты:

$$b_{\pm}(z,t)=\dot{a_{\pm}}(z)e^{i\omega t}+\dot{a_{\pm}}^*(z)e^{-i
\omega t}, $$

где $$\dot{a_{\pm}}(z)=\frac{1}{4\sqrt{Z_0}}(U\pm Z_0I), U=Re(\dot{U}
e^{i\omega t}), I=Re(\dot{I}e^{i\omega t}), \; \omega$$ --- произвольная
константа (имеющая смысл частоты).\\
Система перепишется в виде:

$$\begin{cases}
\frac{\partial }{\partial z}\dot{a_{\pm}}(z)=\mp i\beta\dot{a_{\pm}}
(z);\\
\frac{\partial }{\partial z}\dot{a_{\pm}}^*(z)=\pm i\beta
\dot{a_{\pm}}^*(z).
\end{cases}$$

Решение системы будем искать в виде $$\dot{a_{\pm}}(z)=\dot{a_{\pm}}(0)e^{
\mp i\beta z},$$ тогда

$$b_{\pm}(z,t)=\dot{a_{\pm}}(0)e^{i(\omega t \mp \beta z)}+
\dot{a_{\pm}}^*(0)e^{-i(\omega t \mp \beta z)}, $$

где $$b_{+}(z,t)$ --- прямая волна (вдоль оси z), $b_{-}(z,t)$$ ---
обратная, $$\beta = \omega\sqrt{LC}$$ --- постоянная распространения
(волновое число).\\
Фазовая и групповая скорости запишутся соответственно:

$$v_f=\pm \frac{\omega}{\beta}=\pm\frac{1}{\sqrt{LC}},$$

$$v_{gr}=\pm \frac{d\omega}{d\beta}=\pm \left[
\frac{\partial \frac{\omega}{\beta}}{\partial\omega}\right]^{-1}=
\pm \left[\frac{1-\beta \frac{\partial v_f}{\partial \omega}}{v_f}
\right]^{-1}.$$

Предоставляем читателям самим убедиться, что среднюю мощность  $$\bar{P}=
(\bar{b_+})^2-(\bar{b_-})^2$$ можно выразить следующим образом:
$$\bar{P}=2*(|a_+(0)|^2+|a_-(0)|^2) \; \Rightarrow $$

$$\frac{d \bar{P}}{d z}=0.$$


## Уравнение связанных волн для замедляющей структуры. Направленный ответвитель


Введём некоторые предположения (соответствующие геометрии рассматриваемой
задачи):

1. волны распространяются без потерь и слабо связаны друг с другом;
2. в каждой структуре возбуждается только одна из мод (прямая или
обратная), тогда $$\bar{P} \approx 2*(|a_+(z)|^2 \pm |a_-(z)|^2)$$;
3. коэффициенты связи на ед. длины $$c_{12}, c_{21}$$ известны и
не зависят от z;
4. волноводы близки по размерам ($$\beta_1 \approx \beta_2$$).

Тогда система для данного случая запишется в виде:

$$\begin{cases}
\frac{da_1}{dt}=-i\beta_1a_1+c_{12}a_2;\\
\frac{da_2}{dt}=-i\beta_2a_2+c_{21}a_1.
\end{cases}$$

Из условия $$\frac{d \bar{P}}{d z}=0: \frac{d}{dz}(a_1a_1^* \pm
a_2a_2^*)=0$$ легко можно получить связь для коэффициентов связи:

$$\begin{cases}
c_{12}=\mp c_{21}^*;\\
c_{12}^*=\mp c_{21}.
\end{cases}$$

Решение ищем в виде $$\sim \exp(\gamma z)$$:

$$\left|
\begin{array}{cc}
-i\beta_1-\gamma & c_{12}\\
c_{21} & -i\beta_2-\gamma
\end{array}\right|=0; $$

откуда нетрудно получить

$$\gamma_{1,2}=-i\frac{\beta_1+\beta_2}{2} \pm \sqrt{\mp |c_{12}|^2
- \left(\frac{\beta_1-\beta_2}{2} \right)^2},$$

$$a_1(z)=d_1e^{\gamma_1z}+d_2e^{\gamma_2z}. $$


## Направленный ответвитель для пассивной связи волн


Волны распространяются в одном направлении, $$a_1(0), a_2(0)$$ ---
считаются известными.\\
Введём следующие обозначения:

$$\gamma_{1,2} = -i(\beta_a \pm \beta_b), \; \beta_b =
\sqrt{|c_{12}|^2+\beta_d^2};$$

$$\beta_a=\frac{\beta_1 + \beta_2}{2}, \; \beta_d=\frac{\beta_1 -
\beta_2}{2}. $$

Тогда

$$\begin{cases}
a_1(z)=d_1e^{\gamma_1z}+d_2e^{\gamma_2z}; \\
a_2(z)=\frac{1}{c_{12}}[\gamma_1d_1e^{\gamma_1z}+\gamma_2d_2e^{\gamma_2z}
+i\beta_1(d_1e^{\gamma_1z}+d_2e^{\gamma_2z}).
\end{cases}$$

Подставляем ГУ

$$\begin{cases}
a_1(0)=d_1+d_2; \\
a_2(0)=\frac{1}{c_{12}}[\gamma_1d_1+\gamma_2d_2
+i\beta_1(d_1+d_2);
\end{cases}$$

откуда

$$\begin{cases}
d_1=\frac{c_{12}a_2(0)-a_1(0)(i\beta_1+\gamma_2)}{\gamma_1-\gamma_2}; \\
d_2=a_1(0)-d_1.
\end{cases}$$

Таким образом, получаем

$$a_1(z)=d_1e^{\gamma_1z}+d_2e^{\gamma_2z} = d_1
e^{-iz(\beta_a+\beta_b)}+d_2e^{-iz(\beta_a-\beta_b)}=
e^{-i\beta_az}[(d_1+d_2)\cos(\beta_bz)+i(d_2-d_1)\sin(\beta_bz)];$$

Теперь немного преобразуем данное выражение

$$d_2-d_1=a_1(0)-\frac{i}{\beta_b}(c_{12}a_2(0)-a_1(0)
(i\beta_1+\gamma_2) $$

$$i\gamma_2 = \beta_a - \beta_b $$

$$\beta_1 - \beta_a = \beta_d $$

$$\Rightarrow \; a_1(z)=e^{-i\beta_az}[a_1(0)(\cos(\beta_bz)-
i\frac{\beta_d}{\beta_b}\sin(\beta_bz))-\frac{ic_{12}}{\beta_b}
a_2(0)*i\sin(\beta_bz)]$$

Окончательно получаем

$$a_1(z)=e^{-i\beta_az}[a_1(0)(\cos(\beta_bz)-
i\frac{\beta_d}{\beta_b}\sin(\beta_bz))+a_2(0)\frac{c_{12}}
{\beta_b}\sin(\beta_bz)] $$

Рассмотрим ГУ $$a_2(0) = 0$$, тогда:

$$P_1(z) = 2a_1(z)a_1^*(z)= \cos^2(\beta_bz)+\left(
\frac{\beta_d}{\beta_b} \right)^2\sin^2(\beta_bz)=
\cos^2(\beta_bz)+\frac{\beta_b^2-|c_{12}|^2}{\beta_b^2}
\sin^2(\beta_bz);$$

$$P_1(z) =1-F\sin^2(\beta_bz);$$

$$P_2(z) =1 - P_1(z),$$

где F --- коэффициент передачи, показывающий максимальную
величину, на которую можно разделить мощность при передаче из
одного волновода в другой.



## Направленный ответвитель для активной связи волн


В этом случае волны распространяются в разных направлениях.\\
Аналогично предыдущему пункту можно показать справедливость следующих
формул:

$$\gamma_{1,2} = -i\beta_a \pm \beta_b, \; \beta_b =
\sqrt{|c_{12}|^2-\beta_d^2};$$

ГУ: $$a_2(L)=0$$

$$P_1(z) - P_2(z) = const, $$

$$P_1(z)=\frac{1+F\sinh^2(\beta_b(z-L))}{1+F\sinh^2(\beta_bL)}. $$
