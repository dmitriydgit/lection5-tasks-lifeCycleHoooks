Вам необходимо сделать 3 компонента. Один родительский, и два дочерних.
В одном из дочерних компонентов находится три кнопки radio button (значения: маленький шрифт, средний шрифт, большой шрифт), а также selectbox с тремя значениями (красный, синий, зеленый).
Второй вложенный компонент содержит проперти ‘msg’ со значением «Текст дочернего компонента». Проперти прописана в шаблоне с помощью интерполяции. Соответственно этот текст виден на экране.

Задача 1. При выборе одного из radio button с помощью event bindin эмитить событие из дочернего компонента в родительский. Затем с помощью механизма @ViewChild вызывать напрямую в другом дочернем компоненте метод который будет изменять размер шрифта. Для изменения размеров шрифта вам необходимо подставлять один из трех css классов. Классы менять с помощью директивы ngClass.

Задача 2. В первом вложенном компоненте выбираем цвет текста с помощью selectbox. Передаем событие наверх с помощью event binding. Второй дочерний компонент с помощью хука ngOnChanges() автоматически определяет изменение проперти родительского компонента и меняет цвет шрифта.
Задачу реализовать в StackBlitz или аналоге.



# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
