# SOLID examples

Repositorio para ver ejemplos de los principios SOLID.

### S – Single Responsibility Principle (SRP)
> La clase solo debe de tener una razon para cambiar y una sola responsabilidad.

[PHP](./php/01-single-responsibility-principle.php) / 
[C#](./c%23/01-SingleResponsibilityPrinciple.cs) / 
[TS](./ts/01-singleResponsibilityPrinciple.ts)

### O – Open/Closed Principle (OCP)
> Una clase debe de estar abierta para extensiones pero cerrada para modificaciones.

[PHP](./php/02-open-closed-principle.php) / 
[C#](./c%23/02-OpenClosedPrinciple.cs) / 
[TS](./ts/02-openClosedPrinciple.ts)

### L – Liskov Substitution Principle (LSP)
> Las clases que hereden de otra clase deben de poder utilizar el comportamiento minimo de la clase base.

> La clase base debe de tener lo que sus clases hijas pueden implemementar en común. Si hay algo extra se debe extraer a una nueva interfaz para que se implemente especificamente.

[PHP](./php/03-liskov-substitution-principle.php) / 
[C#](./c%23/03-LiskovSubstitutionPrinciple.cs) / 
[TS](./ts/03-liskovSubstitutionPrinciple.ts)

### I – Interface Segregation Principle (ISP)
> No deben de existir interfaces muy grandes, para no obligar a las clases a implementar metodos que no necesitan.

[PHP](./php/04-interface-segregation-principle.php) / 
[C#](./c%23/04-InterfaceSegregationPrinciple.cs) / 
[TS](./ts/04-interfaceSegregationPrinciple.ts)

### D – Dependency Inversion Principle (DIP)
> Los modulos de alto nivel no deben de depender de los modulos de bajo nivel a menos que sea mediante una abstracción.

[PHP](./php/05-dependency-inversion-principle.php) / 
[C#](./c%23/05-DependencyInversionPrinciple.cs) / 
[TS](./ts/05-dependencyInversionPrinciple.ts)

## Objetivo de los principios SOLID

- Código limpio
- Código mantenible
- Fácil de cambiar
- Fácil de extender
