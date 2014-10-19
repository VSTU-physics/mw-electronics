var RungeKutta = (function () {

    var sum = function(arr1, arr2) {
        var length = Math.min(arr1.length, arr2.length),
            result = [],
            i = 0;
        for (i = 0; i < length; i += 1) {
            result[i] = arr1[i] + arr2[i];
        }
        return result;
    }

    var rk4Step = function (f, t, y, step) {
        var k1, k2, k3, k4, dy,
            half   = function (x) { return x / 2; },
            sixth  = function (x) { return x / 6; },
            double = function (x) { return x * 2; };
            dt     = function (x) { return x * step; };

        k1 = f(y, t).map(dt);
        k2 = f(sum(y, k1.map(half)), t + dt(0.5)).map(dt);
        k3 = f(sum(y, k2.map(half)), t + dt(0.5)).map(dt);
        k4 = f(sum(y, k3), t + dt(1)).map(dt);
        dy = [k1, k2.map(double), k3.map(double), k4].reduce(sum).map(sixth);
        return sum(y, dy);
    }


    var rk4 = function (f, start, t) {
        var result = [start], y = start,
            k1, k2, k3, k4, dt, dy, i = 1,
            half  = function (x) { return x / 2; },
            sixth = function (x) { return x / 6; },
            double = function (x) { return x * 2; };

        for (i = 1; i < t.length; i += 1) {
            dt = function (x) { return x * (t[i] - t[i - 1]); };
            k1 = f(y, t[i - 1]).map(dt);
            k2 = f(sum(y, k1.map(half)), t[i - 1] + dt(0.5)).map(dt);
            k3 = f(sum(y, k2.map(half)), t[i - 1] + dt(0.5)).map(dt);
            k4 = f(sum(y, k3), t[i - 1] + dt(1)).map(dt);
            dy = [k1, k2.map(double), k3.map(double), k4].reduce(sum).map(sixth);

            y = sum(y, dy);
            result[i] = y;
        }
        return result;
    }
    return {odeint : rk4, intStep : rk4Step};
})();

var Primitives = (function () {

    var lineFunction = d3.svg.line()
          .x(function(item) { return item.x || item[0]; })
          .y(function(item) { return item.y || item[1]; })
          .interpolate('linear');

    var Pendulum = function (svg, origin, length, coords) {
        var rod, bob;
        this.length = length;
        this.r = length / 20;

        this.draw = function() {
            rod = svg.append('path')
                              .attr('stroke', 'black')
                              .attr('stroke-width', 1);
            bob = svg.append('circle')
                              .data([this])
                              .attr('r', function(p) {
                                  return p.r; })
                              .attr('opacity', 1)
                              .attr('fill', 'black');
            rod.attr('d', lineFunction([origin, this.position()]));
            bob.attr('cx', function(p) { return p.x(); })
               .attr('cy', function(p) { return p.y(); })
        }

        this.update = function(newCoords, newOrigin) {
            coords = newCoords;
            origin = newOrigin || origin;
            rod.attr('d', lineFunction([origin, this.position()]));
            bob.attr('cx', function(p) { return p.x(); })
               .attr('cy', function(p) { return p.y(); });
        }

        this.x = function() {
            return origin.x + length * Math.sin(coords.phi);
        }

        this.y = function() {
            return origin.y + length * Math.cos(coords.phi);
        }

        this.position = function() {
            return {x: this.x(), y: this.y()};
        }
    }

    var Spring = function (svg, start, end, l, n) {
        this.start = start
        this.end = end
        this.of = l / 2 / n
        this.n = n
        this.points = function() {
            var vec = {x: this.end.x - this.start.x, y: this.end.y - this.start.y};
            var len = Math.sqrt(vec.x * vec.x + vec.y * vec.y)
            var dir = {x: vec.x / len, y: vec.y / len}
            var ort = {x: -dir.y, y: dir.x}
            var result = [this.start,
                {
                    x: this.start.x + vec.x * 0.1,
                    y: this.start.y + vec.y * 0.1,
                }]
            var part, offset;
            for(var i = 0; i < 2 * this.n; i++) {
                part =  0.1 + 0.4 / this.n * (i + 0.5);
                offset = (i % 2) ? -this.of : this.of
                result.push({
                    x: this.start.x + vec.x * part + offset * ort.x,
                    y: this.start.y + vec.y * part + offset * ort.y
                });
            }
            result.push({
                    x: this.start.x + vec.x * 0.9,
                    y: this.start.y + vec.y * 0.9,
                });
            result.push(this.end);
            return result;
        }
        this.draw = function() {
            this.rod = svg.append('path')
                          .attr('stroke', 'black')
                          .attr('fill', 'none')
                          .attr('stroke-width', 1);
            this.rod.attr('d', lineFunction(this.points()));
        }
        this.update = function(start, end) {
            this.start = start;
            this.end = end;
            this.rod.attr('d', lineFunction(this.points()));
        }
    }

    var Portrait = function (svg, n) {
        var data = new Array(n),
            lines = new Array(n),
            x = d3.scale.linear()
                .range([0, svg.attr("width")])
                .domain([-0.1, 0.1]),
            y = d3.scale.linear()
                .range([svg.attr("height"), 0])
                .domain([-0.5, 0.5]),
            color = ["red", "violet", "green", "blue", "orange"];

        for (var i = 0; i < n; i++) {
            data[i] = [];
            lines[i] = svg.append('path')
                          .attr('stroke', color[i])
                          .attr('fill', 'none')
                          .attr('stroke-width', 1);
        }

        this.update = function() {
            for (var i = 0; i < n; i++) {
                if (data[i].length === 200) {
                    data[i].shift();
                }
                data[i].push([x(arguments[i][0]), y(arguments[i][1])]);
                lines[i].attr('d', lineFunction(data[i]));
            }
        }
    }

    return {Pendulum: Pendulum, Spring: Spring, Portrait: Portrait};
})();


var Oscillations = (function () {
    var onePendulum = function (svg, start) {
        var p = new Primitives.Pendulum(svg, {x: 100, y: 20}, 170,
                              {phi: start[0], dotphi: start[1]}),
            omega = 10,
            system = function (coords, t) {
                return [coords[1], -omega * omega * coords[0]];
            },
            pos = start, step = 0.02, t = 0, move = false;
        p.draw();
        svg.append("rect").attr("x", 0)
                          .attr("y", 0)
                          .attr("height", svg.style("height"))
                          .attr("width", svg.style("width"))
                          .attr("fill", "white")
                          .attr("opacity", 0.7);
        // Update
        d3.timer(function() {
            if (move) {
                t += step;
                pos = RungeKutta.intStep(system, t, pos, step);
                p.update({phi: pos[0], dotphi: pos[1]})
            }
        });
        svg.on("click", function(){
            move = !move;
            if (move){
                svg.select("rect").attr("opacity", 0.0);
            } else {
                svg.select("rect").attr("opacity", 0.7);
            }
        });
    }

    var twoPendulums = function (svg, start) {

        var p1 = new Primitives.Pendulum(svg, {x: 40, y: 20}, 170,
                              {phi: start[0], dotphi: start[1]}),
            p2 = new Primitives.Pendulum(svg, {x: 160, y: 20}, 170,
                              {phi: start[2], dotphi: start[3]}),
            s = new Primitives.Spring(svg, p1.position(), p2.position(), 120, 6),

            x1 = function(angle) {return p1.length * Math.sin(angle);},
            x2 = function(angle) {return p2.length * Math.sin(angle);};

        var omega1 = omega2 = 10, omegaS = 1;

        var system = function(coords, t) {
            var pendulum1 = -omega1 * omega1 * coords[0],
                spring1 = -omegaS * omegaS * (x1(coords[0]) - x2(coords[2])),
                pendulum2 = -omega2 * omega2 * coords[2],
                spring2 = -omegaS * omegaS * (x2(coords[2]) - x1(coords[0]));

            return [coords[1], pendulum1 + spring1,
                    coords[3], pendulum2 + spring2];
        }

        var pos = start, step = 0.02, t = 0, move = false;

        p1.draw();
        p2.draw();
        s.draw();

        svg.append("rect").attr("x", 0)
                          .attr("y", 0)
                          .attr("height", svg.style("height"))
                          .attr("width", svg.style("width"))
                          .attr("fill", "white")
                          .attr("opacity", 0.7);
        // Update
        d3.timer(function() {
            if (move) {
                t += step;
                pos = RungeKutta.intStep(system, t, pos, step);
                p1.update({phi: pos[0], dotphi: pos[1]})
                p2.update({phi: pos[2], dotphi: pos[3]})
                s.update(p1.position(), p2.position())
            }
        });
        svg.on("click", function(){
            move = !move;
            if (move){
                svg.select("rect").attr("opacity", 0.0);
            } else {
                svg.select("rect").attr("opacity", 0.7);
            }
        });
    }

    return {onePendulum: onePendulum, twoPendulums : twoPendulums};
})();

