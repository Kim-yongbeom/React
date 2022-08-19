## 스칼라 타입(GQL SCHEMA에서 가장 작은 단위)
- Int: 부호가 있는 32비트 정수
- Float: 부호가 있는 부동소수점 값
- String: UTF-8 문자열
- Boolean: true/false
- ID: 고유 식별자 값
- 커스텀 스칼라 타입을 지정 할 수도 있다.

## Non-Null, List
- [Type] => 리스트 안에 담긴 Type은 null 혹은 특정 값이 존재한다.
- [Type!] => 리스트 안에 담긴 Type은 null이 될 수 없으며 반드시 특정 값이 존재한다.
- [Type]! => 리스트 안에 담긴 Type은 null일 수 있으나, 리스트 자체는 null이 될 수 없다.
- [Type!]! => 리스트 안에 담긴 Type과 리스트 자체도 null이 될 수 없다.

## 열거형 타입
```
enum Grade{
    A+
    A0
    B+
    B0
    C+
    C0
    D+
    D0
    F
}

type Student{
    name: String
    id: ID
    age: Int
    grade: Grade
}
```
- 다음과 같이 스키마를 정의하면 Student 타입의 grade 필드는 항상 A+,A0, ~ , F 값들 중 하나의 값을 가진다.







