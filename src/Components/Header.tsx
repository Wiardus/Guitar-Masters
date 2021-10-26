 interface Props {
     title: string
 }
 
 const Header: React.FC<Props> = ({title}: Props) => {
    return (
        <div className="header">
            <h1>{title}</h1>
        </div>
       
    )
}

export default Header