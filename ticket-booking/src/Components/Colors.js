import { Alert } from "@material-tailwind/react";
 
export default function Colors(props) {
  
  return (
    <div className="flex w-full flex-col gap-2">
      <Alert className={`bg-[${props.alert.color}]` }>{props.alert.message}</Alert>
      
    </div>
  );
}