import { Car } from "./car";

export class OrderDetails {
  orderId!: string;
  useremailid: string="";
  washerName: string="";
  washpack: string="";
  phoneNo!: number;
  pickUp!: boolean;
  pickupAddress!:String;
  status!: string;
  cars: Car = new Car();

  OrderDetails(){}
}
