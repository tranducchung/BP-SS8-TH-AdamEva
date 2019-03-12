function Apple(weight) {
 this.weight = weight;
 this.getWeight = function () {
     return this.weight = weight
 };
 this.isEmpty = function () {
     if(this.weight === 0){
       document.write("Táo hết rồi")
     }
 };
 this.Dercease = function () {
      this.weight = weight--;
 };
}
function Human(name,weight,gender) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.setApple = function (apple) {
        this.apple = apple;
    };
    this.setGender = function () {
         this.gender = gender;
    };
    this.getGender = function () {
        return this.gender;
    };
    this.checkweightApple = function (apple) {
     return this.apple.getWeight();
    };
    this.eat = function (apple) {
        this.apple.Dercease();
    };
    this.say = function () {
        document.write("Xin chào tôi là "+ this.name + "<br>")
    };
    this.getName = function () {
        return this.name;
    };
    this.setName = function () {
        this.name = name
    };
    this.getWeight = function () {
         return this.weight = weight;
    };
    this.setWeight = function () {
          this.weight = weight++;
    };

}
let apple = new Apple(10);
let weightApple = apple.getWeight();
console.log(weightApple);
let adam = new Human("Adam",70,"Male");
let eva = new  Human( "Eva",50,"Women" );
adam.setApple(apple);
eva.setApple(apple);
adam.say();
eva.say();
document.write("Khối lượng quả táo ban đầu là :"+ weightApple);
document.write("<hr>");
for(let i=0;apple.weight > 0;i++){
    document.write("Adam ăn "+ "<br>");
    adam.eat();
    document.write("Khối lượng quả táo sau khi Adam ăn :" + adam.checkweightApple() +"<br>");
    adam.setWeight();
    document.write("Khối lượng của Adam sau khi ăn táo là : "+ adam.getWeight()+"<br>"+ "<hr>");
    document.write("Eva ăn "+ "<br>");
    eva.eat();
    document.write("Khối lượng quả táo sau khi Eva ăn :" + eva.checkweightApple()+ "<br>");
    eva.setWeight();
    document.write("Khối lượng của Eva sau khi ăn táo là : "+ eva.getWeight()+"<br>"+ "<hr>");
    apple.isEmpty();
}
