function User(name,familyname,age){
this.name=name;
this.familyname=familyname;
this.age=age;
this.displayinfo=function(){
    console.log(`Name: ${this.name} Family name: ${this.familyname} Age:${this.age}` )
}
}
User.prototype.sayHi = function() {
	this.displayinfo();
    console.log(`Привет, меня зовут ${this.name}`);
};
module.exports=User;

