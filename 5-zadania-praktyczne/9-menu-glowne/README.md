![](../../../kursjs.png)

# KursJS - DOM

## Zadanie 1
1) pobierz ze strony element `#menu` i dodaj do niego klasę `.menu`
2) Pobierz z tego menu wszystkie elementy A i LI
3) Po wjechaniu kursorem na każde LI dodaj temu LI klasę `.active`, a wszystkim pozostałym LI usuń klasę `.active`
4) Po kliknięciu na każdy link w menu zrób następujące czynności:
    - zatrzymaj domyślną akcję
    - wszystkim LI poza tym w którym znajduje się kliknięty link dodaj klasę `.collased`
    - rodzicowi klikniętego linka (LI) dodaj klasę `.expand`
    - rodzicowi klikniętego linka dodaj event "transitionend", w którym podepniesz funkcję przez nazwę (nie anonimową). Funkcja ta może się dla przykładu nazywać expandElementTransitionEnd.

    W funkcji tej:
    - usuń event transitionend który właśnie dodałeś
    - wypisz w konsoli href linka w tym LI (alternatywnie użyj `location.href = pobranyHref`)
5) Dodatkowe dla chętnych:
    W powyższej funkcji którą podpiąłeś pod zdarzenie transitionend:
    - stwórz dodatkowo nowy element który jest buttononem z klasą `.close` i tekstem Zamknij
    - element ten dodaj do tego LI

    Po kliknięciu na `.close` rodzicowi usuń klasę `.expand`
    Wszystkim LI usuń klasę `.collapsed`
    Usuń kliknięty przycisk `.close`
