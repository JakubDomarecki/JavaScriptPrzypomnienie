![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Funkcje/01_Zadanie_1`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Stwórz funkcję, która **będzie zwracała** (poprzez `return`) sumę liczb z tablicy. Tablica powinna być przekazana do funkcji jako argument.

Przykład:

```JavaScript
input -> [1,2,3]
output -> 6
```


## Zadanie 2

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Funkcje/02_Zadanie_2`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Napisz funkcję anonimową, która przyjmuje jako argumenty trzy liczby i **zwraca** największą z nich (zwraca, a nie wypisuje na ekranie). Wypisać możesz dopiero jak zwrócisz wynik z funkcji.


## Zadanie 3

> ### Przygotowanie
>
> Zmodyfikuj plik `vite.config.js` tak, aby zmienna `exercisePath` wskazywała na:
>
> - `05_Funkcje/03_Zadanie_3`
>
> **Pamiętaj aby włączyć serwer deweloperski (`npm run dev`).**

Napisz funkcję `calculateTip(amount, rating)`, która będzie przyjmować dwa argumenty:

- kwotę do zapłaty,
- opis słowny obsługi. Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku, jeśli opis jest nieznany - funkcja powinna zwracać napis "Opis nieczytelny".

Opis może przyjmować następujące wartości:

- "Bardzo dobra obsługa" => 25% napiwku,
- "Dobra obsługa" => 20% napiwku,
- "Średnia obsługa" => 15% napiwku,
- "Zła obsługa" => 0% napiwku.

Przykład:

```JavaScript
input -> 100, "Bardzo dobra obsługa"
output -> 25
```
