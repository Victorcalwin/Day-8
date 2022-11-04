//Day 8 Question 3:
class person {
  constructor(name,father_name,mother_name,aadhar_no,gender,address,mobile_No,Email) {
    this.name = name ;
    this.father_name = father_name ;
    this.mother_name = mother_name;
    this.aadhar_no = aadhar_no;
    this.gender = gender; ;
    this.address = address ;
    this.mobile_No = mobile_No; ;
    this.Email = Email;
 }
  person_name() {
    return `my name is  ${this.name}`;
  }

  person_father_name() {
    return `my father name is ${this.father_name}`;
  }
  person_mother_name() {
    return `my mother name is ${this.mother_name}`;
  }
  person_aadhar_no() {
    return `aadhar_no  is ${this.aadhar_no}`;
  }
  person_gender() {
    return `i am ${this.gender}`;
  }
  person_address() {
    return `my address is ${this.address}`;
  }
  person_mobile_no() {
    return `my mobile_no is ${this.mobile_No}`;
  }
  person_Email() {
    return `my email is ${this.Email}`;
  }
}
//object
const vicprti = new person("Victor","Manova","Delsi","4134-4145-9152","Male","160 Kamaraj Street Appakkudal","9500859595","victorcalwin@gmail.com");

console.log(vicprti.person_name());
console.log(vicprti.person_father_name());
console.log(vicprti.person_mother_name());
console.log(vicprti.person_aadhar_no());

console.log(vicprti.person_gender());
console.log(vicprti.person_address());
console.log(vicprti.person_mobile_no());
console.log(vicprti.person_Email());
