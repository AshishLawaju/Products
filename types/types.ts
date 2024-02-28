export type ProductProps = {
    title: string;
    image: string;
    price: number;
    id:number
  };

  export type UserProps = {
    name:string;
    email:string;
  }
  export type EmployeeProps= UserProps &{
/*     name:string;
    email:string; */
    id:number
    department:string;
  }
  export type adminProps= {
    name:string;
    email:string;
    adminNo:number
  }

