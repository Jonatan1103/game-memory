import * as C from "./styles"

type Props = {
  label: string
  icon?: any
  onClick: () => void
}

const Button = ({ label, icon, onClick }: Props) => {
  return(
    <C.Button onClick={onClick}>
      {icon && 
        <C.IconArea>
          <C.Icon src={icon} />
        </C.IconArea>
      }
      <C.Label>{label}</C.Label>
    </C.Button>
  )
}

export default Button