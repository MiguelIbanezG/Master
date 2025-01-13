from math import pi, sqrt, copysign
import matplotlib.pyplot as plt

result = pi**4 / 90
n_digits = 21

# (c) Write a function called sumSeriesA with the number of terms to be taken into account as theargument.
# The output of the function should be the first n terms summed in ascending order.
def sumSeriesA(n):
    all_values = [1 / i**4 for i in range(1, n+1)]
    results = [all_values[0]]
    for i in range(1, n):
        results.append(all_values[i] + results[i-1])
    return results[-1]

# (d) Write a function called sumSeriesD but in this cases summing terms in descending order.
def sumSeriesD(n):
    all_values = [1 / i**4 for i in range(n, 0, -1)]
    results = [all_values[0]]
    for i in range(1, n):
        results.append(all_values[i] + results[i-1])
    return results[-1]

# (e) Write a program sumSeries in python using both functions to compare the results
def sumSeries(f1, f2, n, n_digits):
    results1 = f1(n)
    results2 = f2(n)
    print(f'n-{n}: f1: {results1:.{n_digits}f} vs f2: {results2:.{n_digits}f}')
    return results1, results2


def plot_sumSeries(n, n_digits, result):
    results1 = []
    results2 = []
    n_values = []
    for i in range(n, n+10):
        value1, value2 = sumSeries(sumSeriesA, sumSeriesD, i, n_digits)
        results1.append(value1)
        results2.append(value2)
        n_values.append(i)
    
    print(result)
    
    line = [result] * len(n_values)
    plt.figure(figsize=(10, 6))
    plt.plot(n_values, results1, label="f1", marker="o", linestyle="-")
    plt.plot(n_values, results2, label="f2", marker="x", linestyle="--")
    plt.plot(n_values, line, label="result", color="red", linestyle=":")
    plt.xlabel("n")
    plt.ylabel("f1 and f2 values")
    plt.title("Comparison of f1 and f2 Values")
    plt.legend()
    plt.grid()
    plt.show()


result = pi**4 / 90
n_digits = 20

n = 10000
plot_sumSeries(n, n_digits, result)

n = 100000
plot_sumSeries(n, n_digits, result)

n = 20
for i in range(n, n+10):
    sumSeries(sumSeriesA, sumSeriesD, i, n_digits)

print(result)

n = 73
for i in range(n, n+10):
    sumSeries(sumSeriesA, sumSeriesD, i, n_digits)

print(result)

# (b) Write functions quadratic1, quadratic2 y quadratic3 with parameters a, b and c as arguments and
# roots using the different expressions as output.

def quadratic1(a, b, c):
    root = sqrt(b**2 - 4*a*c)
    return (-b + root) / (2 * a), (-b - root) / (2 * a)

def quadratic2(a, b, c):
    root = sqrt(b**2 - 4*a*c)
    return (2 * c) / (-b + root), (2 * c) / (-b - root)

def quadratic3(a, b, c):
    root = sqrt(b**2 - 4*a*c)
    q = -0.5 * (b + copysign(root, b))
    return q / a, c / q

def print_quadratic(a, b, c):
    print(f'quadratic1: {quadratic1(a, b, c)}')
    print(f'quadratic2: {quadratic2(a, b, c)}')
    print(f'quadratic3: {quadratic3(a, b, c)}')
    print()

print_quadratic(1, 2, 1)
print_quadratic(1, 3, 1)
print_quadratic(1, 100, 1)
print_quadratic(10, 100, 10)
print_quadratic(1, 1000, 1)