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