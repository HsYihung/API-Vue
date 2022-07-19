class Person{
//屬性
    String name;
    int age;
    double weight;
//方法 -- 建構子
    Person(){}
    Person(String name, int age, double weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

//方法
    String displayName(){
        return this.name;
    }
}


Person sally = new Person();
Person peter = new Person("Peter", 40, 78.5);