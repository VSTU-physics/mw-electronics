---
layout: post
title:  "Нормальные волны в электронных пучках"
date:   2014-10-23 15:00:00
categories: колебания волны
---
Для полного описания эл-маг волн в электронном пучке необходимо записать
уравнения Максвелла, закон сохранения заряда и 2-й закон Ньютона:

$$\begin{cases}
rot\vec{H}=\vec{j}+\epsilon_0\frac{\partial \vec{E}}{\partial t};\\
rot\vec{E}=-\mu_0\frac{\partial \vec{H}}{\partial t};\\
div\vec{E}=\frac{\rho}{\epsilon_0};\\
div\vec{H}=0;\\
div\vec{j}+\frac{\partial \rho}{\partial t}=0;\\
\vec{j}=\rho\vec{v};\\
\frac{d \vec{v}}{d t}=\frac{\partial \vec{v}}{\partial t}+
\frac{\partial \vec{v}}{\partial x}v_x+...=\frac{e}{m}(\vec{E}+
[\vec{v},\vec{B}]).
\end{cases}$$

Для решения подобных задач существует два подхода --- гидродинамическое и 
корпускулярное приближения.


Корпускулярное приближение в данном сллучае неприменимо, т.к. в данном
приближении количество уравнений = количеству частиц в потоке ($$\sim 
10^{23}$$).


В гидродинамическом приближении поток предполагается однородным, а не 
состоящим из отдельных частиц.

! Предположим, что все переменные составляющие << постоянных 
компонент (усреднённых по времени), кроме того, произведением переменных 
компонент пренебрегаем --- это есть суть приближения малого сигнала.


! Присутствует явление интерференции, т.е. $$\forall \; \vec{a}
(\vec{r},t)=\vec{a_0}(\vec{r})+\vec{a_1}(\vec{r})e^{i\omega t}$$.


Система распадается на 2 --- пространственную: 

$$\begin{cases}
rot\vec{H_0}=\vec{j_0};\\
rot\vec{E_0}=0;\\
div\vec{E_0}=\frac{\rho_0}{\epsilon_0};\\
div\vec{H_0}=0;\\
div\vec{j_0}=0;\\
\vec{j_0}=\rho_0\vec{v_0};\\
\frac{\partial \vec{v_0}}{\partial x}v_{x0}+...=\frac{e}{m}(\vec{E_0}+
[\vec{v_0},\vec{B_0}]).
\end{cases}$$

и временную:

$$\begin{cases}
rot\vec{H_1}=\vec{j_1}+i\omega\epsilon_0\vec{E_1};\\
rot\vec{E_1}=-\mu_0i\omega\vec{H_1}; \; (1)\\
div\vec{E_1}=\frac{\rho_1}{\epsilon_0};\\
div\vec{H_1}=0;\\
div\vec{j_1}=-i\omega\rho_1;\\
\vec{j_1}=\rho_0\vec{v_1}+\rho_1\vec{v_0};\\
i\omega\vec{v_1}+
\frac{\partial \vec{v_0}}{\partial x}v_{1x}+...=\frac{e}{m}(\vec{E_1}+
[\vec{v_1},\vec{B_0}]+[\vec{v_0},\vec{B_1}]). \; (2)
\end{cases}$$

Полагаем величины с 0-м индексом известными, таким образом, необходимо 
найти переменные составляющие.

## Волны пространственного заряда в одномерном электронном потоке на участке дрейфа

Пусть имеется однородное постоянное бесконечное магнитное поле, 
направленное вдоль оси z. Отсюда следует, что $$\forall \; e^-$$ будут 
двигаться вдоль оси z: $$\vec{v_0}||\vec{v_1}||\vec{B_0}$$, тогда (2) 
перепишется в виде

$$i\omega\vec{v_1}+
\frac{\partial \vec{v_0}}{\partial z}v_{1z}+
\frac{\partial \vec{v_1}}{\partial z}v_{0z}=\frac{e}{m}\vec{E_1}. $$ 

! Положим, что пучок бесконечен в плоскости x0y, т.е. все величины 
однородны в этой плоскости ($$\frac{\partial }{\partial x}=
\frac{\partial }{\partial y}=0 $$).


Тогда $$E_{1x},E_{1y},H_{1x},H_{1y}$$ ведут себя так, как будто потока нет;
$$\Rightarrow \;$$ уравнение (1) избыточно. 

$$0=j_{1z}+i\omega\epsilon_0E_{1z}; $$

$$E_{1z}=\frac{i}{\omega\epsilon_0}j_{1z}. $$

! Кроме того, полагаем, что пучок находится на участке дрейфа, т.е. 
все усреднённые по времени силы = 0 $$\Rightarrow \;$$ $$j_0,\rho_0,v_0 = 
Const.$$


Окончательно наша система примет следующую форму

$$\begin{cases} 
\left(\frac{d}{dz}+i\frac{\omega}{v_{0z}}\right)v_{1z}=
\frac{ie}{\omega\epsilon_0mv_{0z}}j_{1z}; \\
\left(\frac{d}{dz}+i\frac{\omega}{v_{0z}}\right)j_{1z}=
i\frac{\omega\rho_0}{v_{0z}}v_{1z}.
\end{cases}$$

Для того, чтобы представить её в виде нормальных волн, введём некоторые 
обозначения: $$U_1=\left|\frac{m}{e}\right|v_0v_1$$ --- кинетическое 
напряжение пучка; $$\omega_p^2=\left|\frac{e}{m}\frac{\rho_0}
{\epsilon_0}\right|$$ --- плазменная частота; $$\beta_p=\frac{\omega_p}
{v_{0z}}, \beta_e=\frac{\omega}{v_{0z}}$$ --- постоянные плазменных и 
электронных колебаний, $$\omega$ --- частота, на которой рассматривается 
процесс, $$Z_0=\frac{2\beta_pU_0}{j_0\beta_e}$$ --- характеристическое 
сопротивление электронного пучка.


С учётом переобозначений

$$i\frac{\beta_p^2}{\beta_e}\frac{2U_1}{j_0}j_{1z}=E_{1z}; \; (3) $$

$$\pm\begin{cases} 
\left(\frac{d}{dz}+i\beta_e\right)U_1=i\beta_pZ_0 | *(-j_{1z})\\
\left(\frac{d}{dz}+i\beta_e\right)(-j_{1z})=i\frac{\beta_p}{Z_0}U_1 | 
*Z_0
\end{cases}$$

$$\left(\frac{d}{dz}+i\beta_e\right)(U_1\pm Z_0(-j_{1z})=
\pm i\beta_p (U_1\pm Z_0(-j_{1z}). $$

Аналогичным приёмом, использовавшимся в предыдущих лекциях, вводим
$$a_{\pm}=K(U_1\pm Z_0(-j_{1z})$$, где К определяется из условия:

$$P=\frac{1}{2}Re(U_1(-j_{1z}))=2(|a_+|^2-|a_-|^2). $$

Т.е. 

$$K=\frac{1}{4\sqrt{Z_0}}.$$

$$a_{\pm}=\frac{1}{4\sqrt{Z_0}}(U_1\pm Z_0(-j_{1z}); $$

$$\left[\frac{d}{dz}+i(\beta_e\mp \beta_p)\right]a_{\pm}=0; $$

$$a_{\pm}=a_{\pm}(0)\exp[-i(\beta_e\mp \beta_p)z]. $$

Фазовую и групповую скорости предоставляем вдумчивому читателю найти 
самому.
$$a_+$$ --- быстрая волна пространственного заряда, $$a_-$$ --- медленная.


При возбуждении только быстрых волн ($$a_-=0$$) $$U_1$$ и $$j_{1z}$$ синхронны
(процесс возможен при подаче энергии  $$U_1$$ в систему). При возбуждении медленных волн --- противофазны.


## Нормальные волны простанственного заряда в цилиндрическом пучке на участке дрейфа


! В плоскости x0y поток имеет конечные размеры.\\


Рассмотрим электронный поток радиуса b в трубке радиуса a. Система, 
описывающая поток, запишется точно также, как и в предыдущем пункте. 
Отличие состоит в том, что в данном случае нет однозначной связи между 
$$j_{1z}$$ и $$E_{1z}$$.


! Предположим, что зависимость от расстояния выражается $$\sim e^{-i\beta 
z}$$, где $$\beta$$ --- постоянная распространения. Тогда имеют место 
следующие соотношения:

$$j_1=\frac{\omega}{\beta}\rho; $$

$$j_1=\rho_0v_1+\rho_1v_0;$$

$$i(\omega v_1 - \beta v_0v_1) = \frac{e}{m}E_1.$$

Откуда нетрудно получить связь между $$j_{1z}$$ и $$E_{1z}$$:

$$i\frac{(\beta_e-\beta)^2}{\beta_e}\frac{2U_1}{j_0}j_{1z}=E_{1z}.$$

Внимательный читатель заметит, что похожая формула получалась для 
однородного потока (см. формулу (3)). Следовательно, дальнейшие
выкладки будут аналогичными, если произвести замену в (3)

$$ \beta_p \to \beta_q=R\beta_p,$$

где $$R=\frac{\beta_e-\beta}{\beta_p}$$ --- коэффициент понижения 
(редукции) плазменной частоты.

Таким образом, задача сводится к нахождению R.


! $$H_{1z}=0$$ (т.к. пучок движется вдоль оси z, и эта магнитная 
составляющая не влияет на поток).


! Поток имеет осевую симметрию.


Тогда 

$$ rot \vec{H_1}=
\left|
\begin{array}{ccc}
\frac{1}{r}\vec{e_r} & \vec{e_{\phi}} & \frac{1}{r}\vec{e_z}\\
\frac{\partial}{\partial r}&i\beta  &-i\beta  \\
H_r& rH_{\phi} &0
\end{array}\right|=\{i\beta H_{\phi},-i\beta H_r,\frac{1}{r}
((rH_{\phi})'_r-i\beta H_r)\};$$

$$E_{1z}=i\frac{(\omega-\beta v_0)^2}{\omega \epsilon_0 \omega_p^2}j_{1z} 
;$$

$$ rot \vec{E_1}=
\left|
\begin{array}{ccc}
\frac{1}{r}\vec{e_r} & \vec{e_{\phi}} & \frac{1}{r}\vec{e_z}\\
\frac{\partial}{\partial r}&in  &-i\beta  \\
E_r& rE_{\phi} &E_z
\end{array}\right|=\{\frac{i}{r}(\beta r E_{\phi}+
nE_z),-i\beta E_r-\frac{\partial E_z}{\partial r},\frac{1}{r}
((rE_{\phi})'_r-in E_r)\}.$$

Система примет вид

$$\begin{cases}
\beta H_{1\phi}=\omega \epsilon_0 E_{1r};\\
\beta H_{1r}=-\omega \epsilon_0 E_{1\phi};\\
(rH_{1\phi})'_r-i\beta H_{1r}=rE_{1z}i\omega \epsilon_0\left(
1-\frac{\omega_p^2}{(\omega -\beta v_0)^2} \right);\\
\frac{n}{r}E_{1z}+\beta E_{1\phi}=-\mu_0\omega H_{1r};\\
i\beta E_{1r}+\frac{\partial E_{1z}}{\partial r}=i\mu_0\omega H_{1\phi}
;\\
(rE_{\phi})'_r-in E_r=0.
\end{cases}$$

После простых подстановок можно получить уравнение Бесселя относительно 
$$E_{1z}$$:

$$\frac{\partial^2 E_{1z}}{\partial r^2}+\frac{1}{r}
\frac{\partial E_{1z}}{\partial r}+\left(T^2-\frac{n^2}{r^2}\right)
E_{1z}=0, $$

$$T^2=\left[\left(\frac{\omega}{c}\right)-\beta^2\right]
\left(1-\frac{\beta_p^2}{(\beta_e-\beta)^2}\right), $$

$$c^2=\frac{1}{\epsilon_0 \mu_0}. $$

Решение ищется в виде

$$E_{1z}=AJ_n(Tr)+BN_n(Tr), $$

где $$J_n(x)$$ --- функция Бесселя, $$N_n(x)$$ --- функция Неймана.


! $\left(\frac{\omega}{c}\right)^2<<\beta^2$, т.е. $
\beta \sim \beta_e=\frac{\omega}{v_0}$, тогда R можно определить 
из:

$$T^2=\beta\left(\frac{1}{R}-1\right). $$ 

Т определяется из ГУ:

$$\begin{array}{ccc}
E_{1z}(Ta)=0; & E^I_{1z}(Tb)=E^{II}_{1z}(Tb);\\
H^I_{1\phi}(Tb)=H^{II}_{1\phi}(Tb); & \rho^{II}=\beta_p=0.
\end{array}$$
