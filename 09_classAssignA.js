// class Vehicals { 
    
//      // Data Members Or Properties or Attributes or States
//     Name 
//     Color
//     Speed
//     company
//     price
//  constructor(Name,Color,Speed,company,price){
//     this.Name = Name;
//     this.Color = Color;
//     this.Speed = Speed;
//     this.company = company;
//     this.price = price;
//  }

//   //Member Function or Methods or Behavior or Actions
//   details(){
//     console.log(`Details: ${this.Name}, ${this.Color}, ${this.Speed}, ${this.company}, ${this.price}`);
//   }
// }

// const Ertika = new Vehicals (" Name : Ertika", " Color : White", " Speed : 120Km/hr", " Company : Cipla Company", "Price : 10 lac")
// Ertika.details();
// const Swiftdesior = new Vehicals ("Name : Swift Desior", "Color : White", "Speed : 80km/hr", "Company : Jio Company", "Price : 8.5 lac")
// Swiftdesior.details();
// const Nexon = new Vehicals ("Name : Nexon", "Color : White+Black", " Speed : 100km/hr", "Company : TCS Company", "Price : 11 lac")
// Nexon.details();
// const Creta = new Vehicals ("Name : creta", "Color : up-White", " Speed : 110km/hr", "Company : Reliance Industries Ltd Company", "Price : 9 lac")
// Creta.details();
// const Exter = new Vehicals ("Name : Exter", "Color : White", "Speed :  120km/hr", "Company : HCL Company", "Price : 8 Lac")
// Exter.details();

class College {

     // Data Members Or Properties or Attributes or States
     Name
     location
     NumberofStudents
     University
     constructor(Name,location,NumberofStudents,University){
        this.Name = Name;
        this.location = location;
        this.NumberofStudents = NumberofStudents;
        this.University = University;
     }
     
      //Member Function or Methods or Behavior or Actions
      details(){
        console.log(`Details: ${this.Name}, ${this.location}, ${this.NumberofStudents}, ${this.University}`);
      }
}
const RFNaikNaik = new College ("Name : R.F.Naik", "Location : Koperkhairne", "Number Of Students : 1200", "University : Mumbai")
RFNaikNaik.details();
const Fergusson = new College ("Name : Fergusson", "Location : Pune", "Number Of Students : 20000", "University : Pune")
Fergusson.details();
const DYPatil = new College ("Name : D.Y.Patil", "Location : Kolhapur", "Number Of Student : 40000", "University : Shivaji")
DYPatil.details();
const IndianInstituteOfTechnology = new College ("Name : Indian Institute Of Technology", "Location : Pawai", "Number Of Student : 80000", "University : Mumbai")
IndianInstituteOfTechnology.details();