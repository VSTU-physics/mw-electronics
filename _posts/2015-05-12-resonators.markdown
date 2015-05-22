---
layout: post
title: Возбуждение объёмных резонаторов
date: 2015-05-12T08:18:34+03:00
---

Пусть поле резонатора занимает конечный объём $$ V $$ и не проникает за пределы некоторой замкнутой поверхности $$ S $$ (на ней поле уже обращается в ноль). Собственные моды резонатора для заданной геометрии можно считать известными:

$$
	\vec{E}_n(\vec{r}, t) = \Re (\vec{E}_n(\vec{r})e^{-i\omega_n t}),\quad
	\vec{H}_n(\vec{r}, t) = \Re (\vec{H}_n(\vec{r})e^{-i\omega_n t}),\quad
	\omega = \omega' - i\omega'' = \omega'(1 - i/2Q).
$$

Задача состоит в определении полей, создаваемых в резонаторе известным током $$ \vec{j} $$.

Далее все действия разворачиваются в поле комплексных амплитуд. Покажем для начала, что собственные моды ортогональны:

$$
	\int_V \varepsilon (\vec{E}_n, \vec{E}_m^*) dV = \langle \vec{E}_m, \varepsilon\vec{E}_n \rangle = \langle \vec{H}_m, \mu\vec{H}_n \rangle = \delta_{mn} N_n.
$$

Начнём с уравнений Максвелла

$$
	\begin{cases}
		\operatorname{rot} \vec{E}_n = i\omega_n\mu\vec{H}_n,\\
		\operatorname{rot} \vec{H}_n = -i\omega_n\varepsilon\vec{E}_n,\\
	\end{cases}
$$

$$
	\operatorname{div} [\vec{E}_n, \vec{H}_m^*] = (\vec{H}_m^*, \operatorname{rot}\vec{E}_n) - (\vec{E}_n, \operatorname{rot} \vec{H}_m^*) = i\omega_n\mu(\vec{H}_m^*, \vec{H}_n) - i\omega_m\varepsilon(\vec{E}_m^*, \vec{E}_n),
$$

Выполнив замену идексов и сопряжение, получим

$$
	\operatorname{div} [\vec{E}_m^*, \vec{H}_n] = -i\omega_m\mu(\vec{H}_m^*, \vec{H}_n) + i\omega_n\varepsilon(\vec{E}_m^*, \vec{E}_n).
$$

Интегралы от левых частей по объему $$ V $$ равны нулю, так как поле на поверхности $$ S $$ обращается в ноль. Поэтому

$$
	\begin{cases}
		\omega_m\langle \vec{E}_m, \varepsilon\vec{E}_n \rangle = \omega_n \langle \vec{H}_m, \mu\vec{H}_n \rangle,\\
		\omega_n\langle \vec{E}_m, \varepsilon\vec{E}_n \rangle = \omega_m \langle \vec{H}_m, \mu\vec{H}_n \rangle,\\
	\end{cases}
$$

В случае невырожденных колебаний эта система равенств эквивалентна

$$
	\langle \vec{E}_m, \varepsilon\vec{E}_n \rangle = \langle \vec{H}_m, \mu\vec{H}_n \rangle = \delta_{mn} N_n.
$$

В случае вырожденных колебаний среди колебаний с одинаковой частотой всегда можно выбрать ортогональную систему.

Рассмотрим теперь возбуждение резонатора электронным потоком с частотой $$ \omega $$. Уравнения Максвелла имеют вид

$$
	\begin{cases}
		\operatorname{rot} \vec{E} = i\omega\mu\vec{H},\\
		\operatorname{rot} \vec{H} = -i\omega\varepsilon\vec{E} + \vec{j},
	\end{cases}
$$

а решение будем искать в виде разложения по собственным колебаниям резонатора:

$$
	\vec{E} = \sum_n A_n\vec{E}_n - \operatorname{grad} \phi,\quad \vec{H} = \sum_n B_n\vec{H}_n,
$$

где потенциал $$ \phi $$ учитывает поле потока. Подставим и получим:

$$
	\begin{cases}
		\sum_n\operatorname{rot} A_n\vec{E}_n = i\omega\mu\sum_m B_m\vec{H}_m,\\
		\sum_n\operatorname{rot} B_n\vec{H}_n = -i\omega\varepsilon(\sum_m A_m\vec{E}_m - \operatorname{grad}\phi) + \vec{j},
	\end{cases}
$$

$$
	\begin{cases}
		\sum_n A_n\omega_n\vec{H}_n = \omega\sum_m B_m\vec{H}_m,\\
		\sum_n B_n\omega_n\vec{E}_n = \omega(\sum_m A_m\vec{E}_m - \operatorname{grad}\phi) + \frac{i}{\varepsilon}\vec{j}.
	\end{cases}
$$

Теперь воспользуемся ортогональностью собственных мод резонатора:

$$
	\begin{cases}
		A_n\omega_n = \omega B_n,\\
		B_n N_n\omega_n = \omega N_n A_n - \omega \langle\vec{E}_n, \operatorname{grad}\phi\rangle + i\langle\vec{E}_n,\frac{1}{\varepsilon}\vec{j}\rangle.
	\end{cases}
$$

Заметим, что

$$
	\langle\vec{E}_n, \operatorname{grad}\phi\rangle = 0.
$$

В итоге получаем систему

$$
	\begin{cases}
		\omega_n A_n - \omega B_n = 0,\\
		\omega A_n - \omega_n B_n = - \frac{i}{N_n}\langle\vec{E}_n,\frac{1}{\varepsilon}\vec{j}\rangle,
	\end{cases}
$$

из которой имеем

$$
	A_n = \frac{i\omega\langle\vec{E}_n,\frac{1}{\varepsilon}\vec{j}\rangle}{N_n(\omega_n^2 - \omega^2)}, \quad
	B_n = \frac{i\omega_n\langle\vec{E}_n,\frac{1}{\varepsilon}\vec{j}\rangle}{N_n(\omega_n^2 - \omega^2)}.
$$

Введём обозначение

$$
	I_n = i\frac{\langle\vec{E}_n,\frac{1}{\varepsilon}\vec{j}\rangle}{N_n},
$$

тогда

$$
	A_n = \frac{\omega}{\omega_n^2 - \omega^2}I_n, \quad
	B_n = \frac{\omega_n}{\omega_n^2 - \omega^2}I_n.
$$

Также можно ввести величины $$ \omega_{-n} = -\omega_n $$,

$$
	C_n = \frac{I_n}{2(\omega_n-\omega)},
$$

при помощи которых можно представить $$ A_n $$ и $$ B_n $$ в виде

$$
	A_n = C_n + C_{-n},\quad B_n = C_n - C_{-n}.
$$

Пусть теперь $$ \vec{j}(\omega) $$ медленно меняется со временем. Тогда коэффициенты разложения становятся функциями времени:

$$
	\begin{cases}
		\omega_n A_n - \omega B_n - iB_n'  = 0,\\
		\omega A_n + iA_n' - \omega_n B_n = - \frac{i}{N_n}\langle\vec{E}_n,\frac{1}{\varepsilon}\vec{j}\rangle,
	\end{cases}
$$

Вычитая из первого уравнения второе, получим

$$
	\omega_n (A_n + B_n) - \omega(A_n + B_n) - i(A_n + B_n)' = \frac{i}{N_n}\langle\vec{E}_n,\frac{1}{\varepsilon}\vec{j}\rangle,
$$

$$
	C_n' - i (\omega - \omega_n) C_n = -\frac{1}{2N_n}\langle\vec{E}_n,\frac{1}{\varepsilon}\vec{j}\rangle,
$$

Это уравнение называется уравнением возбуждения резонаторов.