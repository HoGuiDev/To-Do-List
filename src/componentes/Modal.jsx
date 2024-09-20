import { BackGruond, Adm, Fechar } from "./ModalStyle"
import "../pages/Home/Home"


export default function Modal({isOpen, children, fechar}) {

    if(isOpen){
        return (
        <BackGruond>
            <Adm>
                <Fechar onClick={fechar}>X</Fechar>
                {children}
            </Adm>
        </BackGruond>
        )
    }
}
