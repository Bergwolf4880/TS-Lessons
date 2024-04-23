type buttonType = "button" | "submit" | "reset" | undefined; 



export interface ButtonProps {
    name: string,
    type?: buttonType,
    onButtonClick?: () => void
  }
  
